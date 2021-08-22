import React, { useState } from "react";
import { Box, Container, Button, Text, Heading, Image, Flex } from "theme-ui";
import { keyframes } from "@emotion/core";
import BlockTitle from "components/block-title";
import { FaGamepad, FaSchool } from "react-icons/fa";
import dotPattern from "assets/dot-pattern.svg";

const getLabel = (text) => {
  const result = text.replace(/([A-Z])/g, " $1");
  return result.charAt(0).toUpperCase() + result.slice(1);
};

const dataMap = {
  educational: {
    list: [
      "Assessment of Early Learning and Developmental Skills",
      "Assessment of Educational Skills (Reading, Spelling, Writing and Math)",
      "Assessment of Life Skills",
    ],
    text: "For children aged 0-5; Special Educators work on special skill sets, as outlined below. The focus of these interventions is development of language, communication skills, relational capacity and cognition.",
    img: "http://shumpunfoundation.org/images/Academics/academics-01.jpg",
    areasDeveloped: [
      "Engaging",
      "Self-Regulation",
      "Forming relationship",
      "Back & Forth communication",
      "Organizing Behaviour",
      "Problem Solving",
      "Symbolic & Emotional Thinking",
      "Expression of Sequencial & Thematic Play",
    ],
  },
  playMovement: {
    text: "These workshops are conducted for eight-ten weeks with a group of 5-6 children, thrice a year. The main focus of these workshops is to enhance communication & social behaviour.",
    img: "http://shumpunfoundation.org/images/Academics/academics-02.jpg",
    areasDeveloped: [
      "Attention",
      "Engaging and relating",
      "Problem solving",
      "Using words to create ideas in a group which enables social communication or non-verbal pragmatic language.",
      "Motor Planning and sequencing",
    ],
    afterText:
      "Parents are involved in these classes. Group goals have been set by the teachers according to the needs of the individual child; which are mutually agreed upon by parents and staff.",
  },
  danceMovement: {
    text: "These workshops are conducted for Ten weeks with a group of 5-6 children, thrice a year. The main focus of these workshops is to enhance motor functioning and Visual Spatial processing.",
    img: "http://shumpunfoundation.org/images/Academics/academics-03.bmp",
    areasDeveloped: [
      "Motor planning",
      "Sequencing",
      "Left/right integration",
      "Balance, Coordination",
      "Body awareness and senses",
      "Location of the body in space",
      "Conservation of space",
    ],
  },
  languageDrama: {
    text: "Through innovative collaboration with theater artists we develop plays and dramas that creatively engage the children and their parents. Through performance arts, we are able to address the specific delay in social communication and emotional concerns.",
    img: "http://shumpunfoundation.org/images/Academics/academics-04.bmp",
    areasDeveloped: [
      "Communication",
      "Problem solving",
      "Using words to create ideas",
      "Logical thinking",
      "Higher level of logical thinking such as ‘Multi causal thinking’ or ‘Grey area thinking’.",
    ],
  },
};

const TabContent = ({ type }) => {
  const { list, text, img, areasDeveloped } = dataMap[type];
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
      <Image src={img} sx={styles.tabImage} />
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
          title="What the features of product"
          text="Introducing all screen details"
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
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "1px solid rgba(1,7,13,.1)",
    mb: "35px",
    button: {
      display: "flex",
      alignItems: "center",
      pb: ["15px", null, null, null, "35px"],
      px: ["15px", null, null, null, "30px"],
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
