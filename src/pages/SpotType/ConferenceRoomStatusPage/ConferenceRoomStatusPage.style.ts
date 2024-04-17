import styled from 'styled-components';

export interface PageContainerProps {
    $backgroundColor: string;
}

export interface ListItemProps {
    $backgroundColor: string;
}

export const PageContainer = styled.div<PageContainerProps>`
    background-color: ${(props) => props.$backgroundColor};
`;

export const List = styled.ul`
    list-style-type: none;
`;

export const ListItem = styled.li<ListItemProps>`
    padding: 10px;
    margin: 5px 0;
    background-color: ${(props) => props.$backgroundColor};
`;
