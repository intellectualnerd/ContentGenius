import React from 'react';
import './LoaderAnimation.css';

const LoaderAnimation = ({progress}) => {
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
            </div>
        </>

    );
};

export default LoaderAnimation;
