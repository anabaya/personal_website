import audioCockpitAnalyzer from "@/assets/Audio_Cockpit_Analyzer_Demo.mp4";
import annotationsBlender from "@/assets/annotations_scene_blender.png";
import demoSnake from "@/assets/demo-snake.mp4";
import menuSnake from "@/assets/menu-snake.mp4";
import sceneBlender from "@/assets/scene_blender.png";
import { Card, Carousel, Col, Image, Row, Typography } from "antd";

const { Paragraph } = Typography;

const Projects = () => {
  return (
    <Row className="mb-8">
      <Col span={24}>
        <div className="absolute -top-20 -z-10" id="projects" />
        <Card title="PROJETS" bordered={false}>
          <Row gutter={[16, 16]} className="mb-8">
            <Col xs={24} md={12}>
              <Card
                title="Outil de séparation de sources audio"
                classNames={{ header: "bg-amber-200" }}
              >
                <Paragraph className="text-justify">
                  Dans le cadre d'un projet visant à aider les pilotes HSI
                  (malentendants ou ayant des problèmes d'élocution) à voler en
                  autonomie, j'ai développé un prototype d'outil d'écoute des
                  bruits du cockpit. Pour cela, j'ai créé une interface web avec
                  Streamlit pour générer des datasets d'audios complexes et
                  modulables. Cette interface permettait également d'entraîner
                  les différents modules de la chaîne de traitement mise en
                  place et de visualiser les résultats sous forme d'audios ou
                  d'images.
                </Paragraph>
                {/* biome-ignore lint/a11y/useMediaCaption: */}
                <video className="max-w-1xl mx-auto" controls>
                  <source src={audioCockpitAnalyzer} type="video/mp4" />
                </video>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card
                title="Jeux vidéos adaptés aux enfants malvoyants"
                classNames={{ header: "bg-amber-200" }}
              >
                <Paragraph className="text-justify">
                  Dans le cadre de mon stage en laboratoire, j'ai travaillé en
                  collaboration avec des thérapeutes pour développer des jeux
                  vidéos adaptés aux enfants malvoyants. Ces jeux avaient pour
                  objectif d'être intégrés aux scéances thérapeutiques de ces
                  derniers, notamment pour les aider à mieux se déplacer et
                  analyser leur environnement. Chaque partie était liée à un
                  enfant et permettait d'extraire des informations pour ensuite
                  générér des graphiques à destination des thérapeutes.
                </Paragraph>
                <Carousel
                  arrows
                  infinite={false}
                  className="bg-gray-100 text-center my-auto"
                >
                  <div className="p-6">
                    {/* biome-ignore lint/a11y/useMediaCaption: */}
                    <video className="max-w-1xl mx-auto" controls>
                      <source src={menuSnake} type="video/mp4" />
                    </video>
                  </div>
                  <div className="p-6">
                    {/* biome-ignore lint/a11y/useMediaCaption: */}
                    <video className="max-w-1xl mx-auto" controls>
                      <source src={demoSnake} type="video/mp4" />
                    </video>
                  </div>
                </Carousel>
              </Card>
            </Col>
          </Row>
          <Row gutter={[16, 16]} className="mb-8">
            <Col xs={24} md={12}>
              <Card
                title="Conversion de voix à l'aide de Deep Learning"
                classNames={{ header: "bg-amber-200" }}
              >
                <Paragraph className="text-justify">
                  Ce projet visait à mieux comprendre le fonctionnement des GANs
                  (Generative Adversarial Networks) en adaptant une application
                  existante de conversion de voix anglaise au français. Plus
                  précisément, nous avons travaillé avec StarGANv2-VC, une
                  variante avancée de GAN pour la conversion de voix.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card
                title="Application de gestion de bibliothèque en C++"
                classNames={{ header: "bg-amber-200" }}
              >
                <Paragraph className="text-justify">
                  Le projet avait pour but de concevoir et développer une
                  application permettant à un utilisateur de se connecter à un
                  système de gestion de bibliothèque. Les fonctionnalités
                  principales comprenaient la visualisation et la réservation de
                  livres, ainsi que des fonctionnalités administratives
                  permettant d'ajouter, de supprimer et de gérer diverses
                  ressources telles que les livres, les films, les cassettes VHS
                  et les magazines. Une interface avec Qt a aussi été développée
                  pour une utilisation plus simple.
                </Paragraph>
              </Card>
            </Col>
          </Row>
          <Row gutter={[16, 16]} className="mb-8">
            <Col xs={24} md={12}>
              <Card
                title="Dispositif de reconnaissance de balles"
                classNames={{ header: "bg-amber-200" }}
              >
                <Paragraph className="text-justify">
                  Pour la Coupe de Robotique de France, j'ai développé un
                  système pour identifier et compter les balles en mousse rouge
                  dans un panier, puis afficher le nombre. Bien que des méthodes
                  plus simples existaient, j'ai opté pour une solution basée sur
                  la vision par ordinateur pour renforcer mes compétences dans
                  ce domaine. J'ai utilisé Blender et des scripts Python pour
                  créer des scènes aléatoires de balles rouges avec des
                  annotations automatiques. Ces images et annotations ont
                  ensuite servi à entraîner YOLOv3, un algorithme de détection
                  d'objets.
                </Paragraph>
                <Carousel
                  arrows
                  infinite={false}
                  className="bg-gray-100 text-center my-auto"
                >
                  <div className="p-6">
                    <Image src={sceneBlender} className="max-w-xs" />
                  </div>
                  <div className="p-6">
                    <Image src={annotationsBlender} className="max-w-xs" />
                  </div>
                </Carousel>
              </Card>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export { Projects };
