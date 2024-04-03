import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { post } from '../services/fetchService';
import { endpoints } from '../static/endpoints';
import { Reservation } from '../static/types';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import useToken from '../hooks/Token/Token.hook';
import { route } from '../static/routes';

interface ReservationContextProps {
    addReservation: (reservationsToAdd: Reservation) => void;
    reservations: Reservation[];
    sendReservationsToBackend: (reservations: Reservation[]) => void;
    removeReservation: (id: string, start: Date, end: Date) => void;
}

interface ReservationProviderProps {
    children: ReactNode;
}

const ReservationContext = createContext<ReservationContextProps | undefined>(undefined);

const ReservationProvider = ({ children }: ReservationProviderProps) => {
    const [reservations, setReservation] = useState<Reservation[]>([]);
    const navigation = useNavigate();

    const decodedToken = useToken();

    const id = decodedToken?.id;

    useEffect(() => {
        const storedReservation = sessionStorage.getItem('reservation');
        if (storedReservation) {
            setReservation(JSON.parse(storedReservation));
        }
    }, []);

    useEffect(() => {
        if (reservations.length > 0) {
            sessionStorage.setItem('reservation', JSON.stringify(reservations));
        }
    }, [reservations]);

    const addReservation = (reservationToAdd: Reservation) => {
        setReservation((prevReservations) => [...prevReservations, reservationToAdd]);
    };

    const sendReservationsToBackend = async (reservations: Reservation[]) => {
        const dataToSend = { reservations };
        try {
            await post(`${endpoints.createMultipleReservations}`, dataToSend);

            toast.success('Reservations sent successfully');
            navigation(`${route.user}/${id}/${route.reservations}`);
            setReservation([]);
            sessionStorage.removeItem('reservation');
        } catch (error) {
            console.error('Error occurred while sending reservations:', error);
            toast.error('Something went wrong');
            throw error;
        }
    };

    const removeReservation = (id: string, start: Date, end: Date) => {
        setReservation((prevReservations) => {
            const updatedReservations = prevReservations.filter(
                (reservation) => reservation.spotId !== id || reservation.start !== start || reservation.end !== end,
            );
            sessionStorage.setItem('reservation', JSON.stringify(updatedReservations));
            toast.success('Reservation removed');
            return updatedReservations;
        });
    };

    return (
        <ReservationContext.Provider
            value={{ addReservation, reservations, sendReservationsToBackend, removeReservation }}
        >
            {children}
        </ReservationContext.Provider>
    );
};

const useReservationContext = () => {
    const context = useContext(ReservationContext);
    if (!context) {
        throw new Error('useReservation must be used within a ReservationProvider');
    }
    return context;
};

export { ReservationProvider, useReservationContext };
