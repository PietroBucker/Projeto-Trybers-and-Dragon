import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

class Ranger extends Archetypes {
  private _energyType: EnergyType = 'stamina';
  private static _archtypesInstance = 0;

  constructor(name: string) {
    super(name);
    Ranger._archtypesInstance += 1;
  }
  
  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Ranger._archtypesInstance;
  }  
}

export default Ranger;