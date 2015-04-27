"use strict";
var jq = jQuery.noConflict();
(function(jq) {
    "use strict";
    jq(document).ready(function() {

        jq('.one-page-nav li a[href*="http"]').each(function() {
            jq(this).addClass("external-link");
        });

        var wow = new WOW({
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 0, // distance to the element when triggering the animation (default is 0)
            mobile: true, // trigger animations on mobile devices (default is true)
            live: true // act on asynchronously loaded content (default is true)
        });
        wow.init();

        try {
            jq('.sf-menu').slicknav({
                label: '',
                duration: 200,
                prependTo: '#mobile-menu',
                closedSymbol: '&#xf067;',
                openedSymbol: '&#xf00d;'
            });
        } catch (err) {
            console.log('slicknav is not found')
        }

        try {
            jq.scrollUp({
                scrollName: 'scrollTop', // Element ID
                topDistance: '300', // Distance from top before showing element (px)
                topSpeed: 300, // Speed back to top (ms)
                animation: 'fade',
                animationInSpeed: 200, // Animation in speed (ms)
                animationOutSpeed: 200, // Animation out speed (ms)
                scrollText: '<i class="fa fa-angle-up pulse"></i>', // Text for element
                activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
            });
        } catch (err) {
            console.log('scrollTop is not found')
        }

        /**================
         SUPERFISH DROPDOWN
         * ================*/

        if (jq.fn.superfish) {
            jq('.main-nav').superfish({
                hoverClass: 'sfHover', // the class applied to hovered list items
                delay: 100, // the delay in milliseconds that the mouse can remain outside a submenu without it closing
                speed: 'normal', // speed of the opening animation. Equivalent to second parameter of jQuery’s .animate() method
                speedOut: 'fast', // speed of the closing animation. Equivalent to second parameter of jQuery’s .animate() method
                cssArrows: true // set to false if you want to remove the CSS-based arrow triangles
            });

        }



        if (jq.fn.onePageNav) {
            jq('.one-page-nav').onePageNav({
                scrollOffset: 0,
                currentClass: 'nav-active',
                easing: 'easeInExpo',
                filter: ':not(.external-link)'
            });

            jq('.slicknav_menu').onePageNav({
                scrollOffset: 0,
                currentClass: 'nav-active',
                easing: 'easeInExpo',
                filter: ':not(.external-link)'
            });



        }

        jq(".sticky-nav").autofix_anything();



        jq('.hero-section').each(function() {
            var secBgImg = jq(this).data('src');
            if (secBgImg) {
                jq(this).css({

                    'background-image': 'url(' + secBgImg + ')'
                });
            }

        });

        jq('.hero-profile-img').each(function() {
            var secBgImg = jq(this).data('src');
            if (secBgImg) {
                jq(this).css({

                    'background-image': 'url(' + secBgImg + ')'
                });
            }

        });


        var hHero = {
            heroBuild: function() {
                var navH = jq('.nav-wrapper').height(),
                    wHeight = jq(window).height(),
                    calHeight = wHeight;
                jq('.hero-section').each(function() {
                    jq(this).css({
                        'height': calHeight + 'px'
                    });


                });

                jq('.herosection-full-height').each(function() {
                    jq(this).css({
                        'height': calHeight + 'px'
                    });
                });
            },
            heroDestroy: function() {
                jq('.hero-section').each(function() {
                    jq(this).css('height', '');
                });
                jq('.herosection-full-height').each(function() {
                    jq(this).css('height', '');
                });
            }
        }

        var sectionFullH = {
            buildHeight: function() {

                jq('.section-full-height').each(function() {
                    var wh = jq(window).height(),
                        secBgImg = jq(this).data('src'),
                        secBgColor = jq(this).data('backcolor');
                    jq(this).css({
                        'height': wh + 'px',
                        'background-color': secBgColor

                    });
                    if (secBgImg) {
                        jq(this).css({

                            'background-image': 'url(' + secBgImg + ')'
                        });
                    }

                    jq(this).children('.map-container').children('.location-map').css({
                        'height': wh + 'px'
                    });




                });


            },
            destroyHeight: function() {
                jq('.section-full-height').each(function() {
                    jq(this).css('height', '');
                });
            }
        }


        jq('.section-header').each(function() {
            var altBgColor = jq(this).parents('.section-full-height').data('backcolor');
            var icoBack = jq(this).children('.header-icon').data('backcolor');
            var icoColor = jq(this).children('.header-icon').data('color');
            var hCheck = jq(this).parents('.section-wrapper').hasClass('dbl-col');
            if (hCheck) {
                jq(this).children('h2').css({
                    'background-color': altBgColor
                });

            }
            jq(this).children('.header-icon').css({
                'background-color': icoBack
            });
            jq(this).children('.header-icon').children('i').css({
                'color': icoColor
            });


        });

        jq('.profileSelector').socialProfiles({
            animation: 'chain',
            blur: false,
            facebook: 'ThemePicasso',
            twitter: 'ThemePicasso',
            pinterest: 'ThemePicasso',
            google: 'ThemePicasso',
            stumbleupon: 'ThemePicasso',
            digg: 'ThemePicasso',
            linkedin: 'ThemePicasso',
            behance: 'ThemePicasso',
            reddit: 'ThemePicasso',
            dribbble: 'ThemePicasso',
            instagram: 'ThemePicasso',
            tumblr: 'ThemePicasso'
        });




        jq('.profileSelector').mouseenter(function() {

            jq(this).children('.profile-img-overlay').stop(false, true).fadeIn(300);

            var wow = new WOW({
                boxClass: 'wow', // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset: 0, // distance to the element when triggering the animation (default is 0)
                mobile: false, // trigger animations on mobile devices (default is true)
                live: false // act on asynchronously loaded content (default is true)
            });
            wow.init();


        }).mouseleave(function(e) {
                jq(this).children('.profile-img-overlay').stop(false, true).fadeOut(300);
            });




        jq(".s-tabs").on('click', 'a', function(event) {
            event.preventDefault();
            jq(this).parent().addClass("current");
            jq(this).parent().siblings().removeClass("current");
            var tab = jq(this).attr("href");
            jq(".s-tab-content").not(tab).css("display", "none");
            jq(tab).fadeIn('fast');
        });


        /**
         * Animated Number
         */
        jq.fn.animateNumbers = function(stop, commas, duration, ease) {
            return this.each(function() {
                var $this = jq(this);
                var start = parseInt($this.text().replace(/,/g, ""));
                commas = (commas === undefined) ? true : commas;
                jq({
                    value: start
                }).animate({
                        value: stop
                    }, {
                        duration: duration == undefined ? 500 : duration,
                        easing: ease == undefined ? "swing" : ease,
                        step: function() {
                            $this.text(Math.floor(this.value));
                            if (commas) {
                                $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
                            }
                        },
                        complete: function() {
                            if (parseInt($this.text()) !== stop) {
                                $this.text(stop);
                                if (commas) {
                                    $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
                                }
                            }
                        }
                    });
            });
        };


        jq('.animated-number').appear();
        jq(document.body).on('appear', '.numbers-rotate', function() {
            jq('.animated-number').each(function() {
                jq(this).animateNumbers(jq(this).attr("data-value"), true, parseInt(jq(this).attr("data-animate-duration")));
            });
        });

        jq('.skill-sets-list').appear();
        jq(document.body).on('appear', '.skill-sets-list', function() {
            jq('.skill-bar').each(function() {
                jq(this).find('.bar-progressed,.skill-line-mask').animate({
                    width: jq(this).attr('data-percent')
                }, 3000);
            });

            jq('.skill-percent').each(function() {
                var sPer = jq(this).parents('.skill-graph-item').children('.skill-bar').data('percent')
                jq(this).text(sPer);
            });
        });


        /*Animated NUmbers*/

        /*===Appear===*/
        jq('.numeric-stats-wrap').appear();
        jq(document.body).on('appear', '.numeric-stats-wrap', function() {
            jq('.number-rotate').each(function() {
                jq(this).animateNumbers(jq(this).attr("data-value"), true, parseInt(jq(this).attr("data-animation-duration")));
            });

        });


        /**
         * ANIMATED PROGRESS BAR====*/
        jq('.animated-bar').each(function() {
            var barPer = jq(this).attr('data-percent');
            var bars = jq(this).find('.number-pb').NumberProgressBar({
                duration: 8000


            });
            jq(this).find('.number-pb').css("background-color", jq(this).attr('data-progress-color'));
            jq(this).find('.number-pb-shown').css("background-color", jq(this).attr('data-bar-color'));



            bars.reach(barPer);

        });



        jq('.team-members,.team-members-details').cycle();
        jq('.testimonial-slideshow').cycle();




        jq('#blog-grid').imagesLoaded(function() {
            // Prepare layout options.
            var options = {
                itemWidth: 300, // Optional min width of a grid item
                autoResize: true, // This will auto-update the layout when the browser window is resized.
                container: jq('#blog-grid'), // Optional, used for some extra CSS styling
                offset: 20, // Optional, the distance between grid items
                outerOffset: 0, // Optional the distance from grid to parent
                flexibleWidth: '50%' // Optional, the maximum width of a grid item
            };
            // Get a reference to your grid items.
            var handler = jq('#blog-grid li');
            var $window = jq(window);
            $window.resize(function() {
                var windowWidth = $window.width(),
                    newOptions = {
                        flexibleWidth: '50%'
                    };
                // Breakpoint
                if (windowWidth < 1024) {
                    newOptions.flexibleWidth = '100%';
                }
                handler.wookmark(newOptions);
            });
            // Call the layout function.
            handler.wookmark(options);
        });



        jq('.share-this-page').socialShare({
            social: 'facebook,google,linkedin,pinterest,tumblr,twitter',
            whenSelect: true,
            animation: 'launchpadReverse', // launchpad, launchpadReverse, slideTop, slideRight, slideBottom, slideLeft, chain
            selectContainer: '.share-this-page'
        });
        jq('.share-this-post').socialShare({
            social: 'facebook,google,linkedin,pinterest,tumblr,twitter',
            whenSelect: true,
            animation: 'launchpadReverse', // launchpad, launchpadReverse, slideTop, slideRight, slideBottom, slideLeft, chain
            selectContainer: '.share-this-post'
        });


        jq('.share-this-page, .profileSelector,.share-this-post').on('click', function(e) {
            e.preventDefault();
        });


        jq('.latest-tweet .tweet').twittie({
                dateFormat: '%b. %d, %Y',
                template: '<div class="twitter-tweet">{{tweet}} </div><div class="tweet-date">{{date}}</div>',
                count: 3,
                loadingText: 'Tweet loading...'
            },
            function() {
                var item = jq('.latest-tweet .tweet').find('ul').addClass('tweet-slide');
                jq('.tweet-slide').owlCarousel({

                    navigation: true, // Show next and prev buttons
                    slideSpeed: 300,
                    paginationSpeed: 400,
                    singleItem: true,
                    autoHeight: true,
                    transitionStyle: "fade",
                    navigationText: ["<i class='fa fa-angle-left'></i> Prev", "Next <i class='fa fa-angle-right'></i>"]

                    // "singleItem:true" is a shortcut for:
                    // items : 1,
                    // itemsDesktop : false,
                    // itemsDesktopSmall : false,
                    // itemsTablet: false,
                    // itemsMobile : false

                });
            });
        jq('.latest-tweet .twitter-avatar').twittie({
            template: '<div class="twitter-avatar">{{avatar}}</div><div class="twitter-sname">{{screen_name}}</div> <div class="twitter-uname"> {{user_name}}</div>',
            count: 1,
            loadingText: 'Avatar loading...!'
        });

        jq('.instagram-stream').instagramLite({
            username: 'acozykitchen',
            clientID: '199554eb34504658a4770d2859b5a583',
            limit: 6,
            urls: true,
            error: function(errorCode, errorMessage) {

                console.log('There was an error');

                if (errorCode && errorMessage) {

                    alert(errorCode + ': ' + errorMessage);

                }

            },
            success: function() {
                console.log('The request was successful!');
            }
        });


        jq(".justified-post-grid").justifiedGallery({
            sizeRangeSuffixes: {
                lt100: '',
                lt240: '',
                lt320: '',
                lt500: '',
                lt640: '',
                lt1024: ''
            },
            rowHeight: 350,
            fixedHeight: false,
            lastRow: 'justify',
            margins: 3,
            randomize: false,
            captionSettings: {
                animationDuration: 300,
                visibleOpacity: 1,
                nonVisibleOpacity: 0.0
            }
        });

        if(jq.fn.lightGallery){
            jq(".justified-post-grid").lightGallery({
                mode:"fade",
                thumbnail:false
            });
        }

        /**===================
         * MObile
         * ===================*/

        // call jRespond and add breakpoints
        var jRes = jRespond([{
            label: 'tablet',
            enter: 0,
            exit: 979
        }, {
            label: 'laptop',
            enter: 980,
            exit: 1199
        }, {
            label: 'desktop',
            enter: 1200,
            exit: 100000
        }]);

        jRes.addFunc({
            breakpoint: 'tablet',
            enter: function() {
                jq('.section-full-height').each(function() {
                    var wh = jq(window).height(),
                        secBgColor = jq(this).data('backcolor');
                    jq(this).css({
                        'background-color': secBgColor
                    });
                });
            },
            exit: function() {

            }
        });
        jRes.addFunc({
            breakpoint: ['desktop', 'laptop'],
            enter: function() {

                hHero.heroBuild();
                sectionFullH.buildHeight();


                jq(window).on('resize', function() {
                    hHero.heroBuild();
                    sectionFullH.buildHeight();
                });


            },
            exit: function() {
                hHero.heroDestroy();
                sectionFullH.destroyHeight();
                jq(window).on('resize', function() {
                    hHero.heroDestroy();
                    sectionFullH.destroyHeight();
                });

            }
        });

    });
})(jq);