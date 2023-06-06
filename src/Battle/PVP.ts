import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  private _player2: Fighter;
  constructor(player: Fighter, player2: Fighter) {
    super(player);
    this._player2 = player2;
  }

  override fight(): number {
    while (this.player.lifePoints > 0) {
      this.player.attack(this._player2);
      this._player2.attack(this.player);
      if (this._player2.lifePoints <= 0) {
        break;
      }
    }
    return super.fight();
  }
}

export default PVP;