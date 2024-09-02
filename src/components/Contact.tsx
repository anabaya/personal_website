import {
  DownloadOutlined,
  GithubFilled,
  LinkedinFilled,
  MailFilled,
} from "@ant-design/icons";
import { Button, Card, Col, Row, message, Tooltip } from "antd";
import { CopyToClipboard } from "react-copy-to-clipboard";

const buttonStyle = { width: "50px", height: "50px" };
const iconStyle = { fontSize: "30px" };

const Contact = () => {
  return (
    <Row>
      <Col span={24}>
        <div className="absolute -top-20 -z-10" id="contact" />
        <Card title="CONTACT" bordered={false}>
          <Row>
            <Col className="w-full text-center">
              <CopyToClipboard
                text="anab.del@hotmail.com"
                onCopy={() =>
                  message.success(
                    "Adresse email copiée dans le presse-papiers !",
                  )
                }
              >
                <Tooltip title="Adresse Mail">
                  <Button
                    type="primary"
                    shape="circle"
                    icon={<MailFilled style={iconStyle} />}
                    className="mx-4"
                    style={buttonStyle}
                  />
                </Tooltip>
              </CopyToClipboard>
              <a
                href="https://www.linkedin.com/in/anabel-delaporte/"
                target="_blank"
                rel="noreferrer"
              >
                <Tooltip title="Profil LinkedIn">
                  <Button
                    type="primary"
                    shape="circle"
                    icon={<LinkedinFilled style={iconStyle} />}
                    className="mx-4"
                    style={buttonStyle}
                  />
                </Tooltip>
              </a>
              <a
                href="https://github.com/anabaya"
                target="_blank"
                rel="noreferrer"
              >
                <Tooltip title="Profil GitHub">
                  <Button
                    type="primary"
                    shape="circle"
                    icon={<GithubFilled style={iconStyle} />}
                    className="mx-4"
                    style={buttonStyle}
                  />
                </Tooltip>
              </a>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export { Contact };
