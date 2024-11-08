import { User } from "lucide-react";
import React from "react";
import { Card, ListGroup } from "react-bootstrap";

function ReviewCard({ activityName, review, reviewDate, serviceDay, user }) {
  console.log("activityName :>> ", activityName);
  console.log("review :>> ", review);
  console.log("reviewDate :>> ", reviewDate);
  console.log("serviceDay :>> ", serviceDay);
  console.log("user :>> ", user);

  const formatDate = (date, type) => {
    console.log("type :>> ", type);
    const reviewDateOptions = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    const reviewServiceDateOptions = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    };
    const formattedDate = new Date(date * 1000).toLocaleString(
      "de-DE",
      type === "review" ? reviewDateOptions : reviewServiceDateOptions
    );
    return formattedDate;
  };
  return (
    <Card style={{ width: "70vw", margin: "10px" }}>
      <Card.Body>
        <Card.Title className="d-flex flex-row gap-1 justify-content-center">
          <User />
          {user}
        </Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush d-flex flex-row  justify-content-center">
        <ListGroup.Item className="fs-5 fw-bold">{activityName}</ListGroup.Item>
        <ListGroup.Item className="fs-5">
          {formatDate(serviceDay.seconds)}
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Text className="text-center">{review}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-end">
        reviewed on - {formatDate(reviewDate.seconds)}
      </Card.Footer>
    </Card>
  );
}

export default ReviewCard;
