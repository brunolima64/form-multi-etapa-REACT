import { useNavigate } from 'react-router-dom';
import * as C from './styles';
import { useContext, useEffect } from 'react';
import { InfoContext } from '../../contexts/InfoContext';

export const Step4 = () => {
    const ctx = useContext(InfoContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(ctx?.name === '') {
            window.location.href  =  '/'; 
        }
    }, []);
    
    const handlePrev = () => {
        navigate('/step3');
        ctx?.setStep(3)
    }

    return (
        <C.Container>
            <C.Progress>Concluido ✔</C.Progress>
            <C.Title>Parábens {ctx?.name}, cadastro concluido com sucesso!</C.Title>
            <C.Description>Verifique se seus dados estão corretos, e aguarde o seu emprego TOP.</C.Description>

            <ul>
                <li>Nome: {ctx?.name}</li>
                <li>Nivel: {ctx?.level === 1 ? 'Iniciante' : 'Profissional'}</li>
                <li>E-mail: {ctx?.email}</li>
                <li>GitHub: {ctx?.github}</li>
            </ul>

            <C.Button onClick={handlePrev} style={{backgroundColor: 'transparent'}}>Voltar</C.Button>
        </C.Container>
    )
}