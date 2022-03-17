import { Dispatch, useEffect } from 'react'

interface functionProps {
        dispatch: Dispatch<any>
    }

const useWithReducer = ({dispatch} : functionProps) => {
    useEffect(() => {
    const id = setInterval(() => dispatch({type: "B"}), 1000);
    return () => clearInterval(id);
  }, [dispatch]) //最初のrenderの時のみ実行される
}

export default useWithReducer