import { useEffect, useState } from "react";
import { useLocation, Outlet } from "react-router-dom";
import LoaderAnimation from "./Loader/LoaderAnimation";
import WebFont from 'webfontloader';
const AppLayout = () => {
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(true); // Initialize isLoading to true initially

    // useEffect(() => {
    //     let timer;

    //     // Start timer to ensure loader remains visible for at least 2 seconds
    //     timer = setTimeout(() => {
    //         setIsLoading(false); // After 2 seconds, set isLoading to false
    //     }, 2000);

    //     return () => {
    //         clearTimeout(timer); // Clean up timer if component unmounts or state changes
    //     };
    // }, []); // Empty dependency array to run effect only once on component mount
    document.body.style.overflow="visible";
    document.body.style.overflowX="hidden";
    useEffect(() => {
        document.body.style.overflow="hidden";
        
        WebFont.load({
            custom: {
                families: [
                    'Lemon Mocktail',
                    'Bebas Neue',
                    'Arial, Helvetica, sans-serif'
                ],
                urls: [
                    'https://db.onlinewebfonts.com/c/a5a4db7e289653583c015ec552b49f5b?family=Lemon+Mocktail',
                    '../main.css' // Replace with the actual path to your local font CSS file
                ]
            },
            active: () => {
                setIsLoading(false);
            }
        });
    }, []);
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
