import React from 'react';

const App = () => {
  const profiles = [ //配列でオブジェクトを作る
    {name: "Nari", age: 32},
    {name: "Sae", age: 25},
    {name: "Nan"}
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

User.defaultProps = { //プロパティに値が指定されていないオブジェクトがあればデフォルト値をいれれる
  age: 1
}
export default App;
