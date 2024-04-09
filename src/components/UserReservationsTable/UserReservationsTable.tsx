import { Reservation } from '../../static/types';
import { Container, PageTitle } from '../CommonStyledElements';
import useModal from '../ModalList/useModal';
import DeleteIcon from '../Icons/DeleteIcon/DeleteIcon';
import Loader from '../Loader/Loader';
import DeleteReservationModal from '../UserReservationsTable/DeleteModal/DeleteModal';
import useUserReservationsTableLogic from '../UserReservationsTable/UserReservationsTable.logic';
import { ReservationsTable } from '../UserReservationsTable/UserReservationsTable.static';
import { UserReservationsTableStyle } from '../UserReservationsTable/UserReservationsTable.styles';
import { useTranslation } from 'react-i18next';

interface UserReservationsTable {
    reservations: Reservation[] | undefined;
    isLoading: boolean;
    refetch: () => void;
    reservationType: string;
}

const UserReservationsTable = (props: UserReservationsTable) => {
    const { reservations, isLoading, refetch, reservationType } = props;
    const { t } = useTranslation();

    const { formattedReservations, areLoading, onDeleteConfirm, onDeleteClick } = useUserReservationsTableLogic(
        reservations,
        isLoading,
        refetch,
    );

    const { isVisible: isDeleteModalVisible, showModal: showDeleteModal, hideModal: hideDeleteModal } = useModal();

    if (areLoading) {
        return <Loader />;
    }

    return (
        <Container>
            <div>
                {formattedReservations.length === 0 ? (
                    <PageTitle>
                        {t('reservations.table.no')} {`${reservationType}`} {t('reservations.table.reservation')}
                    </PageTitle>
                ) : (
                    <UserReservationsTableStyle>
                        <caption>
                            {`${reservationType} `}
                            {t('reservations.table.reservation')}
                        </caption>
                        <thead>
                            <tr>
                                <th className="table-head"> {t('reservations.table.spot')}</th>
                                <th className="table-head">{t('reservations.table.spotDescription')}</th>
                                <th className="table-head">{t('reservations.table.spotLocation')}</th>
                                <th className="table-head">{t('reservations.table.comment')}</th>
                                <th className="table-head">{t('reservations.table.start')}</th>
                                <th className="table-head">{t('reservations.table.end')}</th>
                                {reservationType === 'Future' && (
                                    <th className="table-head">{t('reservations.table.action')}</th>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {formattedReservations.map((reservation: ReservationsTable) => {
                                return (
                                    <tr key={reservation.id}>
                                        <td data-label="Spot:">{reservation.spotName}</td>
                                        <td data-label="Spot Description:">{reservation.spotDescription}</td>
                                        <td data-label="Location:">{reservation.spotLocation}</td>
                                        <td data-label="Comment:">{reservation.comment}</td>
                                        <td data-label="Start:">{new Date(reservation.start).toLocaleString()}</td>
                                        <td data-label="End:">{new Date(reservation.end).toLocaleString()}</td>
                                        {reservationType === 'Future' && (
                                            <td data-label="Action:">
                                                <DeleteIcon
                                                    onClick={() => {
                                                        onDeleteClick(reservation.id);
                                                        showDeleteModal();
                                                    }}
                                                />
                                            </td>
                                        )}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </UserReservationsTableStyle>
                )}
            </div>

            {isDeleteModalVisible && (
                <DeleteReservationModal
                    isVisible={isDeleteModalVisible}
                    hideModal={hideDeleteModal}
                    onDeleteConfirm={onDeleteConfirm}
                />
            )}
        </Container>
    );
};

export default UserReservationsTable;
