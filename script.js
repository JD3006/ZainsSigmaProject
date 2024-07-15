// Define the symbols and their quantities
const symbols = ["7"]
  .concat(Array(2).fill("Cherry"))
  .concat(Array(2).fill("Diamond"))
  .concat(Array(3).fill("Bar"))
  .concat(Array(3).fill("Dice"))
  .concat(Array(4).fill("Bell"))
  .concat(Array(5).fill("Fruit"));

// Function to spin the slot machine
function spinReels() {
  return [symbols[Math.floor(Math.random() * symbols.length)], symbols[Math.floor(Math.random() * symbols.length)], symbols[Math.floor(Math.random() * symbols.length)]];
}

// Function to check the result and determine the payout in dollars
function checkResult(reels) {
  if (reels.filter(symbol => symbol === "7").length === 3) {
    return 50;
  } else if (reels.filter(symbol => symbol === "7").length === 2) {
    return 5;
  } else if (reels.filter(symbol => symbol === "7").length === 1) {
    return 1;
  } else if (reels.filter(symbol => symbol === "Diamond").length === 3 || reels.filter(symbol => symbol === "Cherry").length === 3) {
    return 10;
  } else if (reels.filter(symbol => symbol === "Bar").length === 3) {
    return 5;
  } else if (reels.filter(symbol => symbol === "Bell").length === 3) {
    return 3;
  } else if (reels.filter(symbol => symbol === "Fruit").length === 3) {
    return 1;
  } else {
    return 0;
  }
}

// Function to run the slot machine for a given number of spins and calculate total winnings
function runSlotMachine(spins) {
  let totalWinnings = 0;
  let results = '';

  for (let i = 0; i < spins; i++) {
    let reels = spinReels();
    let winnings = checkResult(reels);
    totalWinnings += winnings;
    results += `The reels show: ${reels[0]}, ${reels[1]}, ${reels[2]} - You win $${winnings}<br>`;
  }

  document.getElementById('output').innerHTML = results;
  document.getElementById('output').innerHTML = document.getElementById('output').innerHTML + `Total winnings after ${spins} spins: $${totalWinnings}`;
}

// Run the slot machine 1 time and show total winnings
