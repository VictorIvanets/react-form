import {UserContext} from '../context/user.context';
import { useContext } from 'react';

export function SelectUser () {
    const {userId, setUserid} = useContext(UserContext);

    const changeUser = (e) => {
        setUserid(+e.target.value);
    };
   
       return <>
       <select 
       className = 'rightpanel__inputbox__input select' 
       name="user" 
       id="user"
       value={userId}
       onChange={changeUser}
       >
           <option value="11">Victor</option>
           <option value="22">Iryna</option>
       </select>
       
       </>;
   
   }