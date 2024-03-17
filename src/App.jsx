import './App.css';
// import {Button} from './components/button';
import {LeftPanel} from './components/leftPanel';
import {RightPanel} from './components/rightPanel';
import {Header} from './components/header';
import {JornalList} from './components/JornalList';
import {JornalForm} from './components/jornalForm';
import {CardButtom} from './components/cardButton';
import {useLocalStorage} from './components/use-localstor.hook';
import {UserContextProvider} from './context/user.context';
import { useState } from 'react';



function App() {


const localName = 'posts';

const [items, setItems] = useLocalStorage(localName);
const [selectItem, setSelectItem] = useState ({});

function clearStorage () {
  localStorage.removeItem(localName);
  setItems([]);
}


const addItem = item =>{


if (!item.id) {
  setItems([...items, { 
  ...item,
  id: items.length > 0 ? Math.max(...items.map(i=>i.id)) + 1 : 1
  }
]);
} 

  else {
    setItems([...items.map(i=> {
      if (i.id === item.id) {
        console.log(`old ${item.id}`);
        return {...item};
      } 
        return i;

    })]);
  }
  console.log(item);
};


function onDelete(id) {
  console.log(id);
  setItems([...items.filter(i=> i.id !== id)]);
}

  return  <>
<div className='mainbox'>

<UserContextProvider>
<LeftPanel>
  <Header/>
  <CardButtom>
    <h2 onClick={()=>clearStorage()} className='orange'>CLEAR</h2>
  </CardButtom>

  <JornalList items={items} setItem={setSelectItem}/>
</LeftPanel>


<RightPanel>

    <JornalForm 
    onSubmit={addItem} 
    data = {selectItem}
    onDelete = {onDelete}
    />
 
 </RightPanel>
 </UserContextProvider>
</div>
</>;

}

export default App;
