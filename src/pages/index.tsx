
//Layout
import Layout from "@/Layout";

//Components
import Hero from "@/Sections/Hero";
import About from "@/Sections/About";
import Achievement from "@/Sections/Achievement";
import Service from "@/Sections/Service";
import Video from "@/Sections/Video";
import Book from "@/Sections/Book";
import Memory from "@/Sections/Memory";
import Happiness from "@/Sections/Happiness";
import Testimonial from "@/Sections/Testimonial";
import Vendor from "@/Sections/Vendor";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Achievement />
      <Service />
      <Video />
      <Book />
      <Memory />
      <Happiness />
      <Testimonial />
      <Vendor />
    </Layout>
  );
};

export default Home;