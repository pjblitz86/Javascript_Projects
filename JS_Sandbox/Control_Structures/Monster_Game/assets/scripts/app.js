const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackMonster(attackType) {
  let maxDamage;
  if (attackType === "STANDARD_ATTACK") {
    maxDamage = ATTACK_VALUE;
  } else if (attackType === "STRONG_ATTACK") {
    maxDamage = STRONG_ATTACK_VALUE;
  }

  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("you won!");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("you lost!");
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    alert("it's a draw! You both died...");
  }
}

function standardAttackHandler() {
  attackMonster("STANDARD_ATTACK");
}

function strongAttackHandler() {
  attackMonster("STRONG_ATTACK");
}

attackBtn.addEventListener("click", standardAttackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
