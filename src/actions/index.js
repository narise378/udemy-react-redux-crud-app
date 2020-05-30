import axios from 'axios' //httpリクエストを送る便利なライブラリ
export const READ_EVENTS = 'READ_EVENTS' // アクションを定義

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

export const readEvents = () => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
    console.log(response)
    dispatch ({ type: READ_EVENTS, response })
}