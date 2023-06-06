import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

class Necromancer extends Archetypes {
  private _energyType: EnergyType = 'mana';
  private static _archtypesInstance = 0;

  constructor(name: string) {
    super(name);
    Necromancer._archtypesInstance += 1;
  }
  
  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._archtypesInstance;
  }  
}

export default Necromancer;