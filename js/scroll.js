/** 
* Edit navigation to scroll event
*/

var burger    = document.querySelector( '.trigger' );
var navi      = document.querySelector( '.navigation' );
var naviMoove = document.querySelector( '.navigation__moove' );

var header   = document.querySelector( '.header' );
var about    = document.querySelector( '.about' );

getCoordsForMenuHidden();  

window.addEventListener( 'scroll', function() {
    getCoordsForMenuHidden();
} );

function getCoords( elem ) {
    var box = elem.getBoundingClientRect();

    return {
        top:    box.top + window.scrollY,
        bottom: box.bottom + window.scrollY
    };
};

function getCoordsForMenuHidden() {
    if( ( getCoords( navi ).bottom - 40 ) < getCoords( about ).top ) {
        navi.style.opacity = '1';

        header.classList.remove( 'moove' );
        burger.classList.add( 'remove' ); 
        naviMoove.style.display = 'none';
        navi.style.pointerEvents = 'all';
    }
    
    else {
        navi.style.opacity = '0';

        header.classList.add( 'moove' );
        burger.classList.remove( 'remove' ); 
        naviMoove.style.display = 'inline-block';
        navi.style.pointerEvents = 'none';
    };
};