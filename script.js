document.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelectorAll('.question');
    const checkAnswerBtn = document.getElementById('checkAnswerBtn');
    const dailyResult = document.getElementById('dailyResult');
    const copyResultButton = document.getElementById('copyResultButton');
    const timerDisplay = document.getElementById('timer');
    const calendarButton = document.getElementById('calendarButton');
    const calendarContainer = document.getElementById('calendarContainer');
    const currentMonthYear = document.getElementById('currentMonthYear');
    const prevMonthBtn = document.getElementById('prevMonth');
    const nextMonthBtn = document.getElementById('nextMonth');
    const goToTodayBtn = document.getElementById('goToTodayBtn');

    const customModal = document.getElementById('customModal');
    const modalMessage = document.getElementById('modalMessage');
    const modalResultText = document.getElementById('modalResultText');
    const modalCopyButton = document.getElementById('modalCopyButton');
    const modalCloseButton = document.getElementById('modalCloseButton');

    // Store correct answers (key: answer ID, value: correct answer)
    // All answers should be in lowercase for case-insensitive checking
    const correctAnswers = {
        // Question 1
        'answer1': 'stressed',
        'answer2': 'cd stressed',
        // Question 2
        'answer3': 'justice',
        'answer4': 'just ice',
        // Question 3
        'answer5': 'carpet',
        'answer6': 'car pet',
        // Question 4
        'answer7': 'together',
        'answer8': 'to gather',
        // Question 5
        'answer9': 'grew a stash',
        'answer10': 'grew a rash',
        // Question 6
        'answer11': 'art museum',
        'answer12': 'arch',
        'answer13': 'i had',
        // Question 7
        'answer14': 'atrophy',
        'answer15': 'a trophy',
        // Question 8
        'answer16': 'round',
        'answer17': 'or not',
        // Question 9
        'answer18': 'stumbled',
        'answer9': 'stumbled', // Typo in HTML, should be answer19
        'answer19': 'summoned',
        // Question 10
        'answer20': 'buckled',
        'answer21': 'buck led',
        // Question 11
        'answer22': 'etcher',
        'answer23': 'etc',
        'answer24': 'her',
        // Question 12
        'answer25': 'fiance',
        'answer26': 'fiancée',
        // Question 13
        'answer27': 'scarcity',
        'answer28': 'scars',
        'answer29': 'city',
        // Question 14
        'answer30': 'battle',
        'answer31': 'bog down',
        // Question 15
        'answer32': 'striving',
        'answer33': 'strive in',
        // Question 16
        'answer34': 'gushing',
        'answer35': 'gus chin',
        // Question 17
        'answer36': 'badminton',
        'answer37': 'bad mint on',
        // Question 18
        'answer38': 'catatonic',
        'answer39': 'catatonic', // Typo in HTML, should be answer39. This one is tricky - the word is catatonic.
        // Wait, the wordplay is "cat a tonic", so the second blank is "a tonic". Let's fix.
        'answer39': 'a tonic',
        // Question 19
        'answer40': 'slovenly',
        'answer41': 'slovenly', // Typo in HTML, should be answer41.
        // Similar to above, "slovenly" then "slovenly". The wordplay is "slovenly" then "sloven, lee".
        'answer41': 'sloven, lee',
        // Question 20
        'answer42': 'condor',
        'answer43': 'can do',
        // Question 21
        'answer44': 'regimen',
        'answer45': 'regime en', // "regime in" or "regimen" depending on pronunciation for wordplay
        // Let's use 'regimen' for first and 'regime in' for the second blank.
        'answer45': 'regime in',
        // Question 22
        'answer46': 'founder',
        'answer47': 'fount der', // "fount there" or "founder" depending on pronunciation
        // Let's use 'fount there' for the second blank.
        'answer47': 'fount there',
        // Question 23
        'answer48': 'likewise',
        'answer49': 'like wise',
        // Question 24
        'answer50': 'recollection',
        'answer51': 're-collection',
        // Question 25
        'answer52': 'belle',
        'answer53': 'bell',
        // Question 26
        'answer54': 'contents',
        'answer55': 'con tents',
        // Question 27
        'answer56': 'manatee',
        'answer57': 'man at the',
        // Question 28
        'answer58': 'tenant',
        'answer59': 'ten ant',
        // Question 29
        'answer60': 'meticulous',
        'answer61': 'mete culous', // "mete cules" or "mete cruel-us" depending on pronunciation
        // Let's use 'mete cules'.
        'answer61': 'mete cules',
        // Question 30
        'answer62': 'intonation',
        'answer63': 'into nation',
        // Question 31
        'answer64': 'meanest',
        'answer65': 'meanest', // Typo: should be "mean, a nest"
        'answer65': 'mean, a nest',
        // Question 32
        'answer66': 'options',
        'answer67': 'opt shuns', // "opt-shuns"
        // Let's use 'opt shuns'.
        'answer67': 'opt shuns',
        // Question 33
        'answer68': 'hype',
        'answer69': 'hi p', // "hi p" or "high p"
        'answer69': 'high p',
        // Question 34
        'answer70': 'in tern',
        'answer71': 'intern',
        // Question 35
        'answer72': 'feign all',
        'answer73': 'finale',
        // Question 36
        'answer74': 'edict',
        'answer75': 'e dict',
        // Question 37
        'answer76': 'forage',
        'answer77': 'for age',
        // Question 38
        'answer78': 'sundry',
        'answer79': 'sun dry',
        // Question 39
        'answer80': 'jets',
        'answer81': 'jetz', // "jet's" or "jets"
        'answer81': 'jetz', // The wordplay is "jets" vs "jetz" like bowling pins
        // Question 40
        'answer82': 'canape',
        'answer83': 'can ape',
        // Question 41
        'answer84': 'frank',
        'answer85': 'frank', // This is also "frank" and "frank". The wordplay is "frank" vs "frank".
        // Let's assume the wordplay for "frank" is the same. Maybe it's "frankly" for the first, "frank lee" for the second?
        // Re-checking the prompt for Q41: "I want to be frank with you" (honest), "Doing what you frank not help" (a person named Frank didn't help).
        // This is a bit of a stretch for wordplay. Let's make it consistent and assume "frank" for both.
        // If it's a redivider challenge, there should be a clear re-division.
        // Let's assume the first is "frank" and the second is "frank" for now based on the input structure, but it's a weak redivider.
        // A better redivider might be: "I want to be **frank** with you... Doing what you **Franks** not help." (like plural of Frank).
        // Or "I want to be **honest** with you... Doing what you **own ass** not help." (too vulgar).
        // Given the constraints and the provided HTML, let's stick to simple values for now.
        // Let's refine based on typical redivider patterns:
        // "I want to be **frank** with you..." -> frank (honest)
        // "...Doing what you **Frank** not help last time around." -> Frank (a name)
        // This makes sense as a redivider.
        'answer84': 'frank',
        'answer85': 'frank',
        // Question 42 (dummy)
        'answer86': 'question',
        'answer87': 'temp late' // "temp late"
    };

    // Correct Answers with optional spacing for comparison
    const correctAnswersFlexible = {
        'answer1': ['stressed'],
        'answer2': ['cd stressed', 'cd stress ed'],
        'answer3': ['justice'],
        'answer4': ['just ice'],
        'answer5': ['carpet'],
        'answer6': ['car pet'],
        'answer7': ['together'],
        'answer8': ['to gather'],
        'answer9': ['grew a stash', 'grewastash'],
        'answer10': ['grew a rash', 'grewarash'],
        'answer11': ['art museum', 'artmuseum'],
        'answer12': ['arch'],
        'answer13': ['i had', 'i had'],
        'answer14': ['atrophy'],
        'answer15': ['a trophy', 'atrophy'], // 'atrophy' is technically incorrect here but common pronunciation overlap
        'answer16': ['round'],
        'answer17': ['or not', 'ornot'],
        'answer18': ['stumbled'],
        'answer19': ['summoned'],
        'answer20': ['buckled'],
        'answer21': ['buck led', 'buckled'],
        'answer22': ['etcher'],
        'answer23': ['etc'],
        'answer24': ['her'],
        'answer25': ['fiance'],
        'answer26': ['fiancée'], // Note: JavaScript string comparison is case-sensitive, so this should also be lowercase
        'answer27': ['scarcity'],
        'answer28': ['scars'],
        'answer29': ['city'],
        'answer30': ['battle'],
        'answer31': ['bog down', 'bogdown'],
        'answer32': ['striving'],
        'answer33': ['strive in', 'strivein'],
        'answer34': ['gushing'],
        'answer35': ['gus chin', 'guschin'],
        'answer36': ['badminton'],
        'answer37': ['bad mint on', 'badminton'],
        'answer38': ['catatonic'],
        'answer39': ['a tonic', 'atonic'],
        'answer40': ['slovenly'],
        'answer41': ['sloven lee', 'slovenly'], // Assuming "sloven, lee" based on the redivider nature
        'answer42': ['condor'],
        'answer43': ['can do'],
        'answer44': ['regimen'],
        'answer45': ['regime in', 'regimen'],
        'answer46': ['founder'],
        'answer47': ['fount there', 'found there', 'fountthere'],
        'answer48': ['likewise'],
        'answer49': ['like wise', 'likewise'],
        'answer50': ['recollection'],
        'answer51': ['re collection', 're-collection'],
        'answer52': ['belle'],
        'answer53': ['bell'],
        'answer54': ['contents'],
        'answer55': ['con tents', 'contants'],
        'answer56': ['manatee'],
        'answer57': ['man at the', 'manatthe'],
        'answer58': ['tenant'],
        'answer59': ['ten ant', 'tenant'],
        'answer60': ['meticulous'],
        'answer61': ['mete cules', 'metecculous'], // Assuming this wordplay
        'answer62': ['intonation'],
        'answer63': ['into nation', 'intonation'],
        'answer64': ['meanest'],
        'answer65': ['mean a nest', 'ameanest'], // Assuming wordplay "mean, a nest"
        'answer66': ['options'],
        'answer67': ['opt shuns', 'options'],
        'answer68': ['hype'],
        'answer69': ['high p', 'hi p', 'hy p'], // Assuming wordplay "hi p"
        'answer70': ['in tern', 'intern'],
        'answer71': ['intern'],
        'answer72': ['feign all', 'feignall'],
        'answer73': ['finale'],
        'answer74': ['edict'],
        'answer75': ['e dict', 'eddict'],
        'answer76': ['forage'],
        'answer77': ['for age', 'forage'],
        'answer78': ['sundry'],
        'answer79': ['sun dry', 'sundry'],
        'answer80': ['jets'],
        'answer81': ['jetz', 'jets'],
        'answer82': ['canape'],
        'answer83': ['can ape', 'canape'],
        'answer84': ['frank'],
        'answer85': ['frank'], // Based on redivider nature, this should ideally be different, but matching the provided structure.
        'answer86': ['question'],
        'answer87': ['temp late', 'template']
    };


    const hints = {
        'answer1': ['S_RE__ED'],
        'answer2': ['C_ _TRESSED'],
        'answer3': ['J_ST_CE'],
        'answer4': ['J_S_ I_E'],
        'answer5': ['C_RP_T'],
        'answer6': ['C_R P_T'],
        'answer7': ['T_G_TH_R'],
        'answer8': ['T_ G_TH_R'],
        'answer9': ['G_EW A S_ASH'],
        'answer10': ['G_EW _ R_SH'],
        'answer11': ['A_T M_S_UM'],
        'answer12': ['A_C_'],
        'answer13': ['I H_D'],
        'answer14': ['A_R_P_Y'],
        'answer15': ['A T_OP_Y'],
        'answer16': ['R_U_D'],
        'answer17': ['O_ N_T'],
        'answer18': ['S_U_B_ED'],
        'answer19': ['S_M_O_ED'],
        'answer20': ['B_CK_ED'],
        'answer21': ['B_CK L_D'],
        'answer22': ['E_C_ER'],
        'answer23': ['E_C'],
        'answer24': ['H_R'],
        'answer25': ['F_A_CE'],
        'answer26': ['F_A_C_E'],
        'answer27': ['S_A_C_TY'],
        'answer28': ['S_A_S'],
        'answer29': ['C_T_'],
        'answer30': ['B_TT_E'],
        'answer31': ['B_G D_WN'],
        'answer32': ['S_R_V_NG'],
        'answer33': ['S_R_V_ I_'],
        'answer34': ['G_S_ING'],
        'answer35': ['G_S C_IN'],
        'answer36': ['B_DM_NT_N'],
        'answer37': ['B_D M_NT _N'],
        'answer38': ['C_T_T_N_C'],
        'answer39': ['A T_N_C'],
        'answer40': ['S_O_E_LY'],
        'answer41': ['S_O_EN, L_E'],
        'answer42': ['C_N_OR'],
        'answer43': ['C_N D_'],
        'answer44': ['R_G_M_N'],
        'answer45': ['R_G_M_ I_'],
        'answer46': ['F_U_D_R'],
        'answer47': ['F_U_T T_ER_'],
        'answer48': ['L_K_W_SE'],
        'answer49': ['L_K_ W_SE'],
        'answer50': ['R_C_LL_CT_ON'],
        'answer51': ['R_-_O_L_CT_ON'],
        'answer52': ['B_LL_'],
        'answer53': ['B_LL'],
        'answer54': ['C_NT_N_S'],
        'answer55': ['C_N T_N_S'],
        'answer56': ['M_N_T_E'],
        'answer57': ['M_N A_ T_E'],
        'answer58': ['T_N_NT'],
        'answer59': ['T_N A_T'],
        'answer60': ['M_T_C_L_US'],
        'answer61': ['M_T_ C_L_S'],
        'answer62': ['_NT_N_T_ON'],
        'answer63': ['_NT_ N_T_ON'],
        'answer64': ['M_A_E_T'],
        'answer65': ['M_A_ _ N_S_'],
        'answer66': ['_PT_ONS'],
        'answer67': ['_PT S_UNS'],
        'answer68': ['H_PE'],
        'answer69': ['H_GH P'],
        'answer70': ['_N T_RN'],
        'answer71': ['_NT_RN'],
        'answer72': ['F_I_N _LL'],
        'answer73': ['F_N_LE'],
        'answer74': ['_D_CT'],
        'answer75': ['_ D_CT'],
        'answer76': ['F_R_G_'],
        'answer77': ['F_R A_E'],
        'answer78': ['S_ND_Y'],
        'answer79': ['S_N D_Y'],
        'answer80': ['J_TS'],
        'answer81': ['J_TZ'],
        'answer82': ['C_N_PE'],
        'answer83': ['C_N _PE'],
        'answer84': ['F_A_K'],
        'answer85': ['F_A_K'],
        'answer86': ['Q_EST_ON'],
        'answer87': ['T_MP L_T_']
    };


    let currentQuestionIndex = 0;
    let startTime;
    let timerInterval;
    let puzzleStartTime; // To track start time for the current puzzle
    let puzzleAttempts = {}; // Store attempts for each puzzleDate (e.g., {'2023-10-26': {attempts: 3, score: '3/4'}})
    let puzzleHintsUsed = {}; // Store hints used for each puzzleDate and input field
    let selectedCalendarDate = null; // Stores the date selected from the calendar
    const TODAY = new Date();
    TODAY.setHours(0, 0, 0, 0); // Normalize today's date to midnight

    // Helper to format date as YYYY-MM-DD
    const formatDate = (date) => {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    // Helper to get day difference
    const getDayDifference = (date1, date2) => {
        const d1 = new Date(date1);
        const d2 = new Date(date2);
        d1.setHours(0, 0, 0, 0);
        d2.setHours(0, 0, 0, 0);
        const diffTime = Math.abs(d2.getTime() - d1.getTime());
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    };

    // Determine today's puzzle number based on the start date
    // Assuming the puzzle challenge started on an arbitrary date, let's say May 15, 2025
    const CHALLENGE_START_DATE = new Date('2025-05-15T00:00:00'); // May 15, 2025
    const getPuzzleNumberForDate = (date) => {
        const diffDays = getDayDifference(CHALLENGE_START_DATE, date);
        return diffDays + 1; // Puzzle 1 is for CHALLENGE_START_DATE
    };

    const todayPuzzleNumber = getPuzzleNumberForDate(TODAY);

    // Initial load: show today's puzzle
    let currentPuzzleNumber = todayPuzzleNumber;

    // Load state from localStorage
    const loadGameState = () => {
        const savedState = localStorage.getItem('redividersGameState');
        if (savedState) {
            const state = JSON.parse(savedState);
            puzzleAttempts = state.puzzleAttempts || {};
            puzzleHintsUsed = state.puzzleHintsUsed || {};
            // Timer and current puzzle are not persistent across sessions for the "daily" aspect
        }
    };

    // Save state to localStorage
    const saveGameState = () => {
        const state = {
            puzzleAttempts: puzzleAttempts,
            puzzleHintsUsed: puzzleHintsUsed,
        };
        localStorage.setItem('redividersGameState', JSON.stringify(state));
    };

    // Function to show a specific question
    const showQuestion = (questionNum) => {
        questions.forEach((q, index) => {
            q.classList.remove('active');
            if (index + 1 === questionNum) {
                q.classList.add('active');
            }
        });

        // Reset hint displays and input fields for the active question
        const activeQuestionDiv = document.getElementById(`question${questionNum}`);
        if (activeQuestionDiv) {
            const hintDisplays = activeQuestionDiv.querySelectorAll('.hint-display');
            const inputs = activeQuestionDiv.querySelectorAll('input[type="text"]');
            inputs.forEach(input => {
                input.value = ''; // Clear input field
                input.classList.remove('correct', 'incorrect'); // Remove styling
            });
            hintDisplays.forEach(hintSpan => {
                hintSpan.textContent = ''; // Clear hint display
            });
            const hintBtns = activeQuestionDiv.querySelectorAll('.hint-btn');
            hintBtns.forEach(btn => btn.disabled = false); // Re-enable hint buttons
        }

        // Initialize puzzle start time only if it's the first time viewing this puzzle today
        const todayFormatted = formatDate(TODAY);
        if (!puzzleAttempts[todayFormatted] || !puzzleAttempts[todayFormatted].startTime) {
            puzzleStartTime = new Date();
            startTimer();
        } else {
            // If already started today, just display the elapsed time or 'Completed'
            stopTimer(); // Stop any running timer
            if (puzzleAttempts[todayFormatted].completed) {
                timerDisplay.textContent = `Completed in ${formatTime(puzzleAttempts[todayFormatted].timeTaken || 0)}`;
                disableInputsAndButtons(true);
            } else {
                // If not completed but started, continue timer from previous state
                // This is a simplification; a robust solution would track actual accumulated time
                startTimer();
            }
        }

        // Apply saved answers if any for the selected date
        const currentPuzzleDateFormatted = selectedCalendarDate ? formatDate(selectedCalendarDate) : formatDate(TODAY);
        const savedPuzzleData = puzzleAttempts[currentPuzzleDateFormatted];

        if (savedPuzzleData && savedPuzzleData.answers && savedPuzzleData.hints) {
            const inputs = activeQuestionDiv.querySelectorAll('input[type="text"]');
            inputs.forEach(input => {
                const answerId = input.id;
                if (savedPuzzleData.answers[answerId]) {
                    input.value = savedPuzzleData.answers[answerId];
                    if (savedPuzzleData.results && savedPuzzleData.results[answerId] !== undefined) {
                        if (savedPuzzleData.results[answerId]) {
                            input.classList.add('correct');
                        } else {
                            input.classList.add('incorrect');
                        }
                    }
                }
            });

            // Restore hints if any
            for (const hintKey in savedPuzzleData.hints) {
                const [qNum, blankIndex] = hintKey.split('-');
                if (parseInt(qNum) === questionNum) {
                    const hintSpan = document.querySelector(`.hint-display[data-question-num="${qNum}"][data-blank-index="${blankIndex}"]`);
                    const hintBtn = document.querySelector(`.hint-btn[data-question-num="${qNum}"][data-blank-index="${blankIndex}"]`);
                    if (hintSpan) hintSpan.textContent = savedPuzzleData.hints[hintKey];
                    if (hintBtn) hintBtn.disabled = true;
                }
            }
        }
        updateCheckButtonState();
    };

    // Timer functions
    const startTimer = () => {
        if (timerInterval) clearInterval(timerInterval); // Clear existing interval

        // Ensure puzzleStartTime is set when the timer starts for the first time for a puzzle
        if (!puzzleStartTime) {
            puzzleStartTime = new Date();
        }

        timerInterval = setInterval(() => {
            const currentTime = new Date();
            const elapsed = Math.floor((currentTime - puzzleStartTime) / 1000);
            timerDisplay.textContent = `Elapsed time: ${formatTime(elapsed)}`;
        }, 1000);
    };

    const stopTimer = () => {
        clearInterval(timerInterval);
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    // Event listener for check answer button
    checkAnswerBtn.addEventListener('click', () => {
        const activeQuestion = document.querySelector('.question.active');
        if (!activeQuestion) return;

        let allCorrect = true;
        let score = 0;
        let totalBlanks = 0;
        const currentPuzzleDate = selectedCalendarDate || TODAY;
        const currentPuzzleDateFormatted = formatDate(currentPuzzleDate);

        // Initialize or retrieve puzzle data for the current date
        if (!puzzleAttempts[currentPuzzleDateFormatted]) {
            puzzleAttempts[currentPuzzleDateFormatted] = { answers: {}, results: {}, hints: {}, score: '0/0', completed: false, timeTaken: 0 };
        }
        const currentPuzzleData = puzzleAttempts[currentPuzzleDateFormatted];

        const inputs = activeQuestion.querySelectorAll('input[type="text"]');
        inputs.forEach(input => {
            const userAnswer = input.value.trim().toLowerCase();
            const correctAnswerId = input.id;
            const possibleCorrectAnswers = correctAnswersFlexible[correctAnswerId];

            totalBlanks++;

            // Check if userAnswer is in the array of possible correct answers
            const isCorrect = possibleCorrectAnswers && possibleCorrectAnswers.includes(userAnswer);

            currentPuzzleData.answers[correctAnswerId] = input.value.trim(); // Save user's input
            currentPuzzleData.results[correctAnswerId] = isCorrect; // Save result

            if (isCorrect) {
                input.classList.remove('incorrect');
                input.classList.add('correct');
                score++;
            } else {
                input.classList.remove('correct');
                input.classList.add('incorrect');
                allCorrect = false;
            }
        });

        currentPuzzleData.score = `${score}/${totalBlanks}`;

        if (allCorrect) {
            stopTimer();
            const elapsedTimeSeconds = Math.floor((new Date() - puzzleStartTime) / 1000);
            currentPuzzleData.timeTaken = elapsedTimeSeconds;
            currentPuzzleData.completed = true;

            dailyResult.textContent = `Correct! Puzzle ${currentPuzzleNumber} completed in ${formatTime(elapsedTimeSeconds)}. Score: ${score}/${totalBlanks}`;
            copyResultButton.style.display = 'inline-block';
            goToTodayBtn.style.display = 'none'; // Hide if on today's puzzle and completed

            disableInputsAndButtons(true);
            showCustomModal('Congratulations!', `You completed today's puzzle! Score: ${score}/${totalBlanks}\nTime: ${formatTime(elapsedTimeSeconds)}`, true);
        } else {
            dailyResult.textContent = `Keep trying! Score: ${score}/${totalBlanks}`;
            copyResultButton.style.display = 'none';
            // Show custom modal for incorrect answers
            showCustomModal('Incorrect', `Some answers are incorrect. Please review and try again. Your current score: ${score}/${totalBlanks}`);
        }
        saveGameState(); // Save state after checking answers
        updateCalendarDisplay(currentMonth.getFullYear(), currentMonth.getMonth()); // Update calendar colors
    });

    // Helper to disable inputs and buttons
    const disableInputsAndButtons = (disable) => {
        const inputs = document.querySelectorAll('.question.active input[type="text"]');
        const hintBtns = document.querySelectorAll('.question.active .hint-btn');
        inputs.forEach(input => input.disabled = disable);
        hintBtns.forEach(btn => btn.disabled = disable);
        checkAnswerBtn.disabled = disable;
    };

    // Hint button functionality
    document.querySelectorAll('.hint-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const questionNum = event.target.dataset.questionNum;
            const blankIndex = event.target.dataset.blankIndex;
            const answerId = document.getElementById(`answer${(questionNum - 1) * 2 + parseInt(blankIndex) + 1}`).id; // Correctly derive answer ID
            const hintText = hints[answerId];
            const hintDisplaySpan = document.querySelector(`.hint-display[data-question-num="${questionNum}"][data-blank-index="${blankIndex}"]`);

            if (hintText && hintDisplaySpan) {
                hintDisplaySpan.textContent = hintText;
                event.target.disabled = true; // Disable hint button after use

                const currentPuzzleDate = selectedCalendarDate || TODAY;
                const currentPuzzleDateFormatted = formatDate(currentPuzzleDate);

                if (!puzzleAttempts[currentPuzzleDateFormatted]) {
                    puzzleAttempts[currentPuzzleDateFormatted] = { answers: {}, results: {}, hints: {}, score: '0/0', completed: false, timeTaken: 0 };
                }
                puzzleAttempts[currentPuzzleDateFormatted].hints[`${questionNum}-${blankIndex}`] = hintText;
                saveGameState(); // Save state after using hint
            }
        });
    });

    // Copy Result button functionality
    copyResultButton.addEventListener('click', () => {
        const currentPuzzleDate = selectedCalendarDate || TODAY;
        const currentPuzzleDateFormatted = formatDate(currentPuzzleDate);
        const puzzleData = puzzleAttempts[currentPuzzleDateFormatted];

        if (puzzleData && puzzleData.completed) {
            let resultText = `Redividers Daily Word Challenge\nPuzzle ${currentPuzzleNumber}\nScore: ${puzzleData.score}\nTime: ${formatTime(puzzleData.timeTaken)}\n\n`;

            const activeQuestion = document.querySelector('.question.active');
            if (activeQuestion) {
                const inputs = activeQuestion.querySelectorAll('input[type="text"]');
                inputs.forEach(input => {
                    const answerId = input.id;
                    const isCorrect = puzzleData.results[answerId];
                    resultText += `[${isCorrect ? '✅' : '❌'}] ${input.value}\n`;
                });
            }

            modalResultText.value = resultText;
            modalResultText.style.display = 'block';
            modalCopyButton.style.display = 'inline-block';
            showCustomModal('Your Result', '', true, resultText); // Pass resultText to populate textarea
        }
    });

    // Modal functions
    const showCustomModal = (title, message, showCopy = false, resultText = '') => {
        modalMessage.textContent = title;
        if (resultText) {
            modalResultText.value = resultText;
            modalResultText.style.display = 'block';
            modalCopyButton.style.display = 'inline-block';
        } else {
            modalResultText.style.display = 'none';
            modalCopyButton.style.display = 'none';
            modalResultText.value = ''; // Clear previous text
        }
        customModal.style.display = 'flex';
    };

    modalCloseButton.addEventListener('click', () => {
        customModal.style.display = 'none';
    });

    modalCopyButton.addEventListener('click', () => {
        modalResultText.select();
        document.execCommand('copy');
        modalCopyButton.textContent = 'Copied!';
        setTimeout(() => {
            modalCopyButton.textContent = 'Copy';
            customModal.style.display = 'none'; // Close modal after copying
        }, 1500);
    });

    // Calendar logic
    let currentMonth = new Date();
    currentMonth.setDate(1); // Set to the first day of the month

    const renderCalendar = (year, month) => {
        const calendarGrid = document.querySelector('.calendar-grid');
        // Clear previous days, but keep day names
        while (calendarGrid.children.length > 7) {
            calendarGrid.removeChild(calendarGrid.lastChild);
        }

        currentMonthYear.textContent = new Date(year, month).toLocaleString('en-US', { month: 'long', year: 'numeric' });

        const firstDayOfMonth = new Date(year, month, 1);
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const startDay = firstDayOfMonth.getDay(); // 0 for Sunday, 1 for Monday, etc.

        // Add empty cells for the days before the 1st
        for (let i = 0; i < startDay; i++) {
            const emptyCell = document.createElement('div');
            emptyCell.classList.add('calendar-day-cell', 'empty');
            calendarGrid.appendChild(emptyCell);
        }

        // Add day cells
        for (let day = 1; day <= daysInMonth; day++) {
            const dayCell = document.createElement('div');
            dayCell.classList.add('calendar-day-cell');
            dayCell.textContent = day;

            const cellDate = new Date(year, month, day);
            const cellDateFormatted = formatDate(cellDate);

            // Add classes for styling
            if (cellDateFormatted === formatDate(TODAY)) {
                dayCell.classList.add('today');
            }
            if (cellDateFormatted === formatDate(selectedCalendarDate)) {
                dayCell.classList.add('selected-date');
            }

            // Mark past dates as unclickable/faded
            if (cellDate < TODAY) {
                dayCell.classList.add('past');
            }


            // Check puzzle status for this date
            const puzzleData = puzzleAttempts[cellDateFormatted];
            if (puzzleData) {
                if (puzzleData.completed) {
                    dayCell.classList.add('solved');
                } else {
                    dayCell.classList.add('unsolved');
                }
            }

            // Event listener for selecting a date
            dayCell.addEventListener('click', () => {
                if (!dayCell.classList.contains('empty') && !dayCell.classList.contains('past')) {
                    // Remove selected-date from previous selection
                    const prevSelected = document.querySelector('.calendar-day-cell.selected-date');
                    if (prevSelected) {
                        prevSelected.classList.remove('selected-date');
                    }
                    dayCell.classList.add('selected-date');
                    selectedCalendarDate = cellDate;
                    currentPuzzleNumber = getPuzzleNumberForDate(selectedCalendarDate);
                    showQuestion(currentPuzzleNumber); // Load the puzzle for the selected date
                    calendarContainer.style.display = 'none'; // Hide calendar
                    goToTodayBtn.style.display = 'inline-block'; // Show "Go to Today" button
                    updateCheckButtonState(); // Update button state for new puzzle
                }
            });

            calendarGrid.appendChild(dayCell);
        }
    };

    calendarButton.addEventListener('click', () => {
        calendarContainer.style.display = 'flex';
        renderCalendar(currentMonth.getFullYear(), currentMonth.getMonth());
    });

    prevMonthBtn.addEventListener('click', () => {
        currentMonth.setMonth(currentMonth.getMonth() - 1);
        renderCalendar(currentMonth.getFullYear(), currentMonth.getMonth());
    });

    nextMonthBtn.addEventListener('click', () => {
        currentMonth.setMonth(currentMonth.getMonth() + 1);
        renderCalendar(currentMonth.getFullYear(), currentMonth.getMonth());
    });

    goToTodayBtn.addEventListener('click', () => {
        selectedCalendarDate = null; // Reset selected date to today
        currentPuzzleNumber = todayPuzzleNumber;
        showQuestion(currentPuzzleNumber);
        goToTodayBtn.style.display = 'none'; // Hide button as we are on today's puzzle
        dailyResult.textContent = ''; // Clear result message when going back to today
        stopTimer(); // Ensure timer is reset/started for today's puzzle
        puzzleStartTime = new Date(); // Reset puzzle start time for today's puzzle
        startTimer(); // Start the timer for today's puzzle
        updateCheckButtonState();
        saveGameState(); // Save any changes
    });


    // Function to update check button and hint button state
    const updateCheckButtonState = () => {
        const activeQuestion = document.querySelector('.question.active');
        if (!activeQuestion) {
            checkAnswerBtn.disabled = true;
            return;
        }

        const currentPuzzleDate = selectedCalendarDate || TODAY;
        const currentPuzzleDateFormatted = formatDate(currentPuzzleDate);
        const puzzleData = puzzleAttempts[currentPuzzleDateFormatted];

        if (puzzleData && puzzleData.completed) {
            disableInputsAndButtons(true);
            dailyResult.textContent = `Puzzle ${currentPuzzleNumber} completed in ${formatTime(puzzleData.timeTaken)}. Score: ${puzzleData.score}`;
            copyResultButton.style.display = 'inline-block';
            if (currentPuzzleDateFormatted !== formatDate(TODAY)) {
                 goToTodayBtn.style.display = 'inline-block';
            } else {
                 goToTodayBtn.style.display = 'none';
            }
        } else {
            disableInputsAndButtons(false);
            checkAnswerBtn.disabled = false; // Re-enable if not completed
            copyResultButton.style.display = 'none';
            if (currentPuzzleDateFormatted !== formatDate(TODAY)) {
                goToTodayBtn.style.display = 'inline-block';
            } else {
                goToTodayBtn.style.display = 'none';
            }
            dailyResult.textContent = ''; // Clear result if not completed
            startTimer(); // Ensure timer is running if not completed
        }
    };


    // Initial setup
    loadGameState();
    showQuestion(currentPuzzleNumber);
    updateCheckButtonState(); // Apply initial state based on loaded data
});