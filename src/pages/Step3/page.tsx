import { useNavigate } from 'react-router-dom';
import * as C from './styles';
import { useContext, useEffect, useState } from 'react';
import { InfoContext } from '../../contexts/InfoContext';

export const Step3 = () => {
    const ctx = useContext(InfoContext);
    const navigate = useNavigate();
    const [emailField, setEmailField] = useState('');
    const [githubField, setGithubField] = useState('');

    useEffect(() => {
        if(ctx?.name === '') {
            window.location.href  =  '/'; 
        }
    }, []);

    const handleNext = () => {
        if(emailField && githubField) {
            ctx?.setEmail(emailField);
            ctx?.setGithub(githubField);
            ctx?.setStep(4)
            navigate('/step4')
        }
    }
    const handlePrev = () => {
        navigate('/step2');
        ctx?.setStep(2)
    }

    return (
        <C.Container>
            <C.Progress>Passo {ctx?.step}/3</C.Progress>
            <C.Title>Legal {ctx?.name}, onde te achamos?</C.Title>
            <C.Description>Preencha com seus contatos para conseguirmos entrar em contato.</C.Description>

            <p>Qual o seu e-mail?</p>
            <C.Input  
                type='text' 
                value={emailField}
                onChange={(e)=> setEmailField(e.target.value)} 
            />
            <p>Qual seu GitHub</p>
            <C.Input 
                type='text' 
                value={githubField}
                onChange={(e)=> setGithubField(e.target.value)}
            />
            
            <C.Button onClick={handlePrev} style={{backgroundColor: 'transparent'}}>Voltar</C.Button>

            <C.Button onClick={handleNext}>Finalizar</C.Button>
           
            
        </C.Container>
    )
}