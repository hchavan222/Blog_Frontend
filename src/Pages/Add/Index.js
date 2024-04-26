import React, { useContext, useEffect } from 'react'
import classes from "./styles.module.css"
import { ContextData } from '../../Context/Index'
import axios from "axios"
import { useNavigate , useLocation } from 'react-router-dom'

const Add = () => {

  const nav = useNavigate()
  const loc = useLocation()

  const { data , setdata , edit , isedit} = useContext(ContextData)

  async function saveToDatabase(){

    const res = edit ? await axios.put(`https://blog-yzik.onrender.com/api/blog/update/${loc.state.curr._id}` , {name : data.name , description : data.description})
    : await axios.post("https://blog-yzik.onrender.com/api/blog/add" , {
      name: data.name ,
      description : data.description
    })

    const result = await res.data

    

    if(result){
      isedit(false)
      setdata({
        name: "" , 
        description: ""
      })

      nav("/")
    }

  } 

  useEffect(()=>{
    // console.log(loc)

    if(loc.state){
      const {curr} = loc.state
      isedit(true)

      setdata({
        name: curr.name , 
        description : curr.description
      })
    }
  } , [loc])

  

  return (
    <div className={classes.wrap}>
      <h3>{edit ? 'EDIT A BLOG' : 'ADD A BLOG' }</h3>
      <div className={classes.formwrap}>
        <input type='text' placeholder='Enter the Title' id='name' value={data.name} onChange={(e)=>{
          setdata({
            ...data , name: e.target.value
          })
        }}/>
        <textarea style={{height:"200px"}} name='description ' placeholder='Enter the Blog Data' id='description' value={data.description} 
          onChange={(e)=>{
            setdata({
              ...data , description:e.target.value
            })
          }}
        /> 
        <button onClick={
          saveToDatabase
        }>{
          edit ? 'EDIT A BLOG ' : ' ADD NEW BLOG '
        }</button>
      </div>
    </div>
  )
}

export default Add