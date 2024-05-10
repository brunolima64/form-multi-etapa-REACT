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

    @media (max-width: 770px) {
        padding: 15px;

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
    }
`;

export const OptionArea = styled.div`
     @media (max-width: 770px) {
        margin-top: 30px;
     }
`;

export const OptionProfession = styled.div`
    display: flex;
    align-items: center;
    border: 2px solid gray;
    padding: 20px;
    color: white;
    background-color: transparent;
    border-radius: 7px;
    margin: 20px 0;
    cursor: pointer;

    &:hover {
        border: 2px solid #007adf;
    }

    .icon {
        width: 50px;
        height: 50px;
        font-size: 30px;
        border-radius: 50%;
        background-color: #999;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 20px;
    }

    h1 {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 10px;
    }
    p {
        margin-top: 0px;
        font-size: 15px;
        opacity: .7;
    }

    @media (max-width: 770px) {
        
        padding: 10px 15px;
        margin: 10px 0;
        
        .icon {
            width: 32px;
            height: 32px;
            font-size: 20px;
            margin-right: 15px;
        }

        h1 {
            font-size: 17px;
        }

        p {
            font-size: 14px;
        }
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