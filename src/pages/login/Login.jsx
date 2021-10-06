import React from "react";
import Image from "../../assets/images/index";
import styled from "styled-components";
import FormContainer from "../../components/container/FormContainer";
import Title from "../../components/title/Title";
import {
  FacebookOutlined,
  TwitterOutlined,
  GooglePlusCircleFilled,
} from "@ant-design/icons";
import InputField from "../../components/input/InputField";
import { Switch } from "antd";
import ButtonCircular from "../../components/button/ButtonCircular";

const Div = styled.div`
  height: 90vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RowWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0px 10px;
`;

const Login = () => {
  return (
    <>
      <Div>
        <div>
          <img height="150" width="800" src="/images/ESDA.jpeg" />
        </div>
        <FormContainer>
          <Title
            title="Login to your account"
            fontSize={30}
            fontWeight="bold"
            fontColor="black"
          />
          <Row>
            <FacebookOutlined
              style={{ fontSize: 40, color: "#3b5998", marginLeft: -20 }}
            />
            <TwitterOutlined
              style={{ fontSize: 40, color: "#1DA1F2", marginLeft: 20 }}
            />
            <GooglePlusCircleFilled
              style={{ fontSize: 40, color: "#DB4437", marginLeft: 20 }}
            />
          </Row>
          <Title
            title="or use your email account"
            fontSize={20}
            fontWeight="bold"
            fontColor="black"
            marginTop={30}
          />
          <InputField label="Email" />
          <InputField label="Password" />
          <RowWrap style={{ marginTop: 10 }}>
            <Switch style={{ backgroundColor: "#72c029" }} defaultChecked />
            <Title
              title="Remember me"
              fontSize={15}
              fontWeight="bold"
              fontColor="black"
              marginTop={20}
            />
            <Title
              title="Forgot Password ?"
              fontSize={15}
              fontWeight="bold"
              fontColor="#72c029"
              marginTop={20}
            />
          </RowWrap>
          <ButtonCircular
            height={55}
            width={290}
            borderRadius={30}
            color="white"
            backgroundColor="#72c029"
            title="Login"
            fontSize={20}
            marginTop={10}
          />
          <RowWrap>
          <Title
              title="Don't have an account?"
              fontSize={15}
              fontWeight="bold"
              fontColor='black'
              marginTop={20}
            />
            <Title
              title="Register here"
              fontSize={15}
              fontWeight="bold"
              fontColor="#72c029"
              marginTop={20}
            />
          </RowWrap>
          <ButtonCircular
            height={40}
            width={200}
            borderRadius={20}
            color="white"
            backgroundColor="#72c029"
            title="Login as Admin"
            fontSize={17}
            marginTop={10}
          />
        </FormContainer>
      </Div>
    </>
  );
};

export default Login;
