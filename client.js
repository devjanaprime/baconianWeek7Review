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
    displayInventory();
} // end addItem

function displayInventory(){
    console.log( 'in displayInventory' );
    // target ul element
    let el = $( '#inventoryOut' );
    el.empty();
    // loop through the inventory
    for( let i = 0; i<inventory.length; i++){
        // display each item as a li: <li>SIZE, COLOR: DESCRIPTION</li>
        const listItem = `<li>${ inventory[i].size },
            ${ inventory[i].color }: 
            ${ inventory[i].description }</li>`;
        el.append( listItem );
    }
}

function readyNow(){
    $( '#addItemButton' ).on( 'click', addItem );
    displayInventory();
} // end readyNow