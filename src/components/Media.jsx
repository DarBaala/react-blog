import React from "react";
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

  return (
    <div className="media__container">
      <div className="media">
        <div className="media__wrapper">
          {news.map(({ imageUrl, discription, id }) => (
            <Card
              key={id}
              sx={{
                maxWidth: 430,
                backgroundColor: "rgb(18, 18, 18)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <CardMedia
                component="img"
                height="240"
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
                  {discription}
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
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except
                  AntarcticaLizards are a widespread group of squamate reptiles,
                  with over 6,000 species, ranging across all continents except
                  Antarctica
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
              </CardActions>
            </Card>
          ))}
        </div>
        <Stack sx={{ mb: "20px" }} spacing={4}>
          <Pagination
            sx={{
              display: "flex",
              justifyContent: "center",
              color: "#fff",
            }}
            count={10}
            variant="outlined"
            shape="rounded"
          />
        </Stack>
      </div>
    </div>
  );
};

export default Media;
