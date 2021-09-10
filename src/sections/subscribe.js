import React, { useState } from "react";
import { Button, Input, Box, Container, Heading, Text } from "theme-ui";
import { firestore } from "../../lib/firebase";
import { toast } from "react-hot-toast";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email) {
      await firestore.collection("subscribes").add({
        email,
        date: new Date(),
      });
    }

    toast.success("Subscribed successfully!");
    setIsSubscribed(true);
  };

  return (
    <Box as="section" id="subscribe" sx={styles.subscribe}>
      <Container>
        <Heading as="h3">Subscribe to get notified about event</Heading>
        <Text as="p">
          By subscribing with your mail, you will accept our privacy policy
        </Text>
        <Box as="form" onSubmit={handleSubmit} sx={styles.form}>
          <Input
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={styles.input}
          />
          <Button type="submit" disabled={isSubscribed} sx={styles.button}>
            Subscribe us
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Subscribe;

const styles = {
  subscribe: {
    py: ["80px", null, null, null, "80px", "100px", "140px"],
    backgroundColor: "#020718",
    h3: {
      textAlign: "center",
      fontSize: ["23px", null, null, null, null, "30px", "36px"],
      lineHeight: [1.5, null, null, "1"],
      color: "#fff",
      letterSpacing: ["-0.5px"],
      mb: ["0px", null, null, "15px"],
      width: ["70%", null, null, "auto"],
      mx: ["auto", null, null, "0"],
    },
    p: {
      fontSize: ["16px"],
      color: "#fff",
      opacity: ".6",
      letterSpacing: ["-0.5px"],
      textAlign: "center",
      width: ["70%", null, null, "auto"],
      mx: ["auto", null, null, "0"],
      mt: ["10px", null, null, "0"],
    },
  },
  form: {
    width: ["100%"],
    maxWidth: ["555px"],
    mx: ["auto"],
    display: ["flex"],
    flexWrap: ["wrap"],
    mt: ["30px", null, null, null, "60px"],
  },
  input: {
    width: ["100%"],
    maxWidth: ["100%", null, "370px", "380px"],
    borderRadius: "5px",
    border: "none",
    backgroundColor: "rgba(255,255,255, .08)",
    outline: "none",
    color: "rgba(255,255,255, .8)",
    fontSize: "16px",
    pl: ["0px", null, null, "30px"],
    height: ["50px", null, null, "60px"],
    mr: ["0px", null, null, "15px"],
    textAlign: ["center", null, null, "left"],
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: "5px",
    fontWeight: "500",
    fontSize: ["18px"],
    color: "#020718",
    letterSpacing: "-0.5px",
    outline: "none",
    padding: ["0px 30.75px"],
    minHeight: ["50px", null, null, "60px"],
    width: ["100%", null, null, "auto"],
    mt: ["10px", null, null, "0"],
    mx: ["auto", null, null, "0"],
    "&:hover": {
      backgroundColor: "#fff",
      opacity: "0.8",
    },
    "&:disabled": {
      backgroundColor: "#fff",
      opacity: "0.8",
      cursor: "not-allowed",
    },
  },
};
