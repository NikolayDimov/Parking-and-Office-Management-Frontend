import { NavLink } from 'react-router-dom';
import { NavContainer, NavDiv } from './Navigation.style';
import Burger from './Burger/Burger';

const Navigation = () => {
    return (
        <NavDiv>
            <NavContainer>
                <NavLink to={`/`} className="logo">
                    <p>Home</p>
                </NavLink>

                <div style={{ flex: 1 }}></div>

                <Burger />
            </NavContainer>
        </NavDiv>
    );
};

export default Navigation;
