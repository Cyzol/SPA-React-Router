import React from "react";
import Article from '../components/Article'
const articles = [
  {
    id: 1,
    title: "Pierwszy tytuł",
    author: "Jan Nowak",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 2,
    title: "Drugi tytuł",
    author: "Jan Wolny",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 3,
    title: "Trzeci tytuł",
    author: "Jan Szybki",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];
const HomePage = () => {

  const artList = articles.map(article => (
    <Article key = {article.id} {...article}/>
  ))
  return (
    <div className="home">
      {artList}
    </div>
  );
};

export default HomePage;
