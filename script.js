const lessons = [
    { id: 1, text: "f f f f j j j j d d d d k k k k f j d k f j d k" },
    { id: 2, text: "d d s s a a l l ; ; k k d s a l ; k d s a l ;" },
    { id: 3, text: "g g h h t t y y r r u u e e i i w w o o q q p p" },
    { id: 4, text: "v v m m b b n n c c , , x x . . z z / /" },
    { id: 5, text: "the quick brown fox jumps over the lazy dog" },
    { id: 6, text: "asdf jkl; asdf jkl; fjdk sl;a" },
    { id: 7, text: "ru ei wo qp ty" },
    { id: 8, text: "vm bn c, x. z/" },
    { id: 9, text: "gym gym gym fly fly fly by by by my my my" },
    { id: 10, text: "abc def ghi jkl mno pqr stu vwx yz" },
    { id: 11, text: "123 456 789 0" },
    { id: 12, text: "!@# $%^ &*() _+" },
    { id: 13, text: "Shift keys are used for capital letters" },
    { id: 14, text: "Programming is fun with touch typing" },
    { id: 15, text: "Final test to check your master typing skills" },
    { id: 16, text: "kangaroo elephant giraffe hippopotamus rhinoceros" },
    { id: 17, text: "encyclopedia vocabulary pronunciation communication" },
    { id: 18, text: "January February March April May June July August" },
    { id: 19, text: "Monday Tuesday Wednesday Thursday Friday Saturday Sunday" },
    { id: 20, text: "Red Orange Yellow Green Blue Indigo Violet" },
    { id: 21, text: "New York, Los Angeles, Chicago, Houston, Phoenix" },
    { id: 22, text: "Alice's Adventures in Wonderland by Lewis Carroll" },
    { id: 23, text: "Dr. Smith, Mrs. Jones, Mr. Brown, Ms. White" },
    { id: 24, text: "Email me at user@example.com for info." },
    { id: 25, text: "Visit http://www.google.com for searching." },
    { id: 26, text: "Call 555-0199 or 555-0100 today!" },
    { id: 27, text: "The price is $19.99, but with tax it is $21.50." },
    { id: 28, text: "10% of 500 is 50. 5 * 5 = 25." },
    { id: 29, text: "2023-10-27 is the date today." },
    { id: 30, text: "Section 5, Paragraph 3, Line 12." },
    { id: 31, text: "function hello() { return 'world'; }" },
    { id: 32, text: "if (x > 10) { console.log('Large'); }" },
    { id: 33, text: "for (let i = 0; i < 10; i++) { count++; }" },
    { id: 34, text: "const array = [1, 2, 3, 4, 5]; object = { id: 1 };" },
    { id: 35, text: "<div><span class='text'>Content</span></div>" },
    { id: 36, text: "To be or not to be, that is the question." },
    { id: 37, text: "All that glitters is not gold." },
    { id: 38, text: "A journey of a thousand miles begins with a single step." },
    { id: 39, text: "I think, therefore I am." },
    { id: 40, text: "The only thing we have to fear is fear itself." },
    { id: 41, text: "She sells seashells by the seashore." },
    { id: 42, text: "How much wood would a woodchuck chuck." },
    { id: 43, text: "Peter Piper picked a peck of pickled peppers." },
    { id: 44, text: "Fuzzy Wuzzy was a bear. Fuzzy Wuzzy had no hair." },
    { id: 45, text: "Unique New York. Unique New York. You know you need unique New York." },
    { id: 46, text: "The quick brown fox jumps over the lazy dog." },
    { id: 47, text: "Pack my box with five dozen liquor jugs." },
    { id: 48, text: "Jackdaws love my big sphinx of quartz." },
    { id: 49, text: "The five boxing wizards jump quickly." },
    { id: 50, text: "Master Challenge: 123 ABC !@# {} [] <>" }
];

