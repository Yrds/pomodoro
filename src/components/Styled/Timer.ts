import styled from 'styled-components';
import { StyledButton } from './Button';

export const StyledTimer = styled.div`
  #selectedTime {
    text-align: center;
    font-size: 2rem;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
  }

  #currentTime {
    margin-top: 1rem;
    font-size: 3.5rem;
    font-weight: 100;
  }

  ${StyledButton} {
    &:first-child {
      background: var(--hookers-green);
      color: var(--silver-pink);
    }
    &:nth-child(2){
      background: var(--falu-red);
      color: var(--silver-pink);
    }
    &:last-child {
      background: var(--silver-pink);
    }
  }

`;
