import React from "react"
import {Card} from "react-bootstrap"


export default ({reviews}) => {   
    console.log(reviews)
    return(
        <div>
        {reviews.map(review=>{
                return <ReviewCard review={review}/>
            })
        }
        </div>
    )
}

const ReviewCard = ({review}) => {
return(
    review?
    (<Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{`${review.User.firstName} ${review.User.lastName[0]}`}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{review.rating}</Card.Subtitle>
        <Card.Text>
          {review.description}
        </Card.Text>
      </Card.Body>
    </Card>)
    :null
)
}