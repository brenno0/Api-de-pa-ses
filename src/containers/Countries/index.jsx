import { useState } from 'react'
import { Flex,Input,Icon, Image,Container, Text,Box, CircularProgress } from '@chakra-ui/react'
import { RiSearchLine } from 'react-icons/ri'
import  CountriesApi  from '../../api/countries'


export const Countries = () => {

    const [countryInfo,setCountryInfo] = useState([]);
    const [loading, setLoading] = useState(false)
    const searchCountries = (name) => {
        if(name.length === 0){
            setCountryInfo([])
        }
        CountriesApi.country(name)
        .then((data) => {
        if(data.data.status !== 404){
            setCountryInfo(data.data);
        }else{
            setCountryInfo([])
        }
            
        }).catch(() => {

        }).finally(() => {
            setInterval(() => {setLoading(false)},1000)
        })
    }
    
    return (
        <>
        <Flex 
        as="header"
        w="100%"
        maxWidth={1480}
        h="20"
        mx="auto"
        mt="4"
        px="6"
        align="center"
        >

        <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
        >

            <Input 
            color="gray.50" 
            variant="unstyled" 
            placeholder="Buscar países" 
            _placeholder={{color:'gray.400'}}  
            onChange={(e) => {
                searchCountries(e.target.value)
            }}
            px="4"
            mr="4"
            />
            <Icon as={RiSearchLine} fontSize="20" />
        </Flex>
        <Text ml={40} color="white"  fontSize="3xl">Pesquisa de países</Text>

        
    </Flex>

            {
                loading === true ? (
                    <Container>
        
                            <Flex
                            width="100%" 
                            maxWidth={600}
                            mt={32}
                            minH={200}
                            p="8"
                            direction="row"
                            borderRadius={8}
                            >
                        <CircularProgress  isIndeterminate color='pink.500' />
                        </Flex>
                    </Container>
                ): ( 
                    countryInfo?.map(country => (
                
                        <Container key={country?.name}>
        
                            <Flex
                            width="100%" 
                            maxWidth={600}
                            bg="gray.800"
                            mt={12}
                            minH={200}
                            p="8"
                            direction="row"
                            borderRadius={8}
                            >
                            <Box
                            as="div"
                            w="40%"
                            >
                                <Image src={country.flag} />
                            </Box>
                            <Box
                            as="div"
                            w="50%"
                            >
                               <Text align="center" fontSize="2xl" color="white">País:  {country?.name} </Text> 
                               <Text align="center" fontSize="md" color="white">Região:  {country?.subregion} </Text> 
                               <Text align="center" fontSize="md" color="white">População:  {country?.population} </Text> 
                               <Text align="center" fontSize="md" color="white">Capital:  {country?.capital} </Text> 
                               <Text align="center" fontSize="md" color="white">Área:  {country?.area}KM </Text> 
        
                            </Box>
                        </Flex>
                    </Container>
                    ))
                )
            }
   
    </>
    )
   
}