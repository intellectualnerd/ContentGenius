import React, {
  useState,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";
import NewIdeaDiv from "./NewIdeaDiv";
import { load } from "webfontloader";
import { propTypes } from "react-bootstrap/esm/Image";
import axios from "axios";

const ScriptGenWork = forwardRef(({ prompt ,setprompt}, ref) => {
  const [currentSec, setCurrentSec] = useState(0);
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [liked, setLiked] = useState([]);
  const observerRef = useRef(null);

  const handleChange = (x) => () => {
    setCurrentSec(x);
  };

  const fetchNewIdeas = async () => {
    if (loading) return; // Prevent multiple simultaneous fetches

    setLoading(true);
    try {
      const response = await fetch("http://localhost:4000/getideas"); // Replace with your API endpoint

      const newIdeas = await response.json();
      // Ensure newIdeas is an array
      if (!Array.isArray(newIdeas)) {
        console.error("Invalid response format:", newIdeas);
        return;
      }
      // Avoid duplicates by filtering out ideas that are already in the list
      setIdeas((prevIdeas) => {
        // Make sure to handle potential null or undefined values in newIdeas
        const filteredNewIdeas = newIdeas.filter(
          (newIdea) =>
            newIdea &&
            newIdea.title &&
            !prevIdeas.some((prevIdea) => prevIdea.title === newIdea.title)
        );
        return [...prevIdeas, ...filteredNewIdeas];
        setprompt("");
      });
    } catch (error) {
      console.error("Error fetching new ideas:", error);
    } finally {
      setLoading(false);
    }
  };

  const generateUserScript = async () => {
    if (loading) return;

    if (prompt != "") {
      setLoading(true);
      console.log("before try : " + prompt);
      try {
        console.log(prompt);
        //   const response = await fetch("http://localhost:4000/generateScript"); // Replace with your API endpoint
        const response = await axios.post(
          "http://localhost:4000/generateScript",
          { prompt: prompt },
          { withCredentials: true }
        );
        console.log(response.data);

        const newIdeas = await response.data;

        // Ensure newIdeas is an array
        if (!Array.isArray(newIdeas)) {
          console.error("Invalid response format:", newIdeas);
          return;
        }

        // Avoid duplicates by filtering out ideas that are already in the list
        setIdeas((prevIdeas) => {
          // Make sure to handle potential null or undefined values in newIdeas
          const filteredNewIdeas = newIdeas.filter(
            (newIdea) =>
              newIdea &&
              newIdea.title &&
              !prevIdeas.some((prevIdea) => prevIdea.title === newIdea.title)
          );
          return [...prevIdeas, ...filteredNewIdeas];
          
        });
      } catch (error) {
        console.error("Error fetching new ideas:", error);
      } finally {
        setLoading(false);
      }
    } else {
      return;
    }
  };

  //   useEffect(() => {
  //     fetchNewIdeas(); // Initial fetch on component mount
  //   }, []);

  //   useEffect(() => {
  //     if (observerRef.current) {
  //       observerRef.current.disconnect();
  //     }

  //     observerRef.current = new IntersectionObserver((entries) => {
  //       if (entries[0].isIntersecting && !loading) {
  //         fetchNewIdeas();
  //       }
  //     });

  //     if (observerRef.current && document.querySelector(".end-of-ideas")) {
  //       observerRef.current.observe(document.querySelector(".end-of-ideas"));
  //     }

  //     return () => observerRef.current?.disconnect();
  //   }, [loading]);

  //   useEffect(() => {
  //     console.log(liked);
  //   }, [liked]);
  useImperativeHandle(ref, () => ({
    generateUserScript,
  }));
  return (
    <>
      <div className="featureNav">
        <button
          onClick={handleChange(0)}
          className={`app-container ${
            currentSec === 0 ? "activeNav navButton" : "navButton"
          }`}
        >
          New Ideas
        </button>
        <button
          onClick={handleChange(1)}
          className={`app-container ${
            currentSec === 1 ? "activeNav navButton" : "navButton"
          }`}
        >
          Generated
        </button>
        <button
          onClick={handleChange(2)}
          className={`app-container ${
            currentSec === 2 ? "activeNav navButton" : "navButton"
          }`}
        >
          Liked
        </button>
        <button
          onClick={handleChange(3)}
          className={`app-container ${
            currentSec === 3 ? "activeNav navButton" : "navButton"
          }`}
        >
          Setting
        </button>
      </div>

      <div
        className={`app-container ${currentSec === 0 ? "" : "display-none"}`}
      >
        {ideas.map((idea, index) => (
          <NewIdeaDiv
            key={index}
            title={idea.title}
            description={idea.script}
            setLike={setLiked}
          />
        ))}
        <div className="end-of-ideas" />
        {loading && (
          <div className="newIdea load-div" style={{ height: "4rem" }}></div>
        )}
      </div>

      <div
        className={`app-container ${currentSec === 1 ? "" : "display-none"}`}
      >
        {loading ? (
          <h1 style={{ color: "var(--white)" }}>Prompt Now</h1>
        ) : (
          <>
            {ideas.map((idea, index) => (
              <NewIdeaDiv
                key={index}
                title={idea.title}
                description={idea.script}
                setLike={setLiked}
              />
            ))}
            <div className="end-of-ideas" />
          </>
        )}
      </div>

      <div
        className={`app-container ${currentSec === 2 ? "" : "display-none"}`}
      >
        <h1 style={{ color: "var(--white)" }}>
          {liked.length === 0 && `No likes till now`}
        </h1>
        {liked.map((idea, index) => (
          <NewIdeaDiv
            key={index}
            title={idea.title}
            description={idea.script}
            setLike={setLiked}
            disable="true"
          />
        ))}
        <div className="end-of-ideas" />
        {loading && (
          <div className="newIdea load-div" style={{ height: "4rem" }}></div>
        )}
      </div>
    </>
  );
});

export default ScriptGenWork;
