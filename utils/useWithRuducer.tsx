import { Dispatch, SetStateAction, useCallback, useEffect, useRef } from 'react'

interface functionProps {
        dispatch: Dispatch<SetStateAction<any>>
    }

const useWithRuducer = ({dispatch} : functionProps) => {
    useEffect(() => {
    const id = setInterval(() => dispatch({type: "B"}), 2000);
    return () => clearInterval(id);
  }, [dispatch]) //最初のrenderの時のみ実行される
}

export default useWithRuducer