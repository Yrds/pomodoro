import React, { Component, FormEvent } from 'react';
import { StyledTimerForm } from '../Styled/TimerForm';
import { StyledButton } from '../Styled/Button';

type TimerInputState = {
  workMinutes: number,
  breakMinutes: number
}

type TimerInputProps = {
  onSubmitForm: (workMinutes: number, breakMinutes: number) => void
}

class TimerInput extends Component<TimerInputProps, TimerInputState> {
  public readonly state = {
    workMinutes: 25,
    breakMinutes: 5
  }

  onSubmit(event: FormEvent<HTMLFormElement>){
    this.props.onSubmitForm(
      this.state.workMinutes,
      this.state.breakMinutes
    )
    event.preventDefault();
  }

  render(){
    return (
      <StyledTimerForm onSubmit={(e) => this.onSubmit(e)}>
        <div className="input-container">
          <div className="input-group">
            <label>Work Time</label>
            <input
              id="workTime"
              value={this.state.workMinutes}
              onChange={e => this.setState({workMinutes: Number(e.target.value)})}
              type={"number"}/>
          </div>
          <div className="input-group">
            <label>Break Time</label>
            <input
              id="breakTime"
              value={this.state.breakMinutes}
              onChange={e => this.setState({breakMinutes: Number(e.target.value)})}
              type={"number"}/>
          </div>
        </div>
        <StyledButton>Configure!</StyledButton>
      </StyledTimerForm>
    )
  }
}

export default TimerInput;
