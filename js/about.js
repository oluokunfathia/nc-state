/* =====================================================
   NC STATE ABOUT PAGE JAVASCRIPT
===================================================== */


document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =============================================
           CURRENT YEAR
        ============================================= */

        const year =
            document.getElementById("year");


        if (year) {

            year.textContent =
                new Date().getFullYear();

        }



        /* =============================================
           NAVBAR SCROLL EFFECT
        ============================================= */

        const navbar =
            document.querySelector(".navbar");


        window.addEventListener(
            "scroll",
            function () {


                if (window.scrollY > 50) {

                    navbar.style.background =
                        "rgba(100,0,0,.99)";

                } else {

                    navbar.style.background =
                        "rgba(130,0,0,.97)";

                }

            }
        );



        /* =============================================
           FINANCIAL AID ANIMATION
        ============================================= */

        const financial =
            document.querySelector(
                ".financial-content"
            );


        if (financial) {

            const observer =
                new IntersectionObserver(
                    function (entries) {

                        entries.forEach(
                            function (entry) {

                                if (
                                    entry.isIntersecting
                                ) {

                                    financial.style.opacity =
                                        "1";

                                    financial.style.transform =
                                        "translateX(0)";

                                }

                            }
                        );

                    },
                    {
                        threshold: .2
                    }
                );


            financial.style.opacity = "0";

            financial.style.transform =
                "translateX(50px)";

            financial.style.transition =
                "all .8s ease";


            observer.observe(financial);

        }



        /* =============================================
           RESOURCE CARD ANIMATION
        ============================================= */

        const resource =
            document.querySelector(
                ".resources-content"
            );


        if (resource) {

            const observer =
                new IntersectionObserver(
                    function (entries) {

                        entries.forEach(
                            function (entry) {

                                if (
                                    entry.isIntersecting
                                ) {

                                    resource.style.opacity =
                                        "1";

                                    resource.style.transform =
                                        "translateX(0)";

                                }

                            }
                        );

                    },
                    {
                        threshold: .2
                    }
                );


            resource.style.opacity = "0";

            resource.style.transform =
                "translateX(50px)";

            resource.style.transition =
                "all .8s ease";


            observer.observe(resource);

        }



        /* =============================================
           MOBILE NAVIGATION
        ============================================= */

        const links =
            document.querySelectorAll(
                ".navbar .nav-link"
            );


        const menu =
            document.getElementById(
                "navMenu"
            );


        links.forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        if (
                            menu &&
                            menu.classList.contains(
                                "show"
                            )
                        ) {

                            const collapse =
                                bootstrap.Collapse
                                .getOrCreateInstance(
                                    menu
                                );

                            collapse.hide();

                        }

                    }
                );

            }
        );

    }
);