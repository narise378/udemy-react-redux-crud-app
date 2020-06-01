import _ from 'lodash'
import { CREATE_EVENT, READ_EVENTS, READ_EVENT, UPDATE_EVENT, DELETE_EVENT, } from '../actions';

export default (events = {}, action) => {
    switch (action.type) {
        case CREATE_EVENT:
        case READ_EVENT:
        case UPDATE_EVENT:
            const data = action.response.data
            //{id: 5, title: "Let's have an event 5!", body: "This is the body for event 5."}
            return { ...events, [data.id]: data }
        case READ_EVENTS:
            // IDで抽出したものをkeyにして再配置するそれを１つのオブジェクトに書き換える
            return _.mapKeys(action.response.data, 'id')
        case DELETE_EVENT:
            delete events[action.id]
            return { ...events }
        default:
            return events
    }
}