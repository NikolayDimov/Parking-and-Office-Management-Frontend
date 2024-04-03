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
import { TbLogout } from 'react-icons/tb';
import NotFound from '../../NotFound/NotFound';

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
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 52 52">
                    <path
                        d="M48.6,23H15.4c-0.9,0-1.3-1.1-0.7-1.7l9.6-9.6c0.6-0.6,0.6-1.5,0-2.1l-2.2-2.2c-0.6-0.6-1.5-0.6-2.1,0
	L2.5,25c-0.6,0.6-0.6,1.5,0,2.1L20,44.6c0.6,0.6,1.5,0.6,2.1,0l2.1-2.1c0.6-0.6,0.6-1.5,0-2.1l-9.6-9.6C14,30.1,14.4,29,15.3,29
	h33.2c0.8,0,1.5-0.6,1.5-1.4v-3C50,23.8,49.4,23,48.6,23z"
                    />
                </svg>
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
