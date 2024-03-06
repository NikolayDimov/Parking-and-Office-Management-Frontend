import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getLocation } from "../../services/locationService";
import useToken from "../../hooks/Token/Token.hook";
import { getFutureReservationsByUserIdAndLocation } from "../../services/reservationService";

const useChoseLocation = () => {
  const { id } = useParams();
  const decodedToken = useToken();

  const { id: userId } = decodedToken || {};

  const {
    data: singleLocation,
    isLoading,
    error,
  } = useQuery(["location", id], () => {
    if (id) {
      return getLocation(id);
    }
  });

  return { singleLocation, isLoading, error, userId };
};

const useFutureReservationsByUserIdAndLocation = (
  userId: string | undefined
) => {
  const { id } = useParams();
  const {
    data: reservations,
    refetch,
    isLoading,
  } = useQuery(["futureReservationsByUserId", userId], () =>
    getFutureReservationsByUserIdAndLocation(userId, id)
  );
  return {
    futureReservations: reservations,
    futureReservationsRefetch: refetch,
    areFutureReservationsLoading: isLoading,
  };
};

export { useChoseLocation, useFutureReservationsByUserIdAndLocation };
