// App.js - Main Application Logic and UI Interactions

// Prevent browser from restoring scroll position on refresh/navigation
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// Start the game
function startGame() {
    const player1Name = document.getElementById('player1-name').value.trim();
    const player2Name = document.getElementById('player2-name').value.trim();
    const maxRounds = parseInt(document.getElementById('max-rounds').value);

    if (!player1Name || !player2Name) {
        alert('Please enter names for both players!');
        return;
    }

    // Redirect to game.html with params
    const params = new URLSearchParams({
        p1: player1Name,
        p2: player2Name,
        rounds: maxRounds
    });
    window.location.href = `game.html?${params.toString()}`;
}

// Initialize game from URL params (for game.html)
function initGame() {
    const params = new URLSearchParams(window.location.search);
    const p1 = params.get('p1');
    const p2 = params.get('p2');
    const rounds = params.get('rounds');

    if (p1 && p2) {
        // Initialize game state
        gameState.player1.name = p1;
        gameState.player2.name = p2;
        gameState.maxRounds = parseInt(rounds) || 20;
        gameState.player1.hp = 100;
        gameState.player2.hp = 100;
        gameState.currentRound = 1;
        gameState.roundHistory = [];
        gameState.gameActive = true;

        // Update UI
        const p1Display = document.getElementById('player1-display-name');
        const p2Display = document.getElementById('player2-display-name');
        const maxRoundsDisplay = document.getElementById('max-rounds-display');
        const currentRoundDisplay = document.getElementById('current-round');

        if (p1Display) p1Display.textContent = p1;
        if (p2Display) p2Display.textContent = p2;
        if (maxRoundsDisplay) maxRoundsDisplay.textContent = gameState.maxRounds;
        if (currentRoundDisplay) currentRoundDisplay.textContent = '1';

        updateHPDisplay();
    }
}

// Show specific screen
function showScreen(screenId) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });

    // Reset scroll position immediately
    window.scrollTo({
        top: 0,
        behavior: 'instant'
    });
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    // Show the target screen
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
    }
}

// Update HP display
function updateHPDisplay() {
    const p1HP = gameState.player1.hp;
    const p2HP = gameState.player2.hp;

    // Update HP text
    document.getElementById('player1-hp').textContent = p1HP;
    document.getElementById('player2-hp').textContent = p2HP;

    // Update HP bars
    const p1Percentage = Math.max(0, (p1HP / 100) * 100);
    const p2Percentage = Math.max(0, (p2HP / 100) * 100);

    document.getElementById('player1-hp-bar').style.width = p1Percentage + '%';
    document.getElementById('player2-hp-bar').style.width = p2Percentage + '%';

    // Change color based on HP level
    const p1Bar = document.getElementById('player1-hp-bar');
    const p2Bar = document.getElementById('player2-hp-bar');

    if (p1HP > 60) p1Bar.style.backgroundColor = '#4CAF50';
    else if (p1HP > 30) p1Bar.style.backgroundColor = '#FFC107';
    else p1Bar.style.backgroundColor = '#F44336';

    if (p2HP > 60) p2Bar.style.backgroundColor = '#4CAF50';
    else if (p2HP > 30) p2Bar.style.backgroundColor = '#FFC107';
    else p2Bar.style.backgroundColor = '#F44336';
}

// Open scan modal for a player
function scanCard(playerNumber) {
    currentScanningPlayer = playerNumber;
    const playerName = playerNumber === 1 ? gameState.player1.name : gameState.player2.name;

    document.getElementById('scanning-player').textContent = playerName;
    document.getElementById('card-id-input').value = '';
    document.getElementById('card-display').style.display = 'none';
    document.getElementById('confirm-card-btn').style.display = 'none';
    document.getElementById('quiz-result').style.display = 'none';
    document.getElementById('card-value-display').style.display = 'none';
    const entrySection = document.getElementById('card-entry-section');
    if (entrySection) {
        entrySection.style.display = 'flex';
    }

    document.getElementById('scan-modal').style.display = 'flex';
    document.getElementById('card-id-input').focus();
    // Lock body scroll while modal is open
    document.body.style.overflow = 'hidden';
}

// Lookup card by ID
function lookupCard() {
    let cardId = document.getElementById('card-id-input').value.trim();

    if (!cardId) {
        alert('Please enter a card ID!');
        return;
    }

    console.log("Looking up card:", cardId);

    // Smart ID formatting
    // If user enters just a number (e.g. "1" or "001"), convert to "CARD001"
    if (/^\d+$/.test(cardId)) {
        cardId = "CARD" + cardId.padStart(3, '0');
        console.log("Formatted ID to:", cardId);
    }
    // If user enters "card1", convert to "CARD001"
    else if (/^card\d+$/i.test(cardId)) {
        const numPart = cardId.match(/\d+/)[0];
        cardId = "CARD" + numPart.padStart(3, '0');
        console.log("Formatted ID to:", cardId);
    }

    // Check if database is loaded
    if (typeof getCardById !== 'function') {
        alert('Error: Card database not loaded!');
        console.error('getCardById is not defined');
        return;
    }

    const card = getCardById(cardId);

    if (!card) {
        alert(`Card "${cardId}" not found! Please check the number and try again.`);
        return;
    }

    // Display card details
    displayCard(card);

    // Hide entry section once card is loaded
    const entrySection = document.getElementById('card-entry-section');
    if (entrySection) {
        entrySection.style.display = 'none';
    }
}

