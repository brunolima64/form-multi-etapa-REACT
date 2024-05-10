import styled from "styled-components";

export const Container = styled.div`

    @media (max-width: 570px) {
        display: none;
    }
`;
export const GeralArea = styled.div`
    display: flex;
    align-items: center;
    margin: 30px;

    .progress {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border: 3px solid gray;
        margin-left: 302px;
        position: absolute;
    }
`;

export const AreaInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    text-align: right;
    width: 200px;
`;

export const Title = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const Description = styled.div`
    font-size: 15px;
    opacity: .7;
`;
export const AreaImagen = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: gray;
`;

export const Img = styled.img`
    width: 100%;
    
`;