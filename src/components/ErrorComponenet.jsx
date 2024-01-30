import { AlertIcon,Alert } from '@chakra-ui/react'
import React from 'react'

const ErrorComponenet = ({message}) => {
  return(
  <Alert status="error" position={"fixed"} >
    <AlertIcon/>
    {message}
  </Alert>)
};

export default ErrorComponenet;