import React from "react";
import { Box, Container, Flex, Image, Text, Heading } from "theme-ui";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";

const IMAGES = [
  "http://shumpunfoundation.org/images/portfolio/saraswati1.JPG",
  "http://shumpunfoundation.org/images/portfolio/gallery22.JPG",
  "http://shumpunfoundation.org/images/portfolio/gallery23.JPG",
  "http://shumpunfoundation.org/images/portfolio/gallery24.JPG",
  "http://shumpunfoundation.org/images/portfolio/gallery25.JPG",
  "http://shumpunfoundation.org/images/portfolio/gallery26.JPG",
  "http://shumpunfoundation.org/images/portfolio/gallery27.JPG",
  "http://shumpunfoundation.org/images/portfolio/gallery28.JPG",
  "http://shumpunfoundation.org/images/portfolio/gallery29.JPG",
  "http://shumpunfoundation.org/images/portfolio/gallery30.JPG",
  "http://shumpunfoundation.org/images/portfolio/gallery31.JPG",
  "http://shumpunfoundation.org/images/portfolio/gallery32.JPG",
  "http://shumpunfoundation.org/images/portfolio/gallery33.JPG",
  "http://shumpunfoundation.org/images/portfolio/gallery34.JPG",
  "http://shumpunfoundation.org/images/portfolio/gallery35.JPG",
  "http://shumpunfoundation.org/images/portfolio/gallery36.JPG",
  "http://shumpunfoundation.org/images/portfolio/gallery37.JPG",
  "http://shumpunfoundation.org/images/portfolio/gallery38.JPG",
  "http://shumpunfoundation.org/images/portfolio/gallery39.JPG",
  "http://shumpunfoundation.org/images/portfolio/gallery40.JPG",
  "http://shumpunfoundation.org/images/portfolio/gallery41.JPG",
  "http://shumpunfoundation.org/images/portfolio/gallery42.JPG",
  "http://shumpunfoundation.org/images/portfolio/gallery43.JPG",
  "http://shumpunfoundation.org/images/portfolio/gallery44.JPG",
  "http://shumpunfoundation.org/images/portfolio/gallery45.JPG",
  "http://shumpunfoundation.org/images/portfolio/gallery48.JPG",
  "http://shumpunfoundation.org/images/logo-170x172.png",
];

import { Gallery, Item } from "react-photoswipe-gallery";

export default function Photos() {
  return (
    <Box as="section" sx={styles.jackpot}>
      <Container>
        <Gallery>
          {IMAGES.map((image) => (
            <Item original={image} thumbnail={image} width="1024" height="768">
              {({ ref, open }) => <img ref={ref} onClick={open} src={image} />}
            </Item>
          ))}
        </Gallery>
      </Container>
    </Box>
  );
}

const styles = {
  jackpot: {
    pt: ["65px", null, null, null, "85px", null, "125px"],
  },
};
