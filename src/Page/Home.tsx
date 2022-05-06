import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Headers = styled.div`
  display: grid;
  row-gap: 20px;
  text-align: center;
  background-color: ${(props) => props.theme.bgColor};
  a {
    border-radius: 50px;
    background-color: ${(props) => props.theme.accentColor};
    padding: 10px;
    font-size: 24px;
    text-decoration: unset;
    color: ${(props) => props.theme.textColor};
  }
`;

const Home = () => {
  return (
    <Headers>
      <Link to="/">홈</Link>
      <Link to="/circle">동그라미</Link>
      <Link to="/form">FORM</Link>
      <Link to="/coins">COIN</Link>
      <Link to="/toDoList">TO DO LIST</Link>
      <Link to="/trello">TRELLO</Link>
      <Link to="/animations">ANIMATIONS</Link>
      <Link to="/animations2">ANIMATIONS2</Link>
      <Link to="/animations3">ANIMATIONS3</Link>
      <Link to="/animations4">ANIMATIONS4</Link>
    </Headers>
  );
};

export default Home;
