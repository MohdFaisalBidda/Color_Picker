



import './index.css'

import {useState} from "react"

import Values from "values.js"

import SingleColor from "./SingleColor.jsx"

export default function App() {

  const [color,setColor]=useState("#f15025")

  const [error,setError]=useState("")

  const [list,setList]=useState(new Values("#f15025").all(10))

  

const handleSubmit =(e)=>{

  e.preventDefault();

  try {

    let colors =new Values(color).all(10);

    setList(colors);

  } catch (error) {

    setError(true);

    console.log(error);

  }

}

  

  return (

    <>

    <section className="container">

      <h3>Color Generator</h3>

      <form onSubmit={handleSubmit}>

        <input 

          type="text" 

          onChange={e=> setColor(e.target.value)}

          value={color}

          placeholder="#f15025"

          className={`${error ? 'error' : null}`}

        />

      <button className="btn" type="submit">submit</button>

      </form>

    </section>

            

    <section className="colors">

      {list.map((color,index)=>{ 

        

        return <SingleColor key={index} {...color} index={index} hexColor={color.hex}/>   

    })}

    </section>

    </>

  )

}
