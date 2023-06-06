import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  private static _raceInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;

    Orc._raceInstances += 1;
  }
  
  override get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Orc._raceInstances;
  }
}

export default Orc;