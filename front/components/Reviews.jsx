import React from "react"
import { Card, Row } from "react-bootstrap"



import Rating from 'react-rating'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';


const rowStylesReviewDeck={
  display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
}

export default ({ reviews }) => {
  console.log(reviews)
  return (
    // <Row style={rowStylesReviewDeck} >
    <div style={rowStylesReviewDeck} >
      {reviews.map(review => {
        return <ReviewCard review={review} />
      })
      }
    </div>
    // </Row>
  )
}

const ReviewCard = ({ review }) => {

  const reviewCardStyles = {
    width: '350px',
    textAlign: 'center',
    height:'200px',
    margin:'20px',
    boxShadow: "8px 8px 15px -10px rgba(0,0,0,0.39)", 

  }
  return (
    review ?
      (
        <Card style={reviewCardStyles}>
          <Card.Body>
            <Card.Title>{`${review.User.firstName} ${review.User.lastName[0]}`}</Card.Title>
            <Rating
              style={{ marginBottom: ".75rem" }}
              initialRating={review.rating} emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
              fullSymbol={<FontAwesomeIcon icon={fullStar} />} readonly />
            {/* <Card.Subtitle className="mb-2 text-muted">{review.rating}</Card.Subtitle> */}
            <Card.Text>
              {review.description}
            </Card.Text>
          </Card.Body>
        </Card>
      )
      : null
  )
}