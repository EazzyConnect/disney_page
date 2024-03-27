import React from 'react';
import RowAcss from '../css-files/RowA.module.css';

const RowA = ({ firstImg, firstTitle, firstDesc }) => {


 return (
  <>
   <div id={RowAcss.aDiv}>

    <img id={RowAcss.aImg} src={firstImg} alt="img.png" />

    <div id={RowAcss.aText}>
     <h3 id={RowAcss.aText1}>{firstTitle}</h3>
     <h5>{firstDesc}</h5>
    </div>

   </div>
  </>
 )
}

export default RowA;
