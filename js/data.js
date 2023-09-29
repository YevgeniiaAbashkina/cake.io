var galleryData = [

    {
        "torte": [
            {
                "title": "Torte 1",
                "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sit ab incidunt recusandae quam perspiciatis!",
                "photoURL": "image/gallery/tort.jpg"
            },
            {
                "title": "Torte 2",
                "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sit ab incidunt recusandae quam perspiciatis!",
                "photoURL": "image/gallery/tort-2.jpg"
            },
            {
                "title": "Torte 2",
                "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sit ab incidunt recusandae quam perspiciatis!",
                "photoURL": "image/gallery/cake-muss.jpg"
            }
        ]
    },
    
    {
        "törtchen": [
            {
                "title": "Muffins 1",
                "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sit ab incidunt recusandae quam perspiciatis!",
                "photoURL": "image/gallery/törthen.jpg"
            },
            {
                "title": "Muffins 2",
                "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sit ab incidunt recusandae quam perspiciatis!",
                "photoURL": "image/gallery/törthen-4.jpg"
            },
            {
                "title": "Törtchen 1",
                "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sit ab incidunt recusandae quam perspiciatis!",
                "photoURL": "image/gallery/törthen-2.jpg"
            },
            {
                "title": "Törtchen 2",
                "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sit ab incidunt recusandae quam perspiciatis!",
                "photoURL": "image/gallery/törthen-3.jpg"
            },
        ]
    },
    
    {
        "marschmallow": [
            {
                "title": "Erdbeere marschmallow",
                "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sit ab incidunt recusandae quam perspiciatis!",
                "photoURL": "image/gallery/marschmallow.jpg"
            },
            {
                "title": "Vanila marschmallow",
                "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sit ab incidunt recusandae quam perspiciatis!",
                "photoURL": "image/gallery/white-marschmallow.jpg"
            },
            {
                "title": "Choco-marschmallow",
                "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sit ab incidunt recusandae quam perspiciatis!",
                "photoURL": "image/gallery/choco-marschmallow.jpg"
            }
        ]
    }
];

//console.log( galleryData );


var galleryList = document.querySelector( '#gallery__list' );
var buttons = document.querySelectorAll( '.search_btn' );

buttons.forEach( 
    function( currentBtn ) {
        
        currentBtn.addEventListener( 'click', function(event) {

            var currentName = currentBtn.getAttribute( 'name' );
            galleryList.innerHTML = "";
            
            for ( var i = 0; i < galleryData.length; i++ ) {
                var keys = Object.keys( galleryData[ i ] ); 

                if ( keys.length > 0 ) {
                    var currentKey = keys[ 0 ];
                    var currentArray = galleryData[ i ][ currentKey ];
                    
                    if( currentName == currentKey || currentName == 'all' ) {
                        var activeBtn = document.querySelector( '.active' );

                        if( activeBtn ) {
                            activeBtn.classList.remove( 'active'  );
                        }

                        event.target.classList.add( 'active' );

                        getCurrentArray( currentArray );
                    }
                };
            };
        });
    }
); 

function getCurrentArray( array ) {
    for ( var j = 0; j < array.length; j++ ) {
        var listItem = document.createElement( 'li' );
        listItem.className = "gallery__item";

        listItem.innerHTML = "";

        listItem.innerHTML  = `<h4>${ array[ j ].title }</h4>`;
        listItem.innerHTML += `<img src="${ array[ j ].photoURL }" />`;
        listItem.innerHTML += `<p>${ array[ j ].description }</p>`;

        galleryList.appendChild( listItem );
    };
};