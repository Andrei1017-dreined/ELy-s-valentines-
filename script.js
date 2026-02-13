// Get elements
const surpriseBtn = document.getElementById('surpriseBtn');
const surprise = document.getElementById('surprise');
const mainHeart = document.getElementById('mainHeart');

// Button click event
surpriseBtn.addEventListener('click', function() {
    surprise.classList.toggle('show');
    
    if (surprise.classList.contains('show')) {
        surpriseBtn.textContent = 'Hide surprise 💕';
    } else {
        surpriseBtn.textContent = 'Click for a surprise! 🎁';
    }
});

// Heart click event
mainHeart.addEventListener('click', function() {
    // Create floating hearts effect
    for (let i = 0; i < 10; i++) {
        createFloatingHeart();
    }
});

function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.fontSize = Math.random() * 30 + 20 + 'px';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.top = '100%';
    heart.style.transition = 'all 2s ease-out';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '1000';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.style.top = '-100px';
        heart.style.opacity = '0';
        heart.style.transform = 'translateY(-100px) rotate(' + (Math.random() * 360) + 'deg)';
    }, 10);
    
    setTimeout(() => {
        if (heart.parentNode) {
            document.body.removeChild(heart);
        }
    }, 2000);
}

// Add a welcome message in console
console.log('%c💕 Happy Valentine\'s Day, Ely! 💕', 'color: #ff1744; font-size: 20px; font-weight: bold;');
