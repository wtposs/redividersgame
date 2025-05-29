// A simple seedable random number generator function
// From: https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript
Math.seedrandom = Math.seedrandom || function(seed) {
    var x = Math.sin(seed || 0) * 10000;
    return function() {
        x = ((x % 1) * 100000) ^ 0; // Ensures integer seed for next cycle
        return (x = (x * 9301 + 49297) % 233280) / 233280;
    };
};

// Data for the questions and answers - THIS IS YOUR ORIGINAL CONTENT
// The answers are stored in an array of arrays, where each inner array corresponds to a question
// and contains the correct answers in order.
// Use lowercase for answers to make comparisons case-insensitive.
const allQuestionsAndAnswers = [
    // Question 1
    {
        answers: ["sleepy", "CD"],
        hints: ["Feeling drowsy and tired", "A compact disc for music"]
    },
    // Question 2
    {
        answers: ["justice", "juice"],
        hints: ["A judge in a high court", "A liquid made from fruit"]
    },
    // Question 3
    {
        answers: ["mat", "mut"],
        hints: ["A piece of material placed on a floor or other surface", "A mongrel dog"]
    },
    // Question 4
    {
        answers: ["nearby", "by"],
        hints: ["Close at hand; not far off", "Beside; next to"]
    },
    // Question 5
    {
        answers: ["shaved", "ached"],
        hints: ["Removed hair with a razor", "Felt a continuous dull pain"]
    },
    // Question 6
    {
        answers: ["arc", "I'd", "Arc"],
        hints: ["A large curved structure", "Contraction of 'I had'", "A curved structure, a segment of a circle"]
    },
    // Question 7
    {
        answers: ["atrophy", "it"],
        hints: ["To waste away or degenerate due to disuse", "A pronoun referring to a thing previously mentioned"]
    },
    // Question 8
    {
        answers: ["round", "around"],
        hints: ["Shaped like a circle or sphere", "On every side of (an object or place)"]
    },
    // Question 9
    {
        answers: ["stumbled", "summoned"],
        hints: ["Tripped or lost balance", "Called or sent for"]
    },
    // Question 10
    {
        answers: ["failed", "led"],
        hints: ["To lose strength or effectiveness", "Guided or conducted"]
    },
    // Question 11
    {
        answers: ["etcher", "and", "Her"],
        hints: ["An artist who etches", "A conjunction connecting words or clauses", "Possessive pronoun for a female"]
    },
    // Question 12
    {
        answers: ["fiancée", "I'll"],
        hints: ["A woman who is engaged to be married", "Contraction of 'I will'"]
    },
    // Question 13
    {
        answers: ["poverty", "scar", "his"],
        hints: ["The state of being extremely poor", "A mark left on the skin", "Possessive pronoun for a male"]
    },
    // Question 14
    {
        answers: ["battle", "dull"],
        hints: ["A fight between large armed forces", "Lacking interest or excitement"]
    },
    // Question 15
    {
        answers: ["trying", "recital"],
        hints: ["Making an effort to do something", "A performance of music or poetry"]
    },
    // Question 16
    {
        answers: ["beaming", "groom"],
        hints: ["Smiling radiantly", "A man who is about to be married"]
    },
    // Question 17
    {
        answers: ["tennis", "in"],
        hints: ["A sport played with rackets and a ball", "Located inside or within"]
    },
    // Question 18
    {
        answers: ["listless", "balm"],
        hints: ["Lacking energy or enthusiasm", "A soothing ointment or cream"]
    },
    // Question 19
    {
        answers: ["unclean", "uncle"],
        hints: ["Dirty or impure", "The brother of one's mother or father"]
    },
    // Question 20
    {
        answers: ["doomed", "do"],
        hints: ["Fated to a miserable end", "Perform an action"]
    },
    // Question 21
    {
        answers: ["mani", "cure"],
        hints: ["Short for manicure (nail treatment)", "A medical treatment or remedy"]
    },
    // Question 22
    {
        answers: ["founder", "cap"],
        hints: ["To fill with water and sink (of a boat)", "A cover or lid"]
    },
    // Question 23
    {
        answers: ["similarly", "prefer"],
        hints: ["In a similar way", "Like better; choose over others"]
    },
    // Question 24
    {
        answers: ["review", "them"],
        hints: ["A formal assessment of something with the intention of instituting change if necessary", "Used to refer to two or more people or things previously mentioned"]
    },
    // Question 25
    {
        answers: ["harlot", "hair"],
        hints: ["An old-fashioned term for a prostitute", "Filaments growing from the skin of animals and humans"]
    },
    // Question 26
    {
        answers: ["cargo", "car"],
        hints: ["Goods carried on a ship, aircraft, or vehicle", "A road vehicle, typically with four wheels, powered by an internal combustion engine or electric motor and able to carry a small number of people"]
    },
    // Question 27
    {
        answers: ["manatee", "manage"],
        hints: ["A large marine mammal, also known as a sea cow", "Be in charge of (a company, establishment, or undertaking); administer or regulate"]
    },
    // Question 28
    {
        answers: ["tenant", "ant"],
        hints: ["A person who occupies land or property rented from a landlord", "A small insect typically living in large colonies with a complex social structure"]
    },
    // Question 29
    {
        answers: ["meticulous", "cused"],
        hints: ["Showing great attention to detail; very careful and precise", "Past tense of 'cuse', as in 'accused'"]
    },
    // Question 30
    {
        answers: ["intonation", "on"],
        hints: ["The rise and fall of the voice in speaking", "Positioned at or on the surface of"]
    },
    // Question 31
    {
        answers: ["meanest", "a nest"],
        hints: ["Unkind, spiteful, or unfair (superlative)", "A structure or place made or chosen by a bird for laying eggs"]
    },
    // Question 32
    {
        answers: ["options", "on mats"],
        hints: ["Choices or alternatives", "Positioned on top of mats"]
    },
    // Question 33
    {
        answers: ["hogwash", "dish"],
        hints: ["Nonsense; rubbish", "A shallow, relatively flat container for food"]
    },
    // Question 34
    {
        answers: ["whether", "met"],
        hints: ["Expressing a doubt or choice between alternatives", "Past tense of 'meet', to come into the presence or company of someone"]
    },
    // Question 35
    {
        answers: ["debunk", "veil"],
        hints: ["Expose the falseness or hollowness of (a myth, idea, or belief)", "A piece of fine material worn by women to protect or conceal the face"]
    },
    // Question 36
    {
        answers: ["terms", "to woo"],
        hints: ["Conditions or stipulations", "To try to gain the love of someone, typically with a view to marriage"]
    },
    // Question 37
    {
        answers: ["forage", "for"],
        hints: ["To search widely for food or provisions", "Indicating the object or recipient of an action or an intention"]
    },
    // Question 38
    {
        answers: ["diverse", "dry"],
        hints: ["Showing a great deal of variety; very different", "Free from moisture or liquid"]
    },
    // Question 39
    {
        answers: ["jet", "hit"],
        hints: ["An aircraft powered by jet engines", "To strike with a blow or missile"]
    },
    // Question 40
    {
        answers: ["canapes", "can a ape"],
        hints: ["Small, savory, and decorative appetizers", "A rhetorical question about the capability of an ape"]
    },
    // Question 41
    {
        answers: ["frank", "could"],
        hints: ["Open, honest, and direct in speech or writing, especially when dealing with unpalatable matters", "Used to indicate possibility or ability"]
    },
    // Question 42
    {
        answers: ["question", "addition"],
        hints: ["A sentence worded or expressed so as to elicit information", "The process or skill of calculating the total of two or more numbers or quantities"]
    }
];

// Current state variables
let currentQuestionIndex = 0;
let timerInterval;
let startTime;
let dailyPuzzleDate; // Stores the date of the current daily puzzle
let selectedCalendarDate = null; // Stores the date selected from the calendar
let hintCounts = {}; // Stores how many hints have been used per blank for the current puzzle

// DOM Elements
const timerDisplay = document.getElementById('timer');
const checkAnswerBtn = document.getElementById('checkAnswerBtn');
const dailyResultDisplay = document.getElementById('dailyResult');
const copyResultButton = document.getElementById('copyResultButton');
const calendarButton = document.getElementById('calendarButton');
const calendarContainer = document.getElementById('calendarContainer');
const currentMonthYearDisplay = document.getElementById('currentMonthYear');
const prevMonthBtn = document.getElementById('prevMonth');
const nextMonthBtn = document.getElementById('nextMonth');
const goToTodayBtn = document.getElementById('goToTodayBtn');

// Custom Modal Elements
const customModal = document.getElementById('customModal');
const modalMessage = document.getElementById('modalMessage');
const modalResultText = document.getElementById('modalResultText');
const modalCopyButton = document.getElementById('modalCopyButton');
const modalCloseButton = document.getElementById('modalCloseButton');