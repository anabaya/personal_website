import profile from "@/assets/profile.jpeg";
import { Col, Row } from "antd";

const Profile = () => {
  return (
    <Row className="mb-36">
      <Col span={24} className="border">
        <div className="relative w-64 mx-auto">
          <div
            className="absolute w-64 h-64 rounded-full border-white border-8 -top-32 bg-cover bg-center"
            style={{
              backgroundImage: `url(${profile})`,
            }}
          />
        </div>
      </Col>
    </Row>
  );
};

export { Profile };
