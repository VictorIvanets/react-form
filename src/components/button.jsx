/* eslint-disable react/prop-types */
// import {useState} from 'react';


export function Button({text, onClick, type, ...props}) {

    // const [clickBtn, setclickBtn] = useState(false);
    // const [clickBtntext, setclickBtntext] = useState('Save');


// function replaceClick () {
//     setclickBtn(!clickBtn);
//     if (clickBtn === true){
//         setclickBtntext('Save');
//     } if (clickBtn === false) {
//         setclickBtntext('Ok');
//     }
//     console.log(clickBtn);
// }
// console.log(clickBtn);

  return  <>
    <button {...props}
    // onClick={replaceClick} 
    className="btn"
    onClick={onClick}
    type={type}
    >{text}</button>
    </>;
  
}

