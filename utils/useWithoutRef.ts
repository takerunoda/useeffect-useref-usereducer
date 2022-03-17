import { Dispatch, SetStateAction, useCallback, useEffect } from 'react'

interface functionProps {
        valueA: number
        setValueB: Dispatch<SetStateAction<number>>
    }

const useWithoutRef = ({valueA, setValueB} : functionProps) => {
    const handleValue = useCallback(() => {
        const value2 = Math.round(Math.random() * 1000)
        let calculated = value2 - valueA
        if(calculated < 0) calculated = calculated * -1
        setValueB(calculated)        
    }, [setValueB, valueA])

    useEffect(() => {
    const id = setInterval(handleValue, 1000);
    return () => clearInterval(id);
  }, [handleValue]) //valueAが変更される度に中断される
}

export default useWithoutRef