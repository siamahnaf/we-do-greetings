
//Layout
import Layout from "@/Layout";

//Components
import Hero from "@/Sections/Hero";
import About from "@/Sections/About";
import Achievement from "@/Sections/Achievement";
import Service from "@/Sections/Service";
import Video from "@/Sections/Video";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Achievement />
      <Service />
      <Video />
    </Layout>
  );
};

export default Home;