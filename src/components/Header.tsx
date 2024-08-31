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
    { key: 1, label: "About Me", icon: <SmileFilled /> },
    { key: 2, label: "Skills", icon: <ToolFilled /> },
    { key: 3, label: "Projects", icon: <ExperimentFilled /> },
    { key: 4, label: "Contact", icon: <MailFilled /> },
    {
      key: 5,
      label: (
        <Button
          type="primary"
          shape="round"
          icon={<DownloadOutlined />}
          href={cv}
          target="_blank"
        >
          Resume
        </Button>
      ),
    },
  ];
  return (
    <Layout.Header className="bg-slate-50 justify-between fixed z-10 w-full">
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
