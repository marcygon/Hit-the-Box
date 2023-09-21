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
        <button id="btn1" className="btn row1 col1" onClick={() => audio1.play()}/>
        <button id="btn2" className="btn row1 col2" onClick={() => audio2.play()}/>
        <button id="btn3" className="btn row1 col3" onClick={() => audio3.play()}/>
        <button id="btn4" className="btn row1 col4" onClick={() => audio4.play()}/>
        <button id="btn5" className="btn row2 col1" onClick={() => audio5.play()}/>
        <button id="btn6" className="btn row2 col2" onClick={() => audio6.play()}/>
        <button id="btn7" className="btn row2 col3" onClick={() => audio7.play()}/>
        <button id="btn8" className="btn row2 col4" onClick={() => audio8.play()}/>
        <button id="btn9" className="btn row3 col1" onClick={() => audio1.play()}/>
        <button id="btn10" className="btn row3 col2" onClick={() => audio2.play()}/>
        <button id="btn11" className="btn row3 col3" onClick={() => audio3.play()}/>
        <button id="btn12" className="btn row3 col4" onClick={() => audio4.play()}/>
        <button id="btn13" className="btn row4 col1" onClick={() => audio5.play()}/>
        <button id="btn14" className="btn row4 col2" onClick={() => audio6.play()}/>
        <button id="btn15" className="btn row4 col3" onClick={() => audio7.play()}/>
        <button id="btn16" className="btn row4 col4" onClick={() => audio8.play()}/>
    </>
  )
}

export default tableMixer