import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

class Warrior extends Archetypes {
  private _energyType: EnergyType = 'stamina';
  private static _archtypesInstance = 0;

  constructor(name: string) {
    super(name);
    Warrior._archtypesInstance += 1;
  }
  
  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Warrior._archtypesInstance;
  }  
}

export default Warrior;