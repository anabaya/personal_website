import banner from "@/assets/banner.jpg";
import { Col, Row, Space } from "antd";
import { Typography } from "antd";

const { Title } = Typography;

const Banner = () => {
  return (
    <Row>
      <Col
        className="text-center min-h-96 border content-center bg-cover bg-center grayscale"
        span={24}
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <Space direction="vertical">
          <Title>Anabel Delaporte</Title>
          <Title level={3}>Data Scientist</Title>
        </Space>
      </Col>
    </Row>
  );
};

export { Banner };
