import React from "react";
import "../../styles/common.style.scss";
import SearchBar from "../../Components/common/Search/SearchBar";
import Button from "../../Components/common/Button/Button";
import Card from "../../Components/Card/Card";

const Blog = () => {
  const blogData = [
    {
      img: require("../../Assets/images/card/c-1.png"),
      title: "Lorem ipsum dolor sit amet.",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, fugased. Aliquam.",
    },
    {
      img: require("../../Assets/images/card/c-2.png"),
      title: "Lorem ipsum dolor sit amet.",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, fugased. Aliquam.",
    },
    {
      img: require("../../Assets/images/card/c-3.png"),
      title: "Lorem ipsum dolor sit amet.",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, fugased. Aliquam.",
    },
  ];

  return (
    <div className="event__container">
      <div className="blog__top">
        <div className="blog__title">
          <div>
            <p className="blog__tilte_text">Insightfull</p>
          </div>
          <div>
            <p className="blog__tilte_text">blogs for you</p>
          </div>
        </div>
      </div>
      <div className="event__search__box">
        <SearchBar className="event__search" search_title="event" />
        <div className="event_btn_filter">
          <div className="event__btn">
            <Button />
          </div>
        </div>
      </div>
      <div className="event_card" style={{ marginBottom: "1rem" }}>
        {blogData.map((data, id) => {
          return <Card data={data} key={id} width="360px" />;
        })}
      </div>
    </div>
  );
};

export default Blog;
