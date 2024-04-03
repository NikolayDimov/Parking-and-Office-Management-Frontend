import React from 'react';
import { DetailBulletContainer } from './DetailBullet.style';

export interface DetailBulletProps {
    icon: string;
    value: string;
}

const DetailBullet: React.FC<DetailBulletProps> = ({ icon, value }) => {
    return (
        <DetailBulletContainer>
            {icon && <img src={icon} alt="Icon" />} <span>{value}</span>
        </DetailBulletContainer>
    );
};

export default DetailBullet;
