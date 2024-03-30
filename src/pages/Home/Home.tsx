import { HomeContainer } from './Home.style';
import useHome from './Home.logic';
import { Location } from './Home.static';
import Loader from '../../components/Loader/Loader';
import LocationChoice from './LocationChocie/LocationChocie';
import { ListContainer } from '../AdminPage/AdminPage.style';

const Home = () => {
    const { locations, isLoading, error } = useHome();

    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        return <div>Error loading locations</div>;
    }

    return (
        <HomeContainer>
            {Array.isArray(locations) && locations.length > 0 ? (
                <ListContainer>
                    <h1>Choose location</h1>
                    <ul>
                        {locations.map((location: Location) => (
                            <LocationChoice key={location.id} location={location} />
                        ))}
                    </ul>
                </ListContainer>
            ) : (
                <div>No locations available</div>
            )}
        </HomeContainer>
    );
};

export default Home;
