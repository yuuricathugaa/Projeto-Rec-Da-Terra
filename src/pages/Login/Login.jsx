import { useState } from "react"
import { Link as RouterLink } from "react-router-dom"
import { Flex, Heading, Box, Container, Text, Link } from "@chakra-ui/react"
import { FormControl, FormLabel } from '@chakra-ui/react'
import { Input, InputGroup, InputRightElement, InputLeftElement, Checkbox, Button } from "@chakra-ui/react"
import { ViewIcon, ViewOffIcon, EmailIcon, LockIcon } from '@chakra-ui/icons'
import ValidSenha from '../../components/ValidarSenha/ValidSenha'
import ValidEmail from '../../components/ValidarEmail/ValidEmail'

function Login() {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const { email, erro: erroEmail, eventoEmail, checkEmail } = ValidEmail();
    const { senha, erro: erroSenha, eventoSenha, checkSenha } = ValidSenha();

    return (
        <>
            <Container>
                <Box textAlign={'center'} m={'50px'}>
                    <Heading color={'white'} fontWeight='bold'>Faça seu Login</Heading>
                    {erroEmail && (
                        <span style={{ color: 'white', display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: '20px', marginButton: '10px' }}>{erroEmail}<br /></span>
                    )}
                    {erroSenha && (
                        <span style={{ color: 'white', display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: '20px' }}>{erroSenha}</span>
                    )}
                </Box>
                <Box>
                    <FormControl>
                        <FormLabel color={'white'} fontWeight="regular">E-mail</FormLabel>
                        <InputGroup>
                            <InputLeftElement pointerEvents='none'>
                                <EmailIcon color='#76603F' />
                            </InputLeftElement>
                            <Input
                                onChange={eventoEmail}
                                value={email}
                                variant='outline'
                                type={'email'}
                                placeholder={'Digite o seu e-mail...'}
                                backgroundColor={'#D6CFC5'}
                                fontWeight='light'
                                border={'none'}
                                boxShadow='7px 7px 10px rgba(0, 0, 0, 0.1)'
                                onBlur={checkEmail}
                            />
                        </InputGroup>
                        <FormLabel color={'white'} mt={'8px'} fontWeight='regular'>Senha</FormLabel>
                        <InputGroup>
                            <InputLeftElement pointerEvents='none'>
                                <LockIcon color='#76603F' />
                            </InputLeftElement>
                            <Input
                                onChange={eventoSenha}
                                value={senha}
                                variant='outline'
                                type={show ? 'text' : 'password'}
                                placeholder='Digite sua senha...'
                                backgroundColor={'#D6CFC5'}
                                fontWeight='light'
                                border={'none'}
                                boxShadow='7px 7px 10px rgba(0, 0, 0, 0.1)'
                                onBlur={checkSenha}
                            />
                            <InputRightElement width='4.5rem'>
                                <Button h='1.5rem' size='xs' onClick={handleClick} boxShadow='3px 3px 7px rgba(0, 0, 0, 0.1)'>
                                {show ? <ViewIcon color='#76603F' fontSize='2xl' /> : <ViewOffIcon color='#76603F' fontSize='2xl' />}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>
                    <Box textAlign={'center'} display={'flex'} justifyContent={'space-between'} mt={'20px'}>
                        <Checkbox fontWeight='regular' color={'white'}>Mantenha-se Conectado</Checkbox>
                        <Link as={RouterLink} to="/esquecisenha" fontWeight='regular' color={'white'}>Esqueceu a senha?</Link>
                    </Box>
                    <Box textAlign={'center'} mt={'30px'} mb={'30px'}>
                        <Link as={RouterLink} to="/home">
                            <Button
                                w={'100%'}
                                borderRadius={'20px'}
                                color={'black'}
                                fontWeight='regular'
                                backgroundColor={'#98FF68'}
                                boxShadow='7px 7px 10px rgba(0, 0, 0, 0.1)'
                                transition='all 0.3s ease-in-out'
                            >Entrar</Button>
                        </Link>
                    </Box>
                    <Flex mb={'50px'}>
                        <Text fontWeight='regular' color={'white'} mr={'15px'}>Não tem uma conta?</Text>
                        <Text fontWeight='regular' color={'#98FF68'} textDecoration={'underline'}> <Link as={RouterLink} to="/cadastro">Cadastre-se</Link></Text>
                    </Flex>
                </Box>
            </Container>
        </>
    )
}

export default Login;
