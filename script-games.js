// Show the selected game mode
function showGame(mode) {
  document.getElementById("quizGame").classList.add("hidden");
  document.getElementById("memoryGame").classList.add("hidden");

  if (mode === "quiz") {
    document.getElementById("quizGame").classList.remove("hidden");
  } else {
    document.getElementById("memoryGame").classList.remove("hidden");
    createMemoryBoard();
  }
}

/* =======================
   QUIZ QUESTIONS
======================= */
const questions = {
  math: {
  easy: [
    {
      q: "What is 12 ÷ 3?",
      options: ["2", "3", "4", "5"],
      answer: "4",
      explanation: "12 ÷ 3 = 4"
    },
    {
      q: "What is 5 + 7?",
      options: ["10", "11", "12", "13"],
      answer: "12",
      explanation: "5 + 7 = 12"
    },
    {
      q: "What is 9 − 4?",
      options: ["3", "4", "5", "6"],
      answer: "5",
      explanation: "9 − 4 = 5"
    },
    {
      q: "What is 6 × 2?",
      options: ["8", "10", "12", "14"],
      answer: "12",
      explanation: "6 × 2 = 12"
    },
    {
      q: "What is 15 ÷ 5?",
      options: ["2", "3", "4", "5"],
      answer: "3",
      explanation: "15 ÷ 5 = 3"
    },
    {
      q: "What is 8 + 6?",
      options: ["12", "13", "14", "15"],
      answer: "14",
      explanation: "8 + 6 = 14"
    }
  ],

   hard: [
      { q: "√144 = ?", options: ["10","11","12","13"], answer: "12", explanation: "√144 = 12" },
      { q: "18 × 4 = ?", options: ["64","72","68","74"], answer: "72", explanation: "18 × 4 = 72" },
      { q: "45 ÷ 9 = ?", options: ["4","5","6","7"], answer: "5", explanation: "45 ÷ 9 = 5" },
      { q: "2⁵ × 2³ = ?", options: ["128","256","512","1024"], answer: "256", explanation: "2⁵ × 2³ = 2^(5+3) = 256" },
      { q: "Sum of interior angles of pentagon?", options: ["540","360","720","450"], answer: "540", explanation: "Sum = (n-2) × 180 = 540°" }
    ],

  difficult: [
      { q: "Derivative of x³?", options: ["3x²","x²","3x","x³"], answer: "3x²", explanation: "Derivative of x³ is 3x²" },
      { q: "Integral of 2x dx?", options: ["x² + C","2x² + C","x + C","2 + C"], answer: "x² + C", explanation: "∫2x dx = x² + C" },
      { q: "Solve 2x² - 8x + 6 = 0", options: ["1 or 3","2 or 3","1 or 2","0 or 3"], answer: "1 or 3", explanation: "Roots: 1 and 3" },
      { q: "Value of 6!", options: ["720","7200","72000","600"], answer: "720", explanation: "6! = 6×5×4×3×2×1 = 720" },
      { q: "x² × x³ = ?", options: ["x⁵","x⁶","x⁸","x⁹"], answer: "x⁵", explanation: "x² × x³ = x^(2+3) = x⁵" }
    ]
},


  science: {
    easy: [
    {
      q: "Which planet is closest to the Sun?",
      options: ["Earth", "Venus", "Mercury", "Mars"],
      answer: "Mercury",
      explanation: "Mercury is the closest planet to the Sun."
    },
    {
      q: "What do plants need to make food?",
      options: ["Oxygen", "Sunlight", "Salt", "Wind"],
      answer: "Sunlight",
      explanation: "Plants use sunlight for photosynthesis."
    },
    {
      q: "Which organ pumps blood in the body?",
      options: ["Brain", "Lungs", "Heart", "Stomach"],
      answer: "Heart",
      explanation: "The heart pumps blood."
    },
    {
      q: "What gas do humans breathe in?",
      options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Helium"],
      answer: "Oxygen",
      explanation: "Humans need oxygen to survive."
    },
    {
      q: "What force pulls objects to the ground?",
      options: ["Magnetism", "Friction", "Gravity", "Energy"],
      answer: "Gravity",
      explanation: "Gravity pulls objects toward Earth."
    },
    {
      q: "Which part of the plant is usually green?",
      options: ["Root", "Stem", "Leaf", "Flower"],
      answer: "Leaf",
      explanation: "Leaves are green because of chlorophyll."
    }
  ],

  hard: [
      { q: "Chemical symbol for Gold?", options: ["Ag","Au","Go","Gd"], answer: "Au", explanation: "Au = Gold" },
      { q: "Center of atom?", options: ["Electron","Proton","Nucleus","Neutron"], answer: "Nucleus", explanation: "Nucleus is the center" },
      { q: "Gas plants absorb?", options: ["Oxygen","Carbon Dioxide","Nitrogen","Hydrogen"], answer: "Carbon Dioxide", explanation: "Plants absorb CO₂" },
      { q: "Chemical formula of water?", options: ["H2O","O2","CO2","HO"], answer: "H2O", explanation: "Water = H2O" },
      { q: "Boiling point of water?", options: ["90°C","100°C","120°C","80°C"], answer: "100°C", explanation: "Water boils at 100°C" }
    ],

    difficult: [
      { q: "Negative particle?", options: ["Proton","Electron","Neutron","Photon"], answer: "Electron", explanation: "Electron has negative charge" },
      { q: "What is pH < 7?", options: ["Acid","Base","Neutral","Salt"], answer: "Acid", explanation: "pH less than 7 is acidic" },
      { q: "Atomic number defines?", options: ["Protons","Neutrons","Electrons","Atoms"], answer: "Protons", explanation: "Atomic number = protons" },
      { q: "What is the speed of light?", options: ["3×10⁸ m/s","3×10⁶ m/s","3×10⁵ m/s","3×10⁷ m/s"], answer: "3×10⁸ m/s", explanation: "Speed of light = 3×10⁸ m/s" },
      { q: "Which gas is inert?", options: ["Oxygen","Nitrogen","Helium","Hydrogen"], answer: "Helium", explanation: "Helium is inert" }
    ]
},

computers: {
  easy: [
    {
      q: "What does CPU stand for?",
      options: [
        "Central Processing Unit",
        "Computer Power Unit",
        "Control Processing Unit",
        "Central Program Unit"
      ],
      answer: "Central Processing Unit",
      explanation: "The CPU is the brain of the computer."
    },
    {
      q: "Which device is used to input text?",
      options: ["Monitor", "Keyboard", "Printer", "Speaker"],
      answer: "Keyboard",
      explanation: "A keyboard is used to input text."
    }
  ],
  hard: [
      { q: "RAM stands for?", options: ["Read Access Memory","Random Access Memory","Run Access Memory","Rapid Access Memory"], answer: "Random Access Memory", explanation: "RAM stores temporary data" },
      { q: "CPU stands for?", options: ["Central Processing Unit","Computer Power Unit","Core Processing Unit","Central Program Unit"], answer: "Central Processing Unit", explanation: "CPU = brain of computer" },
      { q: "Primary storage?", options: ["RAM","ROM","HDD","SSD"], answer: "RAM", explanation: "RAM is primary storage" },
      { q: "Secondary storage?", options: ["RAM","ROM","HDD","CPU"], answer: "HDD", explanation: "HDD is secondary storage" },
      { q: "Device for output?", options: ["Keyboard","Printer","Mouse","Scanner"], answer: "Printer", explanation: "Printer outputs data" }
    ],
   difficult: [
      { q: "Web styling language?", options: ["HTML","JS","CSS","Python"], answer: "CSS", explanation: "CSS styles websites" },
      { q: "Full form of HTML?", options: ["HyperText Markup Language","Hyperlink Text Markup Language","HyperText Markdown Language","HyperText Machine Language"], answer: "HyperText Markup Language", explanation: "HTML = HyperText Markup Language" },
      { q: "Which protocol is secure?", options: ["HTTP","HTTPS","FTP","SMTP"], answer: "HTTPS", explanation: "HTTPS is secure" },
      { q: "Which is a programming language?", options: ["HTML","CSS","Python","SQL"], answer: "Python", explanation: "Python is programming language" },
      { q: "IP stands for?", options: ["Internet Protocol","Internet Page","Internal Protocol","Internet Packet"], answer: "Internet Protocol", explanation: "IP = Internet Protocol" }
    ]
},


  history: {
    easy: [
    {
      q: "Who was the first President of the United States?",
      options: ["Abraham Lincoln", "George Washington", "John Adams", "Thomas Jefferson"],
      answer: "George Washington",
      explanation: "George Washington was the first president."
    },
    {
      q: "Where were the pyramids built?",
      options: ["Greece", "Rome", "Egypt", "China"],
      answer: "Egypt",
      explanation: "The pyramids were built in Egypt."
    },
    {
      q: "Who discovered America in 1492?",
      options: ["Ferdinand Magellan", "Christopher Columbus", "Marco Polo", "James Cook"],
      answer: "Christopher Columbus",
      explanation: "Columbus reached America in 1492."
    },
    {
      q: "What ancient structure is known as a wonder of the world?",
      options: ["Colosseum", "Great Wall", "Eiffel Tower", "Statue of Liberty"],
      answer: "Great Wall",
      explanation: "The Great Wall is a famous ancient structure."
    },
    {
      q: "Which country built the Great Wall?",
      options: ["Japan", "India", "China", "Korea"],
      answer: "China",
      explanation: "The Great Wall was built in China."
    },
    {
      q: "Who was known as the Father of the Nation in the Philippines?",
      options: ["Andres Bonifacio", "Jose Rizal", "Emilio Aguinaldo", "Apolinario Mabini"],
      answer: "Jose Rizal",
      explanation: "Jose Rizal is the Philippine national hero."
    }
  ],
    hard: [
      { q: "WWI ended by?", options: ["Paris","Versailles","Rome","Vienna"], answer: "Versailles", explanation: "Treaty of Versailles" },
      { q: "Industrial Revolution started in?", options: ["USA","Germany","England","France"], answer: "England", explanation: "Industrial Revolution began in England" },
      { q: "Napoleon nationality?", options: ["French","Italian","German","Spanish"], answer: "French", explanation: "Napoleon was French" },
      { q: "US Civil War ended in?", options: ["1860","1865","1870","1875"], answer: "1865", explanation: "Ended in 1865" },
      { q: "Cold War ended in?", options: ["1987","1989","1991","1993"], answer: "1991", explanation: "Cold War ended in 1991" }
    ],
    difficult: [
      { q: "Berlin Wall fell?", options: ["1987","1989","1991","1993"], answer: "1989", explanation: "Berlin Wall fell in 1989" },
      { q: "First president of USA?", options: ["Washington","Lincoln","Adams","Jefferson"], answer: "Washington", explanation: "George Washington" },
      { q: "Renaissance began in?", options: ["Italy","France","Germany","England"], answer: "Italy", explanation: "Renaissance started in Italy" },
      { q: "French Revolution year?", options: ["1789","1799","1804","1812"], answer: "1789", explanation: "French Revolution in 1789" },
      { q: "Who wrote Declaration of Independence?", options: ["Jefferson","Washington","Franklin","Adams"], answer: "Jefferson", explanation: "Thomas Jefferson wrote it" }
    ]
  }
};

