import React, { useState } from 'react'
import PageComponent from '../Components/PageComponent'
import useWithRef from '../utils/useWithRef'

const Home = () => {
    const [valueA, setValueA] = useState(337)
    const [valueB, setValueB] = useState(2022)
    const handleOnClick = () => {
        const value = Math.round(Math.random() * 1000)
        setValueA(value)
    }  
    useWithRef({valueA, setValueB})

  return (
    <PageComponent 
        valueA={valueA} 
        valueB={valueB} 
        handleOnClick={handleOnClick} 
        type="ref"/>
  )
}

export default Home