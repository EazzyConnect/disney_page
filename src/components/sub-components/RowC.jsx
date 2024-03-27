import React from 'react';
import RowCcss from '../css-files/RowC.module.css'


const RowC = (props) => {

 return (
  <>
   <div id={RowCcss.cDiv} >

    <img id={RowCcss.cImg} src={props.thirdImg} alt="img.png" />

    <div>
     <h6 id={RowCcss.cTitle}>{props.thirdTitle}</h6>
     <h6 id={RowCcss.cDesc}>{props.thirdDesc}</h6>
    </div>

   </div>
  </>
 )
}

export default RowC;