import styled from 'styled-components';
import { StyledButton } from './Button';

export const StyledTimerForm = styled.form`
  padding-top: 5rem;
  margin: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  max-width: 20rem;

  .input-container {
    display: flex;
    margin-bottom: 1rem;
    justify-content: space-around;
    .input-group {
      margin-left: 1rem;
      margin-right: 1rem;
      flex-basis: 25%;
      display: flex;
      flex-direction: column;
      label {
        font-size: 0.75rem;
        margin-bottom: 0.5rem;
      }
      input {
        width: 100%;
        box-sizing: border-box;
        border: none;
        text-align: center;
        padding: 0.5rem;
      }
    }
  }

  ${StyledButton}{
    margin: auto;
    box-sizing: border-box;
  }
`;
