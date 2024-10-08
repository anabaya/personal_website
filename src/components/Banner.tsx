import banner from "@/assets/banner.jpg";
import { Col, Row, Space } from "antd";
import { Typography } from "antd";
import type { CSSProperties } from "react";

const { Title } = Typography;
const titleStyle: CSSProperties = {
  color: "white",
  position: "relative",
  zIndex: 2,
};

const Banner = () => {
  return (
    <Row>
      <Col
        className="relative text-center min-h-96 mt-8 border content-center bg-cover bg-center grayscale"
        span={24}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${banner})`,
            opacity: 0.6,
            zIndex: 1,
          }}
        />
        <div
          className="absolute inset-0 bg-black"
          style={{
            opacity: 0.3,
            zIndex: 1,
          }}
        />
        <Space direction="vertical" className=" z-2">
          <Title style={titleStyle}>Anabel Delaporte</Title>
          <Title style={titleStyle} level={3}>
            Data Scientist
          </Title>
        </Space>
      </Col>
    </Row>
  );
};

export { Banner };
