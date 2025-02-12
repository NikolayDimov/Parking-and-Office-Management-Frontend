import styled from 'styled-components';
import ImgSrc from '../../../assets/wheat_image.jpg';
import { BaseButton } from '../../../components/CommonStyledElements';

const StyledPasswordForm = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 37.5rem;
    padding: 1.25rem;
    margin: 1rem;
    border-radius: 0.3125rem;
    background-color: #fff;
    box-shadow: 0 0 0.525rem 0 #000000;
    .form-title {
        text-align: center;
    }
    label {
        margin-top: 0.625rem;
    }
    input {
        margin-top: 0.3125rem;
        padding: 0.825rem;
        border: 1px solid #ccc;
        border-radius: 0.3125rem;
        background-color: #f2f2f2;
    }
`;

const InputContainer = styled.div`
    padding: 0.625rem 1.25rem;

    .div {
        color: red;
    }
`;

const UpdateButtonContainer = styled.div`
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 0.625rem;
    gap: 0.625rem;
`;

const StyledDetailBullet = styled.li`
    display: flex;
    align-items: center;
    margin: 0.5rem 0.5rem;
    background-color: var(--beige-light);
    padding: 0.5rem;
    border-radius: 0.25rem;
    overflow: hidden;
    img {
        margin-top: 0.1875rem;
        margin-right: 0.3125rem;
        width: 2.5rem;
        height: 2.5rem;
    }

    span {
        margin-bottom: 0.1875rem;
        font-size: 1rem;
        font-weight: bold;
    }
`;

const UserProfileContainer = styled.div`
    margin: 0 auto;
    padding: 0 3rem;
    max-width: 70rem;
    border-radius: 0.5rem;
    overflow: hidden;

    @media (max-width: 768px) {
        padding: 0 1rem;
    }
`;

const UserMainInfoContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    margin: 0.625rem auto;
    background-image: url(${ImgSrc});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding: 3.625rem;
    border-radius: 0.5rem;
    align-items: center;
    justify-content: center;
    text-align: center;

    &::before {
        content: '';
        position: absolute;
        border-radius: 0.5rem;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.3);
    }

    @media (max-width: 510px) {
        flex-direction: column;
    }
`;

const UserProfilePictureContainer = styled.div`
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    margin: 0.625rem auto;
    width: 90%;
    height: 90%;

    border-radius: 0.5rem;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const UserProfilePicture = styled.img`
    border-radius: 50%;
    width: 12.5rem;
    height: 12.5rem;
    object-fit: cover;
    border: 0.1875rem solid var(--blue-green-light);
    margin-bottom: 0.625rem;
`;

const UserProfileEmail = styled.p`
    font-size: 1.2rem;
    background-color: #fff;
    padding: 0.625rem 1.25rem;
    border-radius: 0.5rem;
`;

const ListContainer = styled.div`
    max-width: 93rem;
    margin: 0 auto;

    @media (max-width: 768px) {
        padding: 0.625rem;
    }
`;

const BackButton = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    font-size: 1.875rem;
    padding: 0.5rem;
    margin: 0.2rem 0.5rem;
    fill: var(--light-blue-nav);
    transition: background-color 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.6rem;
    height: 2.6rem;
    border-radius: 50%;

    &:hover {
        background: var(--hover-color-back-btn);
    }
`;

const BaseButtonSubmit = styled(BaseButton)`
    background-color: #e6e6e6;
    color: #878787;
    padding: 0.825rem;
`;

const BaseButtonCancel = styled(BaseButton)`
    background-color: transparent;
    color: blue;
    padding: 0.825rem;

    &:hover {
        background-color: var(--hover-color);
    }
`;

const FormButtonsContainerPassword = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export {
    UpdateButtonContainer,
    StyledDetailBullet,
    UserProfileContainer,
    UserMainInfoContainer,
    UserProfilePicture,
    UserProfilePictureContainer,
    UserProfileEmail,
    ListContainer,
    BackButton,
    StyledPasswordForm,
    BaseButtonSubmit,
    BaseButtonCancel,
    FormButtonsContainerPassword,
    InputContainer,
};
