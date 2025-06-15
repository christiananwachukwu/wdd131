// Menu toggle
document.querySelector(".menu-toggle").addEventListener("click", () => {
    document.querySelector(".nav-links").classList.toggle("active");
});

// Visit count
let visitCount = localStorage.getItem("visitCount") || 0;
visitCount = parseInt(visitCount) + 1;
localStorage.setItem("visitCount", visitCount);
console.log(`Visit count: ${visitCount}`);

// User object (example)
const user = { name: "Kiddo", badges: [] };
const tips = ["Wash hands for 20 seconds", "Brush teeth twice a day", "Eat and drink healthy"];
tips.forEach(tip => {
    console.log(`Tip: ${tip}`);
});

// Last modified
const lastModified = document.getElementById("lastModified");
if (lastModified) {
    lastModified.textContent = "Last Modified: " + document.lastModified;
}

// Tip levels and corresponding badges
const tipLevels = [
    { level: 'Handwashing Guide', badge: 'Handwashing Hero', image: 'images/hero-handwashing-badge1.webp' },
    { level: 'Healthy Eating Habits', badge: 'Healthy Eater', image: 'images/hero-healthy-tips-badge1.webp', subBadge: 'Hydration Champion', subImage: 'images/hero-drinking-healthy-badge.webp' },
    { level: 'Brushing Teeth', badge: 'Tooth Brushing Star', image: 'images/hero-brushing-badge2.webp' }
];

// Quiz badges
const quizBadges = [
    { condition: score => score >= 75, badge: 'Germ Fighter', image: 'images/hero-handwashing-badge1.webp' },
    { condition: score => score === 100, badge: 'Fitness Champ', image: 'images/hero-healthy-tips-badge3.webp' }
];

// Health tips with media
const healthTips = [
    {
        title: 'Handwashing Guide',
        content: 'Wash hands for 20 seconds with soap!',
        images: ['images/handwashing-1.webp', 'images/handwashing-2.webp', 'images/handwashing-3.webp'],
        video: 'images/handwashing.mp4',
        poster: 'images/video-thumbnill.webp'
    },
    {
        title: 'Healthy Eating Habits',
        content: 'Eat colorful fruits and vegetables, and drink 6-8 glasses of water daily!',
        images: ['images/eating-healthy.webp', 'images/eating-healthy2.webp', 'images/drinking-healthy.webp', 'images/drinking-healthy2.webp'],
        videos: ['images/eating-healthy.mp4', 'images/drinking-healthy.mp4'],
        posters: ['images/video-thumbnill-eat.webp', 'images/video-thumbnill-drink.webp']
    },
    {
        title: 'Brushing Teeth',
        content: 'Brush twice a day for 2 minutes!',
        images: ['images/girl-brushing.webp', 'images/boy-brushing.webp'],
        video: 'images/kids-brushing.mp4',
        poster: 'images/video-thumbnill-brush.webp'
    }
];

// Enhance tip cards
document.addEventListener("DOMContentLoaded", () => {
    const pageTitle = document.querySelector('title')?.textContent || '';
    console.log(`Page title: ${pageTitle}`);
    if (pageTitle.includes('Learning Tips')) {
        const tipCards = document.querySelectorAll('.tip-card');
        console.log(`tipCards defined: ${tipCards instanceof NodeList}`);
        if (tipCards.length === 0) {
            console.warn('No tip cards found on this page');
            return;
        }
        console.log(`Found ${tipCards.length} tip cards`);
        tipCards.forEach(card => {
            const tipTitle = card.querySelector('h2')?.textContent.trim();
            if (!tipTitle) {
                console.error('No h2 element found in tip card:', card);
                return;
            }
            console.log(`Tip card found: ${tipTitle}`);
            card.addEventListener('click', () => {
                console.log(`Tip card clicked: ${tipTitle}`);
                let viewedTips = JSON.parse(localStorage.getItem('viewedTips')) || [];
                if (!viewedTips.includes(tipTitle)) {
                    viewedTips.push(tipTitle);
                    localStorage.setItem('viewedTips', JSON.stringify(viewedTips));
                    card.classList.add('earned');
                    const badges = card.querySelectorAll('.tip-badge');
                    console.log(`Found ${badges.length} badges in card: ${tipTitle}`);
                    badges.forEach(badge => {
                        badge.style.display = 'flex';
                    });
                }
                console.log(`Viewed Tips Updated: ${viewedTips}`);
            });
        });
    } else {
        console.log('Not on Learning Tips page, skipping tip card logic');
    }
    const resultDiv = document.getElementById('result');
    if (resultDiv) {
        resultDiv.innerHTML = '';
    }
});

