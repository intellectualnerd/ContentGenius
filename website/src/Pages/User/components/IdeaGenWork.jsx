import { useState, useEffect, useRef } from "react";
import NewIdeaDiv from "./NewIdeaDiv";

const IdeaGenWork = () => {
    const [currentSec, setCurrentSec] = useState(0);
    const [ideas, setIdeas] = useState([

    ]);
    const [loading, setLoading] = useState(false);
    const [liked, setLiked] = useState([]);
    const observerRef = useRef(null);

    const handleChange = (x) => () => {
        setCurrentSec(x);
    }

    const fetchNewIdeas = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://localhost:4000/getideas'); // Replace with your API endpoint
            const newIdeas = await response.json();
            setIdeas(prevIdeas => [...prevIdeas, ...newIdeas]);
        } catch (error) {
            console.error('Error fetching new ideas:', error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (observerRef.current) {
            observerRef.current.disconnect();
        }

        observerRef.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !loading) {
                fetchNewIdeas();
            }
        });

        if (observerRef.current && document.querySelector('.end-of-ideas')) {
            observerRef.current.observe(document.querySelector('.end-of-ideas'));
        }

        return () => observerRef.current?.disconnect();
    }, [loading]);
    useEffect(() => {
        console.log(liked)
    }, [liked]);

    return (
        <>
            <div className="featureNav">
                <button
                    onClick={handleChange(0)}
                    className={`app-container ${currentSec === 0 ? 'activeNav navButton' : 'navButton'}`}
                >
                    New Ideas
                </button>
                <button
                    onClick={handleChange(1)}
                    className={`app-container ${currentSec === 1 ? 'activeNav navButton' : 'navButton'}`}
                >
                    Generated
                </button>
                <button
                    onClick={handleChange(2)}
                    className={`app-container ${currentSec === 2 ? 'activeNav navButton' : 'navButton'}`}
                >
                    Liked
                </button>
                <button
                    onClick={handleChange(3)}
                    className={`app-container ${currentSec === 3 ? 'activeNav navButton' : 'navButton'}`}
                >
                    Setting
                </button>
            </div>

            <div className={`app-container ${currentSec === 0 ? '' : 'display-none'}`}>
                {ideas.map((idea, index) => (
                    <NewIdeaDiv key={index} title={idea.title} description={idea.description} setLike={setLiked} />
                ))}
                <div className="end-of-ideas" />
                {loading && (
                    <div className="newIdea load-div" style={{ height: "4rem" }}></div>
                )}
            </div>

            <div className={`app-container ${currentSec === 1 ? '' : 'display-none'}`}>
                <h1 style={{ color: "var(--white)" }}>Prompt Now</h1>
            </div>

            <div className={`app-container ${currentSec === 2 ? '' : 'display-none'}`}>
                <h1 style={{ color: "var(--white)" }}>
                    {(liked.length == 0) && `No likes till now`}
                </h1>
                {liked.map((idea, index) => (
                    <NewIdeaDiv key={index} title={idea.title} description={idea.description} setLike={setLiked} disable="true" />
                ))}
                <div className="end-of-ideas" />
                {loading && (
                    <div className="newIdea load-div" style={{ height: "4rem" }}></div>
                )}


            </div>

        </>
    );
}

export default IdeaGenWork;
