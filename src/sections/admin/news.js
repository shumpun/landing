import React, { useState } from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

import { Button, Textarea, Input, Box, Label } from "theme-ui";

import toast from "react-hot-toast";
import { firestore, storage } from "../../../lib/firebase";
import withAdminAuth from "../../../lib/withAdminAuth";

const News = () => {
  const [title, setTitle] = useState("");
  const [news, setNews] = useState("");
  const [eventImage, setEventImage] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(false);

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
    setLoading(false);

    toast.success("News created!");
  };

  const handleFileChange = ({ target: { files } }) => {
    setEventImage(files[0]);
  };

  const isValidForm = () => !!title && !!news && !!eventImage && !!selectedDate;

  return (
    <Box sx={styles.forms} as="form" onSubmit={handleSubmit}>
      <Label htmlFor="title">
        Title
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id="title"
          placeholder="News Title"
        />
      </Label>

      <Label htmlFor="news">
        News Description
        <Textarea
          value={news}
          onChange={(e) => setNews(e.target.value)}
          id="news"
          placeholder="News Description"
        />
      </Label>

      <Label htmlFor="date">
        Date
        <Datetime
          value={selectedDate}
          id="date"
          inputProps={{
            style: { padding: "10px", borderRadius: "5px" },
            placeholder: "Enter a date",
          }}
          onChange={(date) => setSelectedDate(date.toDate())}
        />
      </Label>

      <Label htmlFor="news-image">
        Choose a profile picture:
        <Input
          onChange={handleFileChange}
          type="file"
          id="news-image"
          accept="image/png, image/jpeg"
        />
      </Label>

      <Button
        disabled={loading || !isValidForm()}
        variant="primary"
        sx={styles.button}
      >
        {loading ? "Loading..." : "Add new news"}
      </Button>
    </Box>
  );
};

const styles = {
  button: {
    fontSize: "15px",
    fw: "700",
    height: "48px",
    borderRadius: "3px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    py: "0",
    backgroundColor: "black",
    color: "#fff",
    "&:disabled": {
      cursor: "not-allowed",
    },
  },
  forms: {
    label: {
      fontSize: 2,
      fontWeight: "bold",
      marginBottom: "40px",
      input: {
        borderColor: "gray",
        width: "300px",
        ml: "50px",
        "&:focus": {
          borderColor: "primary",
          boxShadow: "0 0 0 2px #000",
          outline: "none",
        },
      },
    },
    select: {
      borderColor: "gray",
      "&:focus": {
        borderColor: "primary",
        boxShadow: "0 0 0 2px #000",
        outline: "none",
      },
    },
    textarea: {
      borderColor: "gray",
      "&:focus": {
        borderColor: "primary",
        boxShadow: "0 0 0 2px #000",
        outline: "none",
      },
    },
    slider: {
      bg: "muted",
    },
  },
};

export default withAdminAuth(News);
