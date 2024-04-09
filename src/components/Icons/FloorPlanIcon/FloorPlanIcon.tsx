import React from 'react';
import { StyledToolTip } from '../../CommonStyledElements';
import { WhiteFloorPlansIcon } from './FloorPlanIcon.style';
import { FloorPlansIconProps } from './FloorPlanIcon.static';
import { useTranslation } from 'react-i18next';

const FloorPlansIcon: React.FC<FloorPlansIconProps> = ({ onClick }) => {
    const { t } = useTranslation();

    return (
        <>
            <WhiteFloorPlansIcon
                onClick={onClick}
                data-tooltip-id={`component_check_floorplans`}
                data-tooltip-place="left"
            >
                <img src="src/assets/icon-floor-plan.jpg" alt="Floor Plans" style={{ width: '25px', height: '25px' }} />
            </WhiteFloorPlansIcon>
            <StyledToolTip id={`component_check_floorplans`} className="spot-info">
                {<p>{t('buttons.seeAllFloorPlans')}</p>}
            </StyledToolTip>
        </>
    );
};

export default FloorPlansIcon;
