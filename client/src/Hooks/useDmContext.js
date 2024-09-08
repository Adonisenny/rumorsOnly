import { DmContext } from "../Context/DMContext";
import { useContext } from "react";

export const useDmContext =()=>{
    const theContext = useContext(DmContext);
    if(!theContext){
        throw Error(' it must be used in the right state')
    }
    return theContext
}