import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import Categories from './Categories';

// 국가 변경하기
const countries = [
    {
      name: 'us',
      text: '미국'
    },
    {
      name: 'cn',
      text: '중국'
    },
    {
      name: 'jp',
      text: '일본'
    },
    {
      name: 'kr',
      text: '한국'
    }
];


const CountriesBlock = styled.div`
    display: flex;
    padding: 1rem;
    width: 758px;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
        width:100%;
        overflow-x: auto;
    }
`;
 
const Country = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;
  &:hover {
    color: #495057;
  }
  &.active {
    font-weight: 600;
    border-bottom: 2px solid #22b8cf;
    color: #22b8cf;
    &:hover {
      color: #3bc9db;
    }
  }
  & + & {
    margin-left: 1rem;
  }
`;

// const Categories = ({ onSelect, category }) => {
//   return (
//     <CategoriesBlock>
//       {categories.map(c => (
//         <Category
//           key={c.name}
//           active={category === c.name}
//           onClick={() => onSelect(c.name)}
//         >
//           {c.text}
//         </Category>
//       ))}
//     </CategoriesBlock>
//   );
// };

const Countries = ({ onSelect }) => {
  return (
    <CountriesBlock>
      {countries.map(c => (
        <Country
          key={c.name}
          activeClassName="active"
          exact={c.name === 'kr'}
          to={c.name === 'kr' ? '/kr' : `/${c.name}`}
        >
          {c.text}
        </Country>
      ))}
      <Categories />
    </CountriesBlock>
  );
};

export default Countries;