import { useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";

const GetPost = () => {
  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("");

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleChangeDiscription = (event) => {
    setDiscription(event.target.value);
  };
  const createObject = () => {
    if (title.length > 10 || discription.length > 20) {
      const obj = {
        title: title,
        discription: discription,
      };
      console.log(obj);
      toDoPost(obj);
    } else {
      alert(
        "Поле заголовка должно содержать более 10 символов, а описание - минимум 20!"
      );
    }
  };

  const toDoPost = async (obj) => {
    try {
      await axios.post("https://62ae44a6b735b6d16a40a5cd.mockapi.io/news", obj);
    } catch (error) {
      console.error("Не удалось отправить созданный пост на сервер!");
    }
  };

  console.log(title, discription);
  return (
    <div className="getpost">
      <form className="getpost__form">
        <input
          className="getpost__input"
          type="text"
          placeholder="Заголовок"
          onChange={(event) => handleChangeTitle(event)}
        />
        <textarea
          className="getpost__textarea"
          name="text"
          id=""
          rows="10"
          onChange={(event) => handleChangeDiscription(event)}
        ></textarea>
        <input className="getpost__file" type="file" />
        <Button
          onClick={createObject}
          sx={{
            width: "150px",
            height: "50px",
            color: "#fff",
            fontWeight: "500",
            backgroundColor: "#000",
            "&:hover": {
              backgroundColor: "rgba(24, 23, 23, 0.921)",
            },
          }}
          size="small"
        >
          Отправить
        </Button>
      </form>
    </div>
  );
};

export default GetPost;
