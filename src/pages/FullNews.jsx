import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Button } from "@mui/material";
import Header from "../components/Header";

const FullNews = () => {
  const [news, setNews] = useState();

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    async function fetchNews() {
      try {
        const { data } = await axios.get(
          "https://62ae44a6b735b6d16a40a5cd.mockapi.io/news/" + id
        );
        setNews(data);
      } catch (error) {
        console.error("Не получена новость(");
        alert("Новость не найдена:(");
        navigate("/");
      }
    }
    fetchNews();
  }, []);
  if (!news) {
    return <h3 className="container"></h3>;
  }
  return (
    <div>
      <Header />
      <div className="fullnews">
        <div className="fullnews__wrapper">
          <img className="fullnews__img" src={news.imageUrl} alt="" />
          <h3 className="fullnews__title">{news.title}</h3>
          <p className="fullnews__description">{news.description}</p>
        </div>
        <Link to="/posting">
          <Button
            sx={{
              color: "#fff",
              backgroundColor: "#000",
              padding: "7px 9px",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.685)",
              },
            }}
            size="small"
          >
            Вернуться назад
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FullNews;
