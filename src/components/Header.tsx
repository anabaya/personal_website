import cv from "@/assets/CV_Anabel_Delaporte.pdf";
import {
  DownloadOutlined,
  ExperimentFilled,
  MailFilled,
  SmileFilled,
  ToolFilled,
} from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";

const Header = () => {
  const menuItems = [
    {
      key: 1,
      label: (
        <a className="text-black hover:text-amber-400" href="#about-me">
          <SmileFilled className="mr-1" />
          Presentation
        </a>
      ),
    },
    {
      key: 2,
      label: (
        <a className="text-black hover:text-amber-400" href="#skills">
          <ToolFilled className="mr-1" />
          Competences
        </a>
      ),
    },
    {
      key: 3,
      label: (
        <a className="text-black hover:text-amber-400" href="#projects">
          <ExperimentFilled className="mr-1" />
          Projets
        </a>
      ),
    },
    {
      key: 4,
      label: (
        <a className="text-black hover:text-amber-400" href="#contact">
          <MailFilled className="mr-1" />
          Contact
        </a>
      ),
    },
    {
      key: 5,
      label: (
        <Button
          type="primary"
          shape="round"
          icon={<DownloadOutlined />}
          href={cv}
          target="_blank"
          className="text-black hover:text-white"
        >
          Resume
        </Button>
      ),
    },
  ];
  return (
    <Layout.Header className="bg-white justify-between fixed z-50 w-full border-b-4 border-amber-400">
      <Menu
        mode="horizontal"
        items={menuItems}
        className="bg-transparent"
        style={{ flex: 1, minWidth: 0 }}
      />
    </Layout.Header>
  );
};

export { Header };
