import React, { useState } from 'react'
import PageComponent from '../Components/PageComponent'
import useWithoutRef from '../utils/useWithoutRef'

const Without = () => {
    const [valueA, setValueA] = useState(337)
    const [valueB, setValueB] = useState(2022)
    const handleOnClick = () => {
        const value = Math.round(Math.random() * 1000)
        setValueA(value)
    }  
    useWithoutRef({valueA, setValueB})

  return (
    <PageComponent 
        valueA={valueA} 
        valueB={valueB} 
        handleOnClick={handleOnClick} 
        type="without"/>

  )
}

export default Without