import React from 'react';
import { Container, Box, Grid } from 'theme-ui';
import Masonry from 'react-masonry-component';
import BlockTitle from 'components/block-title';
import BlogCard from 'components/cards/person-card';

const masonryOptions = {
  transitionDuration: 0,
};

const Blogs = ({ members = [] }) => {
  return (
    <Box as='section' id='members' sx={styles.blogs}>
      <Container>
        <BlockTitle title='Team members' text='something comes here' />
        <Box as={Masonry} options={masonryOptions} sx={styles.blogWrapper}>
          {members.map((props, index) => (
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
    pt: ['80px', null, null, null, '80px', null, '100px'],
    pb: ['40px', null, null, null, '140px', null, '100px'],
  },
  blogWrapper: {
    mx: '-15px',
  },
};