// Map keys to finger IDs
const fingerMap = {
    // Left Hand
    '1': 'finger-l-pinky', 'q': 'finger-l-pinky', 'a': 'finger-l-pinky', 'z': 'finger-l-pinky', '`': 'finger-l-pinky',
    'tab': 'finger-l-pinky', 'capslock': 'finger-l-pinky', 'shift': 'finger-l-pinky',
    '2': 'finger-l-ring', 'w': 'finger-l-ring', 's': 'finger-l-ring', 'x': 'finger-l-ring',
    '3': 'finger-l-middle', 'e': 'finger-l-middle', 'd': 'finger-l-middle', 'c': 'finger-l-middle',
    '4': 'finger-l-index', 'r': 'finger-l-index', 'f': 'finger-l-index', 'v': 'finger-l-index',
    '5': 'finger-l-index', 't': 'finger-l-index', 'g': 'finger-l-index', 'b': 'finger-l-index',
    ' ': 'finger-l-thumb',

    // Right Hand
    '6': 'finger-r-index', 'y': 'finger-r-index', 'h': 'finger-r-index', 'n': 'finger-r-index',
    '7': 'finger-r-index', 'u': 'finger-r-index', 'j': 'finger-r-index', 'm': 'finger-r-index',
    '8': 'finger-r-middle', 'i': 'finger-r-middle', 'k': 'finger-r-middle', ',': 'finger-r-middle',
    '9': 'finger-r-ring', 'o': 'finger-r-ring', 'l': 'finger-r-ring', '.': 'finger-r-ring',
    '0': 'finger-r-pinky', 'p': 'finger-r-pinky', ';': 'finger-r-pinky', '/': 'finger-r-pinky',
    '-': 'finger-r-pinky', '=': 'finger-r-pinky', '[': 'finger-r-pinky', ']': 'finger-r-pinky', "'": 'finger-r-pinky',
    'backspace': 'finger-r-pinky', 'enter': 'finger-r-pinky', '\\': 'finger-r-pinky'
};

let currentLessonIndex = 0;
let currentCharIndex = 0;
let startTime = null;
let errors = 0;
let isLessonActive = false;

// DOM Elements
const lessonList = document.getElementById('lesson-list');
const textDisplay = document.getElementById('text-display');
const hiddenInput = document.getElementById('hidden-input');
const wpmDisplay = document.getElementById('wpm');
const accuracyDisplay = document.getElementById('accuracy');
const errorsDisplay = document.getElementById('errors');
const progressDisplay = document.getElementById('progress');
const currentLessonNum = document.getElementById('current-lesson-num');
const messageOverlay = document.getElementById('message-overlay');
const nextLessonBtn = document.getElementById('next-lesson-btn');
const retryBtn = document.getElementById('retry-btn');
const finalWpmDisplay = document.getElementById('final-wpm');

// Init
function init() {
    renderLessonList();
    loadLesson(0);

    hiddenInput.addEventListener('input', handleInput);
    hiddenInput.addEventListener('blur', () => hiddenInput.focus());
    document.addEventListener('click', () => hiddenInput.focus()); // Keep focus

    nextLessonBtn.addEventListener('click', () => loadLesson(currentLessonIndex + 1));
    retryBtn.addEventListener('click', () => loadLesson(currentLessonIndex));
}

function renderLessonList() {
    lessonList.innerHTML = '';
    lessons.forEach((lesson, index) => {
        const li = document.createElement('li');
        li.textContent = `Lesson ${lesson.id}`;
        li.addEventListener('click', () => loadLesson(index));
        lessonList.appendChild(li);
    });
}

function loadLesson(index) {
    if (index >= lessons.length) index = 0; // Wrap or stop
    currentLessonIndex = index;
    const lesson = lessons[index];

    // Reset State
    currentCharIndex = 0;
    startTime = null;
    errors = 0;
    isLessonActive = true;
    hiddenInput.value = '';

    // UI Updates
    currentLessonNum.textContent = lesson.id;
    updateStats();
    messageOverlay.style.display = 'none';

    // Highlight sidebar
    Array.from(lessonList.children).forEach((li, i) => {
        li.classList.toggle('active', i === index);
    });

    renderText();
    highlightNextKey();

    hiddenInput.focus();
}

function renderText() {
    const text = lessons[currentLessonIndex].text;
    textDisplay.innerHTML = '';

    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.classList.add('char');
        if (index === currentCharIndex) span.classList.add('active');
        textDisplay.appendChild(span);
    });
}

function updateStats() {
    const text = lessons[currentLessonIndex].text;
    const progress = Math.min(100, Math.round((currentCharIndex / text.length) * 100));
    progressDisplay.textContent = `${progress}%`;
    errorsDisplay.textContent = errors;

    if (startTime && currentCharIndex > 0) {
        const timeElapsed = (Date.now() - startTime) / 1000 / 60; // in minutes
        const wpm = Math.round((currentCharIndex / 5) / timeElapsed);
        wpmDisplay.textContent = wpm;

        const accuracy = Math.max(0, Math.round(((currentCharIndex - errors) / currentCharIndex) * 100));
        accuracyDisplay.textContent = `${accuracy}%`;
    } else {
        wpmDisplay.textContent = 0;
        accuracyDisplay.textContent = '100%';
    }
}

