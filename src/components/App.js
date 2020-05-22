import React, { Component } from 'react';
import { connect } from 'react-redux' //connect関数をインポート

import { increment, decrement } from '../actions' //actioncreatarをインポート

class App extends Component {
  //reduxのreducerでconstructorの初期化の働きを実行している
  //actioncreaterで処理の名称を確保してreducer内の適切な状態変化を呼び出す事でメソッドする
  render () {
    const props = this.props //インスタンスのprops

    return (
      <React.Fragment>
        <div>value: { props.value }</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    )
  }
}

//stateの情報からこのコンポーネントに必要なものを取り出してコンポーネント内のpropsにマッピングする
const mapStateToProps = state => ({ value: state.count.value })

//あるアクションが発生した時にreducerにタイプに応じた状態遷移を実行させるための関数
// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })
//以下のように短く書ける
const mapDispatchToProps = ({ increment, decrement})

//stateとactionをコンポーネントに関連づける
export default connect(mapStateToProps, mapDispatchToProps)(App)
