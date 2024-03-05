import { useNavigate } from 'react-router-dom';
import { SpotTypeContainer, SpotTypeImage, SpotTypeParagraph, SpotTypeImageContainer } from './SpotTypeCards.style';
import { BaseButton, Container, PageTitle, StyledCard } from '../../../components/CommonStyledElements';
import { SpotType } from './SpotTypeCards.static';
import { Location } from '../SpotType.static';
import { route } from '../../../static/routes';
import officeDeskPhoto from '../../../assets/office-desk.jpg';
import conferenceRoom from '../../../assets/conference-room.jpg';
import phoneBooth from '../../../assets/phone-booth.jpg';
import parkingSpot from '../../../assets/parking-spot.jpg';
import { SpotTypeCardsOccupancyLogic } from './SpotsOccupancyLogic';

interface SpotTypeCardProps {
    singleLocation: Location | undefined;
    spotTypeData: SpotType[] | undefined;
}

const SpotTypeCards: React.FC<SpotTypeCardProps> = ({ singleLocation, spotTypeData }) => {
    const navigate = useNavigate();
    if (!spotTypeData) return;
    const { updatedSpotTypeData } = SpotTypeCardsOccupancyLogic(spotTypeData);

    const renderImage = (name: string) => {
        switch (name) {
            case 'Office desk':
                return <SpotTypeImage src={officeDeskPhoto} alt="Office desk" />;
            case 'Conference room':
                return <SpotTypeImage src={conferenceRoom} alt="Conference room" />;
            case 'Phone booth':
                return <SpotTypeImage src={phoneBooth} alt="Phone booth" />;
            case 'Parking place':
                return <SpotTypeImage src={parkingSpot} alt="Parking spot" />;
            default:
                return null;
        }
    };
    return (
        <Container>
            {!singleLocation && <PageTitle>The chosen location is missing</PageTitle>}
            {updatedSpotTypeData.length === 0 ? (
                <PageTitle>No Spot Types Data</PageTitle>
            ) : (
                <>
                    <PageTitle>Reserve your spot at {singleLocation?.name}</PageTitle>
                    <SpotTypeContainer>
                        {updatedSpotTypeData?.map((spotType) => (
                            <BaseButton
                                key={spotType.id}
                                className="spot-type-card"
                                onClick={() => {
                                    navigate(`${route.createReservation}`, {
                                        state: { currentLocation: singleLocation, selectedSpotType: spotType },
                                    });
                                }}
                            >
                                <StyledCard>
                                    <SpotTypeParagraph>{spotType.name}</SpotTypeParagraph>
                                    {(spotType.name === 'Office desk' || spotType.name === 'Parking place') && (
                                        <SpotTypeParagraph>{`Occupancy Tomorrow: ${spotType.occupancy}%`}</SpotTypeParagraph>
                                    )}
                                    <SpotTypeImageContainer>{renderImage(spotType.name)}</SpotTypeImageContainer>
                                </StyledCard>
                            </BaseButton>
                        ))}
                    </SpotTypeContainer>
                </>
            )}
        </Container>
    );
};

export default SpotTypeCards;
