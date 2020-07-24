import { createAction, handleActions } from 'redux-actions';
import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_ASNC = 'counter/INCREASE_ASNC';
const DECREASE_ASNC = 'counter/DECREASE_ASNC';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
export const increaseAsync = createAction(INCREASE_ASNC, () => undefined);
export const decreaseAsync = createAction(DECREASE_ASNC, () => undefined); // 마우스 클릭 이벤트가 payload 안으로 들어가지 않도록 undefined.

// thunk 함수
// export const increaseAsync = () => dispatch => {
//     setTimeout(() => {
//         dispatch(increase());
//     }, 1000);
// };

// export const decreaseAsync = () => dispatch => {
//     setTimeout(() => {
//         dispatch(decrease());
//     }, 1000);
// };

function* increaseSaga() {
    yield delay(1000);
    yield put(increase());
}

function* decreaseSaga() {
    yield delay(1000);
    yield put(decrease());
}

export function* counterSaga() {
    yield takeEvery(INCREASE_ASNC, increaseSaga); // 들어오는 모든 액션에 대해 특정 작업 처리.
    yield takeLatest(DECREASE_ASNC, decreaseSaga); // 가장 마지막으로 실행된 작업만 수행.
}

const initialState = 0;

const counter = handleActions(
    {
        [INCREASE]: state => state + 1,
        [DECREASE]: state => state - 1
    },
    initialState
);

export default counter;