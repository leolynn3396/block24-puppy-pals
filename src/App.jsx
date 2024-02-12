import './App.css'
import { puppyList } from './data.js'  //importing puppyList from data.js file
import { useState } from 'react' //the useState hook reacts to changes in teh data of yoru app

function App() {
  const [puppies, setPuppies] = useState(puppyList); //invoking the useState hook at the top level, before 'return' statement. 
  //useState returns an array that contains two elements. 
  //The first is the value that you are storing. The second is a function, which you can use to reset the value. 
  //puppyList is passed as a default value to useState hook
  console.log(puppies);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup) => pup.id === featPupId)
  console.log(featuredPup);

  function handleClick(puppy) {  // updating whatever pupId was clicked by calling setFeatPupid on line 17. This function is used on line23 with onClick
    console.log("puppy id: ", puppy.id);
    setFeatPupId(puppy.id);
  }
  return (
    <div className='App'>
      {
        puppies.map((puppy) => {
          return <p onClick={() => handleClick(puppy)} key={puppy.id}>{puppy.name}</p>  //see handleCliek fucntion on line 15
        })
      }
      {featPupId && <div>
        <h2>{featuredPup.name}</h2>
        <ul>
          <li>Age: {featuredPup.age}</li>
          <li>Email: {featuredPup.email}</li>
        </ul>
      </div>}
    </div>
  )
}

export default App