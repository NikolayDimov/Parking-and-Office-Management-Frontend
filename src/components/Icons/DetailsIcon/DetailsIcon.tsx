import React from 'react';
import { StyledToolTip } from '../../CommonStyledElements';
import { WhiteDetailsIcon } from './DetailsIcon.style';
import { DetailsIconProps } from './DetailsIcon.static';

const DetailsIcon: React.FC<DetailsIconProps> = ({ onClick }) => (
    <>
        <WhiteDetailsIcon
            onClick={onClick}
            role="img"
            aria-label="Details"
            data-tooltip-id={`component_details`}
            data-tooltip-place="left"
        >
            📄
        </WhiteDetailsIcon>
        <StyledToolTip id={`component_details`} className="spot-info">
            {<p>Edit</p>}
        </StyledToolTip>
    </>
);

export default DetailsIcon;
