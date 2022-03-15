import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom"

const Headers = styled.div`
  display: grid;
  row-gap: 20px;
  text-align: center;
  a {
    border-radius: 50px;
    background-color: turquoise;
    padding: 10px;
    font-size: 24px;
    text-decoration: unset;
    color: black;
  }
`

const Home = () => {
  return <Headers>
    <Link to="/">홈</Link>
    <Link to="/circle">동그라미</Link>
    <Link to="/form">FORM</Link>
  </Headers>
}

export default Home