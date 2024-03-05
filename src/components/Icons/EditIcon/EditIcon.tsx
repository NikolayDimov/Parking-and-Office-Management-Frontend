import React from 'react';
import { StyledToolTip } from '../../CommonStyledElements';
import { BlueEditIcon } from './EditIcon.style';
import { EditIconProps } from './EditIcon.static';

const EditIcon: React.FC<EditIconProps> = ({ onClick }) => (
    <>
        <BlueEditIcon
            onClick={onClick}
            role="img"
            aria-label="Edit"
            data-tooltip-id={`component_edit`}
            data-tooltip-place="left"
        >
            🖌️
        </BlueEditIcon>
        <StyledToolTip id={`component_edit`} className="spot-info">
            {<p>Edit</p>}
        </StyledToolTip>
    </>
);

export default EditIcon;
