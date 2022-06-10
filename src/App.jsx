import React from "react";
import f1 ,{f2,f4,f5} from "./imp&exp";

function Apps(){
    return(
        <ol>
        <li> {f1} </li>
        <li> {f2} </li>
        <li> {f4()} </li>
        <li> {f5()} </li>
        </ol>
    );
}
export default Apps;
