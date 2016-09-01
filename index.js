//Define the state object with the items property
var state = {
  items: []
}

//The function is loads the state object, which has the items array property. It receives the item value from the input box and pushes it into state.items array
var addItem = function (state,item){
    state.items.push(item);
}

//The renderList function loads the state object and the shopping list ul element
//Using the map method, we go through each of the element in the items array and we modify the array by returning the modifying the item element with the li element. This will be declared as the itemsHTML variable
var renderList = function(state, element) {
  var itemsHTML = state.items.map(function(item){
    return '<li>' + item + '</li>';
  });
  //Using the .html method, the itemsHTML will be added to the ul element that has a class name 'shopping-list'
  element.html(itemsHTML);
}

$(document).ready(function() {

//When the user presses the submit button or presses enter, the two functions will be invoked.
//The addItem function will be invoking using the arguments of the state object and the text from the input box - refer to line 7 for addItem function
//The renderList function will be invoked using the state object and ul element as arguments. - refer to line 13-18 for renderList function.
$('.shopping-list-add').submit(function(event) {
  event.preventDefault();
  addItem(state, $('.shopping-list-add-input').val());
  renderList(state, $('.shopping-list'));
});

});
