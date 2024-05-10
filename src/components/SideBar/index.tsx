import { SideBarItem } from '../SideBarItem';
import * as C from './styles';
import cabeca from '../../../public/assets/images/cabeca.png';
import curriculo from '../../../public/assets/images/curriculo.png';
import email from '../../../public/assets/images/e-mail.png';
import verifica from '../../../public/assets/images/verifica.png';

export const SideBar = () => {

    return (
        <C.Container>
            <div>
                <SideBarItem title='Pessoal' description='Se indentifique' img={cabeca} url='/' active={1} />
            </div>
            <div>
                <SideBarItem title='Profissional' description='Suas habilidades' img={curriculo} url='/step2' active={2}  />
            </div>
            <div>
                <SideBarItem title='Contato' description='Como te achar' img={email} url='/step3' active={3}  />
            </div>
            <div>
                <SideBarItem title='Concluido' description=' ' img={verifica} url='/step4' active={4}  />
            </div>
        </C.Container>
    )
}