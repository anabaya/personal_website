import { Col, Row } from "antd";
import profile from "@/assets/profile.jpeg";

const Profile = () => {
  return (
    <Row>
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
