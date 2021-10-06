import { Button, Col, Row, Upload, Input } from "antd";
import Title from "../../../components/title/Title";
import ButtonCircular from "../../../components/button/ButtonCircular";
import { UploadOutlined } from "@ant-design/icons";

const NonRera = () => (
  <>
    <Input size="large" placeholder="Please Enter Project Name" />
    <br /> <br />
    <Row>
      <Col span={11}>
        <Input size="large" placeholder="CTS Number" />
      </Col>
      <Col span={2}></Col>
      <Col span={11}>
        <Input size="large" placeholder="PIN Code" />
      </Col>
    </Row>
    <br /> <br />
    <Title
      title="Please Upload Below Mentioned Documents"
      fontSize={25}
      fontColor="black"
    />
    <Row
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Col>
        <Title
          title="&nbsp;&nbsp;&nbsp;  Corporate Plan "
          fontSize={20}
          fontColor="black"
          marginTop={10}
        />
      </Col>
      &nbsp;&nbsp;&nbsp;
      <Col>
        <Upload>
          <Button
            style={{ backgroundColor: "#72c029", borderRadius: 20 }}
            icon={<UploadOutlined />}
          >
            Upload
          </Button>
        </Upload>
      </Col>
      &nbsp;&nbsp;&nbsp;
      <Col>
        <Title
          title="&nbsp;&nbsp;Design Plan"
          fontSize={20}
          marginTop={10}
          fontColor="black"
        />
      </Col>
      &nbsp;&nbsp;&nbsp;
      <Col>
        <Upload>
          <Button
            style={{ backgroundColor: "#72c029", borderRadius: 20 }}
            icon={<UploadOutlined />}
          >
            Upload
          </Button>
        </Upload>
      </Col>
    </Row>
    <Row
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Col>
        <Title
          title="Project Cash Flow "
          fontSize={20}
          fontColor="black"
          marginTop={10}
        />
      </Col>
      &nbsp;&nbsp;&nbsp;
      <Col>
        <Upload>
          <Button
            style={{ backgroundColor: "#72c029", borderRadius: 20 }}
            icon={<UploadOutlined />}
          >
            Upload
          </Button>
        </Upload>
      </Col>
      &nbsp;&nbsp;&nbsp;
      <Col>
        <Title
          title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Any Other"
          fontSize={20}
          marginTop={10}
          fontColor="black"
        />
      </Col>
      &nbsp;&nbsp;&nbsp;
      <Col>
        <Upload>
          <Button
            style={{ backgroundColor: "#72c029", borderRadius: 20 }}
            icon={<UploadOutlined />}
          >
            Upload
          </Button>
        </Upload>
      </Col>
    </Row>
    <Row
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Col>
        <Title
          title="Project Cash Flow "
          fontSize={20}
          fontColor="black"
          marginTop={10}
        />
      </Col>
      &nbsp;&nbsp;&nbsp;
      <Col>
        <Upload>
          <Button
            style={{ backgroundColor: "#72c029", borderRadius: 20 }}
            icon={<UploadOutlined />}
          >
            Upload
          </Button>
        </Upload>
      </Col>
      &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
      <ButtonCircular
        title="Submit"
        backgroundColor="#72c029"
        height={33}
        width={200}
        fontColor="black"
        fontSize={16}
        borderRadius={20}
      />
    </Row>
  </>
);

export default NonRera;
