import React from 'react';
import Categories from '../components/Categories';
import Countries from '../components/Countries';
import NewsList from '../components/NewsList';
 
const NewsPage = ({ match, location }) => {
  const country = match.params || 'kr';
  const category = location.params || 'all';
  console.log(match.params);
  return (
    <>
      <Countries />
      <Categories />
      <NewsList country ={country} category={category} />
    </>
  );
};
 
export default NewsPage;