import React from 'react';
import CounterContainer from './containers/CounterContainer';
import TodosCotainer from './containers/TodosContainer';

const App = () => {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodosCotainer />
    </div>
  );
};

export default App;