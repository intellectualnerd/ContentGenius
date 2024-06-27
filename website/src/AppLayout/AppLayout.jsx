import { useEffect, useState } from "react";
import { useLocation, Outlet } from "react-router-dom";
import LoaderAnimation from "./Loader/LoaderAnimation";

const AppLayout = () => {
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(true); // Initialize isLoading to true initially

    useEffect(() => {
        let timer;

        // Start timer to ensure loader remains visible for at least 2 seconds
        timer = setTimeout(() => {
            setIsLoading(false); // After 2 seconds, set isLoading to false
        }, 2000);

        return () => {
            clearTimeout(timer); // Clean up timer if component unmounts or state changes
        };
    }, []); // Empty dependency array to run effect only once on component mount

    useEffect(() => {
        // Check if the location state indicates loading
        if (location.state && location.state.action === "loading") {
            setIsLoading(true); // Set isLoading to true if navigation state indicates loading
        }
    }, [location]);

    return (
        <>
            {isLoading && <LoaderAnimation />}
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default AppLayout;
