import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const GetPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [objCloudinary, setCloudinary] = useState([]);
  const [imageUrl, setImageUrl] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (objCloudinary && objCloudinary.secure_url) {
      setImageUrl(objCloudinary.secure_url);
    }
  }, [objCloudinary]);

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };
  const uploadImage = (files) => {
    let upload = false;
    if (files) {
      upload = window.confirm(
        `Вы точно хотите загрузить картинку ${files[0].name}`
      );
    }
    if (upload) {
      const formData = new FormData();
      formData.append("file", files[0]);
      formData.append("upload_preset", "nmteg_upload");
      try {
        axios
          .post("https://api.cloudinary.com/v1_1/nmteg/image/upload", formData)
          .then((response) => setCloudinary(response.data));
      } catch (error) {
        console.error("Не удалось загрузить картинку!");
      }
      upload = false;
    }
  };

  const createObject = () => {
    if (title.length > 10 && description.length > 20 && imageUrl) {
      const obj = {
        title: title,
        description: description,
        imageUrl: imageUrl,
      };
      toDoPost(obj);
    } else {
      alert(
        "Вы не загрузили картинку или поле заголовка содержит менее 10 символов, а описание - меньше 20!"
      );
    }
  };

  const toDoPost = async (obj) => {
    try {
      await axios.post("https://62ae44a6b735b6d16a40a5cd.mockapi.io/news", obj);
    } catch (error) {
      console.error("Не удалось отправить созданный пост на сервер!");
    }
    setTitle("");
    setDescription("");
    alert("Ваш пост добавлен, обновите страницу, чтобы он отобразился!");
    navigate("/");
  };

  return (
    <div className="getpost">
      <form className="getpost__form">
        <input
          className="getpost__input"
          type="text"
          placeholder="Заголовок"
          onChange={(event) => handleChangeTitle(event)}
          value={title}
        />
        <textarea
          className="getpost__textarea"
          name="text"
          id=""
          rows="10"
          onChange={(event) => handleChangeDescription(event)}
          value={description}
        ></textarea>
        <input
          onChange={(event) => uploadImage(event.target.files)}
          className="getpost__file"
          type="file"
        />
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
