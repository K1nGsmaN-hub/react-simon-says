import React, {Component} from "react";

import OptionsRound from "../options-rounds/options-round";
import StartButton from "../start-button/start-button";
import DifficultyLevels from "../difficulty-levels/difficulty-levels";

import './options-area.sass'


export default class OptionsArea extends Component {
  generateItem = (arr) => {
    const {setDelay} = this.props
    return arr.map(item => {
      return (
          <label key={item.key}>
            <DifficultyLevels
                level={item.level}
                delay={item.delay}
                text={item.text}
                setDelay={() => setDelay(item.delay)}
            />
          </label>
      )
    })
  }

  render() {
    const {startGame, diffs, round, maxRounds} = this.props

    const elems = this.generateItem(diffs)

    return(
        <div className="options-area">
          <OptionsRound round={round} maxRounds={maxRounds}/>
          <StartButton startGame={() => startGame()}/>
          <div className="diff-levels">
            {elems}
          </div>
        </div>
    )
  }
}
