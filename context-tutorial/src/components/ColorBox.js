import React, { useContext } from 'react';
import ColorConsumer from '../contexts/color';
import ColorContext from '../contexts/color';
 
const ColorBox = () => { // 색상을 props로 받아 오는 것이 아니라 ColorContext 안에 들어 있는 Consumer라는 컴포넌트를 통해 색상 조회.
    const { state } = useContext(ColorContext);
    return (
        <>
            <div
                style={{
                width: '64px',
                height: '64px',
                background: state.color
          }}
        />
        <div
            style={{
                width: '32px',
                height: '32px',
                background: state.subcolor
            }}
            />
        </>
  );
};
 
export default ColorBox;