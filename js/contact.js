/* =====================================================
   NC STATE CONTACT PAGE JAVASCRIPT
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
           NAVBAR SCROLL
        ============================================= */

        const navbar =
            document.querySelector(".navbar");


        window.addEventListener(
            "scroll",
            function () {

                if (
                    window.scrollY > 50
                ) {

                    navbar.style.background =
                        "rgba(90,0,0,.98)";

                } else {

                    navbar.style.background =
                        "#8e0000";

                }

            }
        );



        /* =============================================
           REVEAL ANIMATION
        ============================================= */

        const sections =
            document.querySelectorAll(
                ".programs-panel, .map-panel, .graduate-image, .contact-information"
            );


        const observer =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "visible"
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.15
                }
            );


        sections.forEach(
            function (section) {

                observer.observe(section);

            }
        );



        /* =============================================
           SMOOTH SCROLL
        ============================================= */

        document
            .querySelectorAll(
                'a[href^="#"]'
            )
            .forEach(
                function (link) {

                    link.addEventListener(
                        "click",
                        function (event) {

                            const target =
                                document.querySelector(
                                    this.getAttribute("href")
                                );


                            if (target) {

                                event.preventDefault();


                                target.scrollIntoView(
                                    {
                                        behavior: "smooth"
                                    }
                                );

                            }

                        }
                    );

                }
            );

    }
);