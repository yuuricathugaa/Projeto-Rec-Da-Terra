import React, { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalOverlay, Button, Heading, Flex, Textarea } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

function ModalAvaliar({ isOpen, onClose, type, avaliavelId, tipoAvaliavel }) {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const [comment, setComment] = useState("");
    const navigate = useNavigate();

    const handleClose = () => {
        onClose();
        navigate('/home');
    };

    const getHeadingText = () => {
        switch (type) {
            case 'evento':
                return 'Avalie o Evento:';
            case 'produto':
                return 'Avalie o Produto:';
            case 'produtor':
                return 'Avalie o Produtor:';
            default:
                return 'Avalie:';
        }
    };

    const handleEnviarAvaliacao = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/avaliacao/criar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nota: rating,
                    descricao: comment,
                    avaliavelId,
                    tipoAvaliavel,
                }),
            });
            if (response.ok) {
                console.log('Avaliação enviada com sucesso!');
                // Adicionar lógica adicional após o envio da avaliação, se necessário
            } else {
                console.error('Erro ao enviar avaliação:', response.statusText);
            }
        } catch (error) {
            console.error('Erro ao enviar avaliação:', error.message);
        } finally {
            handleClose();
        }
    };

    return (
        <Modal
            closeOnOverlayClick={false}
            isOpen={isOpen}
            onClose={onClose}
            motionPreset='slideInBottom'
            size='lg'
        >
            <ModalOverlay />
            <ModalContent backgroundColor='#76603F' textAlign='center' alignItems='center'>
                <ModalHeader mb='30px'>
                    <Heading color='#98FF68'>{getHeadingText()}</Heading>
                </ModalHeader>
                <ModalBody>
                    <Flex justifyContent='center' mb='20px'>
                        {[...Array(5)].map((_, index) => {
                            const ratingValue = index + 1;
                            return (
                                <label key={index}>
                                    <input
                                        type='radio'
                                        name='rating'
                                        style={{ display: 'none' }}
                                        value={ratingValue}
                                        onClick={() => setRating(ratingValue)}
                                    />
                                    <FaStar
                                        color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
                                        size={40}
                                        onMouseEnter={() => setHover(ratingValue)}
                                        onMouseLeave={() => setHover(null)}
                                    />
                                </label>
                            );
                        })}
                    </Flex>
                    <Textarea
                        placeholder='Adicione um comentário...'
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        backgroundColor='#D6CFC5'
                        color='black'
                        mb='20px'
                    />
                </ModalBody>
                <ModalFooter>
                    <Button
                        onClick={handleEnviarAvaliacao}
                        h='50px'
                        w='150px'
                        borderRadius='10px'
                        color='black'
                        fontWeight='bold'
                        backgroundColor='#7ED957'
                        mr='20px'
                    >
                        Enviar
                    </Button>
                    <Button
                        onClick={handleClose}
                        h='50px'
                        w='150px'
                        borderRadius='10px'
                        color='black'
                        fontWeight='bold'
                        backgroundColor='#FB3636'
                    >
                        Cancelar
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default ModalAvaliar;
