import { Card } from "antd";
import React from "react";
import styled from "styled-components";
import ButtonCircular from "../../../components/button/ButtonCircular";
import "./table.css";
import Title from "../../../components/title/Title";

const Td = styled.td`
  display: flex;
  justify-content: space-between;
  border: none;
 
`;

const TDC = styled.td`
 border: none;
 border-right: 3px solid black;
 
`;

const TableList = () => (
  <Card
    style={{
      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      width: "80%",
    }}
  >
    <table>
      <tr>
        <td>
          {" "}
          <Title
            title="Project Name"
            fontSize={25}
            fontWeight="bold"
            fontColor="black"
          />
        </td>
        <td>
          <Title
            title="Project Detail"
            fontSize={25}
            fontWeight="bold"
            fontColor="black"
          />
        </td>
      </tr>
      {data.map((el, index) => (
        <tr key={index}>
          <TDC>
            <Title
              title={el.company}
              fontSize={25}
              fontWeight="bold"
              fontColor="black"
            />
          </TDC>
          <Td>
            <p style={{ textAlign: "left", fontWeight: "bold", fontSize: 20 }}>{el.description}</p>
            <ButtonCircular
              height={40}
              width={200}
              borderRadius={10}
              backgroundColor="#72c029"
              title="Project Tracker"
              fontSize={15}
              color="white"
            />
          </Td>
        </tr>
      ))}
    </table>
  </Card>
);

export default TableList;

const data = [
  {
    company: "Vistara Pvt Ltd",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing eliLorem ipsum dolor sit amet consectetur adipisicing",
  },
  {
    company: "Vistara Pvt Ltd",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing eliLorem ipsum dolor sit amet consectetur adipisicing eli",
  },
  {
    company: "Vistara Pvt Ltd",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing eliLorem ipsum dolor sit amet consectetur adipisicing eli",
  },
  {
    company: "Vistara Pvt Ltd",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing eliLorem ipsum dolor sit amet consectetur adipisicing eli",
  },
];
