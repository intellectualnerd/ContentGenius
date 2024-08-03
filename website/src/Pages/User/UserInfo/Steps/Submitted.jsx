import React from 'react'
import '../css/submitted.css'
import mygif from '../../../../assests/checked_icon.gif'

export const Submitted = ({contentInfo,userInfo}) => {
  console.log(userInfo,"USERINFORMATION")

  console.log(contentInfo,"CONTENTINFORMATION")
  return (
    <div className='submitedSection'>
<div className="heading">
  Thank You For Submitting.
</div>
  <img src={mygif} alt="Submitted" />
    </div>
  )
}
