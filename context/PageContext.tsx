import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useMemo, useState } from "react"
import { initialLanuageFn } from "../utils/initialLanuageFn"
// import { initialLanuageFn } from "../utils/initialLanuageFn";

export interface ChildrenProps {
        children: ReactNode
}

type PageContextType = {
  language: boolean
  setLanguage: Dispatch<SetStateAction<boolean>>
  browserLanguage: boolean
  setBrowserLanguage: Dispatch<SetStateAction<boolean>>
}
const PageContext = createContext<PageContextType | undefined>(undefined)

export function PageWrapper({ children } : ChildrenProps ) {
  const [browserLanguage, setBrowserLanguage] = useState<boolean>(false)
  const [language, setLanguage] = useState<boolean>(initialLanuageFn());  

  const pageValue = useMemo(() => ({
        language, setLanguage,
        browserLanguage, setBrowserLanguage,
    }), [
        language, setLanguage,
        browserLanguage, setBrowserLanguage,
    ])

  return (
    <PageContext.Provider value={pageValue}>
      {children}
    </PageContext.Provider>
  );
}

export function usePageContext() {
    const context = useContext(PageContext)
        if (context === undefined) {
            throw new Error('useContext(PageContext) is undefined')
        }
        return context
}
