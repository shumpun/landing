import { data } from "dom7";
import React, { useState } from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import toast from "react-hot-toast";
import { firestore, storage } from "../../../lib/firebase";
import withAdminAuth from "../../../lib/withAdminAuth";

const News = () => {
  const [title, setTitle] = useState("");
  const [news, setNews] = useState("");
  const [eventImage, setEventImage] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const uploadRef = storage.ref(`news/${eventImage.name}`);
    await uploadRef.put(eventImage);

    const imageUrl = await uploadRef.getDownloadURL();

    await firestore.collection("news").add({
      title,
      news,
      date: selectedDate,
      image: imageUrl,
    });

    setTitle("");
    setNews("");
    setSelectedDate(null);
    setEventImage(null);

    toast.success("Post created!");
  };

  const handleFileChange = ({ target: { files } }) => {
    setEventImage(files[0]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title
          <textarea
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            placeholder="News Title"
          />
        </label>
        <br />
        <br />

        <label htmlFor="news">
          News Description
          <textarea
            value={news}
            onChange={(e) => setNews(e.target.value)}
            id="news"
            placeholder="News Description"
          />
        </label>
        <br />
        <br />

        <label htmlFor="date">
          Date
          <Datetime
            value={selectedDate}
            id="date"
            onChange={(date) => setSelectedDate(date.toDate())}
          />
        </label>
        <br />
        <br />

        <label htmlFor="news-image">
          Choose a profile picture:
          <input
            onChange={handleFileChange}
            type="file"
            id="news-image"
            accept="image/png, image/jpeg"
          />
        </label>
        <br />
        <br />

        <button>Add new news</button>
      </form>
    </div>
  );
};

export default withAdminAuth(News);
