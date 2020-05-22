import React, { Component } from 'react';

const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor (props) { //コンストラクターはコンポーネントの初期化（インスタンス）の時にコールされる処理
    super(props)
    this.state = { count: 0 } //stateにcountをセットする
  }

  handlePlusButton = () => {
    //状態を変える際は必ずsetStateを仕込む
    this.setState({ count: this.state.count + 1 }) //setStateが実行されるとrenderが再コールされる
  }

  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1 })
  }

  render () {
    return (
      <React.Fragment>
        <div>count: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}

export default App;
