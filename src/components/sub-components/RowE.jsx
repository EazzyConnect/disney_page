import React from 'react';
import RowEcss from '../css-files/RowE.module.css';

const RowE = ({ firstImg, firstTitle, firstDesc }) => {


 return (
  <>
   <div id={RowEcss.aDiv}>

    <img id={RowEcss.aImg} src={firstImg} alt="img.png" />

    <div id={RowEcss.aText}>
     <h3 id={RowEcss.aText1}>{firstTitle}</h3>
     <h5 id={RowEcss.aText2}>{firstDesc}</h5>
    </div>

   </div>
  </>
 )
}

export default RowE;
