import "./Info.css"
import Herofonts from "../../ReusableComponents/Herofonts"
import HeroButton from "../../ReusableComponents/HeroButton"
import Nav from "./components/Nav"
import heroimg from "./images/hero-image.png"
import Element from "./components/Element"
import Titlefonts from "../../ReusableComponents/Titlefonts"
import Card from "./components/Card"
import ShowcaseDiv from "./components/ShowcaseDiv"
import Reviews from "./components/Reviews"
import { useState, useEffect } from "react"

const Info = () => {
  const [Loaded, setLoaded] = useState(false)
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setLoaded(true);
    };
    img.src = heroimg; // Replace with the path to your PNG image
  }, []);

  const reviews = [
    {
      photo: 'https://lh3.googleusercontent.com/a-/ALV-UjX4K95JZeEuQ9wDKoqevtJFItBrXw8sdx2Ywt7ymgHUE1GC7X84dbmQO-w1YbDMwq-ubIDsy39aPmMOxyUsYOXjkDS1vt_Bu0MMa1jmGmeXQ8PlCo-FhHCPtgt61SZJf9fIW0smIfmKRcn_uaADUbQHYxo01j7CyjuAZUuLq0KoSuahOLHf7hII_Q3UT8qKc12lpavyZUW8xTmowNoKR2MvEw9BP7USwtvEyqEOhynmfDDb6iZJtj3OOCesKo6ICem2BbrT7G8PflZ0xzpQd75PwBKvPnVijJf0VjC06EdskuJYiOpHF6UKAf_GnObtFo5e4-hpNzOOSDeKfF21HSlDlQ5fN6URLB-_1SMuGwL-kZemwxN210Sp2e250TdRmMJHSWiF3jCILTWoYLTH71TGcg-posoqIS3GwleWom0A3F1hybudzIr13s-X_7TMu0jJ3Pw_Ofn0NNbfdydT7VOwB6DcB8aTR6UoETcU-4HWKL_ci-pwCdc_MbsQjQ8AUYkUlVV53lbLwYmk-MBAgI7_B055ogPt6kNqMFpVPRFUK9NNcivr4eMU9TOcKXFOJKPErURftPyESte1AcHzRxGoj4VNsB_TS1iSPcip5rRY71mu6klTpAQYOngnEFhYr7nWZvCi7uWvMBbrtphDHGzv5q_JGCdMnEdyjOlmljFwsJQVh8FnBcXNc2kJAwrMeIhgUozlNhMxhboyDu2FNKehalGbhrh6Dyqt0FO-lSW41zzUiizccne2qs25fWjqdcwSu1o3WDNF8VDXPJs9Mvtk24--0eFTymeRiKN9zjhlg5gFV2WxX7J1VEtt9vX23GkgXfxxDEikUohXrF0JNqgjSH1KaxGNXIdAwyRfCLlsDgtKc5g_O_QxXNAph8A-blaGTrdU9POU8i8fv9HoK56sc4UXM9bu6ZpnSdw2Eie-ZkHjejAtpVXDfBF_3fvilGH5FfWm4PfglI9kFAV1qK-p8Yhj=s83-c-mo',
      name: 'Parmar Parth',
      email:"parmarparth954@gmail.com",
      description: "ContentGenius revolutionizes content creation with its personalized AI prompts. It tailors suggestions to each user's unique style, making content more impactful and engaging. The intuitive tools for research, scripting, and resource generation streamline the process, saving valuable time. It's a game-changer for anyone looking to elevate their content effortlessly.",
    },
    {
      /*by firebase we can get gmail photot link */
      photo: 'https://lh3.googleusercontent.com/a-/ALV-UjX4K95JZeEuQ9wDKoqevtJFItBrXw8sdx2Ywt7ymgHUE1GC7X84dbmQO-w1YbDMwq-ubIDsy39aPmMOxyUsYOXjkDS1vt_Bu0MMa1jmGmeXQ8PlCo-FhHCPtgt61SZJf9fIW0smIfmKRcn_uaADUbQHYxo01j7CyjuAZUuLq0KoSuahOLHf7hII_Q3UT8qKc12lpavyZUW8xTmowNoKR2MvEw9BP7USwtvEyqEOhynmfDDb6iZJtj3OOCesKo6ICem2BbrT7G8PflZ0xzpQd75PwBKvPnVijJf0VjC06EdskuJYiOpHF6UKAf_GnObtFo5e4-hpNzOOSDeKfF21HSlDlQ5fN6URLB-_1SMuGwL-kZemwxN210Sp2e250TdRmMJHSWiF3jCILTWoYLTH71TGcg-posoqIS3GwleWom0A3F1hybudzIr13s-X_7TMu0jJ3Pw_Ofn0NNbfdydT7VOwB6DcB8aTR6UoETcU-4HWKL_ci-pwCdc_MbsQjQ8AUYkUlVV53lbLwYmk-MBAgI7_B055ogPt6kNqMFpVPRFUK9NNcivr4eMU9TOcKXFOJKPErURftPyESte1AcHzRxGoj4VNsB_TS1iSPcip5rRY71mu6klTpAQYOngnEFhYr7nWZvCi7uWvMBbrtphDHGzv5q_JGCdMnEdyjOlmljFwsJQVh8FnBcXNc2kJAwrMeIhgUozlNhMxhboyDu2FNKehalGbhrh6Dyqt0FO-lSW41zzUiizccne2qs25fWjqdcwSu1o3WDNF8VDXPJs9Mvtk24--0eFTymeRiKN9zjhlg5gFV2WxX7J1VEtt9vX23GkgXfxxDEikUohXrF0JNqgjSH1KaxGNXIdAwyRfCLlsDgtKc5g_O_QxXNAph8A-blaGTrdU9POU8i8fv9HoK56sc4UXM9bu6ZpnSdw2Eie-ZkHjejAtpVXDfBF_3fvilGH5FfWm4PfglI9kFAV1qK-p8Yhj=s83-c-mo',
      name: 'Jane Smith',
      email:"parmarparth954@gmail.com",
      description: 'ContentGenius is a game-changer for content creators. Its personalized AI prompts and intuitive tools make creating engaging content effortless. Highly recommended',
    },
    // Add more reviews as needed
  ];


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
          <Card type="AI Generation" description="Employ cutting-edge AI tools spanning various content creation domains, ensuring your content is innovative, impactful, and tailored to your specific needs." className="float-end" />

          <div className="col-12">
            <ShowcaseDiv text="Personalized AI prompts enhance user content, making it more impactful and engaging." background="black" />
          </div>

          <div className="my-4">
            <Titlefonts text="Reviews From Users :" />
          </div>

          <div className="my-4">
            <Reviews reviews={reviews}/>
          </div>
        </div>

      </div>
    </>
  )
}
export default Info;