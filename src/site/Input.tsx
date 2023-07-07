import { title } from "process";
import React from "react";

type InputPropsType={
    setTitle: (title: string)=>void,
    title: string
}


export const Input=(props: InputPropsType)=>{

    const onChangeInputHandler = (event: any)=>{
        props.setTitle(event.currentTarget.value);
    }

    return (
            <input value={title} onChange={onChangeInputHandler}/>
    )
}