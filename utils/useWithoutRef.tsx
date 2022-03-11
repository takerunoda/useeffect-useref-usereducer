import { Dispatch, SetStateAction, useCallback, useEffect } from 'react'

interface functionProps {
        valueA: number
        setValueB: Dispatch<SetStateAction<number>>
    }

const useWithoutRef = ({valueA, setValueB} : functionProps) => {
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

    useEffect(() => {
    const id = setInterval(handleValue, 2000);
    return () => clearInterval(id);
  }, [handleValue]) //valueAが変更される度に中断される
}

export default useWithoutRef