import { useState, useEffect } from 'react'
import { useToast } from '@chakra-ui/react'
import { useStoreActions } from 'easy-peasy'
import { Flex, Input, Button, FormLabel, Stack  }  from '@chakra-ui/react'
import { useNavigate  } from "react-router-dom";
import classes from './home.scss'

export const Home = () => {
  const toast = useToast();
  const history =  useNavigate();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const setLoggedIn = useStoreActions(({ user }) => user.setLoggedIn);



  useEffect(() => {
    setLoggedIn(false)
  },[])
  const authenticate = () => {
    if(email === "admin" && password === "123"){
      history('/paises')
      setLoggedIn(true)
    
      toast({
        title: 'Login realizado com sucesso.',
        status: 'success',
        duration: 9000,
        isClosable: true,
    })
    }
  }
  
  
    return (
        <Flex 
        w="100vw"
        h="100vh" 
        align="center" 
        bg="gray.800"
        justify="center"
      >
        <Flex 
        as="form" 
        width="100%" 
        maxWidth={360}
        bg="gray.700"
        p="8"
        borderRadius={8}
        border
        flexDir="column"
      >
          <Stack spacing="4">
          <FormLabel color="pink.400" htmlFor="email">E-mail</FormLabel>
                <Input 
                name="email" 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                focusBorderColor="pink.500"
                bgColor="gray.600" 
                _focus={{
                    bgColor:'white'
                  }}
                />
                <FormLabel color="pink.400" htmlFor="password">Senha</FormLabel>
                <Input 
                name="password" 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                focusBorderColor="pink.500"
                bgColor="gray.600" 
                _focus={{
                    bgColor:'white'
                  }}
                />
                <Button  
                gap="10px" 
                onClick={authenticate}
                colorScheme="pink"
                variant='solid'
                color="white" 
                className={classes.buttonCenter}>
                    Logar-se
                </Button>
            </Stack>
        </Flex>
            
        </Flex>

    )
}