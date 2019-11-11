import React from 'react'
import styled from 'styled-components';

const Heading = styled.h1(() => ({
  color: 'red'
}))

const Home = () => (
  <div>
    <Heading>Learn React</Heading>
  </div>
)

export default Home
