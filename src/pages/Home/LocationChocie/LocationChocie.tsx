import { Location } from '../Home.static';
import { InformationContainer, LinkContainer, LocationImage } from './LocationChoice.style';
import { StyledCard } from '../../../components/CommonStyledElements';

const LocationChoice = ({ location }: { location: Location }) => {
    return (
        <li>
            <LinkContainer to={`location/${location.id}`}>
                <StyledCard className="home-card">
                    <LocationImage src={location.imgUrl} alt="location-photo" />
                    <InformationContainer>
                        <span>City {location.city}</span>
                        <span>Office {location.name}</span>
                    </InformationContainer>
                </StyledCard>
            </LinkContainer>
        </li>
    );
};

export default LocationChoice;
