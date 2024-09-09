function toggleBot() {
    const bot = document.getElementById('ai-bot');
    const botBody = document.getElementById('bot-body');
    const toggleIcon = document.getElementById('toggle-icon');

    if (bot.classList.contains('collapsed')) {
        bot.classList.remove('collapsed');
        toggleIcon.textContent = '-';
    } else {
        bot.classList.add('collapsed');
        toggleIcon.textContent = '+';
    }
}

function showAnswer(questionId) {
    const answers = {
        q1: 'You can make an appointment by calling our office or using our online booking system.',
        q2: 'Please bring your ID, insurance information, and any relevant medical records.',
        q3: 'Yes, you can reschedule your appointment by contacting our office.',
        q4: 'To cancel your appointment, please call our office at least 24 hours in advance.',
        q5: 'If you are running late, please inform us as soon as possible so we can adjust your appointment time.',
        q6: 'We prefer scheduled appointments, but we do accept walk-ins if time permits.',
        q7: 'Yes, there is a fee for missed appointments if not canceled within the required notice period.',
        q8: 'You can check your appointment history through our online portal or by calling our office.',
        q9: 'To change the details of your appointment, please contact our office directly.',
        q10: 'Our office hours are Monday to Friday, 9 AM to 5 PM.'
    };

    document.getElementById('answer-text').innerText = answers[questionId];
}
