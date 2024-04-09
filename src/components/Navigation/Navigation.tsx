import { ContainerNav, NavContainer, NavDiv, StyledNavLink } from './Navigation.style';
// import Burger from './Burger/Burger';
import useToken from '../../hooks/Token/Token.hook';
import RightNav from './Right-nav/RightNav';
import useBurger from './Burger/Burger.logic';
import { useTranslation } from 'react-i18next';

const Navigation = () => {
    const { t } = useTranslation();

    const decodedToken = useToken();
    const { open, handleClick } = useBurger();

    return (
        <NavDiv>
            <NavContainer>
                <ContainerNav>
                    <StyledNavLink to={`/`} className="logo">
                        <p>{t('navbar.home')}</p>
                    </StyledNavLink>
                    <StyledNavLink to={`user/${decodedToken?.id}/reservations`} className="logo">
                        <p>{t('navbar.reservations')}</p>
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
