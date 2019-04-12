// out inventory array
let inventory = [];

$( document ).ready( readyNow );

function addItem(){
    console.log( 'in addItem' );
    // get user input
    console.log( $( '#sizeIn' ).val() );
    console.log( $( '#colorIn' ).val() );
    console.log( $( '#descriptionIn' ).val() );
    // create a new object literal with the user input
    // push the object into our inventory array
    // display inventory on DOM
    console.log( 'inventory:', inventory );
} // end addItem

function readyNow(){
    $( '#addItemButton' ).on( 'click', addItem );
} // end readyNow