import { Dispatch, SetStateAction, useCallback, useEffect, useRef } from 'react'

interface functionProps {
        valueA: number
        setValueB: Dispatch<SetStateAction<number>>
    }

const useWithRef = ({valueA, setValueB} : functionProps) => {
    const handleValue = useCallback(() => {
        const value2 = Math.round(Math.random() * 1000)
        let calculated = value2 - valueA
        if(calculated < 0) calculated = calculated * -1
        setValueB(calculated)        
    }, [setValueB, valueA])

    const handleValueRef = useRef(handleValue)

    useEffect(() => {
        handleValueRef.current = handleValue
    }, [handleValue])

    useEffect(() => {
    const handleValueCurrent = handleValueRef.current
    const id = setInterval(handleValueCurrent, 1000);
    return () => clearInterval(id);
  }, []) //最初のrenderの時のみ実行される
}

export default useWithRef