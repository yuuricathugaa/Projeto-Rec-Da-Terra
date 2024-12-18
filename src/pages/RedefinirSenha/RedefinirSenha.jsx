import { Link as RouterLink } from "react-router-dom"
import { Heading, Box, Container, Link } from "@chakra-ui/react"
import { FormControl, FormLabel } from '@chakra-ui/react'
import { Input, InputGroup, Button } from "@chakra-ui/react"
import ValidSenha from '../../components/ValidarSenha/ValidSenha'

function RedefinirSenha() {
    const { senha, erro: erroSenha, eventoSenha, checkSenha } = ValidSenha();

    return (
        <>
            <Container>
                <Box textAlign={'center'} m={'80px'}>
                    <Heading color={'white'} fontWeight='bold'>Redefinir Sua Senha</Heading>
                    {erroSenha && (
                        <span style={{ color: 'white', display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: '20px' }}>{erroSenha}</span>
                    )}
                </Box>
                <Box>
                    <FormControl>
                        <FormLabel color={'white'} mt={'8px'} fontWeight='regular'>Digite uma nova senha</FormLabel>
                        <InputGroup>
                            <Input
                                onChange={eventoSenha}
                                value={senha}
                                variant='outline'
                                type={'password'}
                                backgroundColor={'#D6CFC5'}
                                fontWeight='light'
                                border={'none'}
                                boxShadow='7px 7px 10px rgba(0, 0, 0, 0.1)'
                                onBlur={checkSenha}
                            />
                        </InputGroup>
                        <FormLabel color={'white'} mt={'8px'} fontWeight='regular'>Confirme a nova senha</FormLabel>
                        <InputGroup>
                            <Input
                                variant='outline'
                                type={'password'}
                                backgroundColor={'#D6CFC5'}
                                fontWeight='light'
                                border={'none'}
                                boxShadow='7px 7px 10px rgba(0, 0, 0, 0.1)'
                            />
                        </InputGroup>
                    </FormControl>
                </Box>
                <Box textAlign={'center'} mt={'40px'} mb={'40px'}>
                    <Link as={RouterLink} to="/home">
                        <Button
                            w={'100%'}
                            borderRadius={'20px'}
                            color={'black'}
                            fontWeight='regular'
                            backgroundColor={'#98FF68'}
                            boxShadow='7px 7px 10px rgba(0, 0, 0, 0.1)'
                            transition='all 0.3s ease-in-out'
                        >Redefinir Senha</Button>
                    </Link>
                </Box>
            </Container>
        </>
    )
}

export default RedefinirSenha;