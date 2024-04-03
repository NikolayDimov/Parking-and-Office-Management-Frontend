import { FloorPlanDetailsContainer, HeadingFloorPlan, ImageStyled } from './FloorPlanDetails.style';
import ImageMarker from 'react-image-marker';
import { BackButton, ListContainer } from '../FloorPlan.style';
import { useFloorPlanDetails } from './FloorPlanDetails.logic';
import SpotUpdateMarker from './SpotUpdateMarker/SpotUpdateMarker';
import Loader from '../../../components/Loader/Loader';

const FloorPlanDetails = () => {
    const { floorPlan, spotsByFloorPlan, error, isLoading, handleGoBack } = useFloorPlanDetails();

    if (!floorPlan) {
        return <div>Loading...</div>;
    }

    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        return <p>Error at Floor Plan Details page</p>;
    }

    return (
        <ListContainer>
            <BackButton onClick={handleGoBack}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 52 52">
                    <path
                        d="M48.6,23H15.4c-0.9,0-1.3-1.1-0.7-1.7l9.6-9.6c0.6-0.6,0.6-1.5,0-2.1l-2.2-2.2c-0.6-0.6-1.5-0.6-2.1,0
	L2.5,25c-0.6,0.6-0.6,1.5,0,2.1L20,44.6c0.6,0.6,1.5,0.6,2.1,0l2.1-2.1c0.6-0.6,0.6-1.5,0-2.1l-9.6-9.6C14,30.1,14.4,29,15.3,29
	h33.2c0.8,0,1.5-0.6,1.5-1.4v-3C50,23.8,49.4,23,48.6,23z"
                    />
                </svg>
            </BackButton>

            <FloorPlanDetailsContainer>
                <div key={floorPlan.id}>
                    <HeadingFloorPlan>{floorPlan.name}</HeadingFloorPlan>
                    <ImageStyled>
                        {floorPlan && spotsByFloorPlan && (
                            <ImageMarker
                                src={floorPlan.imgUrl!}
                                markers={spotsByFloorPlan}
                                markerComponent={SpotUpdateMarker}
                            />
                        )}
                    </ImageStyled>
                </div>
            </FloorPlanDetailsContainer>
        </ListContainer>
    );
};

export default FloorPlanDetails;
