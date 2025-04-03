import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      {/* 他のセクションは順次追加していきます */}
    </Layout>
  );
}
