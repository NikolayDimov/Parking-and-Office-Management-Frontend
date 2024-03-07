import { StyledToolTip } from '../../../../components/CommonStyledElements';
import { route } from '../../../../static/routes';
import { SpotMarker } from '../../../CreateSpots/AddSpotForm/AddSpotForm.static';
import { MarkerStyled } from './SpotUpdateMarker.style';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export default function SpotUpdateMarker(props: SpotMarker) {
    const navigate = useNavigate();
    const location = useLocation();
    const { fpId } = useParams();
    return (
        <>
            <MarkerStyled
                data-tooltip-id={`component_${props.id}`}
                data-tooltip-place="top"
                className={`custom-marker_${props.isPermanent}`}
                onClick={() => {
                    navigate(route.spotDetails.replace(':spotId', `${props.id}`), {
                        state: { background: location, spotProps: props },
                    });
                }}
            />
            <StyledToolTip id={`component_${props.id}`} className="spot-info">
                {
                    <>
                        <h4>{props.name}</h4>
                        <p>{props.description}</p>
                        <p>{props.isPermanent ? 'Spot is permanently occupied!' : null}</p>
                    </>
                }
            </StyledToolTip>
        </>
    );
}
