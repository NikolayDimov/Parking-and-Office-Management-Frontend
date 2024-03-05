import { useLocation, useNavigate } from 'react-router';
import { route } from '../../../static/routes';
import { CustomSpotMarker } from './SpotMarkerReservation.static';
import { SpotStyled } from './SpotMarkerReservation.style';

export default function SpotMarkerReservation(props: CustomSpotMarker) {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <SpotStyled
            onClick={() => {
                navigate(`${route.createReservation}/${props.id}`, {
                    state: { background: location, spotProps: props },
                });
            }}
        />
    );
}
