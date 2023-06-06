import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  private static _raceInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;

    Halfling._raceInstances += 1;
  }
  
  override get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Halfling._raceInstances;
  }
}

export default Halfling;