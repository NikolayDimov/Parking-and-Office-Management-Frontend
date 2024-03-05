import React from 'react';
import { StyledToolTip } from '../../CommonStyledElements';
import { WhiteFloorPlansIcon } from './FloorPlanIcon.style';
import { FloorPlansIconProps } from './FloorPlanIcon.static';

const FloorPlansIcon: React.FC<FloorPlansIconProps> = ({ onClick }) => (
    <>
        <WhiteFloorPlansIcon onClick={onClick} data-tooltip-id={`component_check_floorplans`} data-tooltip-place="left">
            <img src="src/assets/icon-floor-plan.jpg" alt="Floor Plans" style={{ width: '25px', height: '25px' }} />
        </WhiteFloorPlansIcon>
        <StyledToolTip id={`component_check_floorplans`} className="spot-info">
            {<p>See all floor plans for this location</p>}
        </StyledToolTip>
    </>
);

export default FloorPlansIcon;
