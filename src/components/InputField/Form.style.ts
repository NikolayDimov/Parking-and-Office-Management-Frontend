import styled from 'styled-components';

const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    align-content: flex-start;
    width: auto;
    height: auto;
    min-width: 300px;
    border-radius: 0.5rem;
    box-shadow: 0 10px 20px 0 darkgrey;
    padding: 0.3rem;
    z-index: 20;
    padding: 20px;

    h3 {
        color: black;
        text-align: center;
    }
`;

export { FormStyled };
