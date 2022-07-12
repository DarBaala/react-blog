import React from "react";

import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux/es/exports";

const Media = () => {
  const news = useSelector((state) => state.blog.news);
  console.log(news);

  return (
    <div className="media__container">
      <div className="media">
        <div className="media__wrapper">
          {news.map(({ id, title, imageUrl, discription }) => (
            <Card
              key={imageUrl}
              sx={{
                maxWidth: 470,
                backgroundColor: "rgb(18, 18, 18)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <CardMedia
                component="img"
                height="340"
                image={imageUrl}
                alt="green iguana"
              />
              <CardContent style={{ padding: "20px", flex: 1 }}>
                <Typography
                  sx={{
                    fontFamily: "Mulish",
                    color: "#fff",
                    mb: "15px",
                    fontWeight: 600,
                  }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  {title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Mulish",
                    color: "#fff",
                    fontSize: "18px",
                  }}
                  variant="body2"
                  color="text.secondary"
                >
                  {discription}
                </Typography>
              </CardContent>
              <CardActions
                style={{
                  padding: "10px 20px 15px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  sx={{
                    color: "rgb(144, 202, 249)",
                    fontWeight: "500",
                  }}
                  size="small"
                >
                  Поделиться
                </Button>
                <Link to={`/news/${id}`}>
                  <Button
                    sx={{
                      color: "#fff",
                      backgroundColor: "#000",
                      padding: "7px 9px",
                    }}
                    size="small"
                  >
                    Читать дальше
                  </Button>
                </Link>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Media;
