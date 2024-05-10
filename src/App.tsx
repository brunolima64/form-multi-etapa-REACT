import './App.css';
import { Routes } from './Routes';
import * as C from './Styles';
import { Header } from './components/Header';
import { SideBar } from './components/SideBar';
import { InfoContextProvider } from './contexts/InfoContext';

export const App = () => {
    return (
        <InfoContextProvider>
                <C.PageContainer>
                    <C.AreaHeader>
                        <Header />
                    </C.AreaHeader>
                    <C.Container>
                        <C.LeftArea>
                            <SideBar />
                        </C.LeftArea>
                        <C.RightArea>
                            <Routes />
                        </C.RightArea>
                    </C.Container>
                </C.PageContainer>
        </InfoContextProvider>
    )
}
export default App;