import { useNavigate } from 'react-router-dom';
import {
    SpotTypeContainer,
    SpotTypeImage,
    SpotTypeParagraph,
    SpotTypeImageContainer,
    StyledCardLocation,
    SpotTypeParagraphOccupancy,
    ContentContainer,
    BaseButtonCard,
} from './SpotTypeCards.style';
import { Container, PageTitle } from '../../../components/CommonStyledElements';
import { SpotType } from './SpotTypeCards.static';
import { Location } from '../SpotType.static';
import { route } from '../../../static/routes';
import officeDeskPhoto from '../../../assets/office-desk_1.jpeg';
import conferenceRoom from '../../../assets/conference_1.jpeg';
import phoneBooth from '../../../assets/phone-booth_1.jpeg';
import parkingSpot from '../../../assets/parking-spot.jpg';
import { SpotTypeCardsOccupancyLogic } from './SpotsOccupancyLogic';
import { useTranslation } from 'react-i18next';

interface SpotTypeCardProps {
    singleLocation: Location | undefined;
    spotTypeData: SpotType[] | undefined;
}

const SpotTypeCards: React.FC<SpotTypeCardProps> = ({ singleLocation, spotTypeData }) => {
    const { t } = useTranslation();

    const navigate = useNavigate();
    if (!spotTypeData) return;
    const { updatedSpotTypeData } = SpotTypeCardsOccupancyLogic(spotTypeData);

    const renderImage = (name: string) => {
        switch (name) {
            case 'Office desk':
                return <SpotTypeImage src={officeDeskPhoto} alt={t('locations.spotTypes.officeDesk')} />;
            case 'Conference room':
                return <SpotTypeImage src={conferenceRoom} alt={t('locations.spotTypes.conferenceRoom')} />;
            case 'Phone booth':
                return <SpotTypeImage src={phoneBooth} alt={t('locations.spotTypes.phoneBooth')} />;
            case 'Parking place':
                return <SpotTypeImage src={parkingSpot} alt={t('locations.spotTypes.parkingSpot')} />;
            default:
                return null;
        }
    };

    return (
        <Container>
            {!singleLocation && <PageTitle>{t('locations.missingLocation')}</PageTitle>}
            {updatedSpotTypeData.length === 0 ? (
                <PageTitle>{t('locations.noSpotTypeData')}</PageTitle>
            ) : (
                <>
                    <PageTitle>
                        {t('locations.PageTitle')}
                        {singleLocation?.name}
                    </PageTitle>
                    <SpotTypeContainer>
                        {updatedSpotTypeData?.map((spotType) => (
                            <BaseButtonCard
                                key={spotType.id}
                                className="spot-type-card"
                                onClick={() => {
                                    navigate(`${route.createReservation}`, {
                                        state: { currentLocation: singleLocation, selectedSpotType: spotType },
                                    });
                                }}
                            >
                                <StyledCardLocation>
                                    <SpotTypeImageContainer>{renderImage(spotType.name)}</SpotTypeImageContainer>
                                    <ContentContainer>
                                        <SpotTypeParagraph>
                                            {t(`locations.spotTypes.${spotType.name}`)}
                                        </SpotTypeParagraph>
                                        {(spotType.name === 'Office desk' || spotType.name === 'Parking place') && (
                                            <SpotTypeParagraphOccupancy>
                                                {t('locations.occupancyTomorrow')} {`${spotType.occupancy}%`}
                                            </SpotTypeParagraphOccupancy>
                                        )}
                                    </ContentContainer>
                                </StyledCardLocation>
                            </BaseButtonCard>
                        ))}
                    </SpotTypeContainer>
                </>
            )}
        </Container>
    );
};

export default SpotTypeCards;
