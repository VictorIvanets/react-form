import {UserContext} from '../context/user.context';
import { useContext } from 'react';
import {SelectUser} from './selectuser';

export function Header () {
    const {userId} = useContext(UserContext);

    const vicPic = '/vitya.jpg';
    const irPic = '/ira.jpg';

    let pic;
    switch (true) {
    case userId === 11:
    pic = vicPic;
    break;
    case userId === 22:
    pic = irPic;
    break; 
    }


    return <>
    <h1 className="header">TEST APP <br /> NEW REACT</h1>
    <img className="leftpanel__foto" src={pic} alt="foto" />

    <SelectUser/>
    
    </>;

}