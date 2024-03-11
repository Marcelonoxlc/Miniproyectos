function attack() {
    var playerHealth = document.getElementById("player-health-val");
    var enemyHealth = document.getElementById("enemy-health-val");
  
    var playerDamage = Math.floor(Math.random() * 10) + 1;
    var enemyDamage = Math.floor(Math.random() * 10) + 1;
  
    var newPlayerHealth = parseInt(playerHealth.textContent) - enemyDamage;
    var newEnemyHealth = parseInt(enemyHealth.textContent) - playerDamage;
  
    if (newPlayerHealth <= 0) {
      alert("¡Has perdido!");
      newPlayerHealth = 0;
    }
  
    if (newEnemyHealth <= 0) {
      alert("¡Has ganado!");
      newEnemyHealth = 0;
    }
  
    playerHealth.textContent = newPlayerHealth;
    enemyHealth.textContent = newEnemyHealth;
  }