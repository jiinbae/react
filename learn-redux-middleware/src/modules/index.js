import { combineReducers } from 'redux';
import counter, { counterSaga } from './counter';
import sample from './sample';
import loading from './loading';

const rootReducer = combineReducers({
    counter,
    sample,
    loading
  });

export function* rootSaga() { // 다른 리듀서에서 사가 만들어 등록할 것이라서.
  yield all ([counterSaga()]);
}

export default rootReducer;