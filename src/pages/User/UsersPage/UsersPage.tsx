import { FaArrowLeft } from 'react-icons/fa';
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
        title,
        handleSearch,
        isLoading,
        handleCreateUser,
        handleDeleteUser,
        searchPlaceholder,
        handleGoBack,
    } = useUsersPageLogic();

    if (isLoading) {
        return <Loader />;
    }

    return (
        <ListContainer>
            <BackButton onClick={handleGoBack}>
                <FaArrowLeft />
            </BackButton>
            <UserPageMainButtonsContainer>
                <BaseButtonCreateUser onClick={handleCreateUser}>Create User</BaseButtonCreateUser>
                <SearchBar placeholder={searchPlaceholder} onSearch={handleSearch} />
            </UserPageMainButtonsContainer>
            <PageTitle>{title}</PageTitle>
            {users && <UserCardsContainer users={users} deleteUser={handleDeleteUser} />}
        </ListContainer>
    );
};

export default UsersPage;
