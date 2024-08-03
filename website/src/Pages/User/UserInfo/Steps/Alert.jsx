import React from 'react'

import "../css/alert.css"
const Alert = ({text}) => {
  return (
    <>
    <div className="alert">
        {text}
    </div>
    </>
  )
}

export default Alert