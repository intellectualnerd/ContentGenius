import React, { useState } from 'react';

const NewIdeaDiv = (props) => {
    // State to track whether the idea has been liked
    const [isLiked, setIsLiked] = useState(false);

    // Function to toggle like status
    const toggleLike = () => {
        // Update the like count in parent component if necessary
        if (!isLiked) {
            props.setLike(prevLike => [...prevLike, { title: props.title, description: props.description }]);
            setIsLiked(true)
        } else {
            props.setLike(prevLike => prevLike.filter(idea => idea.title !== props.title));
            setIsLiked(false)
        }

    };

    const [isDescriptionVisible, setDescriptionVisible] = useState(false);

    const toggleDescription = () => {
        setDescriptionVisible(!isDescriptionVisible);
    };

    return (
        <>
        <div className=' newIdea'>
        <div className="d-flex justify-content-between align-items-center"  style={{cursor: 'pointer'}}>
                <div className="flex-grow-1" style={{ fontWeight: isDescriptionVisible ? 'bold' : 'normal', color:"white" }} onClick={toggleDescription}>
                    {props.title}
                </div>

                <button onClick={!props.disable ? toggleLike : () => { }} className="btn likeButton" aria-label="Like button">
                    {!isLiked && !props.disable &&
                        <svg viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.2068 20.5114V36.6667" stroke="#3C3C3C" strokeWidth="2.55083" />
                            <path d="M33.1643 36.6667H3.40454V20.5114H10.2068L14.4581 6.0567H15.9886C19.3697 6.0567 22.1106 8.79761 22.1106 12.1787V16.26H37.4156L33.1643 36.6667Z" stroke="#3C3C3C" strokeWidth="2.55083" />
                        </svg>
                    }
                    {isLiked && !props.disable &&
                        <svg viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0347 3.71541H15.307C19.0634 3.71541 22.1086 6.76058 22.1086 10.517V13.9178H39.5034L34.5438 37.7234H11.056H9.35565H3.40426H1.70386V36.023V19.8692V18.1688H3.40426H9.78374L14.0347 3.71541ZM9.35565 21.5696H5.10465V34.3226H9.35565V21.5696Z" fill="#D9D9D9" />
                        </svg>
                    }
                    {
                        props.disable &&
                        <svg viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0347 3.71541H15.307C19.0634 3.71541 22.1086 6.76058 22.1086 10.517V13.9178H39.5034L34.5438 37.7234H11.056H9.35565H3.40426H1.70386V36.023V19.8692V18.1688H3.40426H9.78374L14.0347 3.71541ZM9.35565 21.5696H5.10465V34.3226H9.35565V21.5696Z" fill="#D9D9D9" />
                        </svg>
                    }
                </button>
            </div>

            {isDescriptionVisible && (
                <div className='my-2'>
                    {props.description}
                </div>
            )}
        </div>
            
        </>
    );
};

export default NewIdeaDiv;
