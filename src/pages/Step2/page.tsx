import { useNavigate } from 'react-router-dom';
import * as C from './styles';
import { useContext, useEffect, useState } from 'react';
import { InfoContext } from '../../contexts/InfoContext';

export const Step2 = () => {
    const ctx = useContext(InfoContext);
    const navigate = useNavigate();

    const [level, setLevel] = useState<number>();

    useEffect(() => {
        if(ctx?.name === '') {
            window.location.href  =  '/'; 
        }
    }, []);
    
    const handleNext = () => {
        if(level) {
            ctx?.setLevel(level);
            ctx?.setStep(3)
            navigate('/step3');
        } else {
            alert('Escolha seu nivel!')
        }
    }

    const handlePrev = () => {
        navigate('/');
        ctx?.setStep(1)
    }

    return (
        <C.Container>
            <C.Progress>Passo {ctx?.step}/3</C.Progress>
            <C.Title>{ctx?.name}, o que melhor descreve voçê?</C.Title>
            <C.Description>Escolha a opção que condiz com o seu estado atual, profissionalmente.</C.Description>

            <C.OptionArea>
                <C.OptionProfession style={{ border: `${level === 1 ? '2px solid #007adf' : ' ' }`}} onClick={() => setLevel(1)}>
                    <div>
                        <div className='icon'>🥳</div>
                    </div>
                    <div>
                        <h1>Sou iniciante</h1>
                        <p>Começei a programar há menos de 2 anos.</p>
                    </div>
                </C.OptionProfession>

                <C.OptionProfession style={{ border: `${level === 2 ? '2px solid #007adf' : ' ' }`}} onClick={() => setLevel(2)}>
                    <div>
                        <div className='icon'>😎</div>
                    </div>
                    <div>
                        <h1>Sou Profissional</h1>
                        <p>já Progamo há 2 anos ou mais.</p>
                    </div>
                </C.OptionProfession>
            </C.OptionArea>
            
            <C.Button onClick={handlePrev} style={{backgroundColor: 'transparent'}}>Voltar</C.Button>

            <C.Button onClick={handleNext}>Próximo</C.Button>
        </C.Container>
    )
}