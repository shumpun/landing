import React from "react";
import { Container, Box, Grid } from "theme-ui";
import Masonry from "react-masonry-component";
import BlockTitle from "components/block-title";
import NewsCard from "components/cards/news-card";

const masonryOptions = {
  transitionDuration: 0,
};

const Blogs = ({ news }) => {
  return (
    <Box as="section" id="news" sx={styles.blogs}>
      <Container>
        <BlockTitle title="Recent News" text="Updated newsfeed" />
        <Box as={Masonry} options={masonryOptions} sx={styles.blogWrapper}>
          {news?.map((item, index) => (
            <NewsCard key={index} {...item} />
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
