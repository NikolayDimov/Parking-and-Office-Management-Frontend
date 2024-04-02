import { useNavigate, useParams } from 'react-router';
import { useQuery } from 'react-query';
import { getUser } from '../../services/userService';
import { SetStateAction, useState } from 'react';
import {
    getCurrentReservationsByUserId,
    getFutureReservationsByUserId,
    getPastReservationsByUserId,
} from '../../services/reservationService';
import useToken from '../../hooks/Token/Token.hook';

const useUser = (userId: string | undefined) => {
    const { data: user, refetch: userRefetch } = useQuery(['user', userId], () => getUser(userId));
    return { user, userRefetch };
};

const usePastReservationsByUser = (userId: string | undefined) => {
    const {
        data: reservations,
        refetch,
        isLoading,
    } = useQuery(['pastReservationsByUserId'], () => getPastReservationsByUserId(userId));
    return { pastReservations: reservations, pastReservationsRefetch: refetch, arePastReservationsLoading: isLoading };
};

const useCurrentReservationsByUserId = (userId: string | undefined) => {
    const {
        data: reservations,
        refetch,
        isLoading,
    } = useQuery(['currentReservationsByUserId'], () => getCurrentReservationsByUserId(userId));
    return {
        currentReservations: reservations,
        currentReservationsRefetch: refetch,
        areCurrentReservationsLoading: isLoading,
    };
};

const useFutureReservationsByUserId = (userId: string | undefined) => {
    const {
        data: reservations,
        refetch,
        isLoading,
    } = useQuery(['futureReservationsByUserId', userId], () => getFutureReservationsByUserId(userId));
    return {
        futureReservations: reservations,
        futureReservationsRefetch: refetch,
        areFutureReservationsLoading: isLoading,
    };
};

const UserProfilePageLogic = () => {
    const { id: userId } = useParams();
    const decodedToken = useToken();
    const { id: tokenId, role: tokenRole } = decodedToken || {};
    const { user, userRefetch } = useUser(userId);
    const { pastReservations, arePastReservationsLoading, pastReservationsRefetch } = usePastReservationsByUser(userId);
    const { currentReservations, areCurrentReservationsLoading, currentReservationsRefetch } =
        useCurrentReservationsByUserId(userId);
    const { futureReservations, areFutureReservationsLoading, futureReservationsRefetch } =
        useFutureReservationsByUserId(userId);

    const [activeTab, setActiveTab] = useState('future');

    const handleTabClick = (tab: SetStateAction<string>) => {
        setActiveTab(tab);
    };

    const navigate = useNavigate();
    const reservationTypes = { past: 'Past', current: 'Current', future: 'Future' };

    const handleGoBack = () => {
        navigate(-1);
    };

    return {
        user,
        pastReservations,
        arePastReservationsLoading,
        pastReservationsRefetch,
        currentReservations,
        areCurrentReservationsLoading,
        currentReservationsRefetch,
        futureReservations,
        areFutureReservationsLoading,
        futureReservationsRefetch,
        activeTab,
        handleTabClick,
        userRefetch,
        reservationTypes,
        tokenId,
        tokenRole,
        handleGoBack,
    };
};

export {
    useUser,
    UserProfilePageLogic,
    usePastReservationsByUser,
    useCurrentReservationsByUserId,
    useFutureReservationsByUserId,
};
