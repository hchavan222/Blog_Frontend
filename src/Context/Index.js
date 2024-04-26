import {createContext, useState } from "react";


export const ContextData = createContext(null);



export default function GlobalData ({children}){

  const [data , setdata] = useState(
    {
      name : "",
      description : "",
    }
  )

  const [list , setlist] = useState()
  const[pen , setpen] = useState(true)
  const[edit , isedit] = useState(false)


  
  return (
    <ContextData.Provider value={{data , setdata , list , setlist , pen , setpen , edit , isedit}}>
        {children}
    </ContextData.Provider>
  )
}

