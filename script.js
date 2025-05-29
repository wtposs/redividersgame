// A simple seedable random number generator function
// From: https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript
// This function ensures that for a given date, the same puzzle is always presented.
// IMPORTANT: Replaced with a more robust version to prevent negative indices.
Math.seedrandom = Math.seedrandom || function(seed) {
    let _seed = seed % 2147483647; // Ensure seed is within a reasonable integer range

    // Simple LCG (Linear Congruential Generator)
    return function() {
        _seed = (_seed * 9301 + 49297) % 233280;
        return _seed / 233280;
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

// --- Utility Functions ---

// Helper to get today's date in YYYY-MM-DD format
function getTodayDateString() {
    const today = new Date();
    return today.toISOString().split('T')[0];
}

// Helper to format a date as YYYY-MM-DD
function formatDate(date) {
    const d = new Date(date); // Ensure it's a date object
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Function to start or reset the timer
function startTimer() {
    clearInterval(timerInterval); // Clear any existing timer
    startTime = Date.now(); // Record the start time
    timerInterval = setInterval(updateTimer, 1000); // Update every second
}

// Function to update the timer display
function updateTimer() {
    const elapsedTime = Math.floor((Date.now() - startTime) / 1000); // Elapsed time in seconds
    const minutes = Math.floor(elapsedTime / 60);
    const seconds = elapsedTime % 60;
    timerDisplay.textContent = `Elapsed time: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Function to stop the timer
function stopTimer() {
    clearInterval(timerInterval);
}

// Function to call when all questions have been exhausted or the game ends
function displayFinalResult() {
    // You can customize this message for when all questions have been attempted
    showCustomModal('All daily puzzles have been displayed! Check the calendar for more.');
    checkAnswerBtn.disabled = true; // Disable the check answer button
    dailyResultDisplay.textContent = 'All puzzles shown!';
    dailyResultDisplay.style.color = '#333';
}

// --- Puzzle Logic ---

// Function to show a specific question
function showQuestion(index) {
    const questions = document.querySelectorAll('.question');
    console.log(`[DEBUG] showQuestion called with index: ${index}`); // Debug log
    console.log(`[DEBUG] Total questions found in HTML: ${questions.length}`); // Debug log

    questions.forEach((q, i) => {
        q.classList.remove('active'); // Hide all questions
        // Clear previous input values and styling when switching questions
        q.querySelectorAll('input[type="text"]').forEach(input => {
            input.value = '';
            input.classList.remove('correct', 'incorrect');
            input.readOnly = false; // Make inputs editable again
        });
        // Reset hint displays
        q.querySelectorAll('.hint-display').forEach(span => span.textContent = '');
        q.querySelectorAll('.hint-btn').forEach(btn => btn.disabled = false); // Re-enable hint buttons
    });

    if (index >= 0 && index < questions.length) { // Ensure index is valid
        console.log(`[DEBUG] Displaying question with ID: ${questions[index].id}`); // Debug log
        questions[index].classList.add('active'); // Show the active question
        currentQuestionIndex = index; // Update global index
        checkAnswerBtn.disabled = false; // Enable check answer button for new question
        dailyResultDisplay.textContent = ''; // Clear result display
        copyResultButton.style.display = 'none'; // Hide copy button
        goToTodayBtn.style.display = 'none'; // Hide go to today button

        // Re-initialize hint counts for the new question
        const questionNum = index + 1;
        hintCounts = {}; // Reset for the new question
        // Hint state will be loaded from local storage by loadPuzzleState if applicable
    } else {
        console.log(`[DEBUG] No question found at index ${index}. Calling displayFinalResult.`); // Debug log
        // All questions answered, display final result or end game state
        displayFinalResult(); // Call the newly defined function
    }
}

// Function to check answers for the current question
function checkAnswers() {
    const currentQuestionEl = document.querySelector('.question.active');
    if (!currentQuestionEl) return;

    const questionNum = parseInt(currentQuestionEl.id.replace('question', ''));
    const questionData = allQuestionsAndAnswers[questionNum - 1]; // Adjust for 0-based array index

    if (!questionData) {
        console.error("No question data found for current question.");
        return;
    }

    let allCorrect = true;
    const inputFields = currentQuestionEl.querySelectorAll('input[type="text"]');
    const userAnswers = [];
    const correctInputs = []; // To save which inputs were correct
    const incorrectInputs = []; // To save which inputs were incorrect

    inputFields.forEach((input, index) => {
        const userAnswer = input.value.trim(); // Keep original case for display
        const correctAnswer = questionData.answers[index]; // Keep original case for comparison/display

        userAnswers.push(userAnswer); // Store user answer for result text

        if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
            input.classList.remove('incorrect');
            input.classList.add('correct');
            input.readOnly = true; // Make correct inputs read-only
            correctInputs[index] = true;
            incorrectInputs[index] = false;
        } else {
            input.classList.remove('correct');
            input.classList.add('incorrect');
            allCorrect = false;
            correctInputs[index] = false;
            incorrectInputs[index] = true;
        }
    });

    // Save current state regardless of correctness
    savePuzzleState(questionNum, userAnswers, correctInputs, incorrectInputs);

    if (allCorrect) {
        dailyResultDisplay.textContent = 'All answers are correct! 🎉';
        dailyResultDisplay.style.color = '#28a745'; // Green for correct
        stopTimer(); // Stop the timer when the current question is answered correctly
        checkAnswerBtn.disabled = true; // Disable the button after correct submission

        // Store that this puzzle was solved for the current date
        const solvedPuzzles = JSON.parse(localStorage.getItem('solvedPuzzles')) || {};
        solvedPuzzles[formatDate(dailyPuzzleDate)] = true; // Mark as solved
        localStorage.setItem('solvedPuzzles', JSON.stringify(solvedPuzzles));

        // Generate the result string for copying
        const resultString = generateResultString(questionNum, userAnswers);
        modalResultText.value = resultString; // Set modal textarea value
        modalResultText.style.display = 'block'; // Show the textarea
        modalCopyButton.style.display = 'inline-block'; // Show copy button

        showCustomModal('Congratulations! You solved the puzzle!', true);
    } else {
        dailyResultDisplay.textContent = 'Some answers are incorrect. Please try again.';
        dailyResultDisplay.style.color = '#dc3545'; // Red for incorrect
        modalResultText.style.display = 'none'; // Hide textarea
        modalCopyButton.style.display = 'none'; // Hide copy button
    }
}

// Function to handle hint button clicks
function handleHint(event) {
    const button = event.target;
    const questionNum = parseInt(button.dataset.questionNum);
    const blankIndex = parseInt(button.dataset.blankIndex);

    const hintDisplaySpan = document.querySelector(`.hint-display[data-question-num="${questionNum}"][data-blank-index="${blankIndex}"]`);
    const questionData = allQuestionsAndAnswers[questionNum - 1];

    if (questionData && hintDisplaySpan) {
        const hint = questionData.hints[blankIndex];
        if (hint) {
            hintDisplaySpan.textContent = `Hint: ${hint}`;
            button.disabled = true; // Disable the hint button after use

            // Store hint usage for this specific blank of this question for the current puzzle date
            const currentPuzzleKey = formatDate(dailyPuzzleDate);
            const puzzleProgress = JSON.parse(localStorage.getItem('puzzleProgress')) || {};
            puzzleProgress[currentPuzzleKey] = puzzleProgress[currentPuzzleKey] || {};
            puzzleProgress[currentPuzzleKey][questionNum] = puzzleProgress[currentPuzzleKey][questionNum] || {};
            puzzleProgress[currentPuzzleKey][questionNum].hintsUsed = puzzleProgress[currentPuzzleKey][questionNum].hintsUsed || {};
            puzzleProgress[currentPuzzleKey][questionNum].hintsUsed[blankIndex] = true; // Mark hint as used
            localStorage.setItem('puzzleProgress', JSON.stringify(puzzleProgress));

            // Also update the in-memory hintCounts for the current session to correctly generate result string
            hintCounts[questionNum] = hintCounts[questionNum] || {};
            hintCounts[questionNum][blankIndex] = true; // Mark as used
        }
    }
}

// Function to generate the result string for copying
function generateResultString(questionNumber, userAnswers) {
    const today = new Date(dailyPuzzleDate);
    const dayOfMonth = today.getDate();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[today.getMonth()];
    const year = today.getFullYear();

    const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    const minutes = Math.floor(elapsedTime / 60);
    const seconds = elapsedTime % 60;
    const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    // Get total blanks for the current question
    const totalBlanks = allQuestionsAndAnswers[questionNumber - 1].answers.length;

    // Determine how many hints were used for this specific question from the current hintCounts
    const hintsUsedForQuestion = Object.keys(hintCounts[questionNumber] || {}).length;
    const hintsEmoji = hintsUsedForQuestion > 0 ? `(${hintsUsedForQuestion} hint${hintsUsedForQuestion > 1 ? 's' : ''})` : '';

    return `Redividers Daily Word Challenge\n${month} ${dayOfMonth}, ${year}\nPuzzle #${questionNumber}\nTime: ${formattedTime} ${hintsEmoji}\nAnswers: ${userAnswers.join(', ')}`;
}

// Function to copy the result to clipboard
function copyResultToClipboard() {
    const resultTextarea = document.getElementById('modalResultText');
    resultTextarea.select(); // Select the text
    resultTextarea.setSelectionRange(0, 99999); // For mobile devices

    try {
        document.execCommand('copy');
        showCustomModal('Result copied to clipboard!');
    } catch (err) {
        showCustomModal('Failed to copy result.');
        console.error('Failed to copy: ', err);
    }
}

// --- Local Storage Management ---

// Function to save puzzle state (answers and hints) to localStorage
function savePuzzleState(questionNumber, answers, correctInputs, incorrectInputs) {
    const currentPuzzleKey = formatDate(dailyPuzzleDate);
    const puzzleProgress = JSON.parse(localStorage.getItem('puzzleProgress')) || {};

    puzzleProgress[currentPuzzleKey] = puzzleProgress[currentPuzzleKey] || {};
    puzzleProgress[currentPuzzleKey][questionNumber] = {
        answers: answers,
        correctInputs: correctInputs,
        incorrectInputs: incorrectInputs,
        hintsUsed: hintCounts[questionNumber] // Store the current hint state
    };
    localStorage.setItem('puzzleProgress', JSON.stringify(puzzleProgress));
}

// Function to load puzzle state (answers and hints) from localStorage
function loadPuzzleState(dateString, questionNumber) {
    const puzzleProgress = JSON.parse(localStorage.getItem('puzzleProgress')) || {};
    const savedState = puzzleProgress[dateString];

    const currentQuestionEl = document.getElementById(`question${questionNumber}`);
    if (!currentQuestionEl) return;

    // Reset current question's inputs and hints
    currentQuestionEl.querySelectorAll('input[type="text"]').forEach(input => {
        input.value = '';
        input.classList.remove('correct', 'incorrect');
        input.readOnly = false;
    });
    currentQuestionEl.querySelectorAll('.hint-display').forEach(span => span.textContent = '');
    currentQuestionEl.querySelectorAll('.hint-btn').forEach(btn => btn.disabled = false);

    // Reset hintCounts for the current session before loading
    hintCounts = {};
    hintCounts[questionNumber] = {};

    if (savedState && savedState[questionNumber]) {
        const questionData = savedState[questionNumber];

        // Load answers and apply styling
        const inputFields = currentQuestionEl.querySelectorAll('input[type="text"]');
        inputFields.forEach((input, index) => {
            if (questionData.answers && questionData.answers[index] !== undefined) { // Check for undefined to allow empty strings
                input.value = questionData.answers[index];
            }
            if (questionData.correctInputs && questionData.correctInputs[index]) {
                input.classList.add('correct');
                input.readOnly = true;
            } else if (questionData.incorrectInputs && questionData.incorrectInputs[index]) {
                input.classList.add('incorrect');
            }
        });

        // Load hints
        const hintDisplaySpans = currentQuestionEl.querySelectorAll('.hint-display');
        const hintButtons = currentQuestionEl.querySelectorAll('.hint-btn');
        if (questionData.hintsUsed) {
            Object.keys(questionData.hintsUsed).forEach(blankIndexStr => {
                const blankIndex = parseInt(blankIndexStr);
                if (questionData.hintsUsed[blankIndex]) {
                    if (hintDisplaySpans[blankIndex]) {
                        hintDisplaySpans[blankIndex].textContent = `Hint: ${allQuestionsAndAnswers[questionNumber - 1].hints[blankIndex]}`;
                    }
                    if (hintButtons[blankIndex]) {
                        hintButtons[blankIndex].disabled = true;
                    }
                    // Update in-memory hintCounts for current session
                    hintCounts[questionNumber][blankIndex] = true;
                }
            });
        }

        // Check if the puzzle was solved for this date
        const solvedPuzzles = JSON.parse(localStorage.getItem('solvedPuzzles')) || {};
        if (solvedPuzzles[dateString]) {
            checkAnswerBtn.disabled = true; // Puzzle is solved, disable button
            dailyResultDisplay.textContent = 'Puzzle solved!';
            dailyResultDisplay.style.color = '#28a745';
        } else {
            checkAnswerBtn.disabled = false;
            dailyResultDisplay.textContent = ''; // Clear result message if not solved
        }
    } else {
        // If no saved state, ensure the check answer button is enabled
        checkAnswerBtn.disabled = false;
        dailyResultDisplay.textContent = '';
    }
}

// --- Calendar Functionality ---

function renderCalendar(date) {
    const year = date.getFullYear();
    const month = date.getMonth(); // 0-indexed

    currentMonthYearDisplay.textContent = `${date.toLocaleString('default', { month: 'long' })} ${year}`;

    const calendarGrid = calendarContainer.querySelector('.calendar-grid');
    console.log(`[DEBUG] renderCalendar: calendarGrid found:`, calendarGrid); // Debug log
    console.log(`[DEBUG] renderCalendar: Initial children count: ${calendarGrid ? calendarGrid.children.length : 'N/A'}`); // Debug log


    // Clear previous day cells, but keep day names (first 7 children)
    while (calendarGrid.children.length > 7) {
        console.log(`[DEBUG] Removing child: ${calendarGrid.lastChild.textContent}`); // Debug log
        calendarGrid.removeChild(calendarGrid.lastChild);
    }
    console.log(`[DEBUG] After clearing, children count: ${calendarGrid ? calendarGrid.children.length : 'N/A'}`); // Debug log


    // Get the first day of the month and last day of the month
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const numDays = lastDayOfMonth.getDate();
    const startDay = firstDayOfMonth.getDay(); // 0 for Sunday, 1 for Monday, etc.

    const today = new Date();
    const todayStr = formatDate(today);
    const solvedPuzzles = JSON.parse(localStorage.getItem('solvedPuzzles')) || {};
    const puzzleProgress = JSON.parse(localStorage.getItem('puzzleProgress')) || {};

    // Add empty cells for the days before the 1st
    for (let i = 0; i < startDay; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.classList.add('calendar-day-cell', 'empty');
        calendarGrid.appendChild(emptyCell);
        console.log(`[DEBUG] Added empty cell for pre-1st: ${i}`); // Debug log
    }

    // Add day cells
    for (let day = 1; day <= numDays; day++) {
        const dayCell = document.createElement('div');
        dayCell.classList.add('calendar-day-cell');
        dayCell.textContent = day;

        const cellDate = new Date(year, month, day);
        const cellDateStr = formatDate(cellDate);

        // Add 'today' class
        if (cellDateStr === todayStr) {
            dayCell.classList.add('today');
        }

        // Add 'past' class for dates strictly before today
        if (cellDate < today && cellDateStr !== todayStr) { // Exclude today from 'past'
            dayCell.classList.add('past');
        }

        // Add 'solved' or 'unsolved' class based on localStorage
        if (solvedPuzzles[cellDateStr]) {
            dayCell.classList.add('solved');
        } else if (puzzleProgress[cellDateStr] && Object.keys(puzzleProgress[cellDateStr]).length > 0) {
            // Check if any progress was made for this date, for any question
            let hasProgress = false;
            for (const qNum in puzzleProgress[cellDateStr]) {
                if (Object.keys(puzzleProgress[cellDateStr][qNum].answers || {}).length > 0 || Object.keys(puzzleProgress[cellDateStr][qNum].hintsUsed || {}).length > 0) {
                    hasProgress = true;
                    break;
                }
            }
            if (hasProgress) {
                dayCell.classList.add('unsolved'); // Mark as unsolved if there's progress but not solved
            }
        }

        // Add 'selected-date' class if this date is currently selected
        if (selectedCalendarDate && formatDate(selectedCalendarDate) === cellDateStr) {
            dayCell.classList.add('selected-date');
        }

        dayCell.addEventListener('click', () => {
            // Only allow selection of today's date, or any past/future date not marked as 'past' (i.e. click enabled)
            // The 'past' class sets pointer-events: none, so this check is mostly for clarity.
            if (!dayCell.classList.contains('past')) {
                // Remove 'selected-date' from previously selected cell
                const currentlySelected = calendarGrid.querySelector('.selected-date');
                if (currentlySelected) {
                    currentlySelected.classList.remove('selected-date');
                }
                dayCell.classList.add('selected-date');
                selectedCalendarDate = cellDate;

                // Close calendar and load the selected puzzle
                calendarContainer.style.display = 'none';
                loadPuzzleForDate(selectedCalendarDate);

                // Show/hide 'Go to Today's Puzzle' button based on selection
                if (formatDate(selectedCalendarDate) === todayStr) {
                    goToTodayBtn.style.display = 'none';
                } else {
                    goToTodayBtn.style.display = 'inline-block';
                }
            }
        });
        calendarGrid.appendChild(dayCell);
        console.log(`[DEBUG] Added day cell: ${day}`); // Debug log
    }
    console.log(`[DEBUG] After adding days, children count: ${calendarGrid ? calendarGrid.children.length : 'N/A'}`); // Debug log
}

// Function to load a puzzle based on a given date
function loadPuzzleForDate(date) {
    console.log(`[DEBUG] loadPuzzleForDate called for date: ${date}`); // Debug log
    // Generate a consistent "seed" for the date
    // Use the date components as the seed for Math.seedrandom
    const dateSeed = date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate();
    const seededRand = Math.seedrandom(dateSeed); // Get a seeded random function

    // Calculate the question index based on the seeded random number
    // Ensure the index is within bounds of allQuestionsAndAnswers length.
    const questionIndex = Math.floor(seededRand() * allQuestionsAndAnswers.length);
    console.log(`[DEBUG] allQuestionsAndAnswers.length: ${allQuestionsAndAnswers.length}`); // Debug log
    console.log(`[DEBUG] Calculated questionIndex: ${questionIndex}`); // Debug log


    // Set the daily puzzle date to the selected date (normalized to start of day)
    dailyPuzzleDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    // Show the specific question based on the calculated index
    showQuestion(questionIndex);
    startTimer(); // Restart timer for the new puzzle

    // Update checkAnswerBtn text and visibility of goToTodayBtn
    const today = new Date();
    const isToday = formatDate(dailyPuzzleDate) === formatDate(today);

    if (isToday) {
        checkAnswerBtn.style.display = 'inline-block';
        goToTodayBtn.style.display = 'none';
    } else {
        // If it's a past or future date, hide check answer, show 'Go to Today's Puzzle'
        checkAnswerBtn.style.display = 'none';
        goToTodayBtn.style.display = 'inline-block';
    }

    // Load saved answers and hints if available for this date and question
    loadPuzzleState(formatDate(dailyPuzzleDate), questionIndex + 1); // questionIndex + 1 because puzzle state uses 1-based question numbers
}

// --- Custom Modal Functions ---

function showCustomModal(message, showResultText = false) {
    modalMessage.textContent = message;
    if (showResultText) {
        modalResultText.style.display = 'block';
        modalCopyButton.style.display = 'inline-block';
        // Ensure the current puzzle's solved message is copied
        const currentQuestionEl = document.querySelector('.question.active');
        if (currentQuestionEl) {
            const questionNum = parseInt(currentQuestionEl.id.replace('question', ''));
            const inputFields = currentQuestionEl.querySelectorAll('input[type="text"]');
            const userAnswers = Array.from(inputFields).map(input => input.value.trim());
            modalResultText.value = generateResultString(questionNum, userAnswers);
        }
    } else {
        modalResultText.style.display = 'none';
        modalCopyButton.style.display = 'none';
    }
    customModal.style.display = 'flex';
}

function hideCustomModal() {
    customModal.style.display = 'none';
}

// --- Event Listeners and Initialization ---

document.addEventListener('DOMContentLoaded', () => {
    // Set the initial daily puzzle date to today
    dailyPuzzleDate = new Date();
    selectedCalendarDate = new Date(); // Select today on load

    // Initialize currentCalendarDate here, within the DOMContentLoaded scope
    // This ensures it's defined before any event listeners use it.
    let currentCalendarDate = new Date();

    loadPuzzleForDate(dailyPuzzleDate); // Load today's puzzle initially

    // Event listener for Check Answer button
    checkAnswerBtn.addEventListener('click', checkAnswers);

    // Event listeners for Hint buttons (delegation)
    document.querySelectorAll('.question').forEach(questionDiv => {
        questionDiv.addEventListener('click', (event) => {
            if (event.target.classList.contains('hint-btn')) {
                handleHint(event);
            }
        });
    });

    // Event listeners for Calendar buttons
    calendarButton.addEventListener('click', () => {
        calendarContainer.style.display = 'flex';
        renderCalendar(currentCalendarDate); // Render the calendar for the current month
    });

    prevMonthBtn.addEventListener('click', () => {
        currentCalendarDate.setMonth(currentCalendarDate.getMonth() - 1);
        renderCalendar(currentCalendarDate);
    });

    nextMonthBtn.addEventListener('click', () => {
        currentCalendarDate.setMonth(currentCalendarDate.getMonth() + 1);
        renderCalendar(currentCalendarDate);
    });

    goToTodayBtn.addEventListener('click', () => {
        dailyPuzzleDate = new Date(); // Reset dailyPuzzleDate to today
        selectedCalendarDate = new Date(); // Reset selectedCalendarDate to today
        loadPuzzleForDate(dailyPuzzleDate);
        calendarContainer.style.display = 'none'; // Close calendar if open
    });

    // Event listeners for Custom Modal buttons
    modalCopyButton.addEventListener('click', copyResultToClipboard);
    modalCloseButton.addEventListener('click', hideCustomModal);
});
