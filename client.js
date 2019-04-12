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
    displayInventory( inventory );
} // end addItem

function displayInventory( arrayToShow ){
    console.log( 'in displayInventory' );
    // target ul element
    let el = $( '#inventoryOut' );
    el.empty();
    // loop through the inventory
    for( let i = 0; i<arrayToShow.length; i++){
        // display each item as a li: <li>SIZE, COLOR: DESCRIPTION</li>
        const listItem = `<li>${ arrayToShow[i].size },
            ${ arrayToShow[i].color }: 
            ${ arrayToShow[i].description }</li>`;
        el.append( listItem );
    }
}

function filter(){
    console.log( 'in filter' );
    let matches = [];
    // get user input
    const filterParameters = {
        size: $( '#sizeFilterIn' ).val(),
        color: $( '#colorFilterIn' ).val()
    }
    // loop through inventory and check for matches
    for( let i =0; i<inventory.length; i++){
        // push matches into an array
        if( inventory[ i ].size === filterParameters.size 
            && inventory[ i ].color === filterParameters.color ){
            matches.push( inventory[ i ] );
        } //end match check
    } // end for
    // update DOM with only matches
    displayInventory( matches );
}

function readyNow(){
    $( '#addItemButton' ).on( 'click', addItem );
    $( '#filterButton' ).on( 'click', filter );
    displayInventory( inventory );
} // end readyNow