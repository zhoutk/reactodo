/**
 * Created by zhoutk on 17-4-25.
 */
import styled from 'styled-components';
import {Link} from 'react-router';

const HeaderUl = styled.ul`
    background-color: #111;
    padding: 0;
`;

const HeaderLi = styled.li`
    display: inline;
    list-style-type: none;
    margin: 0;
`;

const HeaderA = styled(Link)`
    color: #FFF;
    font-weight: bold;
    text-decoration: none;
    padding: 20px;
    display: inline-block;
    
    &:hover {
    color: yellow;
  }
`;

export {HeaderUl, HeaderLi, HeaderA};