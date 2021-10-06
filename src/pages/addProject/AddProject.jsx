import { Button, Card, Col, Row, Upload,Input, Select  } from "antd";
import React, { useState } from "react";
import GreenBorder from "../../components/greenBorder/GreenBorder";
import "./addproject.css";
import Title from "../../components/title/Title";
import ButtonCircular from "../../components/button/ButtonCircular";
import Rera from "./components/Rera";
import NonRera from "./components/NonRera";

const { Option } = Select;

export const AddProject = () => {
  const [isRegistered, setIsRegistered] = useState(null);

  const onRegister = (value) => {
    setIsRegistered(value);
  };

  return (
    <div>
      <img
        className="image"
        width="70%"
        height="500px"
        src="/images/business-man-suit-pointing-finger-over-gray-background-97782342.jpg"
      />
      <GreenBorder />
      <Card className="card">
        <Title
          title="Welcome To INTEGROW"
          fontSize={40}
          fontWeight="bold"
          fontColor="black"
        />
        <Title
          title="Please Enter Project Details"
          fontSize={32}
          fontWeight="bold"
          fontColor="black"
          marginTop={-20}
        />
        <Input size="large" placeholder="Developer Organization" />
        <br />
        <br />
        <Row>
          <Col span={8}>
            <Title
              title="Organization type based on"
              fontSize={25}
              fontColor="black"
            />
          </Col>
          <Col span={8}>
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Company"
              optionFilterProp="children"
              size="large"
            >
              <Option value="jack">Jack</Option>
            </Select>
          </Col>


          {isRegistered ? (
            <Col span={8}>
              <Input size="large" placeholder="CIN" />
            </Col>
          ) : null}


        </Row>
        <Input size="large" placeholder="Name of referral" />
        <br /> <br />
        <Row>
          <Col>
            <Title
              title="Is the Project Rera Registered?"
              fontSize={25}
              fontColor="#aaaaaa"
            />
          </Col>
          &nbsp;&nbsp;&nbsp;
          <Col span={8}>
            <ButtonCircular
              onClick={() => onRegister("rera")}
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
              onClick={() => onRegister("non-rera")}
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


        {isRegistered === "rera" ? (
         <Rera />
        ) : null}
        <br />

        {isRegistered === "non-rera" ? (
          <NonRera />
        ) : null}
        
      </Card>
    </div>
  );
};
