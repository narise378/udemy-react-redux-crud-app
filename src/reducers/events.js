import _ from 'lodash'
import { READ_EVENTS } from '../actions';

export default (events = {}, action) => {
    switch (action.type) {
        case READ_EVENTS:
            // IDで抽出したものをkeyにして再配置するそれを１つのオブジェクトに書き換える
            return _.mapKeys(action.response.data, 'id')
        default:
            return events
    }
}