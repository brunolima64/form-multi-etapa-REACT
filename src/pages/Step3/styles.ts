import styled from "styled-components";

export const Container = styled.div`
    padding: 40px;

    p{
        margin-top: 20px;
    }

    @media (max-width: 770px) {
        padding: 20px;
        

        p{
            margin-top: 10px;
        }
    } 
`;
export const Progress = styled.div`
    margin-bottom: 20px;
`;

export const Title = styled.div`
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;

    @media (max-width: 770px) {
        font-size: 20px;
    }
    
`;

export const Description = styled.div`
    font-size: 15px;
    opacity: .7;
    padding-bottom: 40px;
    border-bottom: 1px solid gray;

    @media (max-width: 770px) {
        font-size: 14px;
        padding-bottom: 30px;
        margin-bottom: 40px;
    }
`;

export const Input = styled.input`
    width: 90%;
    padding: 20px;
    margin-bottom: 20px;
    cursor: pointer;
    background-color: transparent;
    color: #FFF;
    border: 1px solid gray;
    border-radius: 7px;

    &:focus {
        outline: 1px solid #007adf;
    }

    @media (max-width: 770px) {
        padding: 10px;
        width: 90%;
    }
`;

export const Button = styled.button`
    width: 100px;
    background-color: #007adf;
    border-radius: 20px;
    padding: 20px;
    cursor: pointer;
    border: 0;
    color: #FFF;
    margin-right: 20px;

    &:hover {
        opacity: .7;
    }

    @media (max-width: 770px) {
        padding: 10px;
        margin-top: 20px;
    } 
`;