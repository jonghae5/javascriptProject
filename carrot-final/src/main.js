'use strict';

import PopUp from './popup.js';
import {Field, ItemType} from './field.js';
import {GameBuilder, Reason} from './game.js';
import * as sound from './sound.js';

const CARROT_COUNT = 5;
const BUG_COUNT = 5;
const GAME_DURATION_SEC = 5;

const gameFinishBanner = new PopUp();

gameFinishBanner.setClickListener(() => {
  game.start();
})

const game = new GameBuilder()
  .gameDuration(GAME_DURATION_SEC)
  .carrotCount(CARROT_COUNT)
  .bugCount(BUG_COUNT)
  .build();

game.setGameStopListener((reason) => {
  let message;
  switch(reason) {
    case Reason.cancel:
      message = 'REPLAY🔥';
      sound.playAlert();
      break;
    case Reason.win:
      message = 'YOU WON🧚‍♂️';
      sound.playWin();
      break;
    case Reason.lose:
      message = 'YOU LOST💩';
      sound.playBug();
      break;
    default:
      throw new Error('not valid reason');
  }

  gameFinishBanner.showWithText(message);
});