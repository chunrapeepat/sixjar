import styled from 'react-emotion'

export const constantCreator = (namespace, name) => {
  return `${namespace}/${name}`
}

export const actionCreator = (type, payload) => {
  return {
    type,
    payload,
  }
}

export const Padding = styled('div')`
  padding: 21px;
`

export const Heading = styled('h1')`
  margin: 0;
  font-family: sans-serif;
  display: block;
  font-size: 25px;
  font-weight: 200;
`

export const Input = styled('input')`
  display: block;
  width: calc(100% - 280px);
  outline: none;
  font-size: 18px;
  margin-top: 20px;
  background: #fafafa;
  border: 1px solid #ccc;
  border-radius: 7px;
  padding: 15px 20px;
`

export const Select = styled('select')`
  font-size: 18px;
  margin-top: 20px;
  display: block;
  outline: none;
`