/* =======================
   QUIZ LOGIC
======================= */
let currentQuestion = 0;
let score = 0;
let streak = 0;
let timer;
let timeLeft = 20;
let currentSet = [];

function startQuiz() {
  document.getElementById("startSound").play();

  const category = document.getElementById("category").value;
  const level = document.getElementById("level").value;

  currentSet = questions[category]?.[level];
  if (!currentSet) {
    alert("No questions for this category yet.");
    return;
  }

  currentQuestion = 0;
  score = 0;
  streak = 0;

  document.getElementById("quiz").classList.remove("hidden");
  document.getElementById("score").classList.remove("hidden");
  document.getElementById("progressBar").classList.remove("hidden");

  loadQuestion();
}

function loadQuestion() {
  const q = currentSet[currentQuestion];
  document.getElementById("question").textContent = q.q;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(opt, q.answer, q.explanation);
    optionsDiv.appendChild(btn);
  });

  startTimer();
}

function startTimer() {
  clearInterval(timer);
  timeLeft = 20;
  document.getElementById("timer").textContent = `Time left: ${timeLeft}`;

  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").textContent = `Time left: ${timeLeft}`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      checkAnswer(null, currentSet[currentQuestion].answer, currentSet[currentQuestion].explanation);
    }
  }, 1000);
}

