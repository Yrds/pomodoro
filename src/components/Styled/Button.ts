import styled from 'styled-components';

interface StyledButtonProps{
  color?: string; //TODO
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: block;
  border: none;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  width: 100%;
`;
