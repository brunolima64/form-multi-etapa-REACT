import { useNavigate } from 'react-router-dom';
import * as C from './styles';
import { useContext, useState } from 'react';
import { InfoContext } from '../../contexts/InfoContext';

export const Home = () => {
    const ctx = useContext(InfoContext);
    const navigate = useNavigate();
    const [nameField, setNameField] = useState('');
    
    const handleAddName = () => {
        if(nameField) {
            ctx?.setName(nameField);
            ctx?.setStep(2)
            navigate('/step2'); 
        } else {
            alert('Digite seu nome!');
        }
    }

    return (
        <C.Container>
            <C.Progress>Passo {ctx?.step}/3</C.Progress>
            <C.Title>Vamos começar com o seu nome</C.Title>
            <C.Description>Preencha o campo abaixo com o seu nome completo</C.Description>

            <p>Digite seu nome completo</p>
            <C.Input 
                autoFocus
                type='text' 
                value={nameField}
                onChange={(e)=> setNameField(e.target.value)}
            />
            
            <C.Button onClick={handleAddName}>Próximo</C.Button>
        </C.Container>
    )
}