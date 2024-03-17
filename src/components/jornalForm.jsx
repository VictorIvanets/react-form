/* eslint-disable react/prop-types */
import {useEffect, useReducer, useRef} from 'react';
import {Button} from './button';
import classNames from 'classnames';
import { INITIAL_STATE, formReducer } from './JornalForm.state';
import { useContext } from 'react';
import {UserContext} from '../context/user.context';







export function JornalForm (props) {


const 
    {onSubmit,
    data,
    onDelete
    } = props;

const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
const {isValid, isFormReadiToSubmit, values} = formState;
const titleRef = useRef();
const dataeRef = useRef();
const posteRef = useRef();
const tagRef = useRef();
const {userId} = useContext(UserContext);


// useEffect(()=>{
//     setlocalName(userId);
//     console.log(userId);
// },[userId]);

// console.log(data);

let nameUserId; 
switch (true) {
case userId === 11:
    nameUserId = 'Витя';
    break;
case userId === 22:
    nameUserId = 'Ира';
    break;
}


const focusError = (isValid) => {

    switch(true) {
        case !isValid.title:
            titleRef.current.focus();
            break;
        case !isValid.tag:
            tagRef.current.focus();
            break;  
        // case !isValid.data:
        //     dataeRef.current.focus();
        //     break;
        case !isValid.post:
            posteRef.current.focus();
            break;
    }};



useEffect(()=>{
let timerId;
    if(
        // !isValid.date || 
        !isValid.title || !isValid.tag || !isValid.post){
        focusError(isValid);
        timerId = setTimeout(()=>{
        dispatchForm({type: 'RESET_VALID'});
    }, 3000);
}
return () => {
    clearTimeout(timerId);
};
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [isValid]);



useEffect(()=>{
if (isFormReadiToSubmit){
    onSubmit(values);
    dispatchForm ({type: 'CLEAR'});
    dispatchForm({type: 'SET_VALUE', payload: {userId}}); 
}
// eslint-disable-next-line react-hooks/exhaustive-deps
},[isFormReadiToSubmit]);

useEffect(()=>{
    dispatchForm({type: 'SET_VALUE', payload: {...data},
    //  [data.date]: ''
});
},[data]);

// console.log(data.id);


useEffect(()=>{
    dispatchForm({type: 'SET_VALUE', payload: {userId}}); 
       // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userId]);


const addJornalItem = (e) =>{
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    e.preventDefault();
    dispatchForm({type: 'SUBMIT', payload: formProps 
});
formProps.userId=userId;
// console.log(formProps);
};


const onChange = (e)=>{
dispatchForm({type: 'SET_VALUE', payload: {[e.target.name]: e.target.values}});
};



return <>

<form 
className="rightpanel__inputbox" 
onSubmit={addJornalItem}
>

<div className='rightpanel__inputbox__box'>
<input  className={classNames('rightpanel__inputbox__input', {
        'invalid' : !isValid.title })}
 type="title"
 name='title'
 ref={titleRef}
 value={values.title}
 onChange={onChange}
 placeholder='Заголовок'
 />
 <Button text={nameUserId}/>
{data.id && <Button text='del' type="button" onClick={()=>onDelete(data.id)}/>
}</div>

<div className='rightpanel__inputbox__box'>

<input  className={classNames('rightpanel__inputbox__input tag', {
'invalid' : !isValid.tag })}
 type="title"
 name='tag'
 placeholder='Тема'
 ref={tagRef}
 value={values.tag}
 onChange={onChange}
 />
<input 
className={classNames('rightpanel__inputbox__date', {
    'invalid' : !isValid.date })}
type="date" 
name='date'
ref={dataeRef}
value={values.data
    //  = (data.date ? data.date : values.data)
    }
onChange={onChange}
/>
</div>

<textarea 
cols="30"
rows="10"
name='post'
ref={posteRef}
placeholder='Зміст'
value={values.post}
onChange={onChange}
className={classNames('rightpanel__inputbox__textarea', {
    'invalid' : !isValid.post })}
>
</textarea>

<Button text='ADD'/>



</form>

</>;
}




// /**
//  * /* eslint-disable react/prop-types */
// import {useState, useEffect, useReducer} from 'react';
// import {Button} from './button';
// import classNames from 'classnames';

// export function JornalForm ({onSubmit}) {

// const VALID_STATE = {
//     post: true,
//     title: true,
//     date: true,
//     tag: true
// };


// const [formValidState, setFormValidState] = useState(VALID_STATE);


// useEffect(()=>{
// let timerId;
//     if(!formValidState.date || !formValidState.title || !formValidState.tag || !formValidState.post){
//     timerId = setTimeout(()=>{
//     setFormValidState(VALID_STATE);
//     }, 3000);
// }
// return () => {
//     clearTimeout(timerId);
// };

// // eslint-disable-next-line react-hooks/exhaustive-deps
// }, [formValidState]);






// const addJornalItem = (e) =>{
//     const formData = new FormData(e.target);
//     const formProps = Object.fromEntries(formData);
//     e.preventDefault();
//     let isFormValid = true;
//     if (!formProps.title.trim().length) {
//         setFormValidState(state => ({...state, title: false}));
//         isFormValid = false;
//     } else {
//         setFormValidState(state => ({...state, title: true}));
//     }
//     if (!formProps.post.trim().length) {
//         setFormValidState(state => ({...state, post: false}));
//         isFormValid = false;
//     } else {
//         setFormValidState(state => ({...state, post: true}));
//     }
//     if (!formProps.date.trim().length) {
//         setFormValidState(state => ({...state, date: false}));
//         isFormValid = false;
//     } else {
//         setFormValidState(state => ({...state, date: true}));
//     }
//     if (!formProps.tag.trim().length) {
//         setFormValidState(state => ({...state, tag: false}));
//         isFormValid = false;
//     } else {
//         setFormValidState(state => ({...state, tag: true}));
//     }

//     if (!isFormValid) {return;}    

//     onSubmit(formProps);

//     // console.log(formProps);

// };

// return <>
// <form 
// className="rightpanel__inputbox" 
// onSubmit={addJornalItem}>

// <div className='rightpanel__inputbox__box'>
// <input  className={classNames('rightpanel__inputbox__input', {
//         'invalid' : !formValidState.title })}
//  type="title"
//  name='title'
//  placeholder='Заголовок'
//  />
//  <Button text='ok'/>
// </div>

// <div className='rightpanel__inputbox__box'>

// <input  className={classNames('rightpanel__inputbox__input tag', {
// 'invalid' : !formValidState.tag })}
//  type="title"
//  name='tag'
//  placeholder='Тема'
//  />

// <input 
// className={classNames('rightpanel__inputbox__date', {
//     'invalid' : !formValidState.date })}
// type="date" 
// name='date'
// />
// </div>

// <textarea 
// cols="30"
// rows="10"
// name='post'
// placeholder='Зміст'
// className={classNames('rightpanel__inputbox__textarea', {
//     'invalid' : !formValidState.post })}
// >
// </textarea>

// <Button text='ADD'/>



// </form>
// </>;


// }
//  * 
//  * 
//  */