import Archetypes, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  private static _dexterity = getRandomInt(1, 10);

  private _race: Race;
  private _archtype: Archetypes;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _energy?: Energy | undefined;
  private _name: string;

  constructor(
    name: string,
    race = new Elf(name, Character._dexterity),
    archetype: Archetypes = new Mage(name),
  ) {
    this._name = name;
    this._race = race;
    this._archtype = archetype;
    this._maxLifePoints = (this._race.maxLifePoints / 2);
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = { 
      type_: this._archtype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get race(): Race {
    return this._race;
  }
  
  get archtype(): Archetypes {
    return this._archtype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  static get dexterity(): number {
    return Character._dexterity;
  }

  get energy(): Energy | undefined {
    return this._energy;
  }

  attack(enemy: Fighter): void {
    throw new Error('Method not implemented.');
  }

  special?(enemy: Fighter): void {
    throw new Error('Method not implemented.');
  }

  levelUp(): void {
    throw new Error('Method not implemented.');
  }

  receiveDamage(amount: number): number {
    throw new Error('Method not implemented.');
  }
}