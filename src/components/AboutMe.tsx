import { Card, Col, Row, Typography } from "antd";

const { Paragraph } = Typography;

const AboutMe = () => {
  return (
    <Row className="mb-8">
      <Col span={24}>
        <div className="absolute -top-20 -z-10" id="about-me" />
        <Card title="PRESENTATION" bordered={false}>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={12}>
              <Paragraph className="text-justify">
                Je viens de finir mon cursus d'Ingénieure en Traitement du
                Signal et de l'Image, et Intelligence Artificielle, à
                l'ENSEIRB-MATMECA (Talence). Très intéressée par le Machine
                Learning, la Computer Vision et l'Intelligence Artificielle de
                manière générale, j'ai eu l'occasion de toucher à ces différents
                domaines lors de projets détaillés plus bas. Je suis impatiente
                d'approfondir mes connaissances et de relever de nouveaux défis.
              </Paragraph>
            </Col>
            <Col xs={24} md={12}>
              <Paragraph className="text-justify">
                Je suis une grande fan d'escalade, surtout de bloc, que ce soit
                en intérieur ou en extérieur quand j'en ai l'occasion. En dehors
                de ça, j'aime passer du temps en cuisine à tester toutes sortes
                de recettes de pâtes. Pour compléter ce petit tableau, j'ai un
                gros faible pour les chiens et les motos.
              </Paragraph>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export { AboutMe };
