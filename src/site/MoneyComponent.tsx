import { type } from "os";
import React from "react";
import { useState } from "react";
import { FilterType } from "../App";

type MoneyComponentPropsType={
    money:MoneyType[]
}


type MoneyType={
    banknots: string,
    value: number,
    number: string
}



const MoneyComponent=(props: MoneyComponentPropsType)=>{

const [filter, setFilter] =useState<FilterType>('all')
  
let filteredMoney = props.money;

if(filter === 'Dollars'){
  filteredMoney= props.money.filter((el: MoneyType)=> el.banknots==='Dollars')
  
}
if(filter === "RUBLS"){
 filteredMoney = props.money.filter((el: MoneyType)=> el.banknots==='RUBLS')   
}

let onClickFilterHandler=(name: FilterType)=>{
  setFilter(name)
}

            return(
    <div>
         <ul>
      {filteredMoney.map((obj: MoneyType, index:number)=>{
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
        </div>
    </div>
   
)
}
export default MoneyComponent;