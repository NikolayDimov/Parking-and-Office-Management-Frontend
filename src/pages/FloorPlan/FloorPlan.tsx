import { useNavigate } from 'react-router-dom';
import { AddSpotIcon, ArrowIcon, BackButton, LinkFloorPlan, ListContainer } from './FloorPlan.style';
import useModal from '../../components/ModalList/useModal';
import DeleteFloorPlanModal from './FloorPlanListModal/DeleteModal/DeleteModal';
import EditFloorPlanModal from './FloorPlanListModal/EditModal/EditModal';
import useFloorPlan from './FloorPlan.logic';
import { FaArrowLeft } from 'react-icons/fa';
import { useSpotsContext } from '../../context/SpotsContext';
import { StyledToolTip } from '../../components/CommonStyledElements';
import EditIcon from '../../components/Icons/EditIcon/EditIcon';
import DeleteIcon from '../../components/Icons/DeleteIcon/DeleteIcon';
import { UserReservationsTableStyle } from '../../components/UserReservationsTable/UserReservationsTable.styles';

const FloorPlanPage = () => {
    const navigate = useNavigate();

    const {
        floorPlan,
        isLoading,
        onDeleteClick,
        onDeleteConfirm,
        onEditClick,
        onEditConfirm,
        setCurrentFloorPlanName,
        originalFloorPlanName,
        handleGoBack,
    } = useFloorPlan();

    const { isVisible: isDeleteModalVisible, showModal: showDeleteModal, hideModal: hideDeleteModal } = useModal();
    const { isVisible: isEditModalVisible, showModal: showEditModal, hideModal: hideEditModal } = useModal();
    const { setExistingSpots } = useSpotsContext();

    return (
        <ListContainer>
            <BackButton onClick={handleGoBack}>
                <FaArrowLeft />
            </BackButton>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <UserReservationsTableStyle>
                    <caption>Floor Plan List</caption>
                    <thead>
                        <tr>
                            <th className="table-head">Floor Plan</th>
                            <th className="table-head">Open Floor Plan</th>
                            <th className="table-head">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {floorPlan.length > 0 ? (
                            floorPlan.map((floorPlanItem) => (
                                <tr key={floorPlanItem.id}>
                                    <td data-label="Name:">{floorPlanItem.name}</td>

                                    <td data-label="Open Floor Plan:">
                                        <LinkFloorPlan to={`/floorPlan/${floorPlanItem.id}`}>
                                            Show Floor Plan
                                            <ArrowIcon />
                                        </LinkFloorPlan>
                                    </td>

                                    <td data-label="Action:">
                                        <AddSpotIcon
                                            data-tooltip-id={`component_add_spots`}
                                            data-tooltip-place="left"
                                            className="material-icons"
                                            onClick={() => {
                                                navigate(`/spots/${floorPlanItem.id}`);
                                                setExistingSpots([]);
                                            }}
                                        >
                                            maps_ugc
                                        </AddSpotIcon>
                                        <StyledToolTip id={`component_add_spots`} className="spot-info">
                                            {<p>Add new spots to the floor plan</p>}
                                        </StyledToolTip>
                                        <EditIcon
                                            onClick={() => {
                                                onEditClick(floorPlanItem.id || '', floorPlanItem.name || '');
                                                showEditModal();
                                            }}
                                        />

                                        <DeleteIcon
                                            onClick={() => {
                                                onDeleteClick(floorPlanItem.id || '');
                                                showDeleteModal();
                                            }}
                                        />
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={4}>No floor plans available</td>
                            </tr>
                        )}
                    </tbody>
                </UserReservationsTableStyle>
            )}

            {isDeleteModalVisible && (
                <DeleteFloorPlanModal
                    isVisible={isDeleteModalVisible}
                    hideModal={hideDeleteModal}
                    onDeleteConfirm={onDeleteConfirm}
                />
            )}

            {isEditModalVisible && (
                <EditFloorPlanModal
                    isVisible={isEditModalVisible}
                    hideModal={hideEditModal}
                    onConfirm={onEditConfirm}
                    currentFloorPlanName={originalFloorPlanName}
                    setCurrentFloorPlanName={setCurrentFloorPlanName}
                />
            )}
        </ListContainer>
    );
};

export default FloorPlanPage;
