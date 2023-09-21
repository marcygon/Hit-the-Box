import './TableMixer.css'
import Bombo1 from '../../assets/audio/bombo1.wav'
import Crash from '../../assets//audio/crash.wav'
import HitHat from '../../assets/audio/hit-hat.wav'
import Redoblante from '../../assets/audio/redoblante.wav'
import Bass from '../../assets/audio/bass.wav'
import Bdrum from '../../assets/audio/bdrum.wav'
import DubTechno from '../../assets/audio/dubTechno.wav'
import Fingers from '../../assets/audio/fingers.wav'
import Plate from '../../assets/audio/plate.wav'
import Sickly from '../../assets/audio/sickly.wav'
import Snare from '../../assets/audio/snare.wav'
import SnareDrum from '../../assets/audio/snareDrum.wav'
import Splash from '../../assets/audio/splash.wav'
import Stick from '../../assets/audio/stick.wav'
import TechoGroove from '../../assets/audio/technoGroove.wav'
import TechnoSequence from '../../assets/audio/technoSequence.wav'

function tableMixer() {

    const audio1 = new Audio(Bombo1);
    const audio2 = new Audio(Crash);
    const audio3 = new Audio(HitHat);
    const audio4 = new Audio(Redoblante);
    const audio5 = new Audio(TechnoSequence);
    const audio6 = new Audio(TechoGroove);
    const audio7 = new Audio(Stick);
    const audio8 = new Audio(Splash);
    const audio9 = new Audio(Bass);
    const audio10 = new Audio(Bdrum);
    const audio11 = new Audio(DubTechno);
    const audio12 = new Audio(Fingers);
    const audio13 = new Audio(Plate);
    const audio14 = new Audio(Sickly);
    const audio15 = new Audio(Snare);
    const audio16 = new Audio(SnareDrum);

  return (
    <>
        <button id="btn1" className="btn row1 col1" onClick={() => audio1.play()}/>
        <button id="btn2" className="btn row1 col2" onClick={() => audio2.play()}/>
        <button id="btn3" className="btn row1 col3" onClick={() => audio3.play()}/>
        <button id="btn4" className="btn row1 col4" onClick={() => audio4.play()}/>
        <button id="btn5" className="btn row2 col1" onClick={() => audio5.play()}/>
        <button id="btn6" className="btn row2 col2" onClick={() => audio6.play()}/>
        <button id="btn7" className="btn row2 col3" onClick={() => audio7.play()}/>
        <button id="btn8" className="btn row2 col4" onClick={() => audio8.play()}/>
        <button id="btn9" className="btn row3 col1" onClick={() => audio9.play()}/>
        <button id="btn10" className="btn row3 col2" onClick={() => audio10.play()}/>
        <button id="btn11" className="btn row3 col3" onClick={() => audio11.play()}/>
        <button id="btn12" className="btn row3 col4" onClick={() => audio12.play()}/>
        <button id="btn13" className="btn row4 col1" onClick={() => audio13.play()}/>
        <button id="btn14" className="btn row4 col2" onClick={() => audio14.play()}/>
        <button id="btn15" className="btn row4 col3" onClick={() => audio15.play()}/>
        <button id="btn16" className="btn row4 col4" onClick={() => audio16.play()}/>
    </>
  )
}

export default tableMixer