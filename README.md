# Cyber-Clash Card Game 🛡️⚔️

A modern, cyberpunk-themed web-based cybersecurity educational card game for 2 players. Players battle using attack, defense, and heal cards while answering randomized multiple-choice cybersecurity quiz questions.

## 🎮 How to Play

### Setup
1. Open `index.html` in your web browser
2. Enter Player 1 and Player 2 names
3. Select maximum number of rounds (15, 20, or 25)
4. Click "Start Game" - you'll be redirected to the game page

### Gameplay
1. **Each Round:**
   - Click "✏️ Enter card number" button for each player
   - Enter just the card number (e.g., "1", "25", "50")
   - Answer the multiple-choice quiz question (options are randomized!)
   - Confirm your card selection
   - Once both players have selected cards, click "⚔️ Resolve Round"

2. **Quiz System:**
   - Each card has a multiple-choice question with 4 options
   - Options are randomly shuffled each time
   - You can change your answer before submitting
   - After submission, answers are locked
   - Wrong answers show the correct answer in green
   - Quiz result affects your card's value

3. **Card Values:**
   - Base value = Stars × 5
   - Correct quiz answer = Full value
   - Wrong quiz answer = Value - 5 (minimum 0)

4. **Game Rules:**
   - **Attack vs Defense:** Net damage = Attack value - Defense value (if positive, damage to defender)
   - **Attack vs Attack:** Both players take damage from opponent's card
   - **Defense vs Defense:** No damage dealt
   - **Heal Cards:** Restore HP (max 100)

5. **Winning:**
   - Game ends when a player reaches 0 HP
   - OR after max rounds (winner = highest HP)
   - Draw if both players have equal HP

## 🎨 Modern Cyberpunk UI

- **Neon color scheme** with cyan, purple, and pink accents
- **Glassmorphism effects** for cards and modals
- **Smooth animations** for card reveals and interactions
- **Responsive design** optimized for desktop and mobile
- **HP bars** with color-coding (green → yellow → red)
- **Round history** showing all previous plays

## 📋 Card Database

The game includes **50 cybersecurity-themed cards** across three types:

### Card Types & Distribution
- **Attack Cards:** 1★ to 5★ cards representing cyber threats
- **Defense Cards:** 1★ to 5★ cards representing security measures  
- **Heal Cards:** 1★ to 4★ cards representing recovery actions

### Sample Cards

**Attack Examples:**
- **Phishing Email** (1★) - "What should you check first?" → The sender address
- **Basic Malware** (1★) - "What action reduces malware risk?" → Installing antivirus
- **Ransomware** (4★) - "Ransomware demands..." → Payment for decryption
- **Advanced Persistent Threat** (5★) - "APT attacks are characterized by..." → Long-term stealth

**Defense Examples:**
- **Firewall** (2★) - "Firewalls control..." → Network traffic
- **Two-Factor Authentication** (3★) - "2FA requires..." → Two forms of verification
- **VPN** (3★) - "VPN creates..." → Encrypted tunnel
- **Zero Trust Security** (5★) - "Zero Trust assumes..." → No implicit trust

**Heal Examples:**
- **Antivirus Scan** (1★) - "Scans detect..." → Malicious software
- **Password Reset** (2★) - "Resets help after..." → Compromised accounts
- **System Recovery Mode** (3★) - "Recovery mode helps fix..." → Major problems
- **Full Backup Restore** (4★) - "Backups protect against..." → Data loss

💡 *All 50 cards are defined in `cards-database.js` with unique questions and randomized answer choices!*

## 🎯 Features Implemented

✅ **Two-page architecture** - Separate setup and game screens  
✅ **Smart card entry** - Enter just the number (1-50), auto-converts to CARD001 format  
✅ **50 unique cybersecurity cards** with educational multiple-choice quizzes  
✅ **Randomized quiz options** - Correct answer position shuffles every time (Fisher-Yates algorithm)  
✅ **Quiz answer locking** - Cannot change answer after submission  
✅ **Correct answer highlighting** - Wrong answers show the correct option in green  
✅ **Value calculation** - Stars × 5, -5 penalty for wrong answers  
✅ **Round resolution** with attack/defense/heal mechanics  
✅ **Real-time HP display** with gradient color-coded bars (green → yellow → red)  
✅ **Round history** showing all previous plays  
✅ **Winner detection** and end game screen  
✅ **Modern cyberpunk UI** with neon colors, glassmorphism, and smooth animations  
✅ **Fully responsive design** - Optimized for desktop and mobile  
✅ **Modal scroll containment** - Prevents page expansion on long content  
✅ **Keyboard shortcuts** - Press Enter to submit card number or start game  

## 🔧 Technical Details

### Project Structure
```
Cyber-Clash/
├── index.html          # Setup screen (player names, rounds)
├── game.html           # Main game screen (separated for scroll fix)
├── styles.css          # Cyberpunk theme with CSS variables
├── cards-database.js   # 50 card definitions with MCQ quizzes
├── game-logic.js       # Game state and battle mechanics
└── app.js              # UI interactions, modal control, quiz shuffling
```