function checkAnswer(selected, correct, explanation) {
  clearInterval(timer);

  const exp = document.getElementById("explanation");
  exp.textContent = explanation;
  exp.classList.remove("hidden");

  if (selected === correct) {
    score++;
    streak++;
    document.getElementById("correctSound").play();
  } else {
    streak = 0;
    document.getElementById("wrongSound").play();
  }

  document.getElementById("score").textContent = `Score: ${score}`;
  document.getElementById("streak").textContent = `🔥 Streak: ${streak}`;

  updateProgress();

  setTimeout(() => {
    exp.classList.add("hidden");
    currentQuestion++;

    if (currentQuestion < currentSet.length) {
      loadQuestion();
    } else {
      alert("Quiz Finished!");
    }
  }, 1200);
}

function updateProgress() {
  const percent = ((currentQuestion + 1) / currentSet.length) * 100;
  document.getElementById("progress").style.width = `${percent}%`;
}

/* =======================
   MEMORY GAME (BASIC)
======================= */
const memorySymbolsBase = ["🍎", "🍌", "🍇", "🍒"];
let memoryDeck = [];
let memoryFlipped = [];
let matchedPairs = 0;

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function createMemoryBoard() {
  const container = document.getElementById("memoryContainer");
  container.innerHTML = "";

  memoryDeck = shuffle([...memorySymbolsBase, ...memorySymbolsBase]);
  memoryFlipped = [];
  matchedPairs = 0;

  memoryDeck.forEach(symbol => {
    const card = document.createElement("div");
    card.className = "memory-card";
    card.textContent = "?";

    card.onclick = () => {
      if (card.textContent !== "?" || memoryFlipped.length === 2) return;

      card.textContent = symbol;
      memoryFlipped.push({ card, symbol });

      if (memoryFlipped.length === 2) {
        setTimeout(checkMemoryMatch, 800);
      }
    };

    container.appendChild(card);
  });
}

function checkMemoryMatch() {
  const [a, b] = memoryFlipped;

  if (a.symbol === b.symbol) {
    matchedPairs++;
  } else {
    a.card.textContent = "?";
    b.card.textContent = "?";
  }

  memoryFlipped = [];
}
