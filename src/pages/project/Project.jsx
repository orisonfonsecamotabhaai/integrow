import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ButtonCircular from "../../components/button/ButtonCircular";
import TableList from "./components/TableList";

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

const ContentButtons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 100px;
`;

const Project = () => {
  return (
    <div>
      <Content>
       <TableList />
      </Content>
      <ContentButtons>
        {data.map((el, index) => (
          <NavLink to={el.path}>
            <ButtonCircular
              height={40}
              width={200}
              borderRadius={10}
              backgroundColor="white"
              title={el.title}
              key={index}
              fontSize={15}
              color="#72c029"
              path={el.path}
            />
          </NavLink>
        ))}
      </ContentButtons>
    </div>
  );
};

export default Project;

const data = [
  { title: "Add Project", path: "/add-project" },
  { title: "Update Project", path: "#" },
  { title: "Delete Project", path: "#" },
  { title: "Save", path: "#" },
];
