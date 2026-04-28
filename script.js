const nameInput = document.getElementById("nameInput");
const scanButton = document.getElementById("scanButton");
const resultText = document.getElementById("resultText");

scanButton.addEventListener("click", scanChudLevel);

nameInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    scanChudLevel();
  }
});

function scanChudLevel() {
  const name = nameInput.value.trim();

  if (name === "") {
    resultText.textContent = "Type a name first, buddy.";
    return;
  }

  const cleanName = name.toLowerCase();

  // SPECIAL RULES (NO RANDOM)

  if (cleanName === "jantz") {
    resultText.textContent = "Jantz is 0/10 CHUD. Ripped and Sweet.";
    return;
  }

  if (cleanName === "mckayla") {
    resultText.textContent = "McKayla is 0/10 CHUD. I love you, even if you always blow up the spot.";
    return;
  }
	
	if (cleanName === "jake") {
    resultText.textContent = "Jake is 0/10 CHUD. The GOAT brother, I love you.";
    return;
  }
	
	if (cleanName === "tyler") {
    resultText.textContent = "Tyler is 0/10 CHUD. Hates bitches and lesbians, loves getting high.";
    return;
  }

  // FRIENDS = ALWAYS 10/10
  const friendMessages = {
    brendan: "Sad Plate Dan, Get it in the hole Dan, Slop it up Dan, you get it." ,
    caden: "Has great hoodies. He also frequently asks, Is that my beer? It might be his, he's thinking." ,
    trystan: "Loses to Dan at Super Battle Golf, but beats the shit out of the air frequently (we take PEDs)." ,
    reade: "Reade’s life accomplishments: _____." ,
    john: "Johnny the hole, great historian.",
    colin: "Drinks mint chocolate chip whiskey shakes, but will give you buckets.",
    alex: "Does tricks on SGA. seriously, like spins around on it." ,
		jake: "The GOAT brother, I love you." ,
		tyler: "Hates bitches and lesbians, loves getting high."
  };

  if (friendMessages[cleanName]) {
    resultText.textContent =
      name + " is 10/10 CHUD. " + friendMessages[cleanName];
    return;
  }

  // EVERYONE ELSE RANDOM
  const chudLevel = Math.floor(Math.random() * 10) + 1;

  resultText.textContent =
    name + " is " + chudLevel + "/10 CHUD.";
}