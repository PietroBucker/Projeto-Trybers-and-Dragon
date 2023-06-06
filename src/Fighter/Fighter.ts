import Energy from '../Energy';

interface Fighter {
  _lifePoints: number;
  _strength: number;
  _defense: number;
  _energy?: Energy

  attack(enemy: Fighter): void;
  special?(enemy: Fighter): void;
  levelUp(): void;
  receiveDamage(amount: number): number;
}

export default Fighter;