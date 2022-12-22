 import { useCallback, useState } from "react";
 export const useToggle = (initialState: boolean = false): [boolean, any,any] => {
    const [state, setState] = useState<boolean>(initialState);
    const toggle = useCallback((): void =>{
        console.log('toggle') 
        setState(state => !state)
    }, []);
    const resetToggleToFalse = useCallback((): void =>{
        console.log('toggle to false') 
        setState(state => false)
    }, []);
    return [state, toggle,resetToggleToFalse]
}


