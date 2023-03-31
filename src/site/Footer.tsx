import { type } from "os";
import React from "react";

type FooterPropsType={
    titleFooter: string
}

export const Footer=(props: FooterPropsType)=>{
    return(
        <div>{props.titleFooter}</div>
    )
}