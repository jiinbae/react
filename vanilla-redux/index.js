import { createStore } from 'redux';

const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease'); // DOM 레퍼런스 만들기.

const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

const toggleSwitch = () => ({ type: TOGGLE_SWITCH }); // 액션 설정.
const increase = difference => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE })

const initialState = { // 초깃값 설정.
    toggle: false,
    counter: 0
};

function reducer(state = initialState, action) { // 리듀서 함수 정의. 파라미터로는 state, action.
    switch(action.type) {
        case TOGGLE_SWITCH:
            return {
                ...state,
                toggle: !state.toggle
            };
        case INCREASE:
            return {
                ...state,
                counter: state.counter + action.difference
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            };
        default:
            return state;
    }
}

const store = createStore(reducer);

const render = () => { // 함수의 상태가 업데이트될 때마다 호출. 이미 만들어진 UI의 속성을 상태에 따라 변경.
    const state = store.getState();
    if (state.toggle) {
        divToggle.classList.add('active');
    } else {
        divToggle.classList.remove('active');
    }
    counter.innerText = state.counter;
}

render();
store.subscribe(render); // 스토어의 상태가 바뀔 때마다 방금 만든 render 함수가 호출.

divToggle.onclick = () => {
    store.dispatch(toggleSwitch());
};
btnIncrease.onclick = () => {
    store.dispatch(increase(1));
}
btnDecrease.onclick = () => {
    store.dispatch(decrease());
}