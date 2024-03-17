/* eslint-disable react/prop-types */
import {JournalItem} from '../components/JournalItem';
import {CardButtom} from '../components/cardButton';
import {AddButton} from '../components/addButton';
import { useContext, useMemo } from 'react';
import {UserContext} from '../context/user.context';



export function JornalList ({items, setItem}) {




const {userId} = useContext(UserContext);

  
const sortItems = (a, b) => {
        if (a.date > b.date) {
          return -1;
        } else {
          return 1;
        }
        };
        

const filterItems = useMemo( () => items
        .filter(el=> el.userId === userId)
        .sort(sortItems), [items, userId]  
); // не очень нужно тут. нету других пропсов. просто пример использования оптимизации


return <>

<div className="jornallist">
{items.length === 0 &&  <AddButton textbtn="ADD POST"/>}
{items.length > 0 && filterItems.map(el => (
    <CardButtom key = {el.id} onClick={()=>setItem(el)}>
        <JournalItem items={el}/>
    </CardButtom>
  ))}
</div>

</>;

}