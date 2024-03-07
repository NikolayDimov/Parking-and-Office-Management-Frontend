import { Location } from '../Home/Home.static';
import { useNavigate } from 'react-router-dom';
import { BaseButtonCreateLocation, ContainerCreate, ContainerCreateSerch, ListContainer } from './AdminPage.style';
import EditIcon from '../../components/Icons/EditIcon/EditIcon';
import DeleteIcon from '../../components/Icons/DeleteIcon/DeleteIcon';
import useAdminPage from './AdminPage.logic';
import useModal from '../../components/ModalList/useModal';
import useFilter from '../../utils/search';
import DeleteLocationModal from './AdminListModal/DeleteModal/DeleteModal';
import EditLocationModal from './AdminListModal/EditModal/EditModal';
import { LocationData } from './AdminPage.static';
import FloorPlansIcon from '../../components/Icons/FloorPlanIcon/FloorPlanIcon';
import FloorPlansAddIcon from '../../components/Icons/FloorPlanAddIcon/FloorPlanAddIcon';

import { UserReservationsTableStyle } from '../../components/UserReservationsTable/UserReservationsTable.styles';
import Loader from '../../components/Loader/Loader';
import SearchBar from '../../components/SearchBar/SearchBar';
import { route } from '../../static/routes';

const AdminPage = () => {
    const navigate = useNavigate();

    const {
        locations,
        isLoading,
        error,
        onDeleteClick,
        onEditClick,
        setCurrentLocation,
        onDeleteConfirm,
        onEditConfirm,
        originalLocation,
        handleCreateLocationClick,
        handleManageUsersClick,
    } = useAdminPage();

    const { filteredItems, setSearchQuery } = useFilter<Location>({ items: locations || [] });
    const { isVisible: isDeleteModalVisible, showModal: showDeleteModal, hideModal: hideDeleteModal } = useModal();
    const { isVisible: isEditModalVisible, showModal: showEditModal, hideModal: hideEditModal } = useModal();

    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        return <div>Error loading locations</div>;
    }

    return (
        <ListContainer>
            <ContainerCreateSerch>
                <ContainerCreate>
                    <BaseButtonCreateLocation
                        onClick={handleCreateLocationClick}
                        style={{
                            backgroundColor: `var(--blue-green-light)`,
                        }}
                    >
                        Create Location
                    </BaseButtonCreateLocation>
                    <BaseButtonCreateLocation
                        onClick={handleManageUsersClick}
                        style={{
                            backgroundColor: `var(--blue-green-light)`,
                        }}
                    >
                        Manage Users
                    </BaseButtonCreateLocation>
                </ContainerCreate>
                <SearchBar placeholder="Search locations" onSearch={setSearchQuery} />
            </ContainerCreateSerch>

            <UserReservationsTableStyle>
                <caption>Location List</caption>
                <thead>
                    <tr>
                        <th className="table-head">Name</th>
                        <th className="table-head">City</th>
                        <th className="table-head">Address</th>
                        <th className="table-head">Action</th>
                        <th className="table-head">Floor Plan</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredItems.length > 0 ? (
                        filteredItems.map((location: LocationData) => (
                            <tr key={location.id}>
                                <td data-label="Name:">{location.name}</td>
                                <td data-label="City:">{location.city}</td>
                                <td data-label="Address:">{location.address}</td>
                                <td data-label="Action:">
                                    <EditIcon
                                        onClick={() => {
                                            onEditClick(
                                                location.id || '',
                                                location.name || '',
                                                location.city || '',
                                                location.address || '',
                                            );
                                            showEditModal();
                                        }}
                                    />
                                    <DeleteIcon
                                        onClick={() => {
                                            onDeleteClick(location.id || '');
                                            showDeleteModal();
                                        }}
                                    />
                                </td>
                                <td data-label="Floor Plan:">
                                    <FloorPlansAddIcon
                                        onClick={() => {
                                            if (location.id) {
                                                navigate(route.createNewFloorPlan.replace(':locId', `${location.id}`), {
                                                    state: { locationId: location.id },
                                                });
                                            }
                                        }}
                                    />
                                    <FloorPlansIcon
                                        onClick={() => {
                                            if (location.id) {
                                                navigate(route.floorPlan.replace(':locId', `${location.id}`), {
                                                    state: { locationId: location.id },
                                                });
                                            }
                                        }}
                                    />
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={5}>No Locations available</td>
                        </tr>
                    )}
                </tbody>
            </UserReservationsTableStyle>

            {isDeleteModalVisible && (
                <DeleteLocationModal
                    isVisible={isDeleteModalVisible}
                    hideModal={hideDeleteModal}
                    onDeleteConfirm={onDeleteConfirm}
                />
            )}
            {isEditModalVisible && (
                <EditLocationModal
                    isVisible={isEditModalVisible}
                    hideModal={hideEditModal}
                    onConfirm={onEditConfirm}
                    currentLocation={originalLocation}
                    setCurrentLocation={setCurrentLocation}
                />
            )}
        </ListContainer>
    );
};

export default AdminPage;
