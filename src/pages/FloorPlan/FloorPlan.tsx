import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { AddSpotIcon, ArrowIcon, BackButton, LinkFloorPlan, ListContainer } from './FloorPlan.style';
import useModal from '../../components/ModalList/useModal';
import DeleteFloorPlanModal from './FloorPlanDelete/FloorPlanDeleteModal';
import useFloorPlan from './FloorPlan.logic';
import { FaArrowLeft } from 'react-icons/fa';
import { useSpotsContext } from '../../context/SpotsContext';
import { StyledToolTip } from '../../components/CommonStyledElements';
import EditIcon from '../../components/Icons/EditIcon/EditIcon';
import DeleteIcon from '../../components/Icons/DeleteIcon/DeleteIcon';
import { UserReservationsTableStyle } from '../../components/UserReservationsTable/UserReservationsTable.styles';
import { FloorPlan } from './FloorPlan.static';
import { route } from '../../static/routes';

const FloorPlanPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { locId, floorPlans, isLoading, onDeleteClick, onDeleteConfirm, handleGoBack } = useFloorPlan();

    const { isVisible: isDeleteModalVisible, showModal: showDeleteModal, hideModal: hideDeleteModal } = useModal();
    const { setExistingSpots } = useSpotsContext();

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
                        {floorPlans && floorPlans?.length > 0 ? (
                            floorPlans.map((floorPlanItem: FloorPlan) => (
                                <tr key={floorPlanItem.id}>
                                    <td data-label="Name:">{floorPlanItem.name}</td>

                                    <td data-label="Open Floor Plan:">
                                        <LinkFloorPlan
                                            to={`${route.floorPlan.replace(':locId', `${locId}`)}/${floorPlanItem.id}`}
                                        >
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
                                                navigate(`${route.createSpot}/${floorPlanItem.id}`);
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
                                                navigate(
                                                    route.updateFloorPlan.replace(':fpId', `${floorPlanItem.id}`),
                                                    {
                                                        state: { background: location, floorPlan: floorPlanItem },
                                                    },
                                                );
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
        </ListContainer>
    );
};

export default FloorPlanPage;
