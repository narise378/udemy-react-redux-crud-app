import React, { Component } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash'

import { readEvents } from '../actions'

class EventsIndex extends Component {
  componentDidMount() { // コンポーネントがマウント時に実行されるコールバックメソッド
    this.props.readEvents() // 外部のAPIサーバーからリクエストしてイベント一覧を取得する
  }

  renderEvents() {
    // 繰り返しの処理をlodashにてマッピング
    return _.map(this.props.events, event => ( //propsしたeventsをeventとして拾って回す
      <tr key={event.id}>
        <td>{ event.id }</td>
        <td>{ event.title }</td>
        <td>{ event.body }</td>
      </tr>
    ))
  }

  render () {
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>

        <tbody>
          { this.renderEvents() }
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = state => ({ events: state.events }) //eventsをkeyにしてstateのeventsを拾ってくる

const mapDispatchToProps = ({ readEvents }) // readEventsをマッピング

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
