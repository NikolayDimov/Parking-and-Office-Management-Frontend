import { UserCardProps } from './UserCard.static';
import { StyledUserCard, UserImage } from './UserCard.styles';
import UserCardDetails from './UserCardDetails';
import userImg from '../../../../assets/default-profile.jpg';

export default function UserCard({ user, deleteUser }: UserCardProps) {
    return (
        <StyledUserCard>
            {user.imgUrl ? <UserImage src={user.imgUrl} alt="User" /> : <UserImage src={userImg} alt="Default User" />}
            <UserCardDetails user={user} deleteUser={deleteUser} />
        </StyledUserCard>
    );
}
