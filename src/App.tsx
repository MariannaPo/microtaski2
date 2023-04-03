import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './site/Header';
import { Body } from './site/Body';
import { Footer } from './site/Footer';
import { NewComponent } from './site/NewComponent';
import { ButtonChanel } from './site/ButtonChanel';



// const students=[
//   {id: 1, name: 'jriofj', age: 23},
//   {id: 2, name: 'jfrdegvwewrfj', age: 26},
//   {id: 3, name: 'l;a;ofj', age: 33},
//   {id: 4, name: 'hyew3yfj', age: 12},
//   {id: 5, name: 'jrfrjeifjre', age: 43},
//   {id: 1, name: 'jriofj', age: 23},
//   {id: 2, name: 'jfrdegvwewrfj', age: 26},
//   {id: 3, name: 'l;a;ofj', age: 33},
//   {id: 4, name: 'hyew3yfj', age: 12},
//   {id: 5, name: 'jrfrjeifjre', age: 43},
// ]

// const topCars = [
//   {manufacturer:'BMW', model:'m5cs'},
//   {manufacturer:'Mercedes', model:'e63s'},
//   {manufacturer:'Audi', model:'rs6'}
// ]

function App() {

  // const dj=(subscriber: string,age:number)=>{
  //   console.log(subscriber, age);
  // }

  // const ds=(subscriber:string, age: number, address: string)=>{
  //   console.log(subscriber, age, address);
  // }

  // const stb=()=>{
  //   console.log('Im stupid button');
    
  // }
  
  let[a, setA]=useState(1)
  
  const plusOne=()=>{
    setA(++a);
  }
  const zero=()=>{
    setA(0)
  }

  return (
    <div className="App">
    {/* <Header title={'BIG HEADER, WERY BIG'}/>
    <Body titleBody={'NEW BIG BODY'}/>
    <Footer titleFooter={'NEW WERY BIG FOOTER'}/> */}
    {/* <NewComponent students={students} cars={topCars}/> */}
    {/* <ButtonChanel name={'GovnoChanel'} follower={()=>dj('Grisha', 45)}/>
    <ButtonChanel name={'DermoChanel'} follower={()=>ds('Vitek', 76, 'Ostryaki')}/>
    <ButtonChanel name={'ProstoButton'} follower={stb}/> */}
    <h1>{a}</h1>
    <button onClick={plusOne}>Clicker</button>
    <button onClick={zero}>0</button>
    </div>
  );
}

export default App;
