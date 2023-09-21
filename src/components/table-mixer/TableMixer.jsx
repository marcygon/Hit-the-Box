import './TableMixer.css'
import Bombo1 from '../../assets/audio/bombo1.wav'
import Crash from '../../assets//audio/crash.wav'
import HitHat from '../../assets/audio/hit-hat.wav'
import Redoblante from '../../assets/audio/redoblante.wav'
import Tom1 from '../../assets/audio/tom1.wav'
import Tom2 from '../../assets/audio/tom2.wav'
import Tom3 from '../../assets/audio/tom3.wav'
import Tom4 from '../../assets/audio/tom4.wav'

function tableMixer() {

    const audio1 = new Audio(Bombo1);
    const audio2 = new Audio(Crash);
    const audio3 = new Audio(HitHat);
    const audio4 = new Audio(Redoblante);
    const audio5 = new Audio(Tom1);
    const audio6 = new Audio(Tom2);
    const audio7 = new Audio(Tom3);
    const audio8 = new Audio(Tom4);

  return (
    <>
        <button id="button1" className="button" onClick={() => audio1.play()}/>
        <button id="button2" className="button" onClick={() => audio2.play()}/>
        <button id="button3" className="button" onClick={() => audio3.play()}/>
        <button id="button4" className="button" onClick={() => audio4.play()}/>
        <button id="button5" className="button" onClick={() => audio5.play()}/>
        <button id="button6" className="button" onClick={() => audio6.play()}/>
        <button id="button7" className="button" onClick={() => audio7.play()}/>
        <button id="button8" className="button" onClick={() => audio8.play()}/>
    </>
  )
}

export default tableMixer