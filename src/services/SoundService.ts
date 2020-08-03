const audio = new Audio();

const SoundService = {
  playSound(soundSource: string){
    audio.src = soundSource;
    audio.play();
  }
}

export default SoundService;
