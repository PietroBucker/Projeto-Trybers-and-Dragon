import { Necromancer, Warrior } from './Archetypes';
import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';
import { Dwarf, Orc } from './Races';
import getRandomInt from './utils';

// Players
export const player1 = new Character(
  'pietro', 
  new Orc('pietro', getRandomInt(1, 10)),
  new Warrior('pietro'),
);
player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();

export const player2 = new Character(
  'paolo', 
  new Dwarf('paolo', getRandomInt(1, 10)),
  new Necromancer('paolo'),
); 
export const player3 = new Character('isabella');

// Monsters
export const monster1 = new Monster();
export const monster2 = new Dragon();

// Battle
export const pvp = new PVP(player2, player3);
export const pve = new PVE(player1, [monster1, monster2]);

export function runBattles(battles: Array<Battle>): void {
  battles.forEach((battle) => battle.fight());
}