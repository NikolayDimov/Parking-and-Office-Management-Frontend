import { ContainerNav, NavContainer, NavDiv, StyledNavLink } from './Navigation.style';
import Burger from './Burger/Burger';
import useToken from '../../hooks/Token/Token.hook';
import RightNav from './Right-nav/RightNav';
import useBurger from './Burger/Burger.logic';

const Navigation = () => {
    const decodedToken = useToken();
    const { open, handleClick } = useBurger();

    return (
        <NavDiv>
            <NavContainer>
                <ContainerNav>
                    <StyledNavLink to={`/`} className="logo">
                        <p>Home</p>
                    </StyledNavLink>
                    <StyledNavLink to={`reservation/user/${decodedToken?.id}`} className="logo">
                        <p>Reservations</p>
                    </StyledNavLink>
                </ContainerNav>

                {/* Burger menu */}
                {/* <div style={{ flex: 1 }}></div>
                <Burger /> */}

                <RightNav open={open} handleClick={handleClick} />
            </NavContainer>
        </NavDiv>
    );
};

export default Navigation;
