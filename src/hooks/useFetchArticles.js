import { useEffect, useState } from 'react';

const useFetchArticles = () => {
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState('keyword');

  useEffect(() => {
    if(keyword.length < 1) {
      setKeyword('keyword');
    };
    fetch(`https://newsapi.org/v2/everything?q=${keyword}&apiKey=d4727282328646e78f20a614cb5bd9d0`)
      .then(res => res.json())
      .then(data => {
        setData(data.articles);
      })
      .catch(error => {
        console.error(error.message);
      });
  }, [keyword]);

  const handleSearch = newKeyword => setKeyword(newKeyword);

  return { data, handleSearch };
};

export default useFetchArticles;
