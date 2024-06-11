document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        {
            question: "¿Cuál es el principal ingrediente del guacamole?",
            options: ["Tomate", "Aguacate", "Cebolla"],
            correctAnswer: 1
        },
        {
            question: "¿Qué tipo de pasta es en forma de tubo largo?",
            options: ["Macarrones", "Espaguetis", "Fusilli"],
            correctAnswer: 1
        },
        {
            question: "¿Qué fruta se utiliza para hacer vino?",
            options: ["Manzana", "Uva", "Pera"],
            correctAnswer: 1
        },
        {
            question: "¿Qué especia se obtiene de la corteza de los árboles?",
            options: ["Canela", "Clavo", "Nuez Moscada"],
            correctAnswer: 0
        },
        {
            question: "¿Cuál es el ingrediente principal del hummus?",
            options: ["Lentejas", "Garbanzos", "Frijoles"],
            correctAnswer: 1
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;
    const quizContainer = document.getElementById('quiz');
    const nextButton = document.getElementById('nextButton');

    function showQuestion(questionIndex) {
        const questionData = questions[questionIndex];
        quizContainer.innerHTML = `
            <div class="question text-xl font-semibold mb-4">${questionData.question}</div>
            <ul class="options list-none p-0">
                ${questionData.options.map((option, index) => `
                    <li class="mb-2">
                        <label class="block p-2 border rounded cursor-pointer hover:bg-gray-100">
                            <input type="radio" name="option" value="${index}" class="mr-2">
                            ${option}
                        </label>
                    </li>
                `).join('')}
            </ul>
        `;
    }

    function handleNextButtonClick() {
        const selectedOption = document.querySelector('input[name="option"]:checked');
        if (!selectedOption) {
            alert('Por favor, selecciona una opción.');
            return;
        }

        const answerIndex = parseInt(selectedOption.value);
        if (answerIndex === questions[currentQuestionIndex].correctAnswer) {
            score++;
        }

        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion(currentQuestionIndex);
        } else {
            quizContainer.innerHTML = `<p class="text-xl font-semibold">¡Has completado el formulario!</p><p class="text-lg">Tu puntuación es: ${score} de ${questions.length}.</p>`;
            nextButton.disabled = true;
            nextButton.classList.add('bg-gray-400', 'cursor-not-allowed');
        }
    }

    nextButton.addEventListener('click', handleNextButtonClick);

    // Mostrar la primera pregunta al cargar la página
    showQuestion(currentQuestionIndex);
});
