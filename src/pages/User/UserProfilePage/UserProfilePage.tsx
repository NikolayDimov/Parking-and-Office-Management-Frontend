import { UserProfilePageLogic } from './UserProfilePage.logic';
import { BaseButtonLogout, BigButtonLight } from '../../../components/CommonStyledElements';
import {
    BackButton,
    ListContainer,
    UpdateButtonContainer,
    UserMainInfoContainer,
    UserProfileContainer,
    UserProfileEmail,
    UserProfilePicture,
    UserProfilePictureContainer,
} from './UserProfilePage.styles';
import { userProfileConstants } from './UserProfilePage.static';
import defaultPicture from '../../../assets/default-profile.jpg';
import { TbLogout, TbLogout2 } from 'react-icons/tb';
import NotFound from '../../NotFound/NotFound';
import { FaArrowLeft } from 'react-icons/fa';

const UserProfilePage = () => {
    const { user, handleUpdateUserPassword, handleUpdateUserProfilePicture, logout, tokenId, tokenRole, handleGoBack } =
        UserProfilePageLogic();

    if (tokenRole !== 'ADMIN') {
        if (tokenId !== user?.id) {
            return <NotFound />;
        }
    }
    return (
        <ListContainer>
            <BackButton onClick={handleGoBack}>
                <FaArrowLeft />
            </BackButton>
            {user && (
                <UserProfileContainer>
                    <UserMainInfoContainer>
                        <UserProfilePictureContainer>
                            <UserProfilePicture src={user.imgUrl ?? defaultPicture} alt="Profile" />
                            <UserProfileEmail>{user.email}</UserProfileEmail>
                        </UserProfilePictureContainer>
                        {tokenId === user.id && (
                            <UpdateButtonContainer>
                                <BigButtonLight onClick={() => handleUpdateUserProfilePicture(user.id)}>
                                    {userProfileConstants.changeProfilePictureButton}
                                </BigButtonLight>
                                <BigButtonLight onClick={() => handleUpdateUserPassword(user.id)}>
                                    {userProfileConstants.changePasswordButton}
                                </BigButtonLight>
                                <BaseButtonLogout className="remove-btn" onClick={() => logout()}>
                                    <TbLogout />
                                    {userProfileConstants.logout}
                                </BaseButtonLogout>
                            </UpdateButtonContainer>
                        )}
                    </UserMainInfoContainer>
                </UserProfileContainer>
            )}
        </ListContainer>
    );
};

export default UserProfilePage;
