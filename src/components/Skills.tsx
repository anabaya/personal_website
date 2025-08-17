import { Card, Col, Row } from "antd";
import type { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

const Skills = () => {
  const optionsHardSkills: ApexOptions = {
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
  const optionsSoftSkills: ApexOptions = {
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
          y: 150,
        },
        {
          x: "Machine Learning",
          y: 220,
        },
        {
          x: "Pytorch",
          y: 130,
        },
        {
          x: "TensorFlow",
          y: 130,
        },
        {
          x: "Streamlit",
          y: 100,
        },
        {
          x: "Computer Vision",
          y: 200,
        },
        {
          x: "C",
          y: 50,
        },
        {
          x: "SQLite",
          y: 100,
        },
        {
          x: "Git",
          y: 150,
        },
        {
          x: "C++",
          y: 75,
        },
        {
          x: "VHDL",
          y: 50,
        },
        {
          x: "SQL",
          y: 150,
        },
        {
          x: "AzureDevops",
          y: 100,
        },
        {
          x: "Informatica MDM/IDQ",
          y: 150,
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
          x: "Joyeuse",
          y: 350,
        },
        {
          x: "Proactive",
          y: 250,
        },
        {
          x: "Investie",
          y: 300,
        },
        {
          x: "Rigoureuse",
          y: 200,
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
