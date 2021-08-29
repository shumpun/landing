import React from "react";
import { Container, Box, Grid } from "theme-ui";
import Masonry from "react-masonry-component";
import BlockTitle from "components/block-title";
import BlogCard from "components/cards/blog-card";

import blogImage1 from "assets/news/1.jpeg";
import blogImage2 from "assets/news/2.jpeg";
import blogImage3 from "assets/news/3.jpeg";
import blogImage4 from "assets/news/4.jpeg";

const BLOG_DATA = [
  {
    image: blogImage1,
    title: "How to work with prototype design with adobe xd featuring tools",
    description:
      "We are all well aware of our present situation and the challenges placed upon our society due to COVID-19.We want our children to be safe andat the same time we wanted them to stay connected to continue their personal growth.To engage in therapy, we are continuing our on line therapy classes as well as we are arrangingdigital camps and tele-workshops" +
      "Today, we continue to work both directly with the children and their families, as well as educating the larger community about intellectual and other disabilities even at on line.",
    path: "/",
    // linkLabel: "Learn More",
  },
  {
    image: blogImage2,
    title: "How to work with prototype design with adobe xd featuring tools",
    description:
      "We all know that the primary challenge for person withAutism is connecting or relating to people, objects or ideas in their environment. These classes and workshops aim to strengthen a child’s engagement with their environment. The program also focuses on parents’ training, the activities are chosen, as fun activities, which the parents would be able to carry out later, throughout their daily routine.",
    path: "/",
  },
  {
    image: blogImage3,
    title: "How to work with prototype design with adobe xd featuring tools",
    description:
      "During the classes and as well as in the workshops a child’s emotional and behavioural needs are assessed, and their progress is monitored using evaluation scales developed at Shumpun. So the emotional and behavioural goals remain same during different activities. The educators have the unique opportunity to set up individualized intervention programmes and set milestones for a child’s growth, as well as to evaluate and teach parents how to reach those goals while they are working in a one-on-one situation.",
    path: "/",
  },
  {
    image: blogImage4,
    title: "How to work with prototype design with adobe xd featuring tools",
    description:
      "Another key goal of our training workshops are to produce 'Educators' who will be experts dealing with children with special needs much more proficiently. As we all know due to a paucity of professional in the field of special education, we are much more dependent on immediate parents, family members or lay individuals from the community. Therefore, the primary mentors in our program are parents, theater artists, travel experts and so on, just people from our community without a specialized training in special education or speech and language therapy or occupational therapy. Our program focuses on training the family members and other mentor-participants to teach children with special needs under the guidance of a professional. So, we can say this is a platform for learning not only for the children or their families but also for the community people too. Shumpun believes that her dissemination of knowledge goes beyond her door.",
    path: "/",
  },
  {
    image: blogImage2,
    title: "How to work with prototype design with adobe xd featuring tools",
    description:
      "Another key goal of our training workshops are to produce 'Educators' who will be experts dealing with children with special needs much more proficiently. As we all know due to a paucity of professional in the field of special education, we are much more dependent on immediate parents, family members or lay individuals from the community. Therefore, the primary mentors in our program are parents, theater artists, travel experts and so on, just people from our community without a specialized training in special education or speech and language therapy or occupational therapy. Our program focuses on training the family members and other mentor-participants to teach children with special needs under the guidance of a professional. So, we can say this is a platform for learning not only for the children or their families but also for the community people too. Shumpun believes that her dissemination of knowledge goes beyond her door.",
    path: "/",
  },
  {
    image: blogImage3,
    title: "How to work with prototype design with adobe xd featuring tools",
    description:
      "Another key goal of our training workshops are to produce 'Educators' who will be experts dealing with children with special needs much more proficiently. As we all know due to a paucity of professional in the field of special education, we are much more dependent on immediate parents, family members or lay individuals from the community. Therefore, the primary mentors in our program are parents, theater artists, travel experts and so on, just people from our community without a specialized training in special education or speech and language therapy or occupational therapy. Our program focuses on training the family members and other mentor-participants to teach children with special needs under the guidance of a professional. So, we can say this is a platform for learning not only for the children or their families but also for the community people too. Shumpun believes that her dissemination of knowledge goes beyond her door.",
    path: "/",
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
          title="Popular blog post we updated"
          text="Updete newsfeed blog"
        />
        <Box as={Masonry} options={masonryOptions} sx={styles.blogWrapper}>
          {BLOG_DATA.map(
            ({ image, title, description, path, linkLabel }, index) => (
              <BlogCard
                key={index}
                image={image}
                title={title}
                description={description}
                path={path}
                linkLabel={linkLabel}
              />
            )
          )}
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
