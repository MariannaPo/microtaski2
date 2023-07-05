import { log } from "console";
import React, { ChangeEventHandler, useState } from "react";

type FullInputPropsType = {
    addMessage:(title: string)=> void
}

export const Fullinput=(props: FullInputPropsType)=>{
    let[title, setTitle]= useState('');
   
    const onChangeInputHandler = (event: any)=>{
        setTitle(event.currentTarget.value);
    }

    const onClickHandler=()=>{
        props.addMessage(title)
    }
    return(
         <div>
      <input onChange={onChangeInputHandler}/>
      <button onClick={onClickHandler}>+</button>
    </div>
    )
   
}