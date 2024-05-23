import { useContext } from 'react';
import { InfoContext } from '../../contexts/InfoContext';
import * as C from './styles';
import { useNavigate } from 'react-router-dom';

type Props = {
    title: string;
    description: string;
    url: string;
    img: string;
    active: number;
}
export const SideBarItem = ({ title, description, url, img, active}: Props) => {
    const ctx = useContext(InfoContext);
    const navigate = useNavigate();

    const handleNavStep = () => {
        switch(url) {
            case '/' : 
                if(ctx?.name === '') return false;
                navigate(url)
                ctx?.setStep(1)
            break;
            case '/step2' : 
                if(ctx?.name === '' && ctx?.level === 0) return false;
                navigate(url)
                ctx?.setStep(2)
            break;
            case '/step3' : 
                if(ctx?.name === '' || ctx?.level === 0) return false;
                    navigate(url)
                    ctx?.setStep(3)
            break;   
            case '/step4' : 
                if(ctx?.email === '' && ctx?.github === '') return false;
                navigate(url)
                ctx?.setStep(4)
            break;  
        }
    }
    return (
        <C.Container >
             <C.GeralArea onClick={handleNavStep}>
                <C.AreaInfo>
                    <C.Title>{title}</C.Title>
                    <C.Description>{description}</C.Description>
                </C.AreaInfo>
                <C.AreaImagen style={{ backgroundColor: `${ctx?.step === ctx?.step && active === ctx?.step ? '#007adf' : ''}`}}>
                    <C.Img src={img} alt={img}/>
                </C.AreaImagen>
                <div style={{ backgroundColor: `${ctx?.step === ctx?.step && active === ctx?.step ? '#007adf' : ''}`}} className='progress'></div>
            </C.GeralArea>
        </C.Container>
    )
}