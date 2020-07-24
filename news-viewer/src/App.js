// 1)
// import React, { useState } from 'react';
// import axios from 'axios';
 
// const App = () => {
//   const [data, setData] = useState(null);
//   const onClick = async() => {
//     try {
//      const response = await axios.get(
//        'https://jsonplaceholder.typicode.com/todos/1',
//       ) // 파라미터로 전달된 주소에 GET 요청. -> .then을 통해 비동기적 확인 가능했지만 aysnc/await 사용하여 필요 X.
//       setData(response.data);
//     } catch (e) {
//       console.log(e);
//     }
//   };
//   return (
//     <div>
//       <div>
//         <button onClick={onClick}>불러오기</button>
//       </div>
//       {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
//     </div>
//   );
// };
 
// export default App;

// 2)
// import React, { useState, useCallback } from 'react';
// import NewsList from './components/NewsList';
// import Categories from './components/Categories';
 
// const App = () => {
//   const [category, setCategory] = useState('all'); // category 상태를 useState로 관리.
//   const onSelect = useCallback(category => setCategory(category), []); // category 값을 업데이트.
 
//   return ( /* props로 category와 onSelect 함수 전달. */
//     <>
//       <Categories category={category} onSelect={onSelect} /> 
//       <NewsList category={category} />
//     </>
//   );
// };
 
// export default App;

// 3)
// import React, { useState } from 'react';
// import axios from 'axios';
 
// const App = () => {
//   const [data, setData] = useState(null);
//   const onClick = async () => {
//     try {
//       const response = await axios.get(
//         'https://newsapi.org/v2/top-headlines?country=kr&apiKey=98d62d0040b94ec8891f124c32da77f4',
//       );
//       setData(response.data);
//     } catch (e) {
//       console.log(e);
//     }
//   };
//   return (
//     <div>
//       <div>
//         <button onClick={onClick}>불러오기</button>
//       </div>
//       {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} />}
//     </div>
//   );
// };
 
// export default App;

// 4)
// import React from 'react';
// import NewsList from './components/NewsList';
// import Categories from './components/Categories';
 
// const App = () => {
//   return (
//     <>
//       <Categories />
//       <NewsList />
//     </>
//   );
// };

// 5)
// import React, { useState, useCallback } from 'react';

// const App = () => {
//   const [category, setCategory] = useState('all');
//   const onSelect = useCallback(category => setCategory(category), []);
 
//   return (
//     <>
//       <Categories category={category} onSelect={onSelect} />
//       <NewsList category={category} />
//     </>
//   );
// };
 
// export default App;


// import React, { useState, useCallback } from 'react';
// import NewsList from './components/NewsList';
// import Categories from './components/Categories';
// import Countries from './components/Countries';
// import { Route } from 'react-router-dom';
// import NewsPage from './pages/NewsPage';
// // import todoList from './todo-app/src/App';
 
// const App = () => {
//   // const [category, setCategory] = useState('all');
//   const [country, setCountry] = useState('kr');
//   // const onSelect1 = useCallback(category => setCategory(category), []);
//   const onSelect2 = useCallback(country => setCountry(country), []);
//   return (
//     <>
//       <Countries country={country} onSelect={onSelect2} />
//       <NewsList country={country} />
//       {/* <Router path="/todoList" component={todoList} /> */}
//     </>
//   );
// };
 
// export default App;

// 최종
import React from 'react';
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';
// import Apps from './todo-app/src/App';
 
const App = () => {
  return (
  <>
  <Route path='/:country?/:category?' component={NewsPage} /> // 현재 선택된 category 값을 URL 파라미터를 통해 사용.
  {/* <Route path='/todoList' component={Apps} /> */}
  </>
  )
};
 
export default App;