import React from 'react'
import styled from 'react-emotion'

const Container = styled('div')`
  width: 100%;
  display: flex;
  font-family: sans-serif;
  border-left: 5px solid #64DD17;
  margin-bottom: 15px;
  transition: 0.2s;

  &:hover {
    background: #eee;
  }
`

const AmountLabel = styled('div')`
  font-size: 22px;
  font-weight: bold;
  width: 100px;
  padding-left: 10px;
`

const DescriptionLabel = styled('div')`
  flex: 0.8;
  font-size: 22px;
`

const DateTimeLabel = styled('div')`
  font-size: 22px;
  color: #888;
  flex: 0.2;
`

export default (props) => (
  <Container>
    <AmountLabel>{`+ 500$`}</AmountLabel>
    <DescriptionLabel>Receive weekly money from mom</DescriptionLabel>
    <DateTimeLabel>1:37 30/8/2560</DateTimeLabel>
  </Container>
)
