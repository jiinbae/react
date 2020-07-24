import React, { useState, Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import loadable from '@loadable/component';
// import notify from './notify';

const SplitMe = React.lazy(() => import('./SplitMe'), {
  fallback: <div>loading...</div>
});

// function App() {
//   const onClick = () => {
//     import('./notify').then(result => result.default());
//   };
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p onClick={onClick}>Hello React!</p>
//       </header>
//     </div>
//   );
// }

// class App extends Component {
//   state = {
//     SplitMe: null
//   };
//   handleClick = async () => {
//     const loadedModule = await import('./SplitMe');
//     this.setState({
//       SplitMe: loadedModule.default
//     });
//   };
//   render() {
//     const { SplitMe } = this.state;
//     return (
//       <div className="APP">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p onClick={this.handleClick}>Hello React!</p>
//           {SplitMe && <SplitMe />}
//         </header>
//       </div>
//     )
//   }
// }

function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };
  const onMouseOver = () => {
    SplitMe.preload();
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick} onMouseOver={onMouseOver}>
          Hello React!
        </p>
        {/* <Suspense fallback={<div>loading...</div>}> */}
          {visible && <SplitMe />}
        {/* </Suspense> */}
      </header>
    </div>
  );
}
export default App;
