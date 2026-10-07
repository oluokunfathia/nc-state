/* =====================================================
   NC STATE GALLERY / APPLY JAVASCRIPT
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =============================================
           NAVBAR EFFECT
        ============================================= */

        const navbar =
            document.querySelector(".navbar");


        window.addEventListener(
            "scroll",
            function () {

                if (window.scrollY > 80) {

                    navbar.style.background =
                        "#720000";

                    navbar.style.boxShadow =
                        "0 3px 15px rgba(0,0,0,.3)";

                } else {

                    navbar.style.background =
                        "rgba(125,0,0,.96)";

                    navbar.style.boxShadow =
                        "none";

                }

            }
        );



        /* =============================================
           BACK TO TOP BUTTON
        ============================================= */

        const backToTop =
            document.getElementById(
                "backToTop"
            );


        window.addEventListener(
            "scroll",
            function () {

                if (window.scrollY > 500) {

                    backToTop.classList.add(
                        "show"
                    );

                } else {

                    backToTop.classList.remove(
                        "show"
                    );

                }

            }
        );


        backToTop.addEventListener(
            "click",
            function () {

                window.scrollTo({

                    top: 0,

                    behavior: "smooth"

                });

            }
        );



        /* =============================================
           STEP ANIMATION
        ============================================= */

        const steps =
            document.querySelectorAll(
                ".step"
            );


        const observer =
            new IntersectionObserver(

                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.style.opacity =
                                    "1";

                                entry.target.style.transform =
                                    "translateX(0)";

                            }

                        }
                    );

                },

                {
                    threshold: 0.2
                }

            );


        steps.forEach(
            function (step, index) {

                step.style.opacity =
                    "0";

                step.style.transform =
                    "translateX(-40px)";

                step.style.transition =
                    `opacity .7s ease ${index * .15}s,
                     transform .7s ease ${index * .15}s`;

                observer.observe(step);

            }
        );



        /* =============================================
           BEFORE YOU APPLY ANIMATION
        ============================================= */

        const beforeBox =
            document.querySelector(
                ".before-box"
            );


        if (beforeBox) {

            beforeBox.style.opacity =
                "0";

            beforeBox.style.transform =
                "translateY(-30px)";

            beforeBox.style.transition =
                "opacity .8s ease, transform .8s ease";


            setTimeout(
                function () {

                    beforeBox.style.opacity =
                        "1";

                    beforeBox.style.transform =
                        "translateY(0)";

                },
                300
            );

        }



        /* =============================================
           APPLY BUTTON CLICK
        ============================================= */

        const applyLink =
            document.querySelector(
                ".apply-link"
            );


        if (applyLink) {

            applyLink.addEventListener(
                "click",
                function () {

                    console.log(
                        "Opening NC State Graduate Application..."
                    );

                }
            );

        }

    }
);