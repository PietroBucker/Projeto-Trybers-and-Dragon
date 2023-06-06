import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

class Mage extends Archetypes {
  private _energyType: EnergyType = 'mana';
  private static _archtypesInstance = 0;

  constructor(name: string) {
    super(name);
    Mage._archtypesInstance += 1;
  }
  
  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Mage._archtypesInstance;
  }  
}

export default Mage;