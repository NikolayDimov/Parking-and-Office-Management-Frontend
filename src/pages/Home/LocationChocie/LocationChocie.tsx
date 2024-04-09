import { Location } from '../Home.static';
import { InformationContainer, LinkContainer, LocationImage } from './LocationChoice.style';
import { StyledCard } from '../../../components/CommonStyledElements';
import { useTranslation } from 'react-i18next';

const LocationChoice = ({ location }: { location: Location }) => {
    const { t } = useTranslation();

    return (
        <li>
            <LinkContainer to={`location/${location.id}`}>
                <StyledCard className="home-card">
                    <LocationImage src={location.imgUrl} alt="location-photo" />
                    <InformationContainer>
                        <span>
                            {t('home.card.city')} {location.city}
                        </span>
                        <span>
                            {t('home.card.office')} {location.name}
                        </span>
                    </InformationContainer>
                </StyledCard>
            </LinkContainer>
        </li>
    );
};

export default LocationChoice;
