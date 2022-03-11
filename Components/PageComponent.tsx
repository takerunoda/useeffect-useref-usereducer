import Link from 'next/link'
import React from 'react'
import { usePageContext } from '../context/PageContext'
import CreatedFor from './CreatedFor'
import LanguageToggle from './LanguageToggle'

interface ComponentProps{
    valueA: number
    valueB: number
    handleOnClick: () => void
    type: string
}
const PageComponent = ({valueA, valueB, handleOnClick, type} : ComponentProps) => {
    const style = (value: number) => {
        let color: string = ""
        if (value % 3 === 0) color = "text-pink-500"
        if (value % 3 === 1) color = "text-indigo-500"
        if (value % 3 === 2) color = "text-yellow-500"
        const colorCSS = `${color}`
        return colorCSS
    }
    const {language} = usePageContext()
  return (
    <div className="text-center py-16">
        <div className="w-48 mx-auto text-center mb-20">
            <LanguageToggle />
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-center my-5">
            React APP 🚀✨
        </h1>
        <div className="h3 text-purple-500">
        {type === "ref" && `◉ ${language ? "useRefを使うケース" : "with useRef"}`}
        {type === "reducer" && `◉ ${language ? "useReducerを使うケース" : "with useReducer"}`}
        {type === "without" && `◉ ${language ? "useRef / useReducerを使わないケース" : "witout useRef / useReducer"}`}
        </div>
        <div>
            <p className="h3 text-red-500">Value A: {valueA}</p>
            <p className="h3 text-blue-500">Value A % 3 = {valueA % 3}</p>
            <p className={`h3 ${style(valueB)}`}>{`Remainder A = ${valueA % 3} :  Remainder B = ${valueB % 3}`}</p>
            <p className="h3 text-green-500">Value B: {valueB}</p>
            <p className="h3 text-blue-500">Value B % 3 = {valueB % 3}</p>
        </div>
        <button onClick={handleOnClick} className="buttonGreenBigger">
            {language ? "新しい値Aを生成する" : "Generate New ValueA"}
        </button>
        <div className="my-16">
            <div className="h4 text-blue-400 hover:underline">
                ◉<Link href="/" passHref>{language ? "useRefを使うケース" : "Case with useRef"}</Link>
            </div>
            <div className="h4 text-blue-400 hover:underline">
                ◉<Link href="/reducer" passHref>{language ? "useReducerを使うケース" : "Case with useReducer"}</Link>
            </div>
            <div className="h4 text-blue-400 hover:underline">
                ◉<Link href="/without" passHref>{language ? "useRef / useReducerを使わないケース" : "Case witout useRef / useReducer"}</Link>
            </div>
        </div>
        <CreatedFor />
    </div>  )
}

export default PageComponent