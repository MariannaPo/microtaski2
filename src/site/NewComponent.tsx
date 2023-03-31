import { type } from "os";
import React from "react";

type NewComponentPropsType={
    students:Array<StydentType>
    cars:CarsType[]
}
type StydentType={
    id: number, 
    name: string, 
    age: number
}

type CarsType={
    manufacturer:string, 
    model:string
}

export const NewComponent=(props: NewComponentPropsType)=>{
    
    return(
        <div>
            <table>
                
                    {props.cars.map((car: CarsType, index:number )=>{
                        return(
                        <tr>
                            <td>
                                <span> {index} Manufacturer: {car.manufacturer}</span>
                                <span> Model: {car.model}</span>
                               </td> 
                            </tr>
                        )
                    })}
               

            </table>


        <ul>
        {props.students.map((studeArr: StydentType, index: number)=>{
            return(
                <li key={studeArr.id}>
                    <span>eblan: {studeArr.name}</span>
                    <span> age: {studeArr.age}</span>
                    </li>
            )
        })}
   </ul> 
   </div>
   )
    
}