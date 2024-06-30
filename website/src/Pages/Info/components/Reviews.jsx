import React from 'react';
import { Carousel } from 'react-bootstrap';

const Reviews = ({ reviews }) => {
    return (
        <div className='review_container'>
            <Carousel interval={5000} controls={true} indicators={true}>
                {reviews.map((review, index) => (

                    <Carousel.Item key={index}>
                        <div className='fix-carousel-height'>
                        <div className="d-flex justify-content-center w-100 h-100">
                            <div className="review-box row">
                                <div className='col-lg-2 col-md-2 col-sm-12'>
                                    <div className="user-photo">
                                        <img src={review.photo} alt={review.name} />
                                    </div>
                                </div>
                                <div className='col-lg-10 col-md-10 col-sm-12 gy-0 carousel-review-text'>
                                    <span>{review.name}</span>
                                    <span>{review.email}</span>
                                </div>

                                <div className="review-content col-12 text-start mt-2">
                                    <span>{review.description}</span>
                                </div>
                            </div>
                        </div>
                        </div>


                    </Carousel.Item>
                ))}

            </Carousel>
        </div>

    );
};

export default Reviews;
