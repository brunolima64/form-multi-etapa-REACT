import styled from "styled-components";

export const Container = styled.div`

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
        margin-left: 312px;
        position: absolute;
    }

    @media (max-width: 770px) {
        margin: 20px;

        .progress {
            margin-left: 192px;
        }
    }
`;

export const AreaInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    text-align: right;
    width: 200px;

    @media (max-width: 770px) {
        width: 120px;
        margin-right: 10px;
    }
`;

export const Title = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;

    @media (max-width: 770px) {
        font-size: 14px;
    }
`;

export const Description = styled.div`
    font-size: 15px;
    opacity: .7;

    @media (max-width: 770px) {
        font-size: 13px;
    }
`;
export const AreaImagen = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #313e6b;
    padding: 5px;

    @media (max-width: 770px) {
        width: 40px;
        height: 40px;
    }
`;

export const Img = styled.img`
    width: 70%;
`;