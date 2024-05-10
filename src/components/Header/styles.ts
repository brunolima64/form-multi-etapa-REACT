import styled from "styled-components";

export const Container = styled.div`
    border-bottom: 1px solid gray;
    height: 100px;
    padding: 20px 0;

    @media (max-width: 770px) {
        padding: 20px 20px;
        margin-bottom: 40px;
    }
`;

export const Title = styled.div`
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 20px;

    @media (max-width: 770px) {
        font-size: 27px;
    }
`;

export const Description = styled.div`
    opacity: .7;
    margin-bottom: 20px;

    @media (max-width: 770px) {
        font-size: 15px;
    }
`;