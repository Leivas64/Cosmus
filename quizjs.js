const questions = [
    {
        question: "Em que ano a Banda Cosmus foi criada?",
        answers: ["2020", "2022", "2023", "2025"],
        correctAnswer: 2
    },
    {
        question: "Qual a música mais famosa da banda?",
        answers: ["505", "990", "Dance Beneath the Red Light", "Colour Red"],
        correctAnswer: 2
    },
    {
        question: "Qual o gênero musical da banda?",
        answers: [
            "Indie",
            "Pop Rock",
            "Rock",
            "Blues"
        ],
        correctAnswer: 0
    },
    {
        question: "Em que cidade a banda se originou?",
        answers: [
            "São Paulo",
            "Campinas",
            "Belém",
            "Rio de Janeiro"
        ],
        correctAnswer: 1
    },
    {
        question: "Qual o show mais memorável que a banda já fez?",
        answers: [
            "Estreia de Dance",
            "Estreia da banda",
            "Reviva Vol. 2",
            "Show Coorporativo"
        ],
        correctAnswer: 2
    },
    {
    question: "Quem são os integrantes da banda?",
        answers: [
            "JP, Diego, Boka e Tiago",
            "Boka, Tubarão, Dré e JP",
            "JP, Boka, Tubão e Mazara",
            "JP, Boka, Dré e Tubão"
        ],
        correctAnswer: 2
    },
    {
    question: "Qual foi a primeira música lançada?",
        answers: [
            "990",
            "Advertisement",
            "Dance Beneath the Red Light",
            "Rudder"
        ],
        correctAnswer: 2
    },
    {
    question: "Qual o nome do Fã Clube da cosmus?",
        answers: [
            "CentralCosmus",
            "ClubCosmus",
            "CosmeticosFC",
            "OficialCosmusFC"
        ],
        correctAnswer: 1
    },
    {
    question: "A banda já tocou em algum festival?",
        answers: [
            "Sim, no Encontro das Tribos",
            "Sim, na Festa do Figo",
            "Sim, no Festival Reviva",
            "Não"
        ],
        correctAnswer: 2
    },
    {
    question: "A banda tem alguma tradição antes de se apresentar?",
        answers: [
            "Sim, Shot de whisky",
            "Sim, Aquecimento vocal",
            "Sim, Shot de vodca",
            "Não"
        ],
        correctAnswer: 0
    }
];

// Carrega perguntas na página
function loadQuestions() {
    const questionContainer = document.getElementById('question-container');
    body.classList.add('depois');
    questions.forEach((q, index) => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${q.question}</h3>`;
        q.answers.forEach((answer, i) => {
            div.innerHTML += `<label>
                <input type="radio" name="question${index}" value="${i}"> ${answer}
            </label><br>`;
        });
        questionContainer.appendChild(div);
    });
}

// Avalia as respostas fornecidas pelo usuário
function submitAnswers() {
    let score = 0;
    let desconto = 0;
    questions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer && parseInt(selectedAnswer.value) === q.correctAnswer) {
            score++;
        }
       
    });
        if (score>=7) {
        desconto = 1;

        if (desconto === 1) {
            //Pop-up de "Você ganhou o desconto! Aqui o código promocional". E fecha a página
        }
        else {
            //Pop-up de "Você não conseguiu o desconto, mais sorte na proxima vez". E fecha a página
        }
    }
}
