import React from "react";
import { Container, Box, Grid } from "theme-ui";
import Masonry from "react-masonry-component";
import BlockTitle from "components/block-title";
import BlogCard from "components/cards/event-card";

import blogImage1 from "assets/events/2.jpeg";
import blogImage2 from "assets/events/2.jpeg";
import blogImage3 from "assets/events/3.jpeg";
import blogImage4 from "assets/events/4.jpeg";
import blogImage5 from "assets/events/5.jpeg";
import blogImage6 from "assets/events/6.jpeg";

const BLOG_DATA = [
  {
    image: blogImage1,
    title: "Khelbo Nachbo Gorbo Re Digital Summer Camp'21",
    path: "/",
    Dat: "5 July onwards 2021 ,7PM",
    person: "Saptaparna Basu & Reeni Sengupta",
    linkLabel: "Learn More",
  },
  {
    image: blogImage2,
    title: "Khelbo Nachbo Gorbo Re Digital Summer Camp'21",
    path: "/",
    Dat: "19th June 2021  ,7 P.M",
    person: "Mr. Subhasis Sayed",
    linkLabel: "Learn More",
  },
  {
    image: blogImage3,
    title: "Digital Summer Camp'21",
    path: "/",
    Dat: "15th June 2021 ,7 P.M",
    person: "Mr. Sumit Mukherjee",
    linkLabel: "Learn More",
  },
  {
    image: blogImage4,
    title: "AKASH BHARA SURJO TARA (Digital Summer Camp'21)",
    path: "/",
    Dat: "12th June 2021 , 7-8 P.M",
    person: "Dr. Debi Prasad Duari",
    linkLabel: "Learn More",
  },
  {
    image: blogImage5,
    title: "ADDA- O- Mon (Noticed & responded)",
    path: "/",
    Dat: "16th May 2021 ,8 P.M",
    person: "Shari Lachin",
    linkLabel: "Learn More",
  },
  {
    image: blogImage6,
    title: "Event Unlocking Knowledge",
    path: "/",
    Dat: "21 March 2021 ,6 P.M",
    person: "Mr. Koushik Chatterjee",
    linkLabel: "Learn More",
  },
];

const masonryOptions = {
  transitionDuration: 0,
};

const Blogs = () => {
  return (
    <Box as="section" id="events" sx={styles.blogs}>
      <Container>
        <BlockTitle
          title="Popular events post we updated"
          text="Updete newsfeed blog"
        />
        <Box as={Masonry} options={masonryOptions} sx={styles.blogWrapper}>
          {BLOG_DATA.map((props, index) => (
            <BlogCard key={index} {...props} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Blogs;

const styles = {
  blogs: {
    pt: ["80px", null, null, null, "80px", null, "100px"],
    pb: ["40px", null, null, null, "140px", null, "100px"],
  },
  blogWrapper: {
    mx: "-15px",
  },
};
