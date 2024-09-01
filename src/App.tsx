import { Card, Col, Layout, Row, Typography } from "antd";
import "antd/dist/reset.css"; // Importation des styles d'Ant Design
import "./tailwind.css";
import {
  Banner,
  Header,
  Profile,
  AboutMe,
  Skills,
  Projects,
  Contact,
} from "./components";

const { Content, Footer } = Layout;

function App() {
  return (
    <Layout className="min-h-screen relative">
      <Header />
      <Content className="mb-8">
        <Banner />
        <div className="max-w-6xl mx-auto w-full px-8">
          <Profile />
          <AboutMe />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </Content>
    </Layout>
  );
}

export default App;
