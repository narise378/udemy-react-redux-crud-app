import React from 'react';

const App = () => {
  const profiles = [
    {name: "Nari", age: 32},
    {name: "Sae", age: 25},
    {name: "Nan"}
  ]
  return (
  <div>
    {
      profiles.map((profiles, index) => {
        return <User name={profiles.name} age={profiles.age} key={index}/>
      })
    }
  </div>
  )
}
const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old !</div>
}

User.defaultProps = {
  age: 1
}
export default App;
