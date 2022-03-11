import React, { useReducer } from 'react'
import PageComponent from '../Components/PageComponent'
import useWithRuducer from '../utils/useWithRuducer'

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
        case "A_Only":
          const objectA = {...state, valueA: payload}
          return objectA
        case "B":
        const value2 = Math.round(Math.random() * 1000)
        let calculated
        if(value2 >= valueA){
            calculated = value2 - valueA
        } else {
            calculated = valueA - value2
        }
        const objectB = {...state, valueB: calculated}
          return objectB
        default:
          return state
      }
    }
    const [{valueA, valueB}, dispatch] = useReducer(reducer, initialState)
    const handleOnClick = () => {
        const value = Math.round(Math.random() * 1000)
        dispatch({type:"A_Only", payload: value})
    }  
    useWithRuducer({dispatch})

  return (
    <PageComponent 
        valueA={valueA} 
        valueB={valueB} 
        handleOnClick={handleOnClick} 
        type="reducer"/>
  )
}

export default Reducer