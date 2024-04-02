import { ContainerNav, NavContainer, NavDiv, StyledNavLink } from './Navigation.style';
import Burger from './Burger/Burger';
import useToken from '../../hooks/Token/Token.hook';

const Navigation = () => {
    const decodedToken = useToken();
    return (
        <NavDiv>
            <NavContainer>
                <ContainerNav>
                    <StyledNavLink to={`/`} className="logo">
                        <p>Home</p>
                    </StyledNavLink>
                    <StyledNavLink to={`/user/${decodedToken?.id}`} className="logo">
                        <p>Reservations</p>
                    </StyledNavLink>
                </ContainerNav>

                {/* Burger menu */}
                <div style={{ flex: 1 }}></div>
                <Burger />
            </NavContainer>
        </NavDiv>
    );
};

export default Navigation;
