import { Layout } from "antd";
import "antd/dist/reset.css"; // Importation des styles d'Ant Design
import "./tailwind.css";
import { Banner, Header, Profile } from "./components";

const { Content, Footer } = Layout;

function App() {
  return (
    <Layout className="min-h-screen relative">
      <Header />
      <Content>
        <Banner />
        <div className="max-w-7xl mx-auto w-full">
          <Profile />
        </div>
      </Content>
      <Footer className="max-w-7xl mx-auto w-full">va</Footer>
    </Layout>
  );
}

export default App;
