import React, {useState, useEffect} from 'react'
import data from "../json/data.json"
// import Skills from './skills'
const Projects = () => {
 
  const[toogle, setToogle] = useState(false)
 const [id, setId] = useState("")

 useEffect(() => {
  
 })
  const handleClick = (e) => {
    if (!toogle) {
      setToogle(!toogle)
      setId(e - 1)
      console.log(id)
      console.log(data.projects[e - 1])
      return
    }
  }
  const close = () => {
    setToogle(false)
    setId("")
  }
  return (
    <main id="projects">
        <h2  id={id}>Projects</h2>
<section>
{data.projects.map((item) => (
  <div  key={item.id}>
    <img src={item.img} alt="projImg" />
    <h2 >{item.title}</h2>
    <p>{item.description}</p>
    <a href={`#${id}`} onClick={()=> handleClick(item.id)} className='btn'>View</a>
    </div>

  
))}

</section>

{ 
toogle && id !== "" &&
<>
<div   className='sourceCode'>
  <ul>
  <li>{data?.projects[id]?.title}</li><br />
<li ><a target="_blank" rel="noreferrer" href={data?.projects[id]?.frontendSourceCode} >Frontend Source Code</a></li><br />
<li><a target="_blank" rel="noreferrer" href={data?.projects[id]?.backendSourceCode}>Backend Source Code</a></li><br />
<li><a target="_blank" rel="noreferrer" href={data?.projects[id]?.frontendDeployed}>Frontend Deployed</a></li><br />
<li><a target="_blank" rel="noreferrer" href={data?.projects[id]?.backendDeployed}>Backend Deployed</a></li><br />

<button onClick={close} >Close</button>
</ul>
</div>
</>
}

</main>  

  )
}

export default Projects