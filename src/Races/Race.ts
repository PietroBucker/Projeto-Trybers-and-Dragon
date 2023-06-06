abstract class Race {
  private _name: string;
  private _dexterity: number;

  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  }

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  abstract get maxLifePoints(): number;

  // isso aquie serve como uma alerta para lembrar de implmentar nas classe derivadas.
  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }
}
export default Race;