import { Link as RouterLink } from 'react-router-dom';
import { Button, Flex } from "@chakra-ui/react";
import React, { useContext } from 'react';
import { UserContext } from '../../components/TipoUsuario/TipoUsuario';
import { useNavigate } from 'react-router-dom';

function Cadastro() {
    const { register } = useContext(UserContext);
    const navigate = useNavigate();

    const handleRegister = (type) => {
        register(type);
        navigate('/login');
    };

    return (
        <div className='container'>
            <div className="title">
                <h1 style={{ color: 'white',
                marginTop: '10%',
                textAlign: 'center' }}>
                Você deseja se cadastrar como:</h1>
            </div>
            <Flex 
                alignItems='center'
                justifyContent='center'
                p='30px'
                mt='50px'
            >
{/*----------------------BUTÃO PARA CADASTRO DO CLIENTE--------------------------------- */}
                <Button
                    mr='100px'
                    as={RouterLink} 
                    to="/cadastroCliente" 
                    type='submit'
                    h='88'
                    w='360px'
                    borderRadius='20px'
                    color='black'
                    fontWeight='bold'
                    backgroundColor='#98FF68'
                    boxShadow='7px 7px 10px rgba(0, 0, 0, 0.1)'
                    transition='all 0.3s ease-in-out'
                    onClick={() => handleRegister('cliente')}
                >
                    Cliente
                </Button>
{/*----------------------BUTÃO PARA CADASTRO DO PRODUTOR--------------------------------- */}
                <Button
                    as={RouterLink} 
                    to="/cadastroProdutor" 
                    type='submit'
                    h='88'
                    w='360px'
                    borderRadius='20px'
                    color='black'
                    fontWeight='bold'
                    backgroundColor='#98FF68'
                    boxShadow='7px 7px 10px rgba(0, 0, 0, 0.1)'
                    transition='all 0.3s ease-in-out'
                    onClick={() => handleRegister('produtor')}
                >
                    Produtor
                </Button>
            </Flex>
        </div>
    );
}

export default Cadastro;
