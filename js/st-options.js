"use strict";
var jq = jQuery.noConflict();
jq(function(jq) {
    "use strict";

    var hclsss = jq('body').hasClass('layout-boxed');

    if (!hclsss) {
        jq('.fluid-layout').addClass('active');
    } else {
        jq('.boxed-layout').addClass('active');
    }

    var optionToggle = "0";

    function functionOptions() {
        if (optionToggle == "0") {
            jq('.st-theme-options').addClass('option-show')
            return optionToggle = "1";
        } else if (optionToggle == "1") {

            jq('.st-theme-options').removeClass('option-show')
            return optionToggle = "0";
        }
    }

    jq('.color').each(function() {
        var elemColor = jq(this).data('color');
        jq(this).css({
            'background-color': elemColor
        })
    });

    jq('.color').click(function() {
        var stylesheet = jq(this).attr('title').toLowerCase();
        jq('#theme-color').attr('href', 'css' + '/' + stylesheet + '.css');
    });

    jq('.options-action').on('click', function(evn) {
        evn.preventDefault();
        functionOptions();
    });

    jq('.fluid-layout').on('click', function(evn) {
        evn.preventDefault();
        if (jq('body').hasClass('layout-boxed')) {
            jq('body').removeClass('layout-boxed');
            jq(this).addClass('active');
            jq('.boxed-layout').removeClass('active');
            functionOptions()
        }
    });

    jq('.boxed-layout').on('click', function(evn) {
        evn.preventDefault();
        jq('body').addClass('layout-boxed');
        jq(this).addClass('active');
        jq('.fluid-layout').removeClass('active');
        functionOptions();
        $(window).trigger('resize');
    });

});