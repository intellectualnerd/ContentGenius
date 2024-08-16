import { useState } from "react";

const Searchbar = () => {
    const [inputText, setInputText] = useState('');

    const handleInputChange = (event) => {
        setInputText(event.target.value);
        // Adjust the height of the textarea
        if (!event.target.value) {
            event.target.style.height = '2.2rem';
        }
        else {
            event.target.style.height = 'auto';
            event.target.style.height = Math.min(event.target.scrollHeight, 150) + 'px';
        }

    };

    const handleSearch = () => {
        if (inputText.trim() !== '') {
            console.log(inputText);
        }
    };

    return (
        <>
            <div className="Searchbar_container">

                <textarea type="text" className="Searchbar" value={inputText}
                    onChange={handleInputChange}
                    placeholder="Enter text for AI formatting"
                    style={{ maxHeight: '150px' }} />

                <button onClick={handleSearch}>Generate <svg viewBox="0 0 22 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.5892 0.776661C12.0451 0.310449 12.7842 0.310449 13.24 0.776661L21.4111 9.13343C21.8669 9.59961 21.8669 10.3555 21.4111 10.8217L13.24 19.1785C12.7842 19.6447 12.0451 19.6447 11.5892 19.1785C11.1334 18.7123 11.1334 17.9564 11.5892 17.4902L17.7676 11.1714H1.90899C1.26432 11.1714 0.741699 10.6369 0.741699 9.97758C0.741699 9.31823 1.26432 8.78376 1.90899 8.78376H17.7676L11.5892 2.46499C11.1334 1.99876 11.1334 1.24288 11.5892 0.776661Z" fill="#232523" />
                </svg>
                </button>
            </div>
            
        </>


    )

}
export default Searchbar;