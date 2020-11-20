import React, {useReducer} from 'react'
import counterReducer from './CounterReducer'


const Child2 = () =>{

    let [state, dispatch] = useReducer(counterReducer, 1)
    console.log(state);
    return(
        <div className="">
            <h3>Value : {state}</h3>
            <button onClick = {() => dispatch('INCREMENT')}>INCREMENT</button>
        </div>
    );
}

export default Child2;