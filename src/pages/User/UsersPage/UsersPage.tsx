import { PageTitle } from '../../../components/CommonStyledElements';
import Loader from '../../../components/Loader/Loader';
import SearchBar from '../../../components/SearchBar/SearchBar';
import { BackButton } from '../../FloorPlan/FloorPlan.style';
import UserCardsContainer from './UserCard/UserCardsContainer';
import { useUsersPageLogic } from './UsersPage.logic';
import { BaseButtonCreateUser, ListContainer, UserPageMainButtonsContainer } from './UsersPage.style';

const UsersPage = () => {
    const {
        users,
        handleSearch,
        isLoading,
        handleCreateUser,
        handleDeleteUser,
        searchPlaceholder,
        handleGoBack,
        handleDisplayUserReservations,
    } = useUsersPageLogic();

    if (isLoading) {
        return <Loader />;
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
            <UserPageMainButtonsContainer>
                <BaseButtonCreateUser onClick={handleCreateUser}>Create User</BaseButtonCreateUser>
                <SearchBar placeholder={searchPlaceholder} onSearch={handleSearch} />
            </UserPageMainButtonsContainer>
            <PageTitle>All Users</PageTitle>
            {users && (
                <UserCardsContainer
                    users={users}
                    deleteUser={handleDeleteUser}
                    userReservations={handleDisplayUserReservations}
                />
            )}
        </ListContainer>
    );
};

export default UsersPage;
