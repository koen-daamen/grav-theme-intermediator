var isTouch = window.DocumentTouch && document instanceof DocumentTouch;
var lzvalue = 0;

function scrollHeader() {
    // Has scrolled class on header
    var zvalue = $( document ).scrollTop();

    if ( zvalue > 75 ) {
        $( "#header" ).addClass( "scrolled" );
    } else {
        $( "#header" ).removeClass( "scrolled" );
    }

    if ( zvalue > 300 ) {
        if ( lzvalue < zvalue ) {
            $( "#header" ).addClass( "fadeout" );
        } else {
            $( "#header" ).removeClass( "fadeout" );
        }
    }

    lzvalue = zvalue;
}

function parallaxBackground() {
    $( ".parallax" ).css( "background-positionY", ( $( window ).scrollTop() * 0.33 ) + "px" );
}

jQuery( document ).ready( function( $ ) {

    scrollHeader();

    // Scroll Events
    if ( !isTouch ) {
        $( document ).scroll( function() {
            scrollHeader();
            parallaxBackground();
        } );
    }
    ;

    // Touch scroll
    $( document ).on( {
                          "touchmove": function( e ) {
                              scrollHeader(); // Replace this with your code.
                          }
                      } );

    //Smooth scroll to start
    $( "#to-start" ).click( function() {
        var start_y = $( "#start" ).position().top;
        var header_offset = 45;
        window.scroll( { top: start_y - header_offset, left: 0, behavior: "smooth" } );
        return false;
    } );

    //Smooth scroll to top
    $( "#to-top" ).click( function() {
        window.scroll( { top: 0, left: 0, behavior: "smooth" } );
        return false;
    } );

    // Responsive Menu
    $( "#toggle" ).click( function() {
        $( this ).toggleClass( "active" );
        $( "#overlay" ).toggleClass( "open" );
        $( "body" ).toggleClass( "mobile-nav-open" );
    } );

    // Tree Menu
    $( ".tree" ).treemenu( { delay: 300 } );

} );
