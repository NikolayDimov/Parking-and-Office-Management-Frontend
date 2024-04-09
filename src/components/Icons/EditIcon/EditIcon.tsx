import React from 'react';
import { StyledToolTip } from '../../CommonStyledElements';
import { BlueEditIcon } from './EditIcon.style';
import { EditIconProps } from './EditIcon.static';
import { useTranslation } from 'react-i18next';

const EditIcon: React.FC<EditIconProps> = ({ onClick }) => {
    const { t } = useTranslation();

    return (
        <>
            <BlueEditIcon
                onClick={onClick}
                role="img"
                aria-label={t('edit')}
                data-tooltip-id="component_edit"
                data-tooltip-place="left"
            >
                🖌️
            </BlueEditIcon>
            <StyledToolTip id="component_edit" className="spot-info">
                <p>{t('buttons.edit')}</p>
            </StyledToolTip>
        </>
    );
};

export default EditIcon;
