import { Link } from 'react-router-dom';
import { Location } from '../Home.static';
import { InformationContainer, LocationImage } from './LocationChoice.style';
import { StyledCard } from '../../../components/CommonStyledElements';

const LocationChoice = ({ location }: { location: Location }) => {
    return (
        <li>
            <div>
                <Link to={`location/${location.id}`}>
                    <StyledCard className="home-card">
                        <LocationImage src={location.imgUrl} alt="location-photo" />
                        <InformationContainer>
                            <span>{location.city}</span>
                            <span>{location.name}</span>
                        </InformationContainer>
                    </StyledCard>
                </Link>
            </div>
        </li>
    );
};

export default LocationChoice;