// Quiz functionality
const quizData = {
    questions: [
        { question: "How long do you wash your hands?", answer: "20" },
        { question: "What should you eat for healthy body?", answer: "fruits and vegetables" },
        { question: "How many times a day should you brush your teeth?", answer: "2" },
        { question: "Which is not a good healthy habit?", answer: "eating junk food" }
    ],
    badges: ["Handwashing Hero", "Healthy Eater"]
};

function calculateScore(answers) {
    let score = 0;
    quizData.questions.forEach((q, index) => {
        const userAnswer = answers[index]?.toLowerCase().trim() || '';
        if (userAnswer === q.answer.toLowerCase()) {
            score++;
        }
    });
    return score * 25;
}

document.getElementById('quizForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Quiz submitted');
    const answers = [
        document.querySelector('input[name="q1"]:checked')?.value || '',
        document.querySelector('input[name="q2"]:checked')?.value || '',
        document.querySelector('input[name="q3"]:checked')?.value || '',
        document.querySelector('input[name="q4"]:checked')?.value || ''
    ];
    if (answers.every(answer => answer === '')) {
        alert('Please answer all questions before submitting!');
        return;
    }
    console.log('Answers:', answers);
    const quizResult = calculateScore(answers);
    console.log(`Quiz Result: ${quizResult}`);
    const resultDiv = document.getElementById('result');
    if (resultDiv) {
        resultDiv.innerHTML = `You got ${quizResult} out of 100 points!`;
        resultDiv.innerHTML += '<br><a href="hero.html">Click here to view your badges!</a>';
    } else {
        console.log('Result div not found');
    }
    localStorage.setItem('quizScore', quizResult);
    localStorage.setItem('quizAnswers', JSON.stringify(answers));
});

// Display badges
function displayBadges() {
    const badgesContainer = document.getElementById('badges');
    if (!badgesContainer) {
        console.log('Badges container not found');
        return;
    }
    badgesContainer.innerHTML = '';

    const viewedTips = JSON.parse(localStorage.getItem('viewedTips')) || [];
    const quizScore = parseInt(localStorage.getItem('quizScore')) || 0;
    const isHeroPage = document.querySelector('title')?.textContent.includes('Hygiene Hero');
    const hasInteraction = viewedTips.length > 0 || localStorage.getItem('quizScore') !== null;

    if (isHeroPage && !hasInteraction) {
        // Show all tip and quiz badges
        console.log('No interaction found — displaying all badges by default');

        // Show all tip level badges
        tipLevels.forEach(level => {
            badgesContainer.innerHTML += `
                <div class="badge">
                    <img src="${level.image}" alt="${level.badge} Badge" loading="lazy">
                    <p>${level.badge}</p>
                </div>
            `;
            if (level.subBadge) {
                badgesContainer.innerHTML += `
                    <div class="badge">
                        <img src="${level.subImage}" alt="${level.subBadge} Badge" loading="lazy">
                        <p>${level.subBadge}</p>
                    </div>
                `;
            }
        });

        // Show all quiz badges
        quizBadges.forEach(qb => {
            badgesContainer.innerHTML += `
                <div class="badge">
                    <img src="${qb.image}" alt="${qb.badge} Badge" loading="lazy">
                    <p>${qb.badge}</p>
                </div>
            `;
        });

    } else {
        // Show only earned badges
        tipLevels.forEach(level => {
            if (viewedTips.includes(level.level)) {
                badgesContainer.innerHTML += `
                    <div class="badge">
                        <img src="${level.image}" alt="${level.badge} Badge" loading="lazy">
                        <p>${level.badge}</p>
                    </div>
                `;
                if (level.subBadge) {
                    badgesContainer.innerHTML += `
                        <div class="badge">
                            <img src="${level.subImage}" alt="${level.subBadge} Badge" loading="lazy">
                            <p>${level.subBadge}</p>
                        </div>
                    `;
                }
            }
        });

        quizBadges.forEach(qb => {
            if (qb.condition(quizScore)) {
                badgesContainer.innerHTML += `
                    <div class="badge">
                        <img src="${qb.image}" alt="${qb.badge} Badge" loading="lazy">
                        <p>${qb.badge}</p>
                    </div>
                `;
            }
        });

        if (badgesContainer.innerHTML === '') {
            badgesContainer.innerHTML = '<p>No badges earned yet. Explore the tips and quiz!</p>';
        }
    }
}
document.getElementById('checkProgress')?.addEventListener('click', displayBadges);
document.addEventListener('DOMContentLoaded', displayBadges);