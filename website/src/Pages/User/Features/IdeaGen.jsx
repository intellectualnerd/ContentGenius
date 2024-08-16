import Herofonts from "../../../ReusableComponents/Herofonts";
import Searchbar from "../components/Searchbar"
import IdeaGenWork from "../components/IdeaGenWork";
import useUser from "../userContext";
const IdeaGen = (props) => {
    console.log(props,"prop in idea Generation")
const {userInfoData,userContentInfoData}=useUser()
console.log(userInfoData,"userinFO")

    const { setIsCustomStyle, isCustomStyle } = props;
    

    const toggleStyles = () => {
        setIsCustomStyle(!isCustomStyle);
    };

    return (

        <div className={`app-container ${isCustomStyle ? 'custom-style container_outlet' : 'container_outlet'}`}>
            <Herofonts text={`Ideageneration`} background="black" />
           {userContentInfoData.length!=0 && <IdeaGenWork/>}
            <Searchbar />
        </div>

    )
}
export default IdeaGen;