import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private _player2: Array<Fighter | SimpleFighter>;
  constructor(player: Fighter, player2: Array<Fighter | SimpleFighter>) {
    super(player);
    this._player2 = player2;
  }

  override fight(): number {
    do {      
      this.player.attack(this._player2[this._player2.length - 1]);
      this._player2.map((element) => element.attack(this.player));
      
      if (this._player2[this._player2.length - 1].lifePoints === -1) {
        this._player2.pop();
      }
    }
    while (this.player.lifePoints !== -1 && this._player2.length !== 0);
    return super.fight();
  }
}

export default PVE;