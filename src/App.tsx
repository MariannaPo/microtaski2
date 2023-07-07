import React, { useState } from 'react';
import './App.css';
import { Input } from './site/Input';
import { Button } from './site/Button';
export type FilterType = 'all' | 'Dollars' | 'RUBLS'



function App() {
  let [message, setMessage] = useState([
    {message: 'message1'},
    {message: 'message2'},
    {message: 'message3'},
])

let [title, setTitle]=useState('')

const addMessage=(title: string)=>{
 let newMessage = {message: title};
 setMessage([newMessage, ...message])
}

//  const [money, setMoney] = useState([
//     { banknots: 'Dollars', value: 100, number: ' a1234567890 ' },
//     { banknots: 'Dollars', value: 50, number: ' z1234567890 ' },
//     { banknots: 'RUBLS', value: 100, number: ' w1234567890 ' },
//     { banknots: 'Dollars', value: 100, number: ' e1234567890 ' },
//     { banknots: 'Dollars', value: 50, number: ' c1234567890 ' },
//     { banknots: 'RUBLS', value: 100, number: ' r1234567890  ' },
//     { banknots: 'Dollars', value: 50, number: ' x1234567890 ' },
//     { banknots: 'RUBLS', value: 50, number: ' v1234567890 ' },
//   ])            

  // const [filter, setFilter] =useState<FilterType>('all')
  
  // let filteredMoney = money;

  //   if(filter === 'Dollars'){
  //   filteredMoney = money.filter((el)=> el.banknots==='Dollars')
    
  // }
  // if(filter === "RUBLS"){
  //  filteredMoney = money.filter((el)=> el.banknots==='RUBLS')   
  // }
 
  // let onClickFilterHandler=(name: FilterType)=>{
  //   setFilter(name)
  // }

const callBackButtonHandler=()=>{
  addMessage(title);
  setTitle('')
}

 return (
    <div className="App"> 
    <Input setTitle={setTitle} title={title}/>
    <Button name='save' callback={callBackButtonHandler}/>
    {message.map((el)=>{
    return (
      <div>{el.message}</div>
    )})}
    {/* <div>
      <input/>
      <button>+</button>
    </div> */}
    {/* <Fullinput addMessage={addMessage}/>
    {message.map((el)=> {
      return(
        <div>{el.message}</div>
      )
    })} */}
   
    {/* <MoneyComponent money={money} /> */}
    {/* <ul>
      {filteredMoney.map((obj, index:number)=>{
        return(
        <li key={index}>
          <span>{obj.banknots}</span>
          <span>{obj.number}</span>
          <span>{obj.value}</span>
      </li>
      )})} 
    </ul>
        <div style={{marginLeft:'40px'}}>
          <button onClick={()=>onClickFilterHandler('all')}>all</button>
          <button onClick={()=>onClickFilterHandler('Dollars')}>Dollars</button>
          <button onClick={()=>onClickFilterHandler('RUBLS')}>RUBLS</button>
        </div> */}

    </div>
  );
}

export default App;
