import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './site/Header';
import { Body } from './site/Body';
import { Footer } from './site/Footer';
import { NewComponent } from './site/NewComponent';
import { ButtonChanel } from './site/ButtonChanel';
import { type } from 'os';
import MoneyComponent from './site/MoneyComponent';


export type FilterType = 'all' | 'Dollars' | 'RUBLS'



function App() {

 const [money, setMoney] = useState([
    { banknots: 'Dollars', value: 100, number: ' a1234567890 ' },
    { banknots: 'Dollars', value: 50, number: ' z1234567890 ' },
    { banknots: 'RUBLS', value: 100, number: ' w1234567890 ' },
    { banknots: 'Dollars', value: 100, number: ' e1234567890 ' },
    { banknots: 'Dollars', value: 50, number: ' c1234567890 ' },
    { banknots: 'RUBLS', value: 100, number: ' r1234567890  ' },
    { banknots: 'Dollars', value: 50, number: ' x1234567890 ' },
    { banknots: 'RUBLS', value: 50, number: ' v1234567890 ' },
  ])            

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

 return (
    <div className="App"> 
    <MoneyComponent money={money} />
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
