import { Dispatch, SetStateAction, useCallback, useEffect, useRef } from 'react'

interface functionProps {
        valueA: number
        setValueB: Dispatch<SetStateAction<number>>
    }

const useWIthRef = ({valueA, setValueB} : functionProps) => {
    const handleValue = useCallback(() => {
        const value2 = Math.round(Math.random() * 1000)
        let calculated
        if(value2 >= valueA){
            calculated = value2 - valueA
        } else {
            calculated = valueA - value2
        }
        setValueB(calculated)        
    }, [setValueB, valueA])

    const handleValueRef = useRef(handleValue)

    useEffect(() => {
        handleValueRef.current = handleValue
    }, [handleValue])

    useEffect(() => {
    const handleValueCurrent = handleValueRef.current
    const id = setInterval(handleValueCurrent, 2000);
    return () => clearInterval(id);
  }, []) //最初のrenderの時のみ実行される
}

export default useWIthRef