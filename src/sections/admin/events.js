import React, { useState } from "react";
import Datetime from "react-datetime";
import { Label, Input, Button, Box } from "theme-ui";
import "react-datetime/css/react-datetime.css";
import toast from "react-hot-toast";
import { firestore, storage } from "../../../lib/firebase";
import withAdminAuth from "../../../lib/withAdminAuth";

const Events = () => {
  const [title, setTitle] = useState("");
  const [person, setPerson] = useState("");
  const [eventImage, setEventImage] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const uploadRef = storage.ref(`events/${eventImage.name}`);
    await uploadRef.put(eventImage);

    const imageUrl = await uploadRef.getDownloadURL();

    await firestore.collection("events").add({
      title,
      person,
      date: selectedDate.toDate(),
      image: imageUrl,
    });

    setTitle("");
    setPerson("");
    setSelectedDate(null);
    setEventImage(null);
    setLoading(false);

    toast.success("Event created!");
  };

  const handleFileChange = ({ target: { files } }) => {
    setEventImage(files[0]);
  };

  const isValidForm = () => {
    return !!title && !!person && !!eventImage && !!selectedDate;
  };

  return (
    <Box as="form" sx={styles.forms} onSubmit={handleSubmit}>
      <Label htmlFor="title">
        Title
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id="title"
          type="text"
          placeholder="title"
        />
      </Label>
      <Label htmlFor="person">
        Person
        <Input
          value={person}
          onChange={(e) => setPerson(e.target.value)}
          id="person"
          type="text"
          placeholder="Person"
        />
      </Label>
      <Label htmlFor="date">
        Date
        <Datetime
          value={selectedDate}
          inputProps={{
            style: { padding: "10px", borderRadius: "5px" },
            placeholder: "Enter a date",
          }}
          onChange={(date) => setSelectedDate(date)}
        />
      </Label>
      <Label htmlFor="event-image">
        Choose a profile picture:
        <Input
          onChange={handleFileChange}
          type="file"
          id="event-image"
          accept="image/png, image/jpeg"
        />
      </Label>

      <Button
        disabled={loading || !isValidForm()}
        variant="primary"
        sx={styles.button}
      >
        {loading ? "Loading..." : "Add new event"}
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

export default withAdminAuth(Events);
