var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');


var newbox=document.createElement("input")
newbox.type="text"
newbox.className="form-control mr-2 item3"
form.insertBefore(newbox,form.firstChild)
// var temp=document.querySelector(".form-control mr-2")
// temp.idName="item3"

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem1 = document.getElementById('item1').value;
  var newItem2 = document.getElementById('item2').value;
  var newItem3 = document.querySelector('.item3').value;
  var newItem = newItem3+" "+newItem1+" "+newItem2

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
//   li.appendChild(document.createTextNode("-"));
//   li.appendChild(document.createTextNode(newItem2));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);


  // creating edit button
  var editbtn=document.createElement("button")

  editbtn.style.backgroundColor="green"

  editbtn.className="btn btn-danger btn-sm float-right edit"

  editbtn.appendChild(document.createTextNode("Edit"))

  li.append(editbtn)

  itemList.appendChild(li)

}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item)
  {
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1)
    {
      item.style.display = 'block';
    } 
    else 
    {
      item.style.display = 'none';
    }
  });
}