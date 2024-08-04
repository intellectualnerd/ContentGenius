import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const useActiveIndex = (routes) => {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const currentRoute = routes.find(route => route.path === location.pathname);
    if (currentRoute) {
      setActiveIndex(currentRoute.index);
    } else {
      setActiveIndex(0); // Default to 0 if no match found
    }
  }, [location.pathname, routes]);

  return activeIndex;
};

const routes = [
  { path: '/user', index: 0 },
  { path: '/user/ideagen', index: 1 },
  { path: '/user/keywordgen', index: 2 },
  { path: '/user/thumbnailgen', index: 3 },
  { path: '/user/scriptgen', index: 4 },
  { path: '/user/topaitools', index: 5 }
];


const SidebarComponent = (props) => {
  const { setIsCustomStyle, isCustomStyle } = props;

  const toggleStyles = () => {
    setIsCustomStyle(!isCustomStyle);
  };

  const activeIndex = useActiveIndex(routes);

  return (

    <div className={`app-container ${isCustomStyle ? 'sidebar custom-style' : 'sidebar'}`}>
      <div className="profile">
        <div className='userimage'><img src={props.img} /></div>
        <div className='username'><span>{props.name}</span></div>
      </div>

      <div className='options'>
        <Link to="/user">
          <button className={activeIndex === 0 ? 'active optionsButton' : 'optionsButton'}>
            <svg xmlns="http://www.w3.org/2000/svg" className='optionssvg' viewBox="0 -960 960 960"><path d="M160-120v-375l-72 55-48-64 120-92v-124h80v63l240-183 440 336-48 63-72-54v375H160Zm80-80h200v-160h80v160h200v-356L480-739 240-556v356Zm-80-560q0-50 35-85t85-35q17 0 28.5-11.5T320-920h80q0 50-35 85t-85 35q-17 0-28.5 11.5T240-760h-80Zm80 560h480-480Z" /></svg>
            <span>Home</span>
          </button>
        </Link>
        <Link to="/user/ideagen">
          <button className={activeIndex === 1 ? 'active optionsButton' : 'optionsButton'}>
            <svg xmlns="http://www.w3.org/2000/svg" className='optionssvg' viewBox="0 -960 960 960"><path d="M491-339q70 0 119-45t49-109q0-57-36.5-96.5T534-629q-47 0-79.5 30T422-525q0 19 7.5 37t21.5 33l57-57q-3-2-4.5-5t-1.5-7q0-11 9-17.5t23-6.5q20 0 33 16.5t13 39.5q0 31-25.5 52.5T492-418q-47 0-79.5-38T380-549q0-29 11-55.5t31-46.5l-57-57q-32 31-49 72t-17 86q0 88 56 149.5T491-339ZM240-80v-172q-57-52-88.5-121.5T120-520q0-150 105-255t255-105q125 0 221.5 73.5T827-615l64 255H760v200H600v80h-80v-160h160v-200h108l-38-155q-23-91-98-148t-172-57q-116 0-198 81t-82 197q0 60 24.5 114t69.5 96l26 24v208h-80Zm254-360Z" /></svg>

            <span>Ideagen.</span>
          </button>
        </Link>
        <Link to="/user/keywordgen">
          <button className={activeIndex === 2 ? 'active optionsButton' : 'optionsButton'}>
            <svg className='optionssvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m476-80 182-480h84L924-80h-84l-43-122H603L560-80h-84ZM160-200l-56-56 202-202q-35-35-63.5-80T190-640h84q20 39 40 68t48 58q33-33 68.5-92.5T484-720H40v-80h280v-80h80v80h280v80H564q-21 72-63 148t-83 116l96 98-30 82-122-125-202 201Zm468-72h144l-72-204-72 204Z" /></svg>
            <span>KeywordGen.</span>
          </button>
        </Link>
        <Link to="/user/thumbnailgen">
          <button className={activeIndex === 3 ? 'active optionsButton' : 'optionsButton'}>
            <svg xmlns="http://www.w3.org/2000/svg" className='optionssvg' viewBox="0 -960 960 960"><path d="M240-280h480L570-480 450-320l-90-120-120 160ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Zm140-360q25 0 42.5-17.5T400-620q0-25-17.5-42.5T340-680q-25 0-42.5 17.5T280-620q0 25 17.5 42.5T340-560Z" /></svg>

            <span>Thumbnailgen.</span>
          </button>
        </Link>
        <Link to="/user/scriptgen">
          <button className={activeIndex === 4 ? 'active optionsButton' : 'optionsButton'}>
            <svg xmlns="http://www.w3.org/2000/svg" className='optionssvg' viewBox="0 -960 960 960" ><path d="m499-287 335-335-52-52-335 335 52 52Zm-261 87q-100-5-149-42T40-349q0-65 53.5-105.5T242-503q39-3 58.5-12.5T320-542q0-26-29.5-39T193-600l7-80q103 8 151.5 41.5T400-542q0 53-38.5 83T248-423q-64 5-96 23.5T120-349q0 35 28 50.5t94 18.5l-4 80Zm280 7L353-358l429-429 166 165-430 429Zm0 0-208 43 43-208 165 165Z" /></svg>

            <span>Scriptgen.</span>
          </button>
        </Link>
        <Link to="/user/topaitools">
          <button className={activeIndex === 5 ? 'active optionsButton' : 'optionsButton'}>
            <svg className='optionssvg pathfillnone' viewBox="0 0 35 35" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.91663 18.9583H7.29163V27.7083H2.91663V18.9583Z" />
              <path d="M32.0834 18.9583H27.7084V27.7083H32.0834V18.9583Z" />
              <path d="M14.5834 5.10416H20.4167V16.7708H14.5834V5.10416Z" />
              <path d="M7.29163 16.7708H27.7083V29.8958H21.1458L17.5 26.25L13.8541 29.8958H7.29163V16.7708Z" stroke-width="2" />
              <path d="M2.91663 18.9583H7.29163V27.7083H2.91663V18.9583Z" stroke-width="2" />
              <path d="M32.0834 18.9583H27.7084V27.7083H32.0834V18.9583Z" stroke-width="2" />
              <path d="M7.29163 16.771V16.0418C7.29163 11.417 10.367 7.51061 14.5842 6.25592" stroke-width="2" />
              <path d="M27.7082 16.771V16.0418C27.7082 11.417 24.6329 7.51061 20.4156 6.25592" stroke-width="2" />
              <path d="M14.5834 5.10416H20.4167V16.7708H14.5834V5.10416Z" stroke-width="2" />
            </svg>

            <span>Top AI Tools</span>
          </button>
        </Link>

        <button className='optionsButton'>
          <svg xmlns="http://www.w3.org/2000/svg" className='optionssvg' viewBox="0 -960 960 960"><path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z" /></svg>
          <span>Settings</span>
        </button>

        <button className='optionsButton' onClick={toggleStyles}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className='optionssvg'><path d="M120-120v-320h80v184l504-504H520v-80h320v320h-80v-184L256-200h184v80H120Z"/></svg>
          <span>In</span>
        </button>
      </div>

    </div>
  );
};

export default SidebarComponent;