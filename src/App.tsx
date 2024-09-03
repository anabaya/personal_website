import { ConfigProvider, Layout } from "antd";
import "antd/dist/reset.css"; // Importation des styles d'Ant Design
import "./tailwind.css";
import "./styles.css";
import {
  AboutMe,
  Banner,
  Contact,
  Header,
  Profile,
  Projects,
  Skills,
} from "./components";

const { Content } = Layout;

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#faad14",
        },
      }}
    >
      <Layout className="min-h-screen relative">
        <Header />
        <Content className="mb-8">
          <Banner />
          <div className="max-w-6xl mx-auto w-full px-0 sm:px-8">
            <Profile />
            <AboutMe />
            <Skills />
            <Projects />
            <Contact />
          </div>
        </Content>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
