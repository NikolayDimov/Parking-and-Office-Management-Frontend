import { Tooltip } from 'react-tooltip';
import { styled } from 'styled-components';

const PageTitle = styled.h1`
    font-size: 1.5rem;
    margin-top: 1rem;
    margin-bottom: 4rem;
    color: var(--dark-blue);
    text-align: center;
`;

const Container = styled.div`
    max-width: 85rem;
    margin: auto;
    padding: 2rem 4rem;
    overflow: hidden;
`;

const BaseButton = styled.button`
    align-self: center;
    background-color: var(--light-blue);
    border: transparent;
    border-radius: 0.625rem;
    box-shadow: darkgrey 15px 28px 25px -18px;
    box-sizing: border-box;
    color: black;
    cursor: pointer;
    display: inline-block;
    font-size: 1.2rem;
    font-weight: 500;
    outline: none;
    padding: 0.6rem 1rem 0.6rem 1rem;
    text-decoration: none;
    transition: all 200ms ease-in-out;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    margin: 0.5rem;

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px -5px;
    }

    &.remove-btn {
        background-color: lightsteelblue;
        margin: 0.5rem;
    }

    &.delete-btn {
        background-color: #cd5362;
        margin: 0.5rem;
    }

    &.reservation-card {
        background-color: var(--beige);
        padding: 0;
        max-width: 10rem;
    }

    &.reservation-btn {
        background-color: var(--blue-green-light);
    }

    &.reservation-card {
        background-color: var(--light-blue);
        padding: 0;
        max-width: 10rem;
    }

    &.reservation-btn {
        background-color: var(--blue-green-light);
    }

    &.spot-type-card {
        color: var(--light-pink);
        text-decoration: none;
        width: 80%;
        margin: 0 auto;
        padding: 0;
        box-shadow: darkgrey 15px 15px 18px -18px;
        display: flex;
        align-items: center;

        &:hover {
            box-shadow: rgba(0, 0, 0, 0.1) 2px 3px 3px -5px;
        }

        @media (max-width: 768px) {
            grid-template-columns: 1fr;
            width: 100%;
            box-shadow: none;
            margin: 0 auto;
        }
    }

    &.edit-btn,
    &.create-btn {
        background-color: var(--blue-green-light);
        margin: 0.5rem;
    }
    &.close-btn {
        background-color: var(--brown);
        margin: 0.5rem;
    }
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

const BigButtonLight = styled(BaseButton)`
    background-color: var(--beige-light);
    width: 15.625rem;
    font-size: 1rem;
    line-height: 1rem;
    padding: 0.6rem;
    font-size: 1.2rem;
    line-height: 1.2;

    @media (max-width: 930px) {
        width: 80%;
    }
`;
const BigButtonDark = styled(BaseButton)`
    background-color: var(--blue--green-light);
    color: var(--beige-light);
    font-size: 1rem;
    line-height: 1rem;
    padding: 0.9rem;

    @media (max-width: 768px) {
        width: 80%;
    }
`;

const BaseButtonLogout = styled.button`
    align-self: center;
    background-color: var(--blue-green-light);
    border: transparent;
    border-radius: 0.625rem;
    box-shadow: darkgrey 15px 28px 25px -18px;
    box-sizing: border-box;
    color: black;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 500;
    outline: none;
    padding: 0.6rem 1rem 0.6rem 1rem;
    text-decoration: none;
    transition: all 200ms ease-in-out;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    margin: 0.5rem;

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px -5px;
    }

    &.delete-btn,
    &.remove-btn {
        background-color: lightsteelblue;
        margin: 0.5rem;
    }

    &.reservation-card {
        background-color: var(--beige);
        padding: 0;
        max-width: 10rem;
    }

    &.reservation-btn,
    &.reservation-card {
        background-color: var(--blue-green-light);
    }

    &.spot-type-card {
        color: var(--light-pink);
        text-decoration: none;
        width: 80%;
        margin: 0 auto;
        padding: 0;
        display: flex;
        align-items: center;

        &:hover {
            box-shadow: rgba(0, 0, 0, 0.1) 2px 3px 3px -5px;
        }

        @media (max-width: 768px) {
            grid-template-columns: 1fr;
            width: 100%;
            box-shadow: none;
            margin: 0 auto;
        }
    }

    &.edit-btn,
    &.create-btn {
        background-color: var(--blue-green-light);
        margin: 0.5rem;
    }

    &.close-btn {
        background-color: var(--brown);
        margin: 0.5rem;
    }

    svg {
        margin-left: 0.3rem;
        margin-right: 0.8rem;
        height: 1.5rem;
        width: 1.5rem;
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

const StyledCard = styled.div`
    border: 1px solid #aaaaaa;
    width: 100%;
    margin: 0 auto;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 4px 0px #615757;
    overflow: hidden;
`;

const FormButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledToolTip = styled(Tooltip)`
    &.spot-info {
        background: var(--beige);
        color: black;
        text-align: center;
        padding: 0.5rem;
        z-index: 2;
    }
    & p {
        text-align: center;
    }
`;
export {
    StyledToolTip,
    FormButtonsContainer,
    BaseButton,
    BigButtonDark,
    BigButtonLight,
    StyledCard,
    PageTitle,
    Container,
    BaseButtonLogout,
};
