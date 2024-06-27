const Card = (props) => {
    const type = props.type;
    
    const SVG = () => {
        if (type == "Research") {
            return (
                <svg style={{transform:"translateY(5%)"}} viewBox="0 0 63 63" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.8838 38.7164C22.8885 40.7211 25.5222 41.7235 28.1556 41.7235C30.7891 41.7235 33.4227 40.7211 35.4275 38.7163C37.37 36.7738 38.4396 34.1915 38.4396 31.4446C38.4396 28.6978 37.37 26.1152 35.4275 24.1728C31.418 20.1633 24.8933 20.1633 20.884 24.1728C18.9414 26.115 17.8718 28.6975 17.8718 31.4444C17.8718 34.1913 18.9413 36.774 20.8838 38.7164ZM22.2904 25.5797C25.5245 22.3458 30.7869 22.3459 34.0207 25.5797C35.5873 27.1463 36.45 29.2291 36.45 31.4446C36.45 33.66 35.5872 35.7428 34.0207 37.3093C30.7865 40.5434 25.5244 40.5434 22.2904 37.3093C20.7238 35.7428 19.8611 33.66 19.8611 31.4446C19.8611 29.2291 20.7239 27.1463 22.2904 25.5797Z" fill="#87FF29" />
                    <path d="M58.6161 53.0204L49.6729 44.0545C51.7363 40.536 52.8965 36.5682 53.0586 32.4808H57.361C57.9922 32.4808 58.6043 32.2191 59.0406 31.7629C59.4822 31.3012 59.7099 30.6958 59.6814 30.0584C59.3305 22.1895 56.0635 14.7821 50.4822 9.20104C44.9012 3.62013 37.4937 0.353123 29.6246 0.00219393C28.9874 -0.0249994 28.3819 0.201283 27.92 0.642898C27.4638 1.07922 27.202 1.69162 27.202 2.32285V6.62518C13.9422 7.14899 3.31573 18.1 3.31573 31.4859C3.31573 45.2051 14.4774 56.3667 28.1971 56.3667C32.631 56.3667 36.9562 55.1933 40.7578 52.9661L49.7019 61.9329C50.4133 62.6444 51.3474 63 52.2819 63C53.2162 63 54.1509 62.6442 54.8619 61.9329L58.6152 58.1797C59.3045 57.4906 59.6841 56.5744 59.6841 55.5997C59.684 54.6249 59.3045 53.7086 58.6161 53.0204ZM48.2162 42.5939L47.1576 41.5328C47.1574 41.5325 47.1571 41.5323 47.1568 41.532C46.4676 40.8428 45.5514 40.4632 44.5767 40.4632C43.9433 40.4632 43.3343 40.6236 42.7965 40.925L40.9759 39.1047C42.1762 37.1039 42.8878 34.8464 43.0488 32.481H51.0673C50.9141 36.0386 49.939 39.495 48.2162 42.5939ZM41.2932 42.2352L38.9467 44.5817L37.4737 43.1087C37.9018 42.7663 38.3152 42.3968 38.7117 42.0003C39.1068 41.6054 39.4767 41.1925 39.8211 40.7629L41.2932 42.2352ZM29.1918 2.32273C29.1918 2.19833 29.2567 2.11773 29.2953 2.0807C29.3333 2.04452 29.4147 1.98411 29.536 1.98977C44.9033 2.67526 57.0089 14.7802 57.6942 30.147C57.6995 30.268 57.6395 30.3498 57.6031 30.3877C57.566 30.4265 57.4853 30.4913 57.361 30.4913H43.0544C42.8274 26.8624 41.3055 23.4826 38.7116 20.8887C36.0645 18.2416 32.6621 16.7986 29.1918 16.559V2.32273ZM28.1556 18.512C31.469 18.512 34.7825 19.7732 37.3049 22.2955C39.7487 24.7392 41.0946 27.9884 41.0946 31.4445C41.0946 31.4475 41.0946 31.4507 41.0946 31.4535C41.0943 31.4642 41.0941 31.4752 41.0941 31.4859C41.0941 31.4947 41.0942 31.5035 41.0945 31.5125C41.0813 34.0836 40.323 36.5379 38.9217 38.6284C38.8933 38.6644 38.8678 38.7022 38.8452 38.7411C38.3947 39.398 37.8804 40.0179 37.3049 40.5934C36.7124 41.1859 36.0767 41.7085 35.4072 42.1618C35.3998 42.1667 35.3924 42.1716 35.3851 42.1767C33.2088 43.6438 30.6825 44.3771 28.1554 44.377C24.8424 44.3767 21.5282 43.1154 19.0061 40.5934C16.5623 38.1496 15.2164 34.9003 15.2164 31.4444C15.2164 27.9884 16.5622 24.7392 19.0061 22.2954C21.5289 19.7731 24.8422 18.512 28.1556 18.512ZM28.1971 54.377C15.5745 54.377 5.30528 44.1081 5.30528 31.4859C5.30528 19.1972 15.0399 9.13927 27.2024 8.6162V16.5536C23.7031 16.7753 20.268 18.2205 17.5997 20.8887C14.78 23.7082 13.2271 27.4571 13.2271 31.4445C13.2271 35.432 14.78 39.1807 17.5997 42.0003C22.5307 46.9311 30.0808 47.6852 35.8128 44.2613L37.6365 46.085C37.3351 46.6228 37.1747 47.2315 37.1747 47.865C37.1747 48.8395 37.5543 49.756 38.2426 50.4442L39.302 51.5063C35.9157 53.3879 32.1021 54.377 28.1971 54.377ZM57.2087 56.7727L53.4554 60.5259C52.8083 61.1731 51.7556 61.1729 51.1094 60.5269L41.6283 51.0215C41.6185 51.0113 41.6086 51.0013 41.5984 50.9917L39.6501 49.0384C39.3368 48.725 39.1641 48.3083 39.1641 47.8651C39.1641 47.422 39.3368 47.0053 39.6501 46.692L43.4036 42.9387C44.0504 42.2918 45.1031 42.2916 45.75 42.9387L47.698 44.8918C47.7075 44.9018 47.7174 44.9115 47.7272 44.9211L57.2084 54.4265C57.5218 54.7399 57.6943 55.1565 57.6943 55.5996C57.6945 56.0425 57.5221 56.4592 57.2087 56.7727Z" fill="#87FF29" />
                </svg>
            )
        }
        else if (type == "Script Writing") {
            return (
                <svg style={{transform:"translatex(-6%) scale(0.85)"}} viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M56.616 17.134L47.9375 8.45544V1.84375C47.9375 0.826 47.1115 0 46.0938 0H5.53125C4.5135 0 3.6875 0.826 3.6875 1.84375V57.1562C3.6875 58.174 4.5135 59 5.53125 59H46.0938C47.1115 59 47.9375 58.174 47.9375 57.1562V28.4196L56.616 19.741C57.3369 19.022 57.3369 17.853 56.616 17.134ZM21.9793 32.5016L30.1877 40.71L20.6113 42.0781L21.9793 32.5016ZM31.6129 39.5282L23.1575 31.0727L38.4477 15.7825L46.9032 24.2379L31.6129 39.5282ZM48.2067 22.9344L39.7512 14.479L44.25 9.98206L52.7054 18.4375L48.2067 22.9344ZM7.375 55.3125V3.6875H44.25V7.375L36.875 14.75H14.75V16.5938H35.0312L31.3438 20.2812H14.75V22.125H29.5L25.8125 25.8125H14.75V27.6562H23.9688L20.7164 30.9086C20.5892 31.0358 20.4877 31.1852 20.4029 31.3438H14.75V33.1875H20.0176L19.4903 36.875H14.75V38.7188H19.2285L18.7012 42.4062H14.75V44.25H18.4375L30.7353 42.4929C31.1299 42.4358 31.4968 42.2532 31.7789 41.9711L44.25 29.5V55.3125H7.375Z" fill="#87FF29" />
                </svg>

            )
        }
        else if (type == "AI Generation") {
            return (
                <svg viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.0524 40.4792L13.3824 40.5516C11.7659 40.5779 10.1603 40.2821 8.65914 39.6816C7.15801 39.0812 5.79141 38.1879 4.63897 37.054C3.48652 35.92 2.57128 34.568 1.94658 33.0768C1.32187 31.5856 1.0002 29.985 1.0003 28.3682V27.947C0.980615 25.2149 1.91964 22.5625 3.65391 20.4513L3.81261 20.2588C8.27816 14.841 14.3709 11.0065 21.1873 9.32397" stroke="#87FF29" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M55.956 53.2007C54.9528 55.5742 53.1596 57.5277 50.8806 58.7302C48.6015 59.9326 45.9768 60.31 43.4513 59.7984C40.9258 59.2868 38.6549 57.9176 37.0235 55.923C35.3922 53.9283 34.5007 51.4309 34.5003 48.8541" stroke="#87FF29" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M24.6298 34.8959C23.7264 34.8959 22.8318 34.7179 21.9971 34.3722C21.1625 34.0265 20.4041 33.5197 19.7653 32.8809C19.1264 32.2421 18.6197 31.4837 18.274 30.649C17.9282 29.8144 17.7503 28.9198 17.7503 28.0164" stroke="#87FF29" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M27.5211 48.8541L28.1106 50.033C30.5508 54.9156 32.1276 60.1837 32.7708 65.6041" stroke="#87FF29" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M41.1254 65.6042C40.8384 63.1258 40.3558 60.6741 39.6821 58.2719" stroke="#87FF29" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M23.2339 13.9583C23.7262 12.3428 24.7245 10.9281 26.0817 9.92285C27.4388 8.91761 29.083 8.375 30.7719 8.375H31.7084" stroke="#87FF29" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M38.3339 34.8958H25.0734C21.219 34.8958 17.3964 37.8402 17.3964 41.6947C17.3964 43.5456 18.1317 45.3208 19.4405 46.6297C20.7494 47.9385 22.5245 48.6738 24.3755 48.6738H36.938C36.938 48.6738 39.3143 50.258 41.5355 51.7387C43.9991 53.381 46.8938 54.2574 49.8546 54.2572C53.8694 54.2705 57.7286 52.7059 60.6005 49.9005C63.4725 47.0952 65.1272 43.2737 65.208 39.2598L65.2084 36.368C65.2087 33.9463 64.7965 31.5423 63.9896 29.259C63.7625 28.6164 63.5055 27.9868 63.2186 27.3702" stroke="#87FF29" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M23.1054 19.0796C23.6386 18.523 23.6197 17.6394 23.063 17.1061C22.5063 16.5728 21.6227 16.5918 21.0894 17.1485C20.5561 17.7052 20.5751 18.5888 21.1318 19.1221C21.6885 19.6553 22.5721 19.6363 23.1054 19.0796Z" fill="#87FF29" />
                    <path d="M17.7501 25.125C18.521 25.125 19.1459 24.5001 19.1459 23.7292C19.1459 22.9583 18.521 22.3334 17.7501 22.3334C16.9792 22.3334 16.3542 22.9583 16.3542 23.7292C16.3542 24.5001 16.9792 25.125 17.7501 25.125Z" fill="#87FF29" />
                    <path d="M30.7365 39.1584C30.2021 37.8946 29.3072 36.8162 28.1635 36.0581C27.0197 35.3 25.678 34.8957 24.3058 34.8959" stroke="#87FF29" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M32.7164 44.2046C33.2497 43.648 33.2307 42.7644 32.674 42.2311C32.1173 41.6978 31.2337 41.7168 30.7004 42.2735C30.1672 42.8302 30.1862 43.7138 30.7428 44.2471C31.2995 44.7803 32.1831 44.7613 32.7164 44.2046Z" fill="#87FF29" />
                    <path d="M42.8751 36.2917C43.646 36.2917 44.2709 35.6667 44.2709 34.8958C44.2709 34.1249 43.646 33.5 42.8751 33.5C42.1042 33.5 41.4792 34.1249 41.4792 34.8958C41.4792 35.6667 42.1042 36.2917 42.8751 36.2917Z" fill="#87FF29" />
                    <path d="M59.6251 33.4999C61.1059 33.4999 62.526 34.0881 63.5731 35.1352C64.6202 36.1823 65.2084 37.6024 65.2084 39.0832" stroke="#87FF29" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M59.6251 5.58337H42.8751V22.3334H59.6251V5.58337Z" stroke="#87FF29" strokeWidth="2" strokeMiterlimit="10" />
                    <path d="M47.0626 16.75H49.8543" stroke="#87FF29" strokeWidth="2" strokeMiterlimit="10" />
                    <path d="M52.6459 16.75H55.4376" stroke="#87FF29" strokeWidth="2" strokeMiterlimit="10" />
                    <path d="M47.0626 11.1667H49.8543" stroke="#87FF29" strokeWidth="2" strokeMiterlimit="10" />
                    <path d="M52.6459 11.1667H55.4376" stroke="#87FF29" strokeWidth="2" strokeMiterlimit="10" />
                    <path d="M51.2501 22.3334V29.3125" stroke="#87FF29" strokeWidth="2" strokeMiterlimit="10" />
                    <path d="M56.8334 22.3334V29.3125" stroke="#87FF29" strokeWidth="2" strokeMiterlimit="10" />
                    <path d="M42.8751 8.375H35.8959" stroke="#87FF29" strokeWidth="2" strokeMiterlimit="10" />
                    <path d="M42.8751 13.9584H35.8959" stroke="#87FF29" strokeWidth="2" strokeMiterlimit="10" />
                    <path d="M42.8751 19.5417H35.8959" stroke="#87FF29" strokeWidth="2" strokeMiterlimit="10" />
                    <path d="M45.6667 22.3334V29.3125" stroke="#87FF29" strokeWidth="2" strokeMiterlimit="10" />
                    <path d="M59.6251 8.375H66.6043" stroke="#87FF29" strokeWidth="2" strokeMiterlimit="10" />
                    <path d="M59.6251 13.9584H66.6043" stroke="#87FF29" strokeWidth="2" strokeMiterlimit="10" />
                    <path d="M59.6251 19.5417H66.6043" stroke="#87FF29" strokeWidth="2" strokeMiterlimit="10" />
                    <path d="M56.8334 5.58339L56.8333 0" stroke="#87FF29" strokeWidth="2" strokeMiterlimit="10" />
                    <path d="M51.2501 5.58339L51.25 0" stroke="#87FF29" strokeWidth="2" strokeMiterlimit="10" />
                    <path d="M45.6668 5.58339L45.6667 0" stroke="#87FF29" strokeWidth="2" strokeMiterlimit="10" />
                </svg>

            )
        }
    }



    return (
        <div className="col-lg-4 col-md-12 col-sm-12 mb-4">
            <div className="card">
                <div className="card_title">
                    <SVG />
                    <span>
                        {props.type}
                    </span>
                </div>
                <div className="card_body">
                    <span>
                        {props.description}
                    </span>
                </div>
            </div>
        </div>
    )

}
export default Card;