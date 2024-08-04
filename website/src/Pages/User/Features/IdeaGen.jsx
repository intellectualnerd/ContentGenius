import Herofonts from "../../../ReusableComponents/Herofonts";
import Searchbar from "../components/Searchbar"
import IdeaGenWork from "../components/IdeaGenWork";
const IdeaGen = (props) => {
    const { setIsCustomStyle, isCustomStyle } = props;

    const toggleStyles = () => {
        setIsCustomStyle(!isCustomStyle);
    };

    return (

        <div className={`app-container ${isCustomStyle ? 'custom-style container_outlet' : 'container_outlet'}`}>
            <Herofonts text="Ideageneration" background="black" />
            <IdeaGenWork/>
            <Searchbar />
        </div>

    )
}
export default IdeaGen;