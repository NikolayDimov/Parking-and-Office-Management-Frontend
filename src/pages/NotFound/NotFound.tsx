import { GoToHome, NotFoundContainer, NotFoundTitle, StyledButton } from './NotFound.style';

const NotFound = () => {
    return (
        <>
            <NotFoundContainer>
                <NotFoundTitle>404 - Not Found</NotFoundTitle>
                <p>The page you are looking for might not exist or has been moved.</p>

                <GoToHome>
                    <StyledButton href="/">Go to Home</StyledButton>
                </GoToHome>
            </NotFoundContainer>
        </>
    );
};

export default NotFound;
