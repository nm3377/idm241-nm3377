const likeButton = document.querySelector(".like-button");
const dislikeButton = document.querySelector(".dislike-button");
const optionsButton = document.querySelector(".options-button");

const likeTooltip = document.querySelector(".like-tooltip");
const dislikeTooltip = document.querySelector(".dislike-tooltip");

const likeCount = document.querySelector(".like-count");

const likeConfetti = document.querySelector(".like-confetti");
const dislikeConfetti = document.querySelector(".dislike-confetti");

const optionsMenu = document.querySelector(".options-menu");


let likes = 100;


/* --------------------------------
   SHARED CLICK ANIMATION
-------------------------------- */

function animateButton(button, turningOn) {

    button.classList.remove(
        "pop-on",
        "pop-off",
        "flash"
    );

    void button.offsetWidth;

    button.classList.add("flash");

    if (turningOn) {
        button.classList.add("pop-on");
    } else {
        button.classList.add("pop-off");
    }

    setTimeout(() => {
        button.classList.remove(
            "pop-on",
            "pop-off",
            "flash"
        );
    }, 500);
}


/* --------------------------------
   CONFETTI
-------------------------------- */

function createConfetti(container, colors) {

    const pieceCount = 12;

    for (let i = 0; i < pieceCount; i++) {

        const piece = document.createElement("span");

        piece.classList.add("confetti-piece");

        const angle = i * (360 / pieceCount);

        piece.style.setProperty(
            "--rotation",
            `${angle}deg`
        );

        piece.style.backgroundColor =
            colors[i % colors.length];

        container.appendChild(piece);

        setTimeout(() => {
            piece.remove();
        }, 500);
    }
}


/* --------------------------------
   LIKE
-------------------------------- */

likeButton.addEventListener("click", () => {

    const turningOn =
        !likeButton.classList.contains("selected");


    if (turningOn) {

        likeButton.classList.add("selected");

        likeTooltip.textContent = "Unlike";

        likes += 1;
        likeCount.textContent = likes;

        animateButton(likeButton, true);

        createConfetti(
            likeConfetti,
            ["#ff0033", "#ff4d73", "#ff7a9a"]
        );

    } else {

        likeButton.classList.remove("selected");

        likeTooltip.textContent = "I Like This";

        likes -= 1;
        likeCount.textContent = likes;

        animateButton(likeButton, false);

    }

});


/* --------------------------------
   DISLIKE
-------------------------------- */

dislikeButton.addEventListener("click", () => {

    const turningOn =
        !dislikeButton.classList.contains("selected");


    if (turningOn) {

        dislikeButton.classList.add("selected");

        dislikeTooltip.textContent = "Undo Dislike";

        animateButton(dislikeButton, true);

        createConfetti(
            dislikeConfetti,
            ["#ffffff", "#bdbdbd", "#737373"]
        );

    } else {

        dislikeButton.classList.remove("selected");

        dislikeTooltip.textContent = "I Dislike This";

        animateButton(dislikeButton, false);

    }

});


/* --------------------------------
   MORE OPTIONS
-------------------------------- */

optionsButton.addEventListener("click", () => {

    const turningOn =
        !optionsButton.classList.contains("selected");


    if (turningOn) {

        optionsButton.classList.add("selected");

        optionsMenu.classList.remove("closing");
        optionsMenu.classList.add("open");

        animateButton(optionsButton, true);

    } else {

        optionsButton.classList.remove("selected");

        optionsMenu.classList.remove("open");
        optionsMenu.classList.add("closing");

        animateButton(optionsButton, false);

        setTimeout(() => {
            optionsMenu.classList.remove("closing");
        }, 500);

    }

});