import React from 'react';
import { StyledToolTip } from '../../CommonStyledElements';
import { PlusIcon } from './FloorPlanAddIcon.style';
import { FloorPlansAddIconProps } from './FloorPlanAddIcon.static';

const FloorPlansAddIcon: React.FC<FloorPlansAddIconProps> = ({ onClick }) => (
    <>
        <PlusIcon
            onClick={onClick}
            role="img"
            aria-label="Edit"
            data-tooltip-id={`component_create_floorplan`}
            data-tooltip-place="left"
        >
            +
        </PlusIcon>
        <StyledToolTip id={`component_create_floorplan`} className="spot-info">
            {<p>Create new floor plan</p>}
        </StyledToolTip>
    </>
);

export default FloorPlansAddIcon;