### Key Technologies
- **Pure Vanilla JavaScript** - No frameworks or dependencies
- **CSS Variables** for theming (--primary-neon, --secondary-neon, etc.)
- **Glassmorphism** with backdrop-filter for modern card effects
- **Fisher-Yates Shuffle** for truly random quiz option ordering
- **LocalStorage-free** - Game state managed in memory
- **Mobile-first responsive** with CSS Grid and Flexbox

### Architecture Highlights
- **State Management:** Single `gameState` object in `game-logic.js`
- **Modal System:** Locks body scroll when open, scrolls internally
- **Quiz Randomization:** Each card display shuffles options and tracks new correct index
- **Smart ID Parsing:** Accepts "1", "001", "card1", "CARD001" - all resolve to CARD001

## 🚀 Quick Start

### Local Setup (WAMP/XAMPP)
1. Place all files in your web server directory (e.g., `C:\wamp64\www\Cyber-Clash\`)
2. Start your local server (WAMP, XAMPP, or similar)
3. Navigate to `http://localhost/Cyber-Clash/`
4. Enter player names and start playing!

### Standalone (No Server Required)
1. Simply open `index.html` directly in any modern browser
2. Works offline - no server needed!

### Recommended Browsers
- ✅ Chrome/Edge (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎓 Educational Value

Players learn about:
- **Attack Vectors:** Phishing, malware, ransomware, injection attacks, social engineering
- **Defense Mechanisms:** Firewalls, encryption, 2FA, VPNs, intrusion detection
- **Security Best Practices:** Password policies, backups, patching, access control
- **Incident Response:** Recovery tools, forensics, disaster recovery planning

Each card includes a quiz question that reinforces the cybersecurity concept!

## 🎮 Game Balance

### Card Rarity & Power
- **1★ cards:** Value 5 (0 if wrong) - Common, beginner concepts
- **2★ cards:** Value 10 (5 if wrong) - Common, fundamental concepts
- **3★ cards:** Value 15 (10 if wrong) - Uncommon, intermediate topics
- **4★ cards:** Value 20 (15 if wrong) - Rare, advanced concepts
- **5★ cards:** Value 25 (20 if wrong) - Epic, expert-level threats/defenses

### Strategy Tips
- 🎯 **Know your cards** - Familiarize yourself with the questions
- 🛡️ **Balance is key** - Mix attacks, defenses, and heals
- 💡 **Read carefully** - Quiz options are randomized!
- ⏱️ **HP management** - Don't wait too long to heal

## 📱 Future Enhancements

Planned features for future versions:
- 🎴 **Physical card integration** with QR codes
- 🏆 **Leaderboard system** with win tracking
- 🎵 **Sound effects** and background music
- ✨ **Special abilities** and combo mechanics
- 🌐 **Online multiplayer** via WebSockets
- 📊 **Statistics tracking** for learning progress

## 🐛 Troubleshooting

**Q: The game starts in the middle of the page / I see empty space**  
A: This has been fixed! The game now uses a two-page architecture (`index.html` → `game.html`) which ensures the game always starts at the top.

**Q: Modal is extending the page on mobile**  
A: Fixed! Modal now has scroll containment with `max-height: 90vh` and locks body scroll.

**Q: Can't enter card numbers**  
A: Make sure JavaScript is enabled. The Enter key should work, or click the "Enter" button.

**Q: Quiz answers are always in the same position**  
A: Fixed! Options are now randomized using Fisher-Yates shuffle algorithm.

**Q: Text is hard to read in the modal**  
A: All text colors have been optimized for contrast (white text on dark/gradient backgrounds).

## 💻 Development Notes

### Recent Updates
- ✅ Separated setup and game into two HTML files for better UX
- ✅ Added Fisher-Yates shuffle for quiz randomization
- ✅ Implemented modal scroll containment to prevent page overflow
- ✅ Smart card ID parser (accepts multiple formats)
- ✅ Updated all "Scan Card" references to "Enter card number"
- ✅ Fixed text color contrast issues in modals
- ✅ Added body scroll lock when modal is open

### Browser Compatibility
- Tested on Chrome 120+, Firefox 120+, Safari 17+
- Mobile tested on iOS 17+ and Android Chrome
- Uses modern CSS (CSS Variables, backdrop-filter, Grid, Flexbox)

## 📝 Credits & License

**Created for educational purposes** - Teaching cybersecurity through gamification.

### Technologies Used
- HTML5, CSS3, JavaScript (ES6+)
- Google Fonts: Orbitron & Roboto
- Fisher-Yates Shuffle Algorithm
- Glassmorphism Design Pattern

---

**🎮 Enjoy learning cybersecurity through Cyber-Clash! 🛡️⚔️**

*For questions or contributions, check the source code and feel free to extend the game!*
