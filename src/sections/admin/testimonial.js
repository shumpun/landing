import React, { useState } from "react";

import { Button, Textarea, Input, Box, Label } from "theme-ui";

import toast from "react-hot-toast";
import { firestore, storage } from "../../../lib/firebase";
import withAdminAuth from "../../../lib/withAdminAuth";

const Testimonials = () => {
  const [content, setContent] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const uploadRef = storage.ref(`testimonials/${image.name}`);
    await uploadRef.put(image);

    const imageUrl = await uploadRef.getDownloadURL();

    await firestore.collection("testimonials").add({
      content,
      name,
      image: imageUrl,
      date: new Date(),
    });

    setContent("");
    setName("");
    setImage(null);
    setLoading(false);

    toast.success("Testimonial created!");
  };

  const handleFileChange = ({ target: { files } }) => {
    setImage(files[0]);
  };

  const isValidForm = () => !!content && !!name && !!image;

  return (
    <Box sx={styles.forms} as="form" onSubmit={handleSubmit}>
      <Label htmlFor="name">
        Name
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="name"
          placeholder="Person Name"
        />
      </Label>

      <Label htmlFor="content">
        Testimonial
        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          id="content"
          placeholder="Testimonial"
        />
      </Label>

      <Label htmlFor="image">
        Choose a picture:
        <Input
          onChange={handleFileChange}
          type="file"
          id="image"
          accept="image/png, image/jpeg"
        />
      </Label>

      <Button
        disabled={loading || !isValidForm()}
        variant="primary"
        sx={styles.button}
      >
        {loading ? "Loading..." : "Add new testimonail"}
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
      ml: "50px",
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

export default withAdminAuth(Testimonials);
