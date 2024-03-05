import { useLocation, useNavigate } from "react-router";
import { BaseButton } from "../../../components/CommonStyledElements";
import { route } from "../../../static/routes";
import SpotCard from "./SpotCard";
import { ContainerDivFlex, StyledContainer } from "./SpotCardsContainer.styles";
import { SpotCardsContainerProps } from "./SpotCardsContainer.static";

const SpotCardsContainer: React.FC<SpotCardsContainerProps> = ({ spots }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const handleReserveCombination = () => {
        navigate(`${route.createReservation}/combination`, {
            state: { background: location, spots: spots },
        })
    };
    return (
        <StyledContainer>
            <h2>There is no free spot for that period, here is a combination of spots</h2>
        <ContainerDivFlex>
            {spots.map((spot, index) => (
                <SpotCard key={index} spot={spot} />
            ))}
        </ContainerDivFlex>
        <BaseButton onClick={handleReserveCombination}>Reserve Combination</BaseButton>
        </StyledContainer>
        
    );
};

export default SpotCardsContainer;