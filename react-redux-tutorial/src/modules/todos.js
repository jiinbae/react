import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

export const changeInput = createAction(CHANGE_INPUT, (input) => input);

let id = 3;
export const insert = createAction(INSERT, (text) => ({
  // todo 객체를 액션 객체 안에 넣어 주어야 하기 때문에 두 번째 파라미터에 text를 넣으면 todo 객체가 반환되는 함수 삽입.
  id: id++,
  text,
  done: false,
}));

export const toggle = createAction(TOGGLE, (id) => id);
export const remove = createAction(REMOVE, (id) => id);

// export const changeInput = input => ({
//     type: CHANGE_INPUT,
//     input
//   });

// let id = 3;
// export const insert = text => ({
//     type: INSERT,
//     todo: {
//         id: id++,  // 파라미터 외에 사전에 이미 선언되어 있는 id 값에도 의존.
//         text,
//         done: false
//     }
// });

// export const toggle = id => ({
//     type: TOGGLE,
//     id
// })

// export const remove = id => ({
//     type: REMOVE,
//     id
// });

const initialState = {
    input: '',
    todos: [
      {
        id: 1,
        text: '리덕스 기초 배우기',
        done: true
      },
      {
        id: 2,
        text: '리액트와 리덕스 사용하기',
        done: false
      }
    ]
};

// function todos(state = initialState, action) {
//     switch (action.type) {
//       case CHANGE_INPUT:
//         return {
//           ...state,
//           input: action.input
//         };
//       case INSERT:
//         return {
//           ...state,
//           todos: state.todos.concat(action.todo)
//         };
//       case TOGGLE:
//         return {
//           ...state,
//           todos: state.todos.map(todo =>
//             todo.id === action.id ? { ...todo, done: !todo.done } : todo
//           )
//         };
//       case REMOVE:
//         return {
//           ...state,
//           todos: state.todos.filter(todo => todo.id !== action.id)
//         };
//       default:
//         return state;
//     }
// }

const todos = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: input }) =>
      // ({ ...state, input }),
      produce(state, (draft) => {
        draft.input = input;
      }),
    [INSERT]: (state, { payload: todo }) =>
      // ...state,
      // todos: state.todos.concat(todo),
      produce(state, (draft) => {
        draft.todos.push(todo);
      }),
    [TOGGLE]: (state, { payload: id }) =>
      // ...state,
      // todos: state.todos.map(todo =>
      //   todo.id === id ? { ...todo, done: !todo.done } : todo,
      produce(state, (draft) => {
        const todo = draft.todos.find((todo) => todo.id === id);
        todo.done = !todo.done;
      }),
    [REMOVE]: (state, action) => {
      console.log(action.payload);
      return({
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      });
    },
  },
  initialState,
);

export default todos;
