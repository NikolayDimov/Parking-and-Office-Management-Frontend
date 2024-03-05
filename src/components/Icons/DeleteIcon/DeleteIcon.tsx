import React from 'react';
import { StyledToolTip } from '../../CommonStyledElements';
import { RedDeleteIcon } from './DeleteIcon.style';
import { DeleteIconProps } from './DeleteIcon.static';

const DeleteIcon: React.FC<DeleteIconProps> = ({ onClick }) => (
    <>
        <RedDeleteIcon
            onClick={onClick}
            role="img"
            aria-label="Delete"
            data-tooltip-id={`component_delete`}
            data-tooltip-place="left"
        >
            ❌
        </RedDeleteIcon>
        <StyledToolTip id={`component_delete`} className="spot-info">
            {<p>Delete</p>}
        </StyledToolTip>
    </>
);

export default DeleteIcon;
