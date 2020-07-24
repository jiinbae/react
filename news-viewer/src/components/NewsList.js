// API를 요청하고 뉴스 데이터가 들어 있는 배열을 컴포넌트 배열로 변환하여 렌더링해 주는 컴포넌트.

// 1)
// import React from 'react';
// import styled from 'styled-components';
// import NewsItem from './NewsItem';

// const NewsListBlock = styled.div`
//   box-sizing: border-box;
//   padding-bottom: 3rem;
//   width: 768px;
//   margin: 0 auto;
//   margin-top: 2rem;
//   @media screen and (max-width: 768px) {
//     width: 100%;
//     padding-left: 1rem;
//     padding-right: 1rem;
//   }
// `;

// const sampleArticle = {
//   title: '제목',
//   description: '내용',
//   url: 'https://google.com',
//   urlToImage: 'https://via.placeholder.com/160',
// };

// const NewsList = () => {
//   return (
//     <NewsListBlock>
//       <NewsItem article={sampleArticle} />
//       <NewsItem article={sampleArticle} />
//       <NewsItem article={sampleArticle} />
//       <NewsItem article={sampleArticle} />
//       <NewsItem article={sampleArticle} />
//       <NewsItem article={sampleArticle} />
//     </NewsListBlock>
//   );
// };

// export default NewsList;

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

// const NewsList = ({ category }) => {
//   const [loading, response, error] = usePromise(() => {
//     const query = category === 'all' ? '' : `&category=${category}`;
//     return axios.get(
//       `https://newsapi.org/v2/top-headlines?country=kr&apiKey=98d62d0040b94ec8891f124c32da77f4`,
//     );
//   }, [category]);

// 2)
// const NewsList = ({ country, category }) => {
//   const [articles, setArticles] = useState(null);
//   const [loading, setLoading] = useState(false);

//   // useEffect 사용하여 컴포넌트가 처음 렌더링되는 시점에 API 요청.
//   // useEffect에서 반환해야 하는 값은 뒷정리 함수이기 때문에 useEffect 내부에서 async/await를 사용하고 싶다면, 함수 내부에 async 키워드가 붙은 또 다른 함수를 만들어서 사용.
//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const query = category === 'all' ? '' : `&category=${category}`; // category 값에 따라 주소가 동적으로 변화. query 요청 시 포함.
//         const countryQuery = country === 'kr' ? '' : `country=${country}`; // 국가 변경하기
//         const response = await axios.get(
//           `https://newsapi.org/v2/top-headlines?${countryQuery}${query}`, // 국가 변경 및 카테고리 변경.
//           {
//             headers: {
//               'x-api-key': '0106e2c7f2e94c57bfb33b63b97f2a60',
//             },
//           },
//         );
//         setArticles(response.data.articles);
//       } catch (e) {
//         console.log(e);
//       }
//       setLoading(false);
//     };
//     fetchData();
//   }, [category, country]); // category, country 값이 바뀔 때마다 뉴스를 새로 불러와야 하기 때문에 두 번째 파라미터에 넣어야 함.

//   if (loading) {
//     return <NewsListBlock>대기 중...</NewsListBlock>;
//   }

//   if (!articles) {
//     return null;
//   }

//   // if (!response) {
//   //   return null;
//   // }
//   // if (error) {
//   //   return <NewsListBlock>에러 발생!</NewsListBlock>;
//   // }

//   // const { articles } = response.data;
//   return (
//     <NewsListBlock>
//       {articles.map((article) => (
//         <NewsItem key={article.url} article={article} />
//       ))}
//     </NewsListBlock>
//   );
// };


const NewsList = ({ country, category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`; // category 값에 따라 주소가 동적으로 변화. query 요청 시 포함.
    const countryQuery = country === 'kr' ? '' : `country=${country}`; // 국가 변경하기
    return axios.get(
      `https://newsapi.org/v2/top-headlines?${countryQuery}${query}`, // 국가 변경 및 카테고리 변경.
      {
        headers: {
          'x-api-key': '0106e2c7f2e94c57bfb33b63b97f2a60',
        }
      },
  );
  }, [country, category]);

  if (loading) {
    return <NewsListBlock>대기중...</NewsListBlock>;
  }
  if (!response) {
    return null;
  }

  if (error) {
    return <NewsListBlock>에러 발생!</NewsListBlock>;
  }

  const { articles } = response.data;
  return (
    <NewsListBlock>
      {articles.map(article => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
