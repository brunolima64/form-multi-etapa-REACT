import styled from "styled-components";

export const Container = styled.div`
    padding: 40px;

    p{
        margin-top: 40px;
    }
    .btn {
        padding: 10px;
        background-color: transparent;
        border: 1px solid green;
    }

    ul {
        list-style: none;
        margin: 0;
        margin-top: 40px;
        padding: 0;
    }
    li {
        padding: 10px;
        margin: 10px;
        background-color: #313e6b;
        border-radius: 7px;
        opacity: .7;
    }
`;
export const Progress = styled.div`
    margin-bottom: 20px;
    color: lightgreen;
`;

export const Title = styled.div`
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 25px;
    
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
    font-size: 17px;
    margin-top: 20px;

    &:hover {
        opacity: .7;
    }

`;