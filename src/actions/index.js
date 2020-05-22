//actionとはJavaScrioptのオブジェクトである
//typeというkeyとtypeに対応する値を持つ、またtypeはユニークでなければならない

//複数の場所で使われる定義は一箇所でしっかり定義する
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const increment = () => ({
    type: INCREMENT
})

export const decrement = () => ({
    type: DECREMENT
})