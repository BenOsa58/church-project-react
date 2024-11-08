import React, { useState, useEffect, useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AuthContext } from "../context/Authcontext";
import { db } from "../config/firebaseConfig";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import ReviewModal from "../components/ReviewModal";
import ReviewCard from "../components/ReviewCard";
import { Container } from "react-bootstrap";
import ProtectedRoute from "../components/ProtectedRoute";
import ProtectedReviewButton from "../components/ProtectedReviewButton";

function ReviewsPage() {
  const { user } = useContext(AuthContext);
  /* const reviews = {
    id: 1,
    name: "John Doe",
    rating: 5,
    comment: "Amazing service! Highly recommend to everyone.",*/

  const [reviews, setReviews] = useState(null);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getReviewsListener = () => {
    const q = query(collection(db, "reviews"), orderBy("reviewDate", "desc"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const reviewsArray = [];
      querySnapshot.forEach((doc) => {
        reviewsArray.push(doc.data());
      });
      console.log("reviewsArray :>> ", reviewsArray);
      setReviews(reviewsArray);
    });
  };
  const addNewReview = async ({
    newReviewServiceType,
    newReviewServiceDate,
    newReviewText,
  }) => {
    // console.log("serviceType :>> ", newReviewServiceType);
    // console.log("serviceDate :>> ", newReviewServiceDate);
    // console.log("reviewText :>> ", newReviewText);
    const newReviewObject = {
      user: user.email,
      activityName: newReviewServiceType,
      serviceDay: newReviewServiceDate,
      review: newReviewText,
      reviewDate: new Date(),
    };
    const docRef = await addDoc(collection(db, "reviews"), newReviewObject);

    alert("new review added");
  };

  useEffect(() => {
    getReviewsListener();
  }, []);

  return (
    <>
      <Container className="d-flex flex-column align-items-center ">
        <h1> Leave your opinion about our services </h1>{" "}
        <ProtectedReviewButton>
          <Button variant="primary" onClick={handleShow}>
            Leave a review
          </Button>
        </ProtectedReviewButton>
        <ReviewModal
          show={show}
          handleClose={handleClose}
          addNewReview={addNewReview}
        />
        {reviews &&
          reviews.map((review) => {
            return (
              <ReviewCard
                activityName={review.activityName}
                review={review.review}
                reviewDate={review.reviewDate}
                serviceDay={review.serviceDay}
                user={review.user}
              />
            );
          })}
      </Container>
    </>
  );
}

export default ReviewsPage;
