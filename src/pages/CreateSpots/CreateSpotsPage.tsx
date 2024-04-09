import ImageMarker, { Marker } from 'react-image-marker';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';
import { DivFlexStyled, Explanations } from './CreateSpotsPage.style';
import { useCreateSpots } from './CreateSpotsPage.logic';
import { BaseButton, Container, FormButtonsContainer } from '../../components/CommonStyledElements';
import { useSpotsContext } from '../../context/SpotsContext';
import Loader from '../../components/Loader/Loader';
import { BackButton } from '../FloorPlan/FloorPlan.style';
import SpotCreationMarker from './SpotCreationMarker/SpotCreationMarker';
import { ImageStyled } from '../FloorPlan/FloorPlanDetails/FloorPlanDetails.style';
import { useTranslation } from 'react-i18next';

export default function CreateSpots() {
    const { t } = useTranslation();

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
        return <p>{t('createSpotPage.error')}</p>;
    }

    return (
        <Container className="App">
            <BackButton onClick={handleGoBack}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 52 52">
                    <path
                        d="M48.6,23H15.4c-0.9,0-1.3-1.1-0.7-1.7l9.6-9.6c0.6-0.6,0.6-1.5,0-2.1l-2.2-2.2c-0.6-0.6-1.5-0.6-2.1,0
	L2.5,25c-0.6,0.6-0.6,1.5,0,2.1L20,44.6c0.6,0.6,1.5,0.6,2.1,0l2.1-2.1c0.6-0.6,0.6-1.5,0-2.1l-9.6-9.6C14,30.1,14.4,29,15.3,29
	h33.2c0.8,0,1.5-0.6,1.5-1.4v-3C50,23.8,49.4,23,48.6,23z"
                    />
                </svg>
            </BackButton>
            <FormButtonsContainer>
                <BaseButton className="close-btn" onClick={handleClear}>
                    {t('createSpotPage.clearNewSpots')}
                </BaseButton>
                <BaseButton className="create-btn" onClick={createSpots}>
                    {t('createSpotPage.saveAllSpots')}
                </BaseButton>
            </FormButtonsContainer>
            <Explanations>{t('createSpotPage.explanations')}</Explanations>
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
