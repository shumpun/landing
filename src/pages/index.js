import React from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "sections/banner";
import Services from "sections/services";
import Jackpot from "sections/jackpot";
import CallToAction from "sections/call-to-action";
import Featured from "sections/featured";
import Pricing from "sections/pricing";
import News from "sections/news";
import Testimonials from "sections/testimonials";
import Events from "sections/events";
import FAQ from "sections/faq";
import Subscribe from "sections/subscribe";
import { firestore, postToJSON } from "../../lib/firebase";
// import Gallery from "sections/gallery";

export async function getServerSideProps() {
  const eventsQuery = firestore.collection("events").orderBy("date", "desc");
  const newsQuery = firestore.collection("news").orderBy("date", "desc");
  const testimonialsQuery = firestore
    .collection("testimonials")
    .orderBy("date", "desc");

  const events = (await eventsQuery.get()).docs.map(postToJSON);
  const news = (await newsQuery.get()).docs.map(postToJSON);
  const testimonials = (await testimonialsQuery.get()).docs.map(postToJSON);

  return {
    props: { events, news, testimonials },
  };
}

export default function IndexPage({ events, news, testimonials }) {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Shumpun Foundation" />
          <Banner />
          <CallToAction />
          <Featured />
          <News news={news} />
          <Testimonials testimonials={testimonials} />
          <Events events={events} />
          <FAQ />
          <Subscribe />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
