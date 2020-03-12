import axios from 'axios'


export const sendReview = (id, review) => dispatch => {
    console.log("AXIOS", review)
    axios.post(`/api/products/reviews/${id}/addreview`, review).then(res => res.data)
}