function handleInput(e) {
    if (!isLessonActive) return;

    const inputChar = e.data;
    const currentText = lessons[currentLessonIndex].text;

    if (inputChar === null && e.inputType === 'deleteContentBackward') {
        return;
    }

    if (!startTime) startTime = Date.now();

    const targetChar = currentText[currentCharIndex];
    if (inputChar === targetChar) {
        // Correct
        const chars = textDisplay.querySelectorAll('.char');
        chars[currentCharIndex].classList.remove('active');
        chars[currentCharIndex].classList.add('correct');

        currentCharIndex++;

        if (currentCharIndex < currentText.length) {
            chars[currentCharIndex].classList.add('active');
        } else {
            finishLesson();
        }
    } else {
        // Incorrect
        errors++;
        const chars = textDisplay.querySelectorAll('.char');
        chars[currentCharIndex].classList.add('incorrect');
    }

    hiddenInput.value = '';

    updateStats();
    highlightNextKey();
}

function highlightNextKey() {
    if (currentCharIndex >= lessons[currentLessonIndex].text.length) return;

    const originalChar = lessons[currentLessonIndex].text[currentCharIndex];
    const lowerChar = originalChar.toLowerCase();

    // Reset previous highlights
    document.querySelectorAll('.key.active').forEach(k => k.classList.remove('active'));
    document.querySelectorAll('.finger-dot').forEach(d => d.style.opacity = 0);

    // Identify if Shift is needed
    // Simple check: if it's uppercase letter OR specific symbols
    const isShiftNeeded = (originalChar !== lowerChar && originalChar.match(/[A-Z]/)) ||
        '~!@#$%^&*()_+{}|:"<>?'.includes(originalChar);

    // Highlight Main Key
    // Use lowerChar for lookup because data-key usually matches lower or the primary key char
    let keySelector = `.key[data-key="${lowerChar}"]`;
    if (!document.querySelector(keySelector)) {
        // Try uppercase if unique (like some layouts) or special map
        keySelector = `.key[data-key="${originalChar}"]`;
    }
    // Specific symbol mapping if needed, e.g. ! maps to 1
    const symbolMap = {
        '!': '1', '@': '2', '#': '3', '$': '4', '%': '5', '^': '6', '&': '7', '*': '8', '(': '9', ')': '0',
        '_': '-', '+': '=', '{': '[', '}': ']', '|': '\\', ':': ';', '"': "'", '<': ',', '>': '.', '?': '/'
    };
    if (symbolMap[originalChar]) {
        keySelector = `.key[data-key="${symbolMap[originalChar]}"]`;
    }
    if (originalChar === ' ') keySelector = '.key[data-key=" "]';

    const keyEl = document.querySelector(keySelector);
    if (keyEl) keyEl.classList.add('active');

    // Highlight Main Finger
    // Map symbols back to their base key for finger lookup
    const lookupChar = symbolMap[originalChar] || lowerChar;
    const fingerId = fingerMap[lookupChar];

    if (fingerId) {
        document.getElementById(fingerId).style.opacity = 1;

        // Start Shift Logic
        if (isShiftNeeded) {
            // Determine which hand is typing the main character to pick the OPTIONAL shift digit
            // If main char is Left hand -> Right Shift (finger-r-pinky)
            // If main char is Right hand -> Left Shift (finger-l-pinky)

            let shiftKeySelector = '';
            let shiftFingerId = '';

            if (fingerId.includes('finger-l')) {
                // Left hand typing -> Right Shift
                shiftKeySelector = '.key.shift-r';
                shiftFingerId = 'finger-r-pinky';
            } else {
                // Right hand typing -> Left Shift
                shiftKeySelector = '.key.shift-l';
                shiftFingerId = 'finger-l-pinky';
            }

            const shiftKeyEl = document.querySelector(shiftKeySelector);
            if (shiftKeyEl) shiftKeyEl.classList.add('active');

            const shiftFingerEl = document.getElementById(shiftFingerId);
            if (shiftFingerEl) shiftFingerEl.style.opacity = 1;
        }
    }
}

function finishLesson() {
    isLessonActive = false;
    messageOverlay.style.display = 'flex';
    finalWpmDisplay.textContent = wpmDisplay.textContent;
}

init();