// Display card details
function displayCard(card) {
    document.getElementById('card-name').textContent = card.name;
    document.getElementById('card-stars').textContent = getStarsDisplay(card.stars);
    document.getElementById('card-type').textContent = `${getCardTypeEmoji(card.type)} ${card.type.toUpperCase()}`;
    document.getElementById('card-type').className = `card-type-badge ${card.type}`;
    document.getElementById('card-description').textContent = card.description;
    document.getElementById('quiz-question').textContent = card.quiz;

    // Randomize quiz options
    const shuffledOptions = card.options.map((option, index) => ({ option, originalIndex: index }));

    // Fisher-Yates shuffle
    for (let i = shuffledOptions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
    }

    // Find where the correct answer ended up after shuffling
    const newCorrectIndex = shuffledOptions.findIndex(item => item.originalIndex === card.correctAnswer);

    // Create radio button options for MCQ
    const quizOptionsDiv = document.getElementById('quiz-options');
    quizOptionsDiv.innerHTML = '';

    shuffledOptions.forEach((item, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'quiz-option';
        optionDiv.innerHTML = `
            <label>
                <input type="radio" name="quiz-answer" value="${index}" data-correct="${index === newCorrectIndex}">
                <span>${item.option}</span>
            </label>
        `;
        optionDiv.addEventListener('click', () => {
            const radio = optionDiv.querySelector('input[type="radio"]');
            if (radio && !radio.disabled) {
                radio.checked = true;
                radio.dispatchEvent(new Event('change', { bubbles: true }));
            }
        });
        quizOptionsDiv.appendChild(optionDiv);
    });

    document.getElementById('card-display').style.display = 'block';
    document.getElementById('quiz-result').style.display = 'none';
    document.getElementById('card-value-display').style.display = 'none';
    document.getElementById('confirm-card-btn').style.display = 'none';

    // Store card temporarily (with shuffled correct index)
    const cardWithShuffledAnswer = { ...card, correctAnswer: newCorrectIndex };
    if (currentScanningPlayer === 1) {
        gameState.player1.currentCard = cardWithShuffledAnswer;
    } else {
        gameState.player2.currentCard = cardWithShuffledAnswer;
    }
}

// Submit quiz answer
function submitQuiz() {
    const selectedOption = document.querySelector('input[name="quiz-answer"]:checked');

    if (!selectedOption) {
        alert('Please select an answer!');
        return;
    }

    const userAnswer = parseInt(selectedOption.value);
    const player = currentScanningPlayer === 1 ? gameState.player1 : gameState.player2;
    const card = player.currentCard;

    const isCorrect = (userAnswer === card.correctAnswer);
    player.quizCorrect = isCorrect;
    player.finalValue = calculateFinalValue(card.stars, isCorrect);

    // Disable all radio buttons and options to prevent changing answer
    const allRadios = document.querySelectorAll('input[name="quiz-answer"]');
    const allOptions = document.querySelectorAll('.quiz-option');

    allRadios.forEach(radio => {
        radio.disabled = true;
    });

    allOptions.forEach(option => {
        option.style.pointerEvents = 'none';
        option.style.cursor = 'not-allowed';
    });

    // If incorrect, highlight the correct answer in green
    if (!isCorrect) {
        allOptions[card.correctAnswer].classList.add('correct-answer');
        allOptions[card.correctAnswer].style.backgroundColor = '#d4edda';
        allOptions[card.correctAnswer].style.borderColor = '#28a745';
    }

    // Display result
    const resultDiv = document.getElementById('quiz-result');
    const valueDisplay = document.getElementById('card-value-display');
    const finalValueSpan = document.getElementById('final-card-value');

    if (isCorrect) {
        resultDiv.innerHTML = '✅ Correct! Full value applied.';
        resultDiv.className = 'quiz-result correct';
    } else {
        resultDiv.innerHTML = `❌ Incorrect! The correct answer was: ${card.options[card.correctAnswer]}. Value reduced by 5.`;
        resultDiv.className = 'quiz-result incorrect';
    }

    finalValueSpan.textContent = player.finalValue;

    resultDiv.style.display = 'block';
    valueDisplay.style.display = 'block';
    document.getElementById('confirm-card-btn').style.display = 'block';
}

