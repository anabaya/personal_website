import { Card, Col, Row } from "antd";
import Chart from "react-apexcharts";

const Skills = () => {
  const optionsHardSkills = {
    chart: {
      height: 350,
      type: "treemap",
      toolbar: {
        show: false,
      },
    },
    colors: ["#faad14"],
    tooltip: {
      enabled: false,
    },
  };
  const optionsSoftSkills = {
    chart: {
      height: 350,
      type: "treemap",
      toolbar: {
        show: false,
      },
    },
    colors: ["#0D9488"],
    tooltip: {
      enabled: false,
    },
  };
  const seriesHardSkills = [
    {
      name: "series-1",
      data: [
        {
          x: "Python",
          y: 300,
        },
        {
          x: "IA",
          y: 260,
        },
        {
          x: "Machine Learning",
          y: 260,
        },
        {
          x: "Pytorch",
          y: 160,
        },
        {
          x: "TensorFlow",
          y: 160,
        },
        {
          x: "Streamlit",
          y: 200,
        },
        {
          x: "Computer Vision",
          y: 230,
        },
        {
          x: "C",
          y: 70,
        },
        {
          x: "SQLite",
          y: 150,
        },
        {
          x: "Git",
          y: 150,
        },
        {
          x: "C++",
          y: 100,
        },
        {
          x: "VHDL",
          y: 100,
        },
      ],
    },
  ];
  const seriesSoftSkills = [
    {
      name: "series-1",
      data: [
        {
          x: "Curieuse",
          y: 200,
        },
        {
          x: "Travail d'équipe",
          y: 130,
        },
        {
          x: "Autonome",
          y: 200,
        },
        {
          x: "Débrouillarde",
          y: 100,
        },
        {
          x: "Entreprenante",
          y: 150,
        },
        {
          x: "Joyeuse",
          y: 350,
        },
      ],
    },
  ];

  return (
    <Row className="mb-8">
      <Col span={24}>
        <div className="absolute -top-20 -z-10" id="skills" />
        <Card title="COMPETENCES" bordered={false}>
          <Row gutter={[24, 24]}>
            <Col xs={24} md={12} className="mixed-chart">
              <Chart
                options={optionsHardSkills}
                series={seriesHardSkills}
                type="treemap"
                width="100%"
              />
            </Col>
            <Col xs={24} md={12} className="mixed-chart">
              <Chart
                options={optionsSoftSkills}
                series={seriesSoftSkills}
                type="treemap"
                width="100%"
              />
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export { Skills };
