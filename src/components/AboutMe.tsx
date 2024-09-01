import { Card, Col, Row, Typography } from "antd";

const { Paragraph } = Typography;

const AboutMe = () => {
  return (
    <Row className="mb-8">
      <Col span={24}>
        <Card title="ABOUT ME" bordered={false}>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={12}>
              <Paragraph className="text-justify">
                Lorem ipsum dolor sit amet. Aut expedita quos sed impedit magnam
                et inventore quis sed galisum quod qui culpa corporis. Eum minus
                vitae a nihil suscipit qui minus quam in aliquid neque eos rerum
                consequatur sed officiis corporis rem delectus esse. In
                consequatur sapiente sit similique omnis ut distinctio inventore
                rem officia repudiandae eum quia dignissimos. Cum consequuntur
                deleniti in consequuntur minima eum quos voluptatem sed error
                sint. A fugiat impedit ut sunt iusto est quas explicabo non
                adipisci modi a rerum harum sed eius saepe eum aperiam
                consectetur.
              </Paragraph>
            </Col>
            <Col xs={24} md={12}>
              <Paragraph className="text-justify">
                Lorem ipsum dolor sit amet. Aut expedita quos sed impedit magnam
                et inventore quis sed galisum quod qui culpa corporis. Eum minus
                vitae a nihil suscipit qui minus quam in aliquid neque eos rerum
                consequatur sed officiis corporis rem delectus esse. In
                consequatur sapiente sit similique omnis ut distinctio inventore
                rem officia repudiandae eum quia dignissimos. Cum consequuntur
                deleniti in consequuntur minima eum quos voluptatem sed error
                sint. A fugiat impedit ut sunt iusto est quas explicabo non
                adipisci modi a rerum harum sed eius saepe eum aperiam
                consectetur.
              </Paragraph>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export { AboutMe };
