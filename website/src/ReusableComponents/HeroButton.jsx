const HeroButton = (props) => {
    const svg = props.svg;
    const buttonFunction = props.onClick;
    return (
        <>
            <button className="herobutton" onClick={buttonFunction}>
                <span>
                    {props.text}
                    <svg className="herobutton_svg" viewBox="0 0 39 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.6942 0V15.2832H13.6313V2.93704H34.3376L27.7572 7.38923C27.0129 7.89258 26.5676 8.73299 26.5676 9.6307V34.7885H13.6313V24.7921H10.6942V37.7256H26.5676V43.9596C26.5676 44.3448 26.7806 44.6983 27.1205 44.8782C27.4603 45.0589 27.8726 45.0374 28.1918 44.8216L38.6787 37.7256V0H10.6942Z" fill="white" />
                        <path d="M17.0968 25.5234C17.0968 25.6855 17.1907 25.8331 17.3385 25.9013C17.4848 25.9695 17.6583 25.9465 17.7817 25.8411L24.641 20.0373L17.7817 14.2335C17.6583 14.128 17.4848 14.1052 17.3385 14.1732C17.1908 14.2413 17.0968 14.3891 17.0968 14.5511V17.486H0.321386V22.5893H17.0969V25.5234H17.0968Z" fill="white" />
                    </svg>
                </span>

            </button>
        </>
    )

}
export default HeroButton;