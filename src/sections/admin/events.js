import { data } from "dom7";
import React, { useState } from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import toast from "react-hot-toast";
import { firestore, storage } from "../../../lib/firebase";
import withAdminAuth from "../../../lib/withAdminAuth";

const Events = () => {
  const [title, setTitle] = useState("");
  const [person, setPerson] = useState("");
  const [eventImage, setEventImage] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const uploadRef = storage.ref(`events/${eventImage.name}`);
    await uploadRef.put(eventImage);

    const imageUrl = await uploadRef.getDownloadURL();

    await firestore.collection("events").add({
      title,
      person,
      date: selectedDate,
      image: imageUrl,
    });

    setTitle("");
    setPerson("");
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
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            type="text"
            placeholder="title"
          />
        </label>
        <br />
        <br />
        <label htmlFor="person">
          Person
          <input
            value={person}
            onChange={(e) => setPerson(e.target.value)}
            id="person"
            type="text"
            placeholder="Person"
          />
        </label>
        <br />
        <br />
        <label htmlFor="date">
          Date
          <Datetime
            value={selectedDate}
            onChange={(date) => setSelectedDate(date.toDate())}
          />
        </label>
        <br />
        <br />
        <label htmlFor="event-image">
          Choose a profile picture:
          <input
            onChange={handleFileChange}
            type="file"
            id="event-image"
            accept="image/png, image/jpeg"
          />
        </label>
        <br />
        <br />

        <button>Add new event</button>
      </form>
    </div>
  );
};

export default withAdminAuth(Events);
