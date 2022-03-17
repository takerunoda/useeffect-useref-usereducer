import React, { useReducer } from 'react'
import PageComponent from '../Components/PageComponent'
import useWithReducer from '../utils/useWithReducer'

const Reducer = () => {
    const initialState = { 
            valueA: 337,
            valueB: 2022
          }
    const reducer = (
      state: {valueA: number, valueB: number}, 
      action: {type: string, payload: number}) => {
      const {type, payload} = action
      const {valueA, valueB} = state
      switch(type) {
        case "A_ONLY":
          const objectA = {...state, valueA: payload}
          return objectA
        case "B":
        const value2 = Math.round(Math.random() * 1000)
        let calculated = value2 - valueA
        if(calculated < 0) calculated = calculated * -1
        const objectB = {...state, valueB: calculated}
          return objectB
        default:
          return state
      }
    }
    const [{valueA, valueB}, dispatch] = useReducer(reducer, initialState)
    const handleOnClick = () => {
        const value = Math.round(Math.random() * 1000)
        dispatch({type:"A_ONLY", payload: value})
    }  
    useWithReducer({dispatch})

  return (
    <PageComponent 
        valueA={valueA} 
        valueB={valueB} 
        handleOnClick={handleOnClick} 
        type="reducer"/>
  )
}

export default Reducer