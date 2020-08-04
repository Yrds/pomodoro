import React, { Component } from 'react';
import SoundService from '../../services/SoundService';
import { StyledButton } from '../Styled/Button';
import { StyledTimer } from '../Styled/Timer';

const alarmSound = require('../../assets/alarm-clock-sound.opus');

enum timerType {
  WORK,
    BREAK
}

type TimerState = {
  currentTime: Date
  endTime: Date,
  isPaused: boolean,
  selectedTimer: timerType
}

type TimerProps = {
  workMinutes: number,
  breakMinutes: number
}

class Timer extends Component<TimerProps, TimerState> {

  public readonly state = {
    currentTime: new Date(),
    endTime: this.getEndTime(this.props.workMinutes),
    selectedTimer: timerType.WORK,
    isPaused: true
  }

  startTimer() {
    this.setState({isPaused: false});
  }

  getEndTime(minutes: number) {
    return new Date((new Date()).getTime() + 1000 * 60 * minutes);
  }

  pauseTimer() {
    this.setState({isPaused: true});
  }

  getMinutesByTimerType(type: timerType){
    return type === timerType.WORK ? this.props.workMinutes : this.props.breakMinutes;
  }

  resetTimer(timerType: timerType){
    this.setState({
      currentTime: new Date(),
      endTime: this.getEndTime(this.getMinutesByTimerType(timerType)),
      isPaused: true,
      selectedTimer: timerType
    })
  }

  componentDidMount() {
    setInterval(this.doTick.bind(this), 1000);
  }

  componentDidUpdate(props: TimerProps) {
    if(this.props.workMinutes !== props.workMinutes
      && this.props.workMinutes !== props.workMinutes
      && this.state.isPaused
    ){
      this.resetTimer(this.state.selectedTimer);
    }
  }

  calculateTimeLeft() : Date {
    return new Date(this.state.endTime.getTime() - this.state.currentTime.getTime());
  }

  timeLeftToString(date: Date){
    const normalizeNumber = (selectedNumber: number) => selectedNumber.toString().padStart(2, '0');
    const hours = Math.floor((date.getTime() % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((date.getTime() % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((date.getTime() % (1000 * 60)) / 1000);

    return `${normalizeNumber(hours)}:${normalizeNumber(minutes)}:${normalizeNumber(seconds)}`;
  }

  finishTime(){
    this.resetTimer(this.state.selectedTimer === timerType.WORK ?
    timerType.BREAK :
    timerType.WORK);
    SoundService.playSound(alarmSound);
  }

  doTick(){
    console.log(this.calculateTimeLeft().getTime());
    if (!this.state.isPaused){
      this.setState({currentTime: new Date(this.state.currentTime.getTime() + 1000)});
      if(this.calculateTimeLeft().getTime() < 1) this.finishTime();
    }
  }

  render(){
    return (
      <StyledTimer>
        <h2 id="selectedTime">
          {this.state.selectedTimer === timerType.WORK ? 'Work' : 'Rest'} time
        </h2>
        <h3 id="currentTime">
          {this.timeLeftToString(this.calculateTimeLeft())}
        </h3>
        <div id="buttons">
          <StyledButton onClick={e => this.startTimer()}>Start</StyledButton>
          <StyledButton onClick={e => this.pauseTimer()}>Pause</StyledButton>
          <StyledButton onClick={e => this.resetTimer(this.state.selectedTimer)}>Reset</StyledButton>
        </div>
      </StyledTimer>
    )
  }
}

export default Timer;
