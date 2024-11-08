import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AuthContext } from "../context/Authcontext";
import { Form } from "react-bootstrap";

function ReviewModal({ show, handleClose, addNewReview }) {
  const { user } = useContext(AuthContext);
  const [newReviewText, setNewReviewText] = useState("");
  const [newReviewServiceDate, setNewReviewServiceDate] = useState("");
  const [newReviewServiceType, setNewReviewServiceType] = useState("");

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Leave a review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Type of service</Form.Label>
              <Form.Control
                type="text"
                placeholder="type of service"
                onChange={(e) => {
                  setNewReviewServiceType(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Service Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="when did you come to this service?"
                onChange={(e) => {
                  console.log("serviceDate :>> ", e.target.value);
                  console.log(new Date(e.target.value));
                  //   setNewReviewServiceDate(e.target.value);
                  setNewReviewServiceDate(new Date(e.target.value));
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Review</Form.Label>
              <Form.Control
                type="text"
                placeholder="type here"
                as="textarea"
                onChange={(e) => {
                  setNewReviewText(e.target.value);
                }}
              />
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="I accept the terms" />
              <Form.Text className="text-muted">
                We'll never share your data with anyone else.
              </Form.Text>
            </Form.Group> */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            type="submit"
            onClick={() => {
              handleClose();
              console.log("newReviewServiceDate :>> ", newReviewServiceDate);
              addNewReview({
                newReviewServiceType,
                newReviewServiceDate,
                newReviewText,
              });
            }}
          >
            Send review
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ReviewModal;
