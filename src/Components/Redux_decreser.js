import React from 'react'
import { useDispatch,useSelector } from "react-redux";
import { byCake } from "../Redux/Cake/cakeAction";

export  function Reduxdecreser() {
    const numOfCakes= useSelector(state=>state.numOfCakes)
    const dispatch= useDispatch()
    return (
        <div>
            <h1>num of cakes - {numOfCakes} </h1>
            <button onClick={()=> dispatch(byCake())}>less by 1</button>
        </div>
    )
}
