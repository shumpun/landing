import React, { useState } from "react";
import { Box, Container, Button, Text, Heading, Image } from "theme-ui";
import { keyframes } from "@emotion/core";
import BlockTitle from "components/block-title";
import { FaSchool } from "react-icons/fa";
import dotPattern from "assets/dot-pattern.svg";

import educational from "assets/featured/educational.jpeg";
import playMovement from "assets/featured/playMovement.jpeg";
import danceMovement from "assets/featured/danceMovement.jpeg";
import languageDrama from "assets/featured/languageDrama.jpeg";
import assistiveTechnology from "assets/featured/assistiveTechnology.jpeg";
import educationalExcursion from "assets/featured/educationalExcursion.jpeg";
import workshops from "assets/featured/workshops.jpeg";
import camp from "assets/featured/camp.jpeg";

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
    img: educational,
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
    img: playMovement,
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
    img: danceMovement,
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
    img: languageDrama,
    areasDeveloped: [
      "Communication",
      "Problem solving",
      "Using words to create ideas",
      "Logical thinking",
      "Higher level of logical thinking such as ‘Multi causal thinking’ or ‘Grey area thinking’.",
    ],
  },
  assistiveTechnology: {
    text: "We have also been influenced by developments in research into child language. Research has recently focused on an area often ignored in the past; that of pragmatics, which is the study of language in its context of use. A pragmatic approach offers a perspective on child language that emphasizes how communication is achieved. It considers how language is used to communicate a variety of intentions, to relate to the communication needs of the listener and to participate in conversation and connected discourse (Bates, 1976). For addressing language and communication skills our group of experts have developed several assistive technology devices.",
    img: assistiveTechnology,
    areasDeveloped: [
      "Non flame cooking",
      "Puppet making using recycled materials,",
      "Art & Craft Workshops",
      "Story telling & Quiz Workshop",
      "Community Education",
    ],
  },
  educationalExcursion: {
    text: "Travelling and living beyond the familiarities of a known environment may be a challenge for many children with special needs. An annual overnight trip to a different places in WEST BENGAL is arranged, for older children to travel in a group accompanied by shumpun's staff members.",
    img: educationalExcursion,
  },
  workshops: {
    text: "In addition to direct engagement of the children and their parents in therapy, shumpun also arranges different workshops for teachers, parents and other proffessionals. So we can say this is a platform for learning not only for the children or their families but also for community people too.",
    img: workshops,
    areasDeveloped: [
      "Educational workshops for parents and other professionals caring for children with special needs. This provides a great opportunity for parents to meet and discuss with experts and address different special needs related queries, and socio-cultural issues around autism and other developmental delays in India.",
      "Weekly professional workshops and training opportunities allow an avenue for continuing education.",
    ],
  },
  camp: {
    text: "During the summer or winter break and during the monsoon(only in weekend), we organize small therapeutic workshops for the children and their parents to develop social, motor and self-help skills through different programmes.",
    img: camp,
    activities: [
      "Engaging in the group",
      "Cooperation",
      "Following instruction",
      "Flexibility",
      "Inter-Personal-Social interaction",
      "Understanding perspective of Others",
      "Adoptability",
    ],
  },
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
      <Image src={img} sx={styles.tabImage} />
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
