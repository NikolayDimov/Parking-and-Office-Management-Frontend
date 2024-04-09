import React from 'react';
import { StyledToolTip } from '../../CommonStyledElements';
import { RedDeleteIcon } from './DeleteIcon.style';
import { DeleteIconProps } from './DeleteIcon.static';
import { useTranslation } from 'react-i18next';

const DeleteIcon: React.FC<DeleteIconProps> = ({ onClick }) => {
    const { t } = useTranslation();

    return (
        <>
            <RedDeleteIcon
                onClick={onClick}
                role="img"
                aria-label={t('delete')}
                data-tooltip-id={`component_delete`}
                data-tooltip-place="left"
            >
                ❌
            </RedDeleteIcon>
            <StyledToolTip id={`component_delete`} className="spot-info">
                {<p>{t('buttons.delete')}</p>}
            </StyledToolTip>
        </>
    );
};

export default DeleteIcon;
