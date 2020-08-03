import React, { Component } from 'react';
import {StyledHeader} from './components/Styled/Header';
import Timer from './components/Timer';
import TimerInput from './components/TimerInput';
import { GlobalStyle } from './App.style';
import { StyledContainer } from './components/Styled/Container';

type AppState = {
  timerPause: boolean,
  workMinutes: number,
  breakMinutes: number
}

class App extends Component<any, AppState> {

  readonly state = {
    timerPause: true,
    workMinutes: 25,
    breakMinutes: 5
  }

  constructor(props: any){
    super(props);
    this.timerInputSubmit = this.timerInputSubmit.bind(this);
  }

  startTimer(){
    this.setState({timerPause: false});
  }

  pauseTimer() {
    this.setState({timerPause: true});
  }

  timerInputSubmit(workMinutes: number, breakMinutes: number){
    this.setState({
      workMinutes,
      breakMinutes
    });
  }

  render () {
    return (
      <>
        <GlobalStyle/>
        <StyledContainer>
          <StyledHeader>
            Pomodoro
          </StyledHeader>
          <Timer
            workMinutes={this.state.workMinutes}
            breakMinutes={this.state.breakMinutes}/>
          <TimerInput onSubmitForm={this.timerInputSubmit}/>
        </StyledContainer>
      </>
    );
  }
}

export default App;
