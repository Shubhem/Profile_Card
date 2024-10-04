let count = 0;
        let heartInterval;
        const heartIcon = document.getElementById('heartIcon');
        const counter = document.getElementById('counter');

        heartIcon.addEventListener('mouseenter', () => {
            heartInterval = setInterval(() => {
                createHeart();
                increaseCounter();
            }, 100);
        });

        heartIcon.addEventListener('mouseleave', () => {
            clearInterval(heartInterval);
        });

        function createHeart() {
            const heart = document.createElement('img');
            heart.src = 'heart.png'; // Path to your heart image
            heart.classList.add('heart');

            // Generate random values for the translate3d function
            const x = `${Math.random() * 200 - 225}px`; // Random X between -100px and 100px
            const y = `${Math.random() * -200 - 50}px`; // Random Y between -50px and -250px
            const z = `${Math.random() * 200 - 50}px`; // Random Z between -100px and 100px

            heart.style.setProperty('--x', x);
            heart.style.setProperty('--y', y);
            heart.style.setProperty('--z', z);

            // Position the heart at the center of the heart icon
            heart.style.left = `50%`;
            heart.style.top = `50%`;

            heartIcon.parentElement.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 2000);
        }

        function increaseCounter() {
            count++;
            counter.innerHTML = `${count}`;
        }
