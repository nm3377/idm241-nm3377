const likeButton =
    document.querySelector(".like-button");

const dislikeButton =
    document.querySelector(".dislike-button");

const optionsButton =
    document.querySelector(".options-button");


const likeWrapper =
    document.querySelector(".like-wrapper");


const likeTooltip =
    document.querySelector(".like-tooltip");

const dislikeTooltip =
    document.querySelector(".dislike-tooltip");


const likeCount =
    document.querySelector(".like-count");


const likeConfetti =
    document.querySelector(".like-confetti");

const dislikeConfetti =
    document.querySelector(".dislike-confetti");


const optionsMenu =
    document.querySelector(".options-menu");


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


    /*
       Force the browser to recognize that
       the previous animation was removed.
    */

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

        const piece =
            document.createElement("span");


        piece.classList.add(
            "confetti-piece"
        );


        const angle =
            i * (360 / pieceCount);


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
        !likeButton.classList.contains(
            "selected"
        );


    /* ================================
       LIKE CLICK ON
    ================================ */

    if (turningOn) {


        /*
           If Dislike is currently active,
           return it to its default state.
        */

        if (
            dislikeButton.classList.contains(
                "selected"
            )
        ) {

            dislikeButton.classList.remove(
                "selected"
            );

            dislikeTooltip.textContent =
                "I Dislike This";

            animateButton(
                dislikeButton,
                false
            );

        }


        /*
           Make sure Like itself is no
           longer deemphasized.
        */

        likeButton.classList.remove(
            "deemphasized"
        );

        likeWrapper.classList.remove(
            "deemphasized"
        );


        /*
           Turn Like ON.
        */

        likeButton.classList.add(
            "selected"
        );

        likeTooltip.textContent =
            "Unlike";


        /*
           Like is active, so the counter
           can only be 101.
        */

        likes = 101;

        likeCount.textContent =
            likes;


        /*
           20% icon pop and background
           flash.
        */

        animateButton(
            likeButton,
            true
        );


        /*
           Red / pink confetti appears
           ONLY when Like turns ON.
        */

        createConfetti(
            likeConfetti,
            [
                "#ff0033",
                "#ff4d73",
                "#ff7a9a"
            ]
        );


        /*
           Deemphasize Dislike.
        */

        dislikeButton.classList.add(
            "deemphasized"
        );

    }


    /* ================================
       LIKE CLICK OFF
    ================================ */

    else {


        /*
           Turn Like OFF.
        */

        likeButton.classList.remove(
            "selected"
        );

        likeTooltip.textContent =
            "I Like This";


        /*
           Returning Like to default
           removes the user's one like.
        */

        likes = 100;

        likeCount.textContent =
            likes;


        /*
           10% icon pop.
        */

        animateButton(
            likeButton,
            false
        );


        /*
           Restore Dislike from its
           deemphasized state.
        */

        dislikeButton.classList.remove(
            "deemphasized"
        );

    }

});


/* --------------------------------
   DISLIKE
-------------------------------- */

dislikeButton.addEventListener("click", () => {

    const turningOn =
        !dislikeButton.classList.contains(
            "selected"
        );


    /* ================================
       DISLIKE CLICK ON
    ================================ */

    if (turningOn) {


        /*
           If Like is currently active,
           return it to its default state.
        */

        if (
            likeButton.classList.contains(
                "selected"
            )
        ) {

            likeButton.classList.remove(
                "selected"
            );

            likeTooltip.textContent =
                "I Like This";


            /*
               Removing the active Like
               removes the user's +1.
            */

            likes = 100;

            likeCount.textContent =
                likes;


            animateButton(
                likeButton,
                false
            );

        }


        /*
           Make sure Dislike itself is no
           longer deemphasized.
        */

        dislikeButton.classList.remove(
            "deemphasized"
        );


        /*
           Turn Dislike ON.
        */

        dislikeButton.classList.add(
            "selected"
        );

        dislikeTooltip.textContent =
            "Undo Dislike";


        /*
           20% icon pop and background
           flash.
        */

        animateButton(
            dislikeButton,
            true
        );


        /*
           Monochrome confetti appears
           ONLY when Dislike turns ON.
        */

        createConfetti(
            dislikeConfetti,
            [
                "#ffffff",
                "#bdbdbd",
                "#737373"
            ]
        );


        /*
           Deemphasize the entire Like
           side, including its icon,
           backdrop, and counter.
        */

        likeButton.classList.add(
            "deemphasized"
        );

        likeWrapper.classList.add(
            "deemphasized"
        );

    }


    /* ================================
       DISLIKE CLICK OFF
    ================================ */

    else {


        /*
           Turn Dislike OFF.
        */

        dislikeButton.classList.remove(
            "selected"
        );

        dislikeTooltip.textContent =
            "I Dislike This";


        /*
           10% icon pop.
        */

        animateButton(
            dislikeButton,
            false
        );


        /*
           Restore the Like side from
           its deemphasized state.
        */

        likeButton.classList.remove(
            "deemphasized"
        );

        likeWrapper.classList.remove(
            "deemphasized"
        );

    }

});


/* --------------------------------
   MORE OPTIONS
-------------------------------- */

optionsButton.addEventListener("click", () => {

    const turningOn =
        !optionsButton.classList.contains(
            "selected"
        );


    /* ================================
       MORE OPTIONS CLICK ON
    ================================ */

    if (turningOn) {


        optionsButton.classList.add(
            "selected"
        );


        optionsMenu.classList.remove(
            "closing"
        );

        optionsMenu.classList.add(
            "open"
        );


        /*
           20% icon pop.
        */

        animateButton(
            optionsButton,
            true
        );

    }


    /* ================================
       MORE OPTIONS CLICK OFF
    ================================ */

    else {


        optionsButton.classList.remove(
            "selected"
        );


        optionsMenu.classList.remove(
            "open"
        );

        optionsMenu.classList.add(
            "closing"
        );


        /*
           10% icon pop.
        */

        animateButton(
            optionsButton,
            false
        );


        /*
           Remove the temporary closing
           class after the animation.
        */

        setTimeout(() => {

            optionsMenu.classList.remove(
                "closing"
            );

        }, 500);

    }

});