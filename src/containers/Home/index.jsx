import { Flex, Text, Input, Button, FormLabel, Stack  }  from '@chakra-ui/react'
import classes from './home.scss'
export const Home = () => {
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
                focusBorderColor="pink.500"
                bgColor="gray.900" 
                _hover={{
                    bgColor:'gray.900'
                  }}
                />
                <FormLabel color="pink.400" htmlFor="password">senha</FormLabel>
                <Input 
                name="password" 
                type="password" 
                focusBorderColor="pink.500"
                bgColor="gray.900" 
                _hover={{
                    bgColor:'gray.900'
                  }}
                />
                <Button  
                gap="10px" 
                colorScheme="pink"
                colorScheme='pink' 
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