import React, { useState } from "react";
import { Box, Container, Button, Text, Heading, Image } from "theme-ui";
import { keyframes } from "@emotion/core";
import BlockTitle from "components/block-title";
import { FaSchool } from "react-icons/fa";
import dotPattern from "assets/dot-pattern.svg";

import dataMap from "data/featured";

const getLabel = (text) => {
  const result = text.replace(/([A-Z])/g, " $1");
  return result.charAt(0).toUpperCase() + result.slice(1);
};

const TabContent = ({ type }) => {
  const { list, text, img, areasDeveloped, activities } = dataMap[type];
  return (
    <>
      <Heading as="h2" sx={styles.title}>
        {getLabel(type)} Therapy
      </Heading>
      {list && (
        <ul>
          {list.map((each, idx) => (
            <li key={idx}>{each}</li>
          ))}
        </ul>
      )}
      <Text as="p">{text}</Text>
      <Image
        src={`https://drive.google.com/uc?export=view&id=${img}`}
        sx={styles.tabImage}
      />
      {areasDeveloped && (
        <>
          <Heading as="h3" sx={{ mt: "20px" }}>
            Areas to be Developed
          </Heading>
          <ul>
            {areasDeveloped.map((each, idx) => (
              <li key={idx}>{each}</li>
            ))}
          </ul>
        </>
      )}
      {activities && (
        <>
          <Heading as="h3" sx={{ mt: "20px" }}>
            Activities
          </Heading>
          <ul>
            {activities.map((each, idx) => (
              <li key={idx}>{each}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

const Featured = () => {
  const [tab, setTab] = useState({
    active: "educational",
  });

  const handleTab = (current) => {
    setTab({
      ...tab,
      active: current,
    });
  };

  return (
    <Box as="section" id="programmes" sx={styles.featured}>
      <Container sx={styles.container}>
        <BlockTitle
          title="Programmes"
          text="List of all the therapy and programmes"
        />
        <Box sx={styles.tabButtonTopWrapper}>
          <Box sx={styles.tabButtonWrapper}>
            {Object.keys(dataMap).map((item, idx) => (
              <Button
                onClick={() => handleTab(item)}
                className={`${tab.active === item ? "active" : ""}`}
                key={idx}
              >
                <FaSchool />
                {getLabel(item)}
              </Button>
            ))}
          </Box>
        </Box>
        <Box sx={styles.tabContent}>
          <TabContent type={tab.active} />
        </Box>
      </Container>
    </Box>
  );
};

export default Featured;
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const styles = {
  title: {
    fontSize: "30px",
    mb: ["10px", null, null, null, null, "20px"],
  },
  tabImage: {
    mt: "20px",
    borderRadius: "10px",
    width: "100%",
  },
  featured: {
    pt: ["80px", null, null, null, "80px", null, "100px"],
    backgroundColor: "#F9FAFC",
    pb: "200px",
    mb: "-20px",
  },
  container: {
    position: "relative",
    top: "150px",
    mt: "-150px",
  },
  tabButtonTopWrapper: {
    overflowY: ["hidden", null, null, null, null, "inherit"],
    overflowX: ["auto", null, null, null, null, "inherit"],
  },
  tabButtonWrapper: {
    width: ["700px", null, null, null, null, "100%"],
    mx: ["auto", null, null, null, null, "0"],
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "1px solid rgba(1,7,13,.1)",
    mb: "35px",
    button: {
      display: "flex",
      alignItems: "center",
      pb: ["15px", null, null, null, "25px"],
      px: ["15px", null, null, null, "20px"],
      mb: "10px",
      flexShrink: "0",
      border: 0,
      backgroundColor: "rgba(0,0,0,0)",
      color: "#0F2137",
      fontSize: ["14px", null, null, null, "18px"],
      fontWeight: 500,
      lineHeight: 1,
      position: "relative",
      transition: "all 500ms ease",
      svg: {
        fontSize: ["18px", null, null, null, "30px"],
        color: "#ADBDD0",
        opacity: 0.7,
        mr: "15px",
        transition: "all 500ms ease",
      },
      "&:hover, &.active": {
        backgroundColor: "rgba(0,0,0,0)",
        color: "#0F2137",
        svg: {
          color: "#0F2137",
          opacity: 1,
        },
        "&::before": {
          transform: "scale(1,1)",
        },
      },
      "&::before": {
        content: "''",
        position: "absolute",
        bottom: "-2px",
        backgroundColor: "#0F2137",
        left: 0,
        width: "100%",
        height: "3px",
        transform: "scale(0,1)",
        transition: "transform 500ms ease",
      },
    },
  },
  tabContent: {
    minHeight: ["190px", null, "300px", "385px", null, "600px"],
    position: "relative",
    "&::before": {
      content: "''",
      width: "302px",
      height: "347px",
      backgroundImage: `url(${dotPattern})`,
      position: "absolute",
      bottom: "-30px",
      right: "-40px",
      display: ["none", null, null, null, null, "block"],
    },
    ".tabImage": {
      position: "relative",
      animation: `${fadeIn} 0.8s linear`,
    },
  },
};
