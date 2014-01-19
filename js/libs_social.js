/**
 * Library for social initialization
 * @author  Jeroen Bosch
 * @email   <bosch.jeroen@gmail.com>
 */

// init function for the social wall.
function loadSocial( container ) {
    
    $('#' + container).dcSocialStream({
        feeds: {
            twitter: {
                id: 'fllbenelux,#fllbnl',
                thumb: true,
                retweets: true,
                replies: true,
                images: 'small'
            },
            facebook: {
                id: '121516737994223'
            },
            youtube: {
                id: 'Techniekpromotie'
            }
        },
        rotate: {
            delay: 0
        },
        twitterId: 'fllbenelux',
        controls: false,
        filter: false,
        wall: true,
        cache: false,
        max: 'limit',
        limit: 10,
        iconPath: 'images/dcsns-dark/',
        imagePath: 'images/dcsns-dark/',
        height: 500
    });          
}

function refreshSocial( container, interval ) {

    var auto_refresh = setInterval(function(){
        // reset the counter...
        $('#counter').removeData();
        $('#counter').empty();
        $('#counter').html( Math.round( interval / 1000 ));

        // clear social wall and reload.
        $('#social-stream').removeData();
        $('#social-stream').empty();
        $('#social-stream').fadeOut('fast').load( loadSocial( container ))
            .fadeIn('fast');
    }, interval);
}

function initCounter( container, interval ) {
    // restart counter
    var counter_interval = setInterval(function() {
        $('#' + container).html($('#' + container).text()-1);
    }, 1000);
}

