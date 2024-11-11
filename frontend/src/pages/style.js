// style.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 10px 0;
  font-size: 1.1rem;
  padding: 10px;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1abc9c;
  }

  &.active {
    font-weight: bold;
    background-color: #16a085;
  }
`;

