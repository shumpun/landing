import React from "react";
import { Container, Box, Grid } from "theme-ui";
import Masonry from "react-masonry-component";
import BlockTitle from "components/block-title";
import BlogCard from "components/cards/blog-card";

import blogImage1 from "assets/blog-1-1.png";
import blogImage2 from "assets/blog-1-2.png";
import blogImage3 from "assets/blog-1-3.png";
import blogImage4 from "assets/blog-1-4.png";

const BLOG_DATA = [
  {
    image: blogImage1,
    title: "How to work with prototype design with adobe xd featuring tools",
    description:
      "The 2019 Innovation by Design Awards honor the designers and businesses solving the problems of today and tomorrow. It is one of the most sought-after design",
    path: "/",
    linkLabel: "Learn More",
  },
  {
    image: blogImage1,
    title: "How to work with prototype design with adobe xd featuring tools",
    description:
      "The 2019 Innovation by Design Awards honor the designers and businesses solving the problems of today and tomorrow. It is one of the most sought-after design",
    path: "/",
    linkLabel: "Learn More",
  },
  {
    image: blogImage1,
    title: "How to work with prototype design with adobe xd featuring tools",
    description:
      "The 2019 Innovation by Design Awards honor the designers and businesses solving the problems of today and tomorrow. It is one of the most sought-after design",
    path: "/",
    linkLabel: "Learn More",
    person: "sachet",
  },
  {
    image: blogImage1,
    title: "How to work with prototype design with adobe xd featuring tools",
    description:
      "The 2019 Innovation by Design Awards honor the designers and businesses solving the problems of today and tomorrow. It is one of the most sought-after design",
    path: "/",
    linkLabel: "Learn More",
  },
  {
    image: blogImage1,
    title: "How to work with prototype design with adobe xd featuring tools",
    description:
      "The 2019 Innovation by Design Awards honor the designers and businesses solving the problems of today and tomorrow. It is one of the most sought-after design",
    path: "/",
    linkLabel: "Learn More",
  },
];

const masonryOptions = {
  transitionDuration: 0,
};

const Blogs = () => {
  return (
    <Box as="section" id="news" sx={styles.blogs}>
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
