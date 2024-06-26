const Herofonts = (props)=>{
    const background = props.background;
    var Thisclass;
    if(background == "lemongreen"){
        Thisclass = "herofonts"
    }
    else if(background == "black"){
        Thisclass = "herofonts herofonts-blckback"
    }
    return(
        <>
        <span className={Thisclass}>
            {props.text}
        </span>
        </>
    )
}
export default Herofonts;