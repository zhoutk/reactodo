/**
 * Created by zhoutk on 17-4-25.
 */
import styled from 'styled-components';

const TodoInput = styled.input`
    padding: 10px;
    font-size: 16px;
    border: 2px solid #FFF;
`;

const TodoButton = styled.button`
    padding: 10px;
    font-size: 16px;
    margin: 10px;
    background-color: #0066FF;
    color: #FFF;
    border: 2px solid #0066FF;
    
    &:hover {
        background-color: #003399;
        border: 2px solid #003399;
        cursor: pointer;
    }
`;

const TodoLi = styled.li`
    color: #333;
    background-color: rgba(255,255,255,.5);
    padding: 15px;
    margin-bottom: 15px;
    border-radius: 5px;
`;

const TodoUl = styled.ul`
    list-style: none;
    padding-left: 0;
    width: 255px;
`;

export {TodoInput, TodoButton, TodoLi, TodoUl};