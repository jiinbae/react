import React, { useCallback } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

// const CounterContainer = ({ number, increase, decrease }) => {
//   return (
//   <Counter number={number} onIncrease={increase} onDecrease={decrease} />
//   );
// };

const CounterContainer = () => {
  const number = useSelector(state => state.counter.number);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default React.memo(CounterContainer);

// const mapStateToProps = state => ({
//     number: state.counter.number,
// });

// const mapDispatchToProps = dispatch => ({
//     increase: () => {
//         dispatch(increase());
//     },
//     decrease: () => {
//         dispatch(decrease());
//     },
// });

// export default connect(
//     state => ({
//       number: state.counter.number,
//     }),
//     dispatch =>
//       bindActionCreators(
//         {
//           increase,
//           decrease,
//         },
//         dispatch,
//       ),
// )(CounterContainer);

// export default connect(
//     state => ({
//       number: state.counter.number,
//     }),
//     { // 객체 형태로 넣어주면 connect 함수가 내부적으로 bindActionCreators 작업해준다.
//       increase,
//       decrease,
//     },
//   )(CounterContainer);