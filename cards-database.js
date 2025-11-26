// Cards Database - 50 Cyber Security Cards with Multiple Choice Questions
const CARDS_DATABASE = [
    // 1★ ATTACK CARDS (7 cards)
    {
        id: "CARD001",
        name: "Phishing Email",
        stars: 1,
        type: "attack",
        description: "A deceptive email used to trick users into revealing information.",
        quiz: "What should you check first?",
        options: ["The sender address", "The background color", "The font size", "The email length"],
        correctAnswer: 0
    },
    {
        id: "CARD002",
        name: "Basic Malware",
        stars: 1,
        type: "attack",
        description: "A simple harmful program designed to disrupt or damage a device.",
        quiz: "What action reduces malware risk?",
        options: ["Opening random files", "Installing antivirus", "Disabling firewall", "Ignoring warnings"],
        correctAnswer: 1
    },
    {
        id: "CARD003",
        name: "Password Guessing",
        stars: 1,
        type: "attack",
        description: "Trying common or weak passwords to break into an account.",
        quiz: "Which password is stronger?",
        options: ["123456", "P4ssw0rd!", "password", "admin"],
        correctAnswer: 1
    },
    {
        id: "CARD004",
        name: "Link Spoofing",
        stars: 1,
        type: "attack",
        description: "Fake links disguised to look legitimate.",
        quiz: "How can you spot a fake link?",
        options: ["Hover to preview URL", "Click immediately", "Check link color", "Count characters"],
        correctAnswer: 0
    },
    {
        id: "CARD005",
        name: "Social Engineering",
        stars: 1,
        type: "attack",
        description: "Manipulating people rather than systems to gain access.",
        quiz: "What's best to do if unsure?",
        options: ["Share info", "Verify identity", "Ignore request", "Delete email"],
        correctAnswer: 1
    },
    {
        id: "CARD006",
        name: "USB Drop Attack",
        stars: 1,
        type: "attack",
        description: "Malicious USBs left for victims to plug in.",
        quiz: "Should you plug unknown USBs?",
        options: ["Yes", "No", "Only at work", "Only at home"],
        correctAnswer: 1
    },
    {
        id: "CARD007",
        name: "Fake App Installation",
        stars: 1,
        type: "attack",
        description: "Apps pretending to be legit but hiding malicious code.",
        quiz: "Where should you download apps?",
        options: ["Official stores", "Random websites", "Email links", "Text messages"],
        correctAnswer: 0
    },

    // 2★ ATTACK CARDS (6 cards)
    {
        id: "CARD008",
        name: "Adware Injection",
        stars: 2,
        type: "attack",
        description: "Software that forces unwanted ads on a system.",
        quiz: "What reduces adware risk?",
        options: ["Ad blockers", "Clicking every ad", "Disabling browser", "Using HTTP"],
        correctAnswer: 0
    },
    {
        id: "CARD009",
        name: "Credential Stuffing",
        stars: 2,
        type: "attack",
        description: "Using leaked passwords to access other accounts.",
        quiz: "What prevents this?",
        options: ["Same password everywhere", "Different passwords", "No password", "Short passwords"],
        correctAnswer: 1
    },
    {
        id: "CARD010",
        name: "Fake Login Page",
        stars: 2,
        type: "attack",
        description: "A cloned login form stealing credentials.",
        quiz: "What should you check?",
        options: ["The URL", "The font", "The colors", "The logo size"],
        correctAnswer: 0
    },
    {
        id: "CARD011",
        name: "Spyware Installation",
        stars: 2,
        type: "attack",
        description: "A malware that secretly monitors activity.",
        quiz: "What tool helps detect spyware?",
        options: ["Antivirus", "Calculator", "Notepad", "Paint"],
        correctAnswer: 0
    },
    {
        id: "CARD012",
        name: "Botnet Ping",
        stars: 2,
        type: "attack",
        description: "A small test attack used to measure system weakness.",
        quiz: "Botnets are made of...",
        options: ["Connected infected devices", "Coffee machines", "Printers only", "Routers only"],
        correctAnswer: 0
    },
    {
        id: "CARD013",
        name: "Brute-Force Attempt",
        stars: 2,
        type: "attack",
        description: "Trying every combination to crack a password.",
        quiz: "What blocks brute-force attacks?",
        options: ["Rate limiting", "Unlimited tries", "No password", "Simple passwords"],
        correctAnswer: 0
    },

    // 3★ ATTACK CARDS (5 cards)
    {
        id: "CARD014",
        name: "Keylogger Attack",
        stars: 3,
        type: "attack",
        description: "A malware that records keystrokes to steal data.",
        quiz: "What helps protect you?",
        options: ["Using secure keyboards", "Keeping software updated", "Typing faster", "Using caps lock"],
        correctAnswer: 1
    },
    {
        id: "CARD015",
        name: "SQL Injection",
        stars: 3,
        type: "attack",
        description: "Inserting malicious code into a database query.",
        quiz: "Best prevention?",
        options: ["Input validation", "Ignoring errors", "Open databases", "No passwords"],
        correctAnswer: 0
    },
    {
        id: "CARD016",
        name: "Man-in-the-Middle Attack",
        stars: 3,
        type: "attack",
        description: "Intercepting communication between two parties.",
        quiz: "What protects you on Wi-Fi?",
        options: ["HTTPS", "Open Wi-Fi", "HTTP", "No encryption"],
        correctAnswer: 0
    },
    {
        id: "CARD017",
        name: "Session Hijacking",
        stars: 3,
        type: "attack",
        description: "Stealing a session token to impersonate a user.",
        quiz: "What helps prevent it?",
        options: ["Logging out", "Keeping old sessions", "Never logging in", "Sharing tokens"],
        correctAnswer: 0
    },
    {
        id: "CARD018",
        name: "Ransomware Lock",
        stars: 3,
        type: "attack",
        description: "Encrypts data and demands a payment.",
        quiz: "Best defense?",
        options: ["Regular backups", "Paying attackers", "No backups", "Ignoring warnings"],
        correctAnswer: 0
    },

    // 4★ ATTACK CARDS (4 cards)
    {
        id: "CARD019",
        name: "Advanced Persistent Threat (APT)",
        stars: 4,
        type: "attack",
        description: "Long-term, targeted attack by skilled hackers.",
        quiz: "Who typically performs APTs?",
        options: ["Script kiddies", "Advanced groups", "Beginners", "Automated bots"],
        correctAnswer: 1
    },
    {
        id: "CARD020",
        name: "Zero-Day Exploit",
        stars: 4,
        type: "attack",
        description: "Using an undiscovered vulnerability before it's patched.",
        quiz: "How are they fixed?",
        options: ["Security patches", "Ignoring them", "Rebooting", "Deleting files"],
        correctAnswer: 0
    },
    {
        id: "CARD021",
        name: "Large-Scale Malware Drop",
        stars: 4,
        type: "attack",
        description: "Deploying malware across many systems at once.",
        quiz: "What hinders these attacks?",
        options: ["Network monitoring", "Turning off logs", "Disabling antivirus", "Open ports"],
        correctAnswer: 0
    },
    {
        id: "CARD022",
        name: "Data Breach Extraction",
        stars: 4,
        type: "attack",
        description: "Stealing sensitive data from a compromised system.",
        quiz: "What reduces breach impact?",
        options: ["Encryption", "Plain text storage", "No passwords", "Public databases"],
        correctAnswer: 0
    },

    // 5★ ATTACK CARDS (2 cards)
    {
        id: "CARD023",
        name: "Massive DDoS Attack",
        stars: 5,
        type: "attack",
        description: "Overwhelming a system with traffic to shut it down.",
        quiz: "What defends against DDoS?",
        options: ["Traffic filtering", "Complaining", "Turning off server", "No protection"],
        correctAnswer: 0
    },
    {
        id: "CARD024",
        name: "Supply Chain Attack",
        stars: 5,
        type: "attack",
        description: "Infecting a trusted provider to reach many victims.",
        quiz: "What helps mitigate this?",
        options: ["Vendor audits", "Blind trust", "No verification", "Ignoring vendors"],
        correctAnswer: 0
    },

    // 1★ DEFENSE CARDS (6 cards)
    {
        id: "CARD025",
        name: "Strong Password",
        stars: 1,
        type: "defense",
        description: "Using complex, unique passwords protects accounts.",
        quiz: "Which is stronger?",
        options: ["12345", "T!9qP4#", "password", "admin"],
        correctAnswer: 1
    },
    {
        id: "CARD026",
        name: "Device Lock",
        stars: 1,
        type: "defense",
        description: "Basic protection against unauthorized access.",
        quiz: "Should you lock your device?",
        options: ["Yes", "No", "Sometimes", "Never"],
        correctAnswer: 0
    },
    {
        id: "CARD027",
        name: "Spam Filter",
        stars: 1,
        type: "defense",
        description: "Automatically blocks many fraudulent emails.",
        quiz: "What does it stop?",
        options: ["Phishing", "Weather", "News", "Shopping"],
        correctAnswer: 0
    },
    {
        id: "CARD028",
        name: "Software Update Reminder",
        stars: 1,
        type: "defense",
        description: "Keeping systems patched prevents vulnerabilities.",
        quiz: "Should you update?",
        options: ["Yes", "No", "Maybe", "Never"],
        correctAnswer: 0
    },
    {
        id: "CARD029",
        name: "Basic Antivirus",
        stars: 1,
        type: "defense",
        description: "Scans for known malware signatures.",
        quiz: "What must antivirus do?",
        options: ["Update", "Sleep", "Shutdown", "Nothing"],
        correctAnswer: 0
    },
    {
        id: "CARD030",
        name: "Simple Firewall",
        stars: 1,
        type: "defense",
        description: "Blocks basic unauthorized connections.",
        quiz: "Firewalls control...",
        options: ["Network traffic", "Calendar events", "Email content", "File names"],
        correctAnswer: 0
    },

    // 2★ DEFENSE CARDS (5 cards)
    {
        id: "CARD031",
        name: "Two-Factor Authentication",
        stars: 2,
        type: "defense",
        description: "Adds a second verification step for security.",
        quiz: "What's better?",
        options: ["Password only", "Password + Code", "No password", "Username only"],
        correctAnswer: 1
    },
    {
        id: "CARD032",
        name: "Encrypted Connection",
        stars: 2,
        type: "defense",
        description: "Protects data in transit with encryption.",
        quiz: "What protocol helps?",
        options: ["HTTPS", "HTTP", "FTP", "Telnet"],
        correctAnswer: 0
    },
    {
        id: "CARD033",
        name: "Account Lockout",
        stars: 2,
        type: "defense",
        description: "Blocks login attempts after failures.",
        quiz: "Helps stop...",
        options: ["Brute force", "Typing", "Logging in", "Reading"],
        correctAnswer: 0
    },
    {
        id: "CARD034",
        name: "Patch Management",
        stars: 2,
        type: "defense",
        description: "Ensures vulnerabilities get fixed quickly.",
        quiz: "Patching prevents...",
        options: ["Exploits", "Sunburn", "Rain", "Noise"],
        correctAnswer: 0
    },
    {
        id: "CARD035",
        name: "Secure DNS",
        stars: 2,
        type: "defense",
        description: "Prevents being redirected to malicious pages.",
        quiz: "DNS is like...",
        options: ["The internet's phonebook", "A toaster", "A printer", "A mouse"],
        correctAnswer: 0
    },

    // 3★ DEFENSE CARDS (4 cards)
    {
        id: "CARD036",
        name: "Intrusion Detection System (IDS)",
        stars: 3,
        type: "defense",
        description: "Monitors for suspicious activity.",
        quiz: "IDS detects...",
        options: ["Attacks", "Coffee", "Music", "Weather"],
        correctAnswer: 0
    },
    {
        id: "CARD037",
        name: "Email Authentication (DMARC, SPF)",
        stars: 3,
        type: "defense",
        description: "Prevents email spoofing.",
        quiz: "Used to stop...",
        options: ["Fake senders", "Music downloads", "Video streaming", "File sharing"],
        correctAnswer: 0
    },
    {
        id: "CARD038",
        name: "Network Monitoring",
        stars: 3,
        type: "defense",
        description: "Tracks traffic to spot anomalies.",
        quiz: "What does it detect?",
        options: ["Unusual flows", "Wallpaper changes", "Font changes", "Icon changes"],
        correctAnswer: 0
    },
    {
        id: "CARD039",
        name: "Secure Configuration",
        stars: 3,
        type: "defense",
        description: "Reducing attack surface by tightening settings.",
        quiz: "Good practice?",
        options: ["Disable unused services", "Enable everything", "No configuration", "Random settings"],
        correctAnswer: 0
    },

    // 4★ DEFENSE CARDS (3 cards)
    {
        id: "CARD040",
        name: "Endpoint Protection Suite",
        stars: 4,
        type: "defense",
        description: "Multi-layer defense against advanced malware.",
        quiz: "EDR tools monitor...",
        options: ["Endpoints", "Shoes", "Chairs", "Desks"],
        correctAnswer: 0
    },
    {
        id: "CARD041",
        name: "Advanced Firewall Rules",
        stars: 4,
        type: "defense",
        description: "Custom filtering to block complex attacks.",
        quiz: "Good rules...",
        options: ["Restrict traffic", "Allow everything", "Block nothing", "Random blocking"],
        correctAnswer: 0
    },
    {
        id: "CARD042",
        name: "Encrypted Backups",
        stars: 4,
        type: "defense",
        description: "Protect backups from ransomware or tampering.",
        quiz: "Why encrypted?",
        options: ["Protect data", "Decoration", "Color", "Speed"],
        correctAnswer: 0
    },

    // 5★ DEFENSE CARDS (2 cards)
    {
        id: "CARD043",
        name: "Threat Intelligence Integration",
        stars: 5,
        type: "defense",
        description: "Uses global attack data to predict threats.",
        quiz: "Threat intel helps...",
        options: ["Prevent attacks early", "Make memes", "Play games", "Watch videos"],
        correctAnswer: 0
    },
    {
        id: "CARD044",
        name: "Zero-Trust Architecture",
        stars: 5,
        type: "defense",
        description: "Every request is verified, even inside the network.",
        quiz: "Zero trust means...",
        options: ["Trust nothing", "Trust everything", "Trust sometimes", "Trust nobody knows"],
        correctAnswer: 0
    },

    // 1★ HEALING CARDS (2 cards)
    {
        id: "CARD045",
        name: "System Restart",
        stars: 1,
        type: "heal",
        description: "Clears some active threats and refreshes processes.",
        quiz: "Restarting can fix...",
        options: ["Minor issues", "Broken windows", "Physical damage", "Hardware"],
        correctAnswer: 0
    },
    {
        id: "CARD046",
        name: "Cache Cleanup",
        stars: 1,
        type: "heal",
        description: "Removes stored data that may cause bugs or slowdown.",
        quiz: "Cache stores...",
        options: ["Temporary data", "Rocks", "Water", "Air"],
        correctAnswer: 0
    },

    // 2★ HEALING CARDS (2 cards)
    {
        id: "CARD047",
        name: "Basic Restore Point",
        stars: 2,
        type: "heal",
        description: "Reverts system to a stable previous state.",
        quiz: "Restore points help...",
        options: ["Undo damage", "Play games", "Watch videos", "Listen music"],
        correctAnswer: 0
    },
    {
        id: "CARD048",
        name: "Virus Cleanup Tool",
        stars: 2,
        type: "heal",
        description: "Removes simple infections from the system.",
        quiz: "Cleanup tools remove...",
        options: ["Malware", "Wallpapers", "Icons", "Fonts"],
        correctAnswer: 0
    },

    // 3★ HEALING CARDS (1 card)
    {
        id: "CARD049",
        name: "System Recovery Mode",
        stars: 3,
        type: "heal",
        description: "Deep repair tool for system-wide issues.",
        quiz: "Recovery mode helps fix...",
        options: ["Major problems", "Headphones", "Keyboards", "Mice"],
        correctAnswer: 0
    },

    // 4★ HEALING CARDS (1 card)
    {
        id: "CARD050",
        name: "Full Backup Restore",
        stars: 4,
        type: "heal",
        description: "Restores system from a clean, safe backup.",
        quiz: "Backups protect against...",
        options: ["Data loss", "Lunch", "Breakfast", "Dinner"],
        correctAnswer: 0
    }
];

// Helper function to get card by ID
function getCardById(cardId) {
    return CARDS_DATABASE.find(card => card.id.toLowerCase() === cardId.toLowerCase());
}

// Helper function to get all cards
function getAllCards() {
    return CARDS_DATABASE;
}
