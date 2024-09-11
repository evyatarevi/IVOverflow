import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #282c34;
  color: white;
`;

export const NavItems = styled.div`
  display: flex;
  gap: 20px;
`;

export const NavLink = styled.a`
  cursor: pointer;
  color: white;
  text-decoration: none;
  &:hover {
    color: #007bff;
  }
`;

export const LogoutButton = styled.button`
  background-color: #f44336;
  border: none;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  &:hover {
    background-color: #d32f2f;
  }
`;
