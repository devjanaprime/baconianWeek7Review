// out inventory array
let inventory = [];

$( document ).ready( readyNow );

function addItem(){
    console.log( 'in addItem' );
    // get user input
    // create a new object literal with the user input
    const newItem = {
        size: $( '#sizeIn' ).val(),
        color: $( '#colorIn' ).val(),
        description: $( '#descriptionIn' ).val()
    } //end newItem
    // push the object into our inventory array
    inventory.push( newItem );
    // display inventory on DOM
    console.log( 'inventory:', inventory );
} // end addItem

function readyNow(){
    $( '#addItemButton' ).on( 'click', addItem );
} // end readyNow