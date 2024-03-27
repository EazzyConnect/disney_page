import React from 'react';
import RowBcss from '../css-files/RowB.module.css';



const RowB = (props) => {

 const { secImg, secTitle, secDesc, secDate } = props
 return (
  <>
   <div id={RowBcss.bDiv}>

    <img id={RowBcss.bImg} src={secImg} alt="img.png" />

    <div id={RowBcss.bText}>
     <h6 id={RowBcss.bText1}>{secTitle}</h6>
     <h5 id={RowBcss.bText2}>{secDesc}</h5>
     <h6 id={RowBcss.bText3}>{secDate}</h6>
    </div>

   </div>
  </>
 )
}

export default RowB;