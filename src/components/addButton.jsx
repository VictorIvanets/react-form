/* eslint-disable react/prop-types */
import {CardButtom} from './cardButton';

export function AddButton ({textbtn}) {


    return <>
    <CardButtom>
        <h3 className='orange'>{textbtn}</h3>
    </CardButtom>
    
    </>;
}