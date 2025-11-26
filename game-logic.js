// Game Logic and State Management

// Game State
let gameState = {
    player1: {
        name: "",
        hp: 100,
        currentCard: null,
        quizCorrect: false,
        finalValue: 0
    },
    player2: {
        name: "",
        hp: 100,
        currentCard: null,
        quizCorrect: false,
        finalValue: 0
    },
    currentRound: 1,
    maxRounds: 20,
    roundHistory: [],
    gameActive: false
};

// Current scanning state
let currentScanningPlayer = 0;

// Calculate card base value
function calculateBaseValue(stars) {
    return stars * 5;
}

// Calculate final card value based on quiz result
function calculateFinalValue(stars, quizCorrect) {
    const baseValue = calculateBaseValue(stars);
    return quizCorrect ? baseValue : Math.max(0, baseValue - 5);
}

// Check if answer is correct (flexible matching)
function checkAnswer(userAnswer, correctAnswer) {
    const normalize = (str) => str.toLowerCase().trim().replace(/[^\w\s]/g, '');
    const normalizedUser = normalize(userAnswer);
    const normalizedCorrect = normalize(correctAnswer);

    // Check if the correct answer is contained in the user's answer or vice versa
    return normalizedUser.includes(normalizedCorrect) || normalizedCorrect.includes(normalizedUser);
}

// Apply game rules and resolve round
function applyGameRules() {
    const p1 = gameState.player1;
    const p2 = gameState.player2;

    let p1Damage = 0;
    let p2Damage = 0;
    let resultMessage = "";

    // Get card types
    const p1Type = p1.currentCard.type;
    const p2Type = p2.currentCard.type;

    // Rule 1: Attack vs Defense
    if (p1Type === "attack" && p2Type === "defense") {
        const netDamage = p1.finalValue - p2.finalValue;
        if (netDamage > 0) {
            p2Damage = netDamage;
            resultMessage = `${p1.name}'s attack deals ${netDamage} damage to ${p2.name}!`;
        } else {
            resultMessage = `${p2.name}'s defense blocks the attack completely!`;
        }
    }
    else if (p1Type === "defense" && p2Type === "attack") {
        const netDamage = p2.finalValue - p1.finalValue;
        if (netDamage > 0) {
            p1Damage = netDamage;
            resultMessage = `${p2.name}'s attack deals ${netDamage} damage to ${p1.name}!`;
        } else {
            resultMessage = `${p1.name}'s defense blocks the attack completely!`;
        }
    }
    // Rule 2: Attack vs Attack - both take damage
    else if (p1Type === "attack" && p2Type === "attack") {
        p1Damage = p2.finalValue;
        p2Damage = p1.finalValue;
        resultMessage = `Both attacks clash! ${p1.name} takes ${p1Damage} damage, ${p2.name} takes ${p2Damage} damage!`;
    }
    // Rule 3: Defense vs Defense - no damage
    else if (p1Type === "defense" && p2Type === "defense") {
        resultMessage = "Both players defend! No damage dealt.";
    }
    // Rule 4: Heal cards
    else if (p1Type === "heal" || p2Type === "heal") {
        if (p1Type === "heal") {
            const healAmount = p1.finalValue;
            gameState.player1.hp = Math.min(100, gameState.player1.hp + healAmount);
            resultMessage = `${p1.name} heals ${healAmount} HP! `;
        }
        if (p2Type === "heal") {
            const healAmount = p2.finalValue;
            gameState.player2.hp = Math.min(100, gameState.player2.hp + healAmount);
            resultMessage += `${p2.name} heals ${healAmount} HP!`;
        }
    }

    // Apply damage
    gameState.player1.hp = Math.max(0, gameState.player1.hp - p1Damage);
    gameState.player2.hp = Math.max(0, gameState.player2.hp - p2Damage);

    return {
        p1Damage,
        p2Damage,
        resultMessage
    };
}

// Save round to history
function saveRoundToHistory(result) {
    const p1 = gameState.player1;
    const p2 = gameState.player2;

    const roundData = {
        round: gameState.currentRound,
        player1: {
            name: p1.name,
            card: p1.currentCard.name,
            type: p1.currentCard.type,
            stars: p1.currentCard.stars,
            quizCorrect: p1.quizCorrect,
            value: p1.finalValue,
            damage: result.p1Damage,
            hp: p1.hp
        },
        player2: {
            name: p2.name,
            card: p2.currentCard.name,
            type: p2.currentCard.type,
            stars: p2.currentCard.stars,
            quizCorrect: p2.quizCorrect,
            value: p2.finalValue,
            damage: result.p2Damage,
            hp: p2.hp
        },
        result: result.resultMessage
    };

    gameState.roundHistory.push(roundData);
}

// Check if game is over
function checkGameOver() {
    // Check if either player has 0 HP
    if (gameState.player1.hp <= 0 || gameState.player2.hp <= 0) {
        return true;
    }

    // Check if max rounds reached
    if (gameState.currentRound > gameState.maxRounds) {
        return true;
    }

    return false;
}

// Determine winner
function determineWinner() {
    if (gameState.player1.hp <= 0 && gameState.player2.hp <= 0) {
        return "draw";
    } else if (gameState.player1.hp <= 0) {
        return gameState.player2.name;
    } else if (gameState.player2.hp <= 0) {
        return gameState.player1.name;
    } else if (gameState.player1.hp > gameState.player2.hp) {
        return gameState.player1.name;
    } else if (gameState.player2.hp > gameState.player1.hp) {
        return gameState.player2.name;
    } else {
        return "draw";
    }
}

// Reset card state for next round
function resetCardsForNextRound() {
    gameState.player1.currentCard = null;
    gameState.player1.quizCorrect = false;
    gameState.player1.finalValue = 0;

    gameState.player2.currentCard = null;
    gameState.player2.quizCorrect = false;
    gameState.player2.finalValue = 0;
}

// Get card type emoji
function getCardTypeEmoji(type) {
    switch (type) {
        case "attack": return "⚔️";
        case "defense": return "🛡️";
        case "heal": return "💚";
        default: return "🃏";
    }
}

// Get stars display
function getStarsDisplay(stars) {
    return "⭐".repeat(stars);
}
