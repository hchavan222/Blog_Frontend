import React, { useContext, useEffect } from 'react'
import axios from "axios"
import { ContextData } from '../../Context/Index'
import classes from "./styles.module.css"
import {FaEdit , FaTrash} from "react-icons/fa"
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const nav = useNavigate()

  const {list , setlist , pen , setpen} = useContext(ContextData)

  async function getdata(){
    setpen(true)
    const res = await axios.get("https://blog-yzik.onrender.com/api/blog")
    const result = await res.data
    console.log(result)
  

    if(result && result.blogdata && result.blogdata.length){
      setlist(result.blogdata)
      setpen(false)
    }
  }

  async function deleteid(id){

    console.log(id)
    axios.delete(`https://blog-yzik.onrender.com/api/blog/delete/${id}`).then(res=>{
      console.log("Data Deleted")
      getdata()
    }).catch((error)=>{ 
      console.log(error)
    })



   
  }

  function updateID(curr){
    console.log(curr)
    nav("/add" , {state:{curr}})
  }

  useEffect(()=>{
    getdata()
  } , [])
  
  return (
    <div className={classes.wrap}>
    <h1>List of Blogs</h1>
    <br />

    {
      pen ? <h1>Please ADD Blogs</h1> : 
      <div className={classes.list}>
        {
          list.map(i=>
            <div id={i._id}>
            <h3>{i.name}</h3> 
            <p>{i.description}</p>
            <FaEdit onClick = {()=>{updateID(i)}}style={{paddingRight:"15px"}}/>
            <FaTrash onClick={()=>{deleteid(i._id)}}/>
            
            
            
            </div>
          )
        }
      </div>
    }

    </div>
  )
}

export default Home