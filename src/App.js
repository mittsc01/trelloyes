import React from 'react';
import List from './List'
import './App.css'
//import STORE from './index'
function App(props) {
  const lists = props.lists.map(list=>({
    ...list,
    key: list.id,
    cards:list.cardIds.map(id=>props.allCards[id])
  }))
  console.log(lists)
  return (
    
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-List">
        {lists.map(list=><List {...list}/>)}
      </div>
      
    </main>
  );
}

export default App;
