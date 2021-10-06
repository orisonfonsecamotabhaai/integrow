import { Button, Col, Row, Upload,Input } from "antd";
import Title from "../../../components/title/Title";
import ButtonCircular from "../../../components/button/ButtonCircular";

const Rera = () =>(
<>
<Input size="large" placeholder="Please Enter RERA ID" />
<br /> <br />
<Row>
  <Col>
    <Title
      title="Any Changes in RERA Details?"
      fontSize={25}
      fontColor="#aaaaaa"
    />
  </Col>
  &nbsp;&nbsp;&nbsp;
  <Col span={8}>
    <ButtonCircular
      title="Yes"
      borderRadius={0}
      backgroundColor="#dddddd"
      height={50}
      width={200}
      color="black"
      fontSize={20}
    />
  </Col>
  &nbsp;&nbsp;&nbsp;
  <Col>
    <ButtonCircular
      title="No"
      borderRadius={0}
      backgroundColor="#dddddd"
      height={50}
      width={200}
      color="black"
      fontSize={20}
    />
  </Col>
</Row>
</>
)



export default Rera;