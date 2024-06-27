import "./Info.css"
import Herofonts from "../../ReusableComponents/Herofonts"
import HeroButton from "../../ReusableComponents/HeroButton"
import Nav from "./components/Nav"
import heroimg from "./images/hero-image.png"
import Element from "./components/Element"
import Titlefonts from "../../ReusableComponents/Titlefonts"
import Card from "./components/Card"
import ShowcaseDiv from "./components/ShowcaseDiv"
import { useState ,useEffect} from "react"
const Info = () => {
    const [Loaded, setLoaded] = useState(false)
    useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setLoaded(true);
    };
    img.src =heroimg; // Replace with the path to your PNG image
  }, []);
    return (
        <>
            <div className="hero_container">
                <div className="herosec row ">
                    <Nav />

                    <div className="col-lg-10 col-md-11 col-sm-12 gy-0 mb-0">
                        <Herofonts background="lemongreen"
                            text="ContentGenius : Making Content Creation So Easy, It’s Almost Cheating!" />
                    </div>

                    <div className="col-lg-7 col-md-7 col-sm-9  my-4">
                        <p className="normal-font">ContentGenius personalizes content creation to your preferences. Aggregate trends
                            from your favorite sites, and let our AI craft engaging scripts from your keywords.
                            Get fresh ideas with our trending topics bot tailored to your niche. Make your content
                            creation seamless and efficient with ContentGenius.</p>
                    </div>

                    <div>
                        <HeroButton text="Login Now" svg="login"></HeroButton>
                    </div>

                    <Element />
       {!Loaded && (
        <div className="loading-container">
          <img
            className="loading-img blur heroimg"
            src={heroimg} // Optionally, provide a low-resolution version for initial loading
            alt="Loading..."
          />
        </div>
      )}
                     {Loaded && (
        <div className="loaded-container">
          <img
            className="loaded-img heroimg"
            src={heroimg} // Replace with the path to your full-resolution PNG image
            alt="Loaded"
          />
        </div>
      )}
                    {/* <img src={heroimg} className="heroimg" /> */}
                </div>
            </div>

            <div className="secondary_container">
                <div className="row">
                    <div className="my-4">
                        <Titlefonts text="Our Features :" />
                    </div>
                    <Card type="Research" description="Aggregate top websites for trending topics and video ideas, offering curated resources like photos and links to enhance your content." />
                    <Card type="Script Writing" description="Craft compelling scripts tailored to your style and optimize them effortlessly with our script enhancer, ensuring your content stands out." className="float-end" />
                    <Card type="AI Generation" description="Employ cutting-edge AI tools spanning various content creation domains, ensuring your content is innovative, impactful, and tailored to your specific needs." className="float-end"/>
                    
                    <div className="col-12">
                    <ShowcaseDiv text="Personalized AI prompts enhance user content, making it more impactful and engaging." background="black"/>
                    </div>
                    
                    <div className="my-4">
                        <Titlefonts text="Reviews From Users :" />
                    </div>
                </div>

            </div>
        </>
    )
}
export default Info;