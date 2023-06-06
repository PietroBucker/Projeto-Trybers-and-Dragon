import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _raceInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;

    Dwarf._raceInstances += 1;
  }
  
  override get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Dwarf._raceInstances;
  }
}

export default Dwarf;
