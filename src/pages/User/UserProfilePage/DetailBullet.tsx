import { DetailBulletProps } from "./UserProfilePage.static";
import { StyledDetailBullet } from "./UserProfilePage.styles";

const DetailBullet: React.FC<DetailBulletProps> = ({ icon, value }) => {
    return (
      <StyledDetailBullet>
        {icon && <img src={icon} alt="Icon" />} <span>{value}</span>
      </StyledDetailBullet>
    );
  };
  
  export default DetailBullet;