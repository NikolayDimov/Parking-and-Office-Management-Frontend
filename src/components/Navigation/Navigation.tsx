import { NavContainer, NavDiv, StyledNavLink } from './Navigation.style';
import Burger from './Burger/Burger';

const Navigation = () => {
    return (
        <NavDiv>
            <NavContainer>
                <StyledNavLink to={`/`} className="logo">
                    <p>Home</p>
                </StyledNavLink>

                <div style={{ flex: 1 }}></div>

                <Burger />
            </NavContainer>
        </NavDiv>
    );
};

export default Navigation;
