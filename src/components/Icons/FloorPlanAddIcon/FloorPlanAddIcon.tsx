import React from 'react';
import { StyledToolTip } from '../../CommonStyledElements';
import { PlusIcon } from './FloorPlanAddIcon.style';
import { FloorPlansAddIconProps } from './FloorPlanAddIcon.static';
import { useTranslation } from 'react-i18next';

const FloorPlansAddIcon: React.FC<FloorPlansAddIconProps> = ({ onClick }) => {
    const { t } = useTranslation();

    return (
        <>
            <PlusIcon
                onClick={onClick}
                role="img"
                aria-label={t('createFloorPlan')}
                data-tooltip-id={`component_create_floorplan`}
                data-tooltip-place="left"
            >
                +
            </PlusIcon>
            <StyledToolTip id={`component_create_floorplan`} className="spot-info">
                {<p>{t('buttons.createFloorPlan')}</p>}
            </StyledToolTip>
        </>
    );
};

export default FloorPlansAddIcon;
