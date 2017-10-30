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
