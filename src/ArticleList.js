import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // API를 호출하여 게시판 목록을 가져옴
    const fetchArticles = async () => {
      try {
        const response = await axios.get('http://localhost:3000/list.do');
        setArticles(response.data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div>
      <h1>게시판 목록</h1>
      <table>
        <thead>
          <tr>
            <th>제목</th>
            <th>내용</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <tr key={article.articleId}>
              <td>{article.articleTitle}</td>
              <td>{article.articleContent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArticleList;