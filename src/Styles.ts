import styled from "styled-components";

export const PageContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background-color: #020f1b;
`;
export const AreaHeader = styled.div`
    max-width: 1000px;
    justify-content: start;
`;

export const Container = styled.div`
    display: flex;
    max-width: 1000px;

    @media (max-width: 500px) {
        flex-direction: column;
    }
`;
export const RightArea = styled.div`
    flex: 1;
`;
export const LeftArea = styled.div`
    border-right: 1px solid gray;

    @media (max-width: 570px) {
        border-right: 0px;
    }
    
`;