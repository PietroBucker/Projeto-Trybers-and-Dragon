import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

interface Fighter extends SimpleFighter{
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy

  special?(enemy: Fighter): void;
  levelUp(): void;
}

export default Fighter;
