import styled from 'styled-components';
import { BaseButton } from '../../../../components/CommonStyledElements';
import ImgSrc from '../../../../assets/wheat_image.jpg';

const StyledUserCard = styled.div`
    position: relative;
    z-index: 2;
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

const UserImage = styled.img`
    width: 100%;
    max-height: 15.625rem;
    object-fit: cover;
`;

const UserCardsContainerWrapper = styled.div`
    position: relative;
    background-image: linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(${ImgSrc});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin: 0.625rem auto;
    padding: 1.625rem 1.85rem;
    border-radius: 0.5rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    gap: 3.875rem;
    justify-content: center;
    align-items: center;
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;

    &::before {
        content: '';
        position: absolute;
        border-radius: 0.5rem;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 500px) {
        background-image: none;
        &::before {
            background: transparent;
        }
        grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    }
`;

const StyledUserDetails = styled.div`
    padding: 1rem;
    width: 100%;
    height: 8rem;
    text-align: center;
    background-color: var(--pink-light);
`;

const BaseButtonDeleteUser = styled(BaseButton)`
    font-size: 1rem;
    padding: 0.9375rem;
`;

const BaseButtonReservationUser = styled(BaseButton)`
    font-size: 1rem;
    padding: 0.9375rem;
`;

const UserButtons = styled.div`
    display: flex;
    justify-content: center;
`;

export {
    StyledUserCard,
    StyledUserDetails,
    UserImage,
    UserCardsContainerWrapper,
    BaseButtonDeleteUser,
    BaseButtonReservationUser,
    UserButtons,
};
