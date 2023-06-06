interface SimpleFighter {
  lifePoints: number;
  strength:number;

  attack(enemy: SimpleFighter): void;
  receiveDamage(attack: number): number;
}

export default SimpleFighter;