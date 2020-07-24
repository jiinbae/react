import React, { createContext, useState } from 'react';
 
const ColorContext = createContext({
  state: { color: 'black', subcolor: 'red' },
  actions: {
    setColor: () => {},
    setSubcolor: () => {}
  }
});


const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('black');
  const [subcolor, setSubcolor] = useState('red');
 
  const value = {
    state: { color, subcolor }, // value에는 상태는 state로, 업데이트 함수는 actions로 묶어서 전달.
    actions: { setColor, setSubcolor }
  };
  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};
 
const { Consumer: ColorConsumer } = ColorContext;
 
export { ColorProvider, ColorConsumer };
 
export default ColorContext;