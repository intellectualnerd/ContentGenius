import React from 'react';
import './LoaderAnimation.css';

<<<<<<< HEAD
const LoaderAnimation = () => {
    
=======
const LoaderAnimation = ({progress}) => {
>>>>>>> 0d63d9001d637279a08396bce510b92ad5d99e4b
    return (
        <>
            <div className='body'>
                <div className="content">
                    <div className="bars">
                        {[...Array(7)].map((_, i) => (
                            <div className="bar" key={i}></div>
                        ))}
                    </div>
                    <div className="bars">
                        {[...Array(7)].map((_, i) => (
                            <div className="bar" key={i}></div>
                        ))}
                    </div>
                </div>
                <h3>Loading...</h3>
            </div>
        </>

    );
};

export default LoaderAnimation;
