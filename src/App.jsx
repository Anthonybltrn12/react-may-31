import { useState } from 'react'
import { puppyList } from './data'
import './App.css'


function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)
  //  console.log(featPupId)
  //  console.log(puppies)
   {()=>{console.log("puppy id: ", puppy.id)}}

  function clickEvent(){
    let idElement = document.createElement('section')
    idElement.addEventListener('click', event =>{
      idElement.innerText = `${featPupId}`
    })
  }
  {()=>{console.log("puppy id: ", puppy.id)}}
  return (
    
      <div className='App'>
        
        {puppies.map((puppy) => {
          return (<p onClick ={clickEvent()} key = {puppy.id}>{puppy.name}</p>
          );
        })}
      </div>
    
    
  )
}

export default App