// Confirm card selection
function confirmCard() {
    const player = currentScanningPlayer === 1 ? gameState.player1 : gameState.player2;
    const cardArea = document.getElementById(`player${currentScanningPlayer}-card-area`);

    // Display confirmed card
    cardArea.innerHTML = `
        <div class="confirmed-card ${player.currentCard.type}">
            <h4>${player.currentCard.name}</h4>
            <div class="card-info">
                <span>${getStarsDisplay(player.currentCard.stars)}</span>
                <span>${getCardTypeEmoji(player.currentCard.type)}</span>
            </div>
            <div class="card-value">
                ${player.quizCorrect ? '✅' : '❌'} Value: ${player.finalValue}
            </div>
        </div>
    `;

    closeModal();

    // Check if both players have selected cards
    if (gameState.player1.currentCard && gameState.player2.currentCard) {
        document.getElementById('resolve-section').style.display = 'block';
    }
}

// Close modal
function closeModal() {
    document.getElementById('scan-modal').style.display = 'none';
    // Restore body scroll when modal closes
    document.body.style.overflow = '';
}

// Resolve the round
function resolveRound() {
    // Apply game rules
    const result = applyGameRules();

    // Save to history
    saveRoundToHistory(result);

    // Update HP display
    updateHPDisplay();

    // Display round result
    displayRoundHistory();

    // Check if game is over
    if (checkGameOver()) {
        endGame();
        return;
    }

    // Prepare for next round
    gameState.currentRound++;
    document.getElementById('current-round').textContent = gameState.currentRound;

    // Reset cards
    resetCardsForNextRound();

    // Reset card areas
    document.getElementById('player1-card-area').innerHTML = '<button class="btn-scan" onclick="scanCard(1)">✏️ Enter card number</button>';
    document.getElementById('player2-card-area').innerHTML = '<button class="btn-scan" onclick="scanCard(2)">✏️ Enter card number</button>';

    // Hide resolve button
    document.getElementById('resolve-section').style.display = 'none';
}

// Display round history
function displayRoundHistory() {
    const historyContainer = document.getElementById('round-history');
    historyContainer.innerHTML = '';

    // Display in reverse order (most recent first)
    for (let i = gameState.roundHistory.length - 1; i >= 0; i--) {
        const round = gameState.roundHistory[i];

        const roundDiv = document.createElement('div');
        roundDiv.className = 'history-item';
        roundDiv.innerHTML = `
            <div class="history-round">Round ${round.round}</div>
            <div class="history-players">
                <div class="history-player">
                    <strong>${round.player1.name}</strong>: ${round.player1.card} 
                    ${getStarsDisplay(round.player1.stars)} ${getCardTypeEmoji(round.player1.type)}
                    (${round.player1.quizCorrect ? '✅' : '❌'} ${round.player1.value})
                    ${round.player1.damage > 0 ? `<span class="damage">-${round.player1.damage} HP</span>` : ''}
                    <span class="hp-after">→ ${round.player1.hp} HP</span>
                </div>
                <div class="history-player">
                    <strong>${round.player2.name}</strong>: ${round.player2.card} 
                    ${getStarsDisplay(round.player2.stars)} ${getCardTypeEmoji(round.player2.type)}
                    (${round.player2.quizCorrect ? '✅' : '❌'} ${round.player2.value})
                    ${round.player2.damage > 0 ? `<span class="damage">-${round.player2.damage} HP</span>` : ''}
                    <span class="hp-after">→ ${round.player2.hp} HP</span>
                </div>
            </div>
            <div class="history-result">${round.result}</div>
        `;

        historyContainer.appendChild(roundDiv);
    }
}

// End game
function endGame() {
    const winner = determineWinner();

    const winnerAnnouncement = document.getElementById('winner-announcement');

    if (winner === "draw") {
        winnerAnnouncement.innerHTML = '<h2>It\'s a Draw!</h2><p>Both players showed equal strength!</p>';
    } else {
        winnerAnnouncement.innerHTML = `<h2>🏆 ${winner} Wins! 🏆</h2><p>Congratulations!</p>`;
    }

    document.getElementById('final-player1-name').textContent = gameState.player1.name;
    document.getElementById('final-player2-name').textContent = gameState.player2.name;
    document.getElementById('final-player1-hp').textContent = gameState.player1.hp;
    document.getElementById('final-player2-hp').textContent = gameState.player2.hp;

    showScreen('winner-screen');
    gameState.gameActive = false;
}

// Reset game
function resetGame() {
    window.location.href = 'index.html';
}

// Allow Enter key to submit in various inputs
document.addEventListener('DOMContentLoaded', function () {
    // Initialize game if on game page
    initGame();

    // Enter key in card ID input
    const cardIdInput = document.getElementById('card-id-input');
    if (cardIdInput) {
        cardIdInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                lookupCard();
            }
        });
    }

    // Enter key in player names
    const player1Input = document.getElementById('player1-name');
    const player2Input = document.getElementById('player2-name');
    if (player1Input) {
        player1Input.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                player2Input.focus();
            }
        });
    }
    if (player2Input) {
        player2Input.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                startGame();
            }
        });
    }
});
