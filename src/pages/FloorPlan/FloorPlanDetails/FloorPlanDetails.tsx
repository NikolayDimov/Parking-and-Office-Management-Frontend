import { FloorPlanDetailsContainer, HeadingFloorPlan, ImageStyled } from './FloorPlanDetails.style';
import ImageMarker from 'react-image-marker';
import { BackButton, ListContainer } from '../FloorPlan.style';
import { useFloorPlanDetails } from './FloorPlanDetails.logic';
import { FaArrowLeft } from 'react-icons/fa6';
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
                <FaArrowLeft />
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
