const questions = [
    {
        question: "Which epic tells the story of Lord Rama's exile and return?",
        answers: [
            { text: "Mahabharata", correct: false },
            { text: "Bhagavad Gita", correct: false },
            { text: "Vedas", correct: false },
            { text: "Ramayana", correct: true }
        ]
    },
    {
        question: "Which planet has the most moons?",
        answers: [
            { text: "Saturn", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Uranus", correct: false },
            { text: "Neptune", correct: false }
        ]
    },
    {
        question: "What is the smallest country in the world by land area?",
        answers: [
            { text: "Monaco", correct: false },
            { text: "Vatican City", correct: true },
            { text: "San Marino", correct: false },
            { text: "Liechtenstein", correct: false }
        ]
    },
    {
        question: "Which weapon did Lord Rama use to kill Ravana?",
        answers: [
            { text: "Brahmastra", correct: true },
            { text: "Sudarshan Chakra", correct: false },
            { text: "Trishul", correct: false },
            { text: "Vajra", correct: false }
        ]
    },
    {
        question: "Who has the most runs in international cricket?",
        answers: [
            { text: "Virat Kohli", correct: false },
            { text: "Ricky Ponting", correct: false },
            { text: "Sachin Tendulkar", correct: true },
            { text: "Brian Lara", correct: false }
        ]
    },
    {
        question: "Which country won the first ever Cricket World Cup in 1975?",
        answers: [
            { text: "India", correct: false },
            { text: "Australia", correct: false },
            { text: "England", correct: false },
            { text: "West Indies", correct: true }
        ]
    },
    {
        question: "Which element has the highest melting point?",
        answers: [
            { text: "Iron", correct: false },
            { text: "Carbon", correct: false },
            { text: "Platinum", correct: false },
            { text: "Tungsten", correct: true },
        ]
    },
    {
        question: "Which king is known for performing 100 Ashwamedha Yagnas to become the king of heavens?",
        answers: [
            { text: "Dasharatha", correct: false },
            { text: "Indra", correct: true },
            { text: "Harishchandra", correct: false },
            { text: "Bharata", correct: false }
        ]
    },
    {
        question: "Who was the first person to win two Nobel Prizes in different scientific fields?",
        answers: [
            { text: "Albert Einstein", correct: false },
            { text: "Linus Pauling", correct: false },
            { text: "Marie Curie", correct: true },
            { text: "Isaac Newton", correct: false }
        ]
    },
    {
        question: "Who holds the record for the fastest century in ODI cricket?",
        answers: [
            { text: "AB de Villiers", correct: true },
            { text: "Chris Gayle", correct: false },
            { text: "Shahid Afridi", correct: false },
            { text: "Corey Anderson", correct: false }
        ]
    },
    {
        question: "Who is known as the destroyer of the universe in Hindu mythology?",
        answers: [
            { text: "Shiva", correct: true },
            { text: "Vishnu", correct: false },
            { text: "Brahma", correct: false },
            { text: "Indra", correct: false }
        ]
    },
    {
        question: "Which bowler has taken the most wickets in Test cricket?",
        answers: [
            { text: "Shane Warne", correct: false },
            { text: "James Anderson", correct: false },
            { text: "Muttiah Muralitharan", correct: true },
            { text: "Glenn McGrath", correct: false }
        ]
    },
    {
        question: "Who is the 'Preserver' in the Hindu trinity?",
        answers: [
            { text: "Brahma", correct: false },
            { text: "Shiva", correct: false },
            { text: "Indra", correct: false },
            { text: "Vishnu", correct: true }
        ]
    },
    {
        question: "What is the longest river in the world?",
        answers: [
            { text: "Nile River", correct: true },
            { text: "Amazon River", correct: false },
            { text: "Yangtze River", correct: false },
            { text: "Mississippi River", correct: false }
        ]
    },
    {
        question: "Which language has the most native speakers worldwide?",
        answers: [
            { text: "English", correct: false },
            { text: "Spanish", correct: false },
            { text: "Mandarin Chinese", correct: true },
            { text: "Hindi", correct: false }
        ]
    },
    {
        question: "Which Indian cricketer has hit the most sixes in international cricket?",
        answers: [
            { text: "MS Dhoni", correct: false },
            { text: "Virender Sehwag", correct: false },
            { text: "Rohit Sharma", correct: true },
            { text: "Yuvraj Singh", correct: false }
        ]
    },
    {
        question: "What mountain does Lord Shiva reside on according to Hindu mythology?",
        answers: [
            { text: "Mount Everest", correct: false },
            { text: "Mount Kailash", correct: true },
            { text: "Himalayas", correct: false },
            { text: "Vindhyas", correct: false }
        ]
    },
    {
        question: "Who was the first player to score a double century in ODIs?",
        answers: [
            { text: "Rohit Sharma", correct: false },
            { text: "Virender Sehwag", correct: false },
            { text: "Sachin Tendulkar", correct: true },
            { text: "Chris Gayle", correct: false }
        ]
    },
    {
        question: "Which element is commonly used in the control rods of nuclear reactors to absorb neutrons?",
        answers: [
            { text: "Uranium", correct: false },
            { text: "Thorium", correct: false },
            { text: "Plutonium", correct: false },
            { text: "Cadmium", correct: true },
        ]
    },
    
    {
        question: "Which scientist proposed the three laws of motion?",
        answers: [
            { text: "Albert Einstein", correct: false },
            { text: "Galileo Galilei", correct: false },
            { text: "Isaac Newton", correct: true },
            { text: "Niels Bohr", correct: false }
        ]
    },
    {
        question: "Which demon was killed by Goddess Durga in the form of Mahishasura Mardini?",
        answers: [
            { text: "Ravana", correct: false },
            { text: "Mahishasura", correct: true },
            { text: "Hiranyakashipu", correct: false },
            { text: "Kumbhakarna", correct: false }
        ]
    },
    {
        question: "Which scientist discovered the neutron in 1932?",
        answers: [
            { text: "James Chadwick", correct: true },
            { text: "Albert Einstein", correct: false },
            { text: "Niels Bohr", correct: false },
            { text: "Ernest Rutherford", correct: false }
        ]
    },
    {
        question: "Which cricketer is known as 'Captain Cool'?",
        answers: [
            { text: "Virat Kohli", correct: false },
            { text: "Steve Smith", correct: false },
            { text: "Kane Williamson", correct: false },
            { text: "MS Dhoni", correct: true }
        ]
    },
    {
        question: "Which bowler delivered the iconic 'Ball of the Century'?",
        answers: [
            { text: "Shane Warne", correct: true },
            { text: "Muttiah Muralitharan", correct: false },
            { text: "Anil Kumble", correct: false },
            { text: "Wasim Akram", correct: false }
        ]
    },
    {
        question: "What is the sacred river mentioned in Hindu mythology as the holiest of all rivers?",
        answers: [
            { text: "Yamuna", correct: false },
            { text: "Godavari", correct: false },
            { text: "Ganga", correct: true },
            { text: "Narmada", correct: false }
        ]
    },
    {
        question: "What is the hardest natural substance on Earth?",
        answers: [
            { text: "Diamond", correct: true },
            { text: "Quartz", correct: false },
            { text: "Topaz", correct: false },
            { text: "Corundum", correct: false }
        ]
    },
    {
        question: "Which country has the most natural lakes in the world?",
        answers: [
            { text: "Russia", correct: false },
            { text: "Canada", correct: true },
            { text: "United States", correct: false },
            { text: "Brazil", correct: false }
        ]
    },
    {
        question: "Who is the goddess of wealth and prosperity in Hindu mythology?",
        answers: [
            { text: "Saraswati", correct: false },
            { text: "Parvati", correct: false },
            { text: "Lakshmi", correct: true },
            { text: "Kali", correct: false }
        ]
    }, 
    {
        question: "Which country hosted the 2019 ICC Cricket World Cup?",
        answers: [
            { text: "India", correct: false },
            { text: "Australia", correct: false },
            { text: "England", correct: true },
            { text: "South Africa", correct: false }
        ]
    },
    {
        question: "Which country is known as the 'Land of the Rising Sun'?",
        answers: [
            { text: "China", correct: false },
            { text: "Japan", correct: true },
            { text: "South Korea", correct: false },
            { text: "Thailand", correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;
let answerLocked = false;

window.onload = () => {
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('lock-btn').style.display = 'none';
    document.getElementById('start-btn').addEventListener('click', startQuiz);
    document.getElementById('next-btn').addEventListener('click', nextQuestion);
    document.getElementById('lock-btn').addEventListener('click', lockAnswer);
};

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    answerLocked = false;
    document.getElementById('score').innerText = '';
    document.getElementById('start-btn').style.display = 'none';
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('lock-btn').style.display = 'block';
    showQuestion();
}

