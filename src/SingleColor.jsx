import {useState,useEffect} from "react"

import toast, { Toaster } from 'react-hot-toast';


const SingleColor =({rgb,weight,index,hexColor})=>{
  const bcg =rgb.join(',');
  console.log(bcg);

const hexValue =`#${hexColor}`;
  
   const [alert,setAlert]=useState(false);
  

const notify = () => {
  toast('Copied to ClipBoard');
  setAlert(true);
navigator.clipboard.writeText(hexValue);
}
 
  return ( <>
    <article className={`color ${index>10 &&"color-light"}`} style={{backgroundColor: `rgb(${bcg})`}}
    onClick={notify}
      >
      
  <p className="percent-value">{weight}%</p>
<p className="color-value">{hexValue}</p>
  </article>
    <Toaster
      position="top-right" 
     toastOptions={{
    style: {
      border: '1px solid #713200',
      padding: '8px',
      color: '#713200',
    },
  }}
     />
  </>
          )
}

export default SingleColor;
