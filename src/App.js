import React from 'react';

// class App extends Component { クラスコンポーネントはインポートに{ Component }を記述する
//  render() {
//   return (
//     //divで囲う必要があるが、不要なdivを排除するためには React.Fragment がでいける
//     <React.Fragment>
//       <label htmlFor="bar">bar </label>
//       <input type="text" onChange={() => {console.log("Click!!")}}/>
//     </React.Fragment>
//   )
//  }
// }

const App = () => {
  return (
  <div>
    関数コンポーネント
    <Cat />
  </div>
  )
}
const Cat = () => {
  return <div>にゃー</div>
}
export default App;
