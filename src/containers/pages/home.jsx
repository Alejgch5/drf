import BlogList from "components/home/BlogList";
import CTA from "components/home/CTA";
import Features from "components/home/Features";
import Header from "components/home/Header";
import Incentives from "components/home/Incentives";
import LogoCloud from "components/home/LogoCloud";
import UseCases from "components/home/UseCases";
import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from 'react'
import ScrollReveal from "components/ScrollReveal";
import ParallaxWrapper from "components/ParallaxWrapper";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Layout>
      <Navbar />
      <div className="pt-20">
        <ParallaxWrapper>
          <Header />
        </ParallaxWrapper>

        <ScrollReveal delay={0.2}>
          <Incentives />
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <Features />
        </ScrollReveal>

        <ScrollReveal delay={0.6}>
          <CTA />
        </ScrollReveal>
      </div>
      <Footer />
    </Layout>
  );
}

export default Home;
