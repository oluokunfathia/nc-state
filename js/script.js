/* =====================================================
   NC STATE WEBSITE JAVASCRIPT
===================================================== */


document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =============================================
           FOOTER YEAR
        ============================================= */

        const year =
            document.getElementById("year");


        if (year) {

            year.textContent =
                new Date().getFullYear();

        }



        /* =============================================
           IMAGE PARALLAX EFFECT
        ============================================= */

        const topImage =
            document.querySelector(".top-image");


        window.addEventListener(
            "scroll",
            function () {


                if (!topImage) {
                    return;
                }


                const scroll =
                    window.scrollY;


                if (scroll < 500) {

                    topImage.style.transform =
                        `translateY(${scroll * 0.08}px)`;

                }

            }
        );



        /* =============================================
           YELLOW LABEL ANIMATION
        ============================================= */

        const label =
            document.querySelector(
                ".international-label"
            );


        if (label) {

            const observer =
                new IntersectionObserver(
                    function (entries) {

                        entries.forEach(
                            function (entry) {

                                if (
                                    entry.isIntersecting
                                ) {

                                    label.classList.add(
                                        "show"
                                    );

                                }

                            }
                        );

                    },
                    {
                        threshold: 0.3
                    }
                );


            observer.observe(label);

        }



        /* =============================================
           FEATURE CARDS
        ============================================= */

        const cards =
            document.querySelectorAll(
                ".info-card"
            );


        cards.forEach(
            function (card) {


                card.addEventListener(
                    "mouseenter",
                    function () {

                        card.style.cursor =
                            "pointer";

                    }
                );


            }
        );


    }
);