import styled from 'styled-components';

const ContainerDivFlex = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.625rem;
    max-width: 93.75rem;
    margin: 1.25rem auto;
    padding: 0 2rem;
    overflow: hidden;
`;
const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 0.625;
    max-width: 93.75rem;
    margin: 1.25rem auto;
    padding: 0 2rem;
    overflow: hidden;
`;

export { ContainerDivFlex, StyledContainer };
