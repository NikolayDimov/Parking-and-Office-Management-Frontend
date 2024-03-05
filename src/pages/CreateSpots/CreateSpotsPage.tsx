import ImageMarker, { Marker } from 'react-image-marker';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';
import { DivFlexStyled } from './CreateSpotsPage.style';
import { useCreateSpots } from './CreateSpotsPage.logic';
import { BaseButton, Container, FormButtonsContainer } from '../../components/CommonStyledElements';
import { useSpotsContext } from '../../context/SpotsContext';
import Loader from '../../components/Loader/Loader';
import { BackButton } from '../FloorPlan/FloorPlan.style';
import { FaArrowLeft } from 'react-icons/fa6';
import SpotCreationMarker from './SpotCreationMarker/SpotCreationMarker';
import { ImageStyled } from '../FloorPlan/FloorPlanDetails/FloorPlanDetails.style';

export default function CreateSpots() {
    const navigate = useNavigate();
    const location = useLocation();
    const {
        handleClear,
        handleGoBack,
        createSpots,
        floorPlan,
        floorPlanError,
        floorPlanLoading,
        spotsError,
        spotsLoading,
    } = useCreateSpots();
    const { addMarker, existingSpots } = useSpotsContext();

    if (floorPlanLoading || spotsLoading) {
        return <Loader />;
    }

    if (floorPlanError || spotsError) {
        return <p>Error at Create Spots page</p>;
    }

    return (
        <Container className="App">
            <BackButton className="floor-plan" onClick={handleGoBack}>
                <FaArrowLeft />
            </BackButton>
            <FormButtonsContainer>
                <BaseButton className="close-btn" onClick={handleClear}>
                    Clear New Spots
                </BaseButton>
                <BaseButton className="create-btn" onClick={createSpots}>
                    Save All Spots
                </BaseButton>
            </FormButtonsContainer>
            <DivFlexStyled className="frame">
                {floorPlan && existingSpots && (
                    <ImageStyled>
                        <ImageMarker
                            src={floorPlan.imgUrl!}
                            markers={existingSpots}
                            onAddMarker={(marker: Marker) => {
                                addMarker({ marker, floorPlan });
                                navigate(`/spots/${floorPlan.id}/create`, {
                                    state: { background: location },
                                });
                            }}
                            markerComponent={SpotCreationMarker}
                        />
                    </ImageStyled>
                )}
            </DivFlexStyled>
        </Container>
    );
}
