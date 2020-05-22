import React from 'react';
import PropTypes from 'prop-types'

const App = () => {
  const profiles = [ //配列でオブジェクトを作る
    {name: "Nari", age: 32},
    {name: "Sae", age: 25},
    {name: "Depi", age: 32},
    {naem: "Non", age: 1}
  ]
  return (
  <div>
    {
      profiles.map((profiles, index) => { //引数にprofilesのデータを持たせて、index番号を用いてkeyとして運用しユニークにする
        return <User name={profiles.name} age={profiles.age} key={index}/>
      })
    }
  </div>
  )
}
const User = (props) => { //propsにより親コンポーネントからプロパティを受け取れる
  return <div>Hi, I am {props.name}, and {props.age} years old !</div>
}

User.propTypes = { //型を定義、コンポーネント設計に置いて、ブレない型を指定する事が大規模になるにつれ大事
  name: PropTypes.string,
  age: PropTypes.number.isRequired //ageというデーターが必須になる
}
export default App;
