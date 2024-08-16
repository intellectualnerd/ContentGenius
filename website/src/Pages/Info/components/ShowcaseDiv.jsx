import Herofonts from "../../../ReusableComponents/Herofonts";
const ShowcaseDiv=(props)=>{
    return(
    <>
        <div className="ShowcaseDiv">
            <Herofonts text={props.text} background={props.background}/>
        </div>
    </>
    )
}

export default ShowcaseDiv;