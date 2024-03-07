import { useQuery } from 'react-query';
import { deleteLocation, getLocations, updateLocation } from '../../services/locationService';
import { useState } from 'react';
import useToken from '../../hooks/Token/Token.hook';
import { LocationData } from './AdminPage.static';
import { useNavigate } from 'react-router-dom';

const useAdminPage = () => {
    const { data: locations, isLoading, error, refetch } = useQuery('admin', () => getLocations());

    const [selectedLocationIdForDelete, setSelectedLocationIdForDelete] = useState<string | null>(null);
    const [selectedLocationIdForEdit, setSelectedLocationIdForEdit] = useState<string | null>(null);

    const [currentLocation, setCurrentLocation] = useState({
        name: '',
        city: '',
        address: '',
    });

    const [originalLocation, setOriginalLocation] = useState({
        name: '',
        city: '',
        address: '',
    });

    const decodedToken = useToken();
    const navigate = useNavigate();

    const handleCreateLocationClick = () => {
        navigate('/createLocation');
    };
    const handleManageUsersClick = () => {
        navigate('/user');
    };

    const onDeleteLocation = async (locationId: string) => {
        try {
            await deleteLocation(locationId);
            refetch();
        } catch (error) {
            console.error('Error deleting location:', error);
        }
    };

    const onEditLocation = async (locationId: string, newLocationData: LocationData) => {
        try {
            if (newLocationData.name !== originalLocation.name) {
                await updateLocation(locationId, newLocationData);
            } else {
                const updatedLocationData = { ...newLocationData };
                if ('name' in updatedLocationData) {
                    delete updatedLocationData.name;
                }
                await updateLocation(locationId, updatedLocationData);
            }

            refetch();
        } catch (error) {
            console.error('Error editing location:', error);
        }
    };

    const onDeleteClick = (locationId: string) => {
        setSelectedLocationIdForDelete(locationId);
    };

    const onEditClick = (locationId: string, locationName: string, locationCity: string, locationAddress: string) => {
        setSelectedLocationIdForEdit(locationId);
        setCurrentLocation({
            name: locationName,
            city: locationCity,
            address: locationAddress,
        });

        setOriginalLocation({
            name: locationName,
            city: locationCity,
            address: locationAddress,
        });
    };

    const onDeleteConfirm = async () => {
        if (selectedLocationIdForDelete) {
            await onDeleteLocation(selectedLocationIdForDelete);
            setSelectedLocationIdForDelete(null);
        }
    };

    const onEditConfirm = async () => {
        try {
            if (selectedLocationIdForEdit) {
                const newLocationData = {
                    name: currentLocation.name,
                    city: currentLocation.city,
                    address: currentLocation.address,
                    modifiedBy: decodedToken?.id,
                };

                await onEditLocation(selectedLocationIdForEdit, newLocationData);
            }

            setSelectedLocationIdForEdit(null);
            setCurrentLocation({
                name: '',
                city: '',
                address: '',
            });
        } catch (error) {
            console.error('Error handling edit confirmation:', error);
        }
    };

    // test

    return {
        locations,
        isLoading,
        error,
        onDeleteClick,
        onEditClick,
        currentLocation,
        setCurrentLocation,
        onDeleteConfirm,
        onEditConfirm,
        originalLocation,
        handleCreateLocationClick,
        handleManageUsersClick,
    };
};

export default useAdminPage;
