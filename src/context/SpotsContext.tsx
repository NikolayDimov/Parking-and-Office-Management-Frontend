import { ReactNode, createContext, useContext, useState } from 'react';
import { Marker } from 'react-image-marker';
import { FloorPlan } from '../pages/FloorPlan/FloorPlan.static';
import { SpotMarker } from '../pages/CreateSpots/AddSpotForm/AddSpotForm.static';

interface SpotsContext {
    addMarker: (data: Data) => void;
    markerData: Data | undefined;
    setMarkerData: (data: Data) => void;
    setSpots: (spots: SpotMarker[]) => void;
    setExistingSpots: (spots: SpotMarker[]) => void;
    setNewSpots: (spots: SpotMarker[]) => void;
    saveNewSpots: (newMarker: SpotMarker) => void;
    existingSpots: SpotMarker[];
    newSpots: SpotMarker[];
}

interface Data {
    marker: Marker | undefined;
    floorPlan: FloorPlan;
}

interface SpotsProviderProps {
    children: ReactNode;
}

const SpotsContext = createContext<SpotsContext | undefined>(undefined);

const SpotsProvider = ({ children }: SpotsProviderProps) => {
    const [markerData, setMarkerData] = useState<Data>({ marker: undefined, floorPlan: {} });
    const [existingSpots, setExistingSpots] = useState<SpotMarker[]>([]);
    const [newSpots, setNewSpots] = useState<SpotMarker[]>([]);

    const addMarker = (data: Data) => {
        setMarkerData(data);
    };

    const setSpots = (spots: SpotMarker[]) => {
        if (spots) {
            setExistingSpots(spots);
        }
    };

    const saveNewSpots = (newMarker: SpotMarker) => {
        setNewSpots(() => {
            if (!newSpots) {
                return [newMarker];
            }
            return [...newSpots, newMarker];
        });

        setExistingSpots([...existingSpots, newMarker]);
    };

    return (
        <SpotsContext.Provider
            value={{
                addMarker,
                markerData,
                setSpots,
                setNewSpots,
                saveNewSpots,
                newSpots,
                existingSpots,
                setMarkerData,
                setExistingSpots,
            }}
        >
            {children}
        </SpotsContext.Provider>
    );
};

const useSpotsContext = () => {
    const context = useContext(SpotsContext);
    if (!context) {
        throw new Error('useSpotsContext must be used within a SpotsProvider');
    }
    return context;
};

export { useSpotsContext, SpotsProvider };
