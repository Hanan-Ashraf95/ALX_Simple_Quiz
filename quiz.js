// Step 1: Define the function named checkAnswer.
function checkAnswer() {
    
    // Step 2: Identify the correct answer.
    const correctAnswer = "4";

    // Step 3: Retrieve the user's selected answer.
    const selectedRadio = document.querySelector('input[name="quiz"]:checked');
    const userAnswer = selectedRadio ? selectedRadio.value : null;

    // Step 4: Compare the answers and provide feedback.
    const feedbackElement = document.getElementById('feedback');
    
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
    }
}

// Step 5: Add an event listener to the submit button.
const submitButton = document.getElementById('submit-answer');
submitButton.addEventListener('click', checkAnswer);
