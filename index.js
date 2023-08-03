var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
var i=0;
// ading new text bos
// var newbox=document.createElement("input")
// newbox.type="text"
// newbox.className="form-control mr-2 item3"
// form.insertBefore(newbox,form.firstChild)

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);


// object creation
function details(name,description)
{
  this.name=name
  this.gmail=description
}

// let data1 = new details("mani","Student")


// Add item
function addItem(e){
  e.preventDefault();

  
  // Get input value
  var newItem1 = document.getElementById('item1').value;
  var newItem2 = document.getElementById('item2').value;
  //   var newItem3 = document.querySelector('.item3').value;
  // var newItem3 = " "
  // var newItem = newItem1+" - "+newItem2
  // localStorage.setItem(newItem1,newItem2)
  
  //adding data to local storage through Object
  var data = new details(newItem1,newItem2)

  //Serialising the object data
  let obj_serialised = JSON.stringify(data)
  // console.log(obj_serialised)

  //deserialising the object data   localStorage.getItem("data")
  let obj_deserialised = JSON.parse(obj_serialised)
  console.log(obj_deserialised)

  // var app="details"+(i++)

  //storing in Local Storage
  localStorage.setItem(newItem1,obj_serialised)

  //adding new list for making the deletion in local storage '-'
  var lii = document.createElement("li")
  lii.classname="list-group-item inner"
  lii.appendChild(document.createTextNode(newItem1))

  // Create new li element
  var li = document.createElement('li');

  // Add class
  li.className = 'list-group-item';

  // Add text node with input value
  li.appendChild(lii)
  li.appendChild(document.createTextNode(newItem2));
 
//   li.appendChild(document.createTextNode("-"));
//   li.appendChild(document.createTextNode(newItem2));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('Delete'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);


  // creating edit button
  var editbtn=document.createElement("button")

  editbtn.style.backgroundColor="green"

  editbtn.className="btn btn-danger btn-sm float-right delete edit"

  editbtn.appendChild(document.createTextNode("Edit"))

  li.append(editbtn)

  itemList.appendChild(li)

  //clearing contents of form
  //   var all=documnet.querySelectorAll(".form-control")
  form.reset();

}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      if(e.target.classList.contains('edit'))
      {
      var li = e.target.parentElement;
      var mydoubt=li.firstElementChild.textContent
      // console.log(mydoubt)
      // var preval=localStorage.getItem(mydoubt)
      console.log(mydoubt)

      const storedData = localStorage.getItem(mydoubt);

      // Check if the data exists in localStorage
      if (storedData) 
      {
        // Parse the stored data if it's in JSON format
        const parsedData = JSON.parse(storedData);

        document.getElementById("item1").value=parsedData.name
        document.getElementById("item2").value=parsedData.gmail
        
        // Access the properties using dot notation
        console.log(parsedData.name); // Output: 'MANI KANTH BOLEM'
        console.log(parsedData.gmail); // Output: 'manibolem324@gmail.com'
      } 
      else 
      {
        console.log("Data not found in localStorage with the key 'getName'");
      }

      itemList.removeChild(li)
      localStorage.removeItem(mydoubt)
     }
     else{
      var li = e.target.parentElement;
      var mydoubt=li.firstElementChild.textContent
      console.log(mydoubt)
      itemList.removeChild(li)
      localStorage.removeItem(mydoubt)
     }
    }
  }

  // function chnaging( name,email)
  // {

  // }
  
  // var editing=document.querySelector()
  //editing
  // function removeItem(e){
  //   if(e.target.classList.contains('delete')){
  //     if(confirm('Do you want to edit ?')){
  //       var li = e.target.parentElement;
  //       var mydoubt=li.firstElementChild.textContent
  //       // console.log(mydoubt)
  //       itemList.removeChild(li);
  //       var prevval=localStorage.getItem(mydoubt);
  //       console.log(preval)
  //       localStorage.removeItem(mydoubt)

  //     }
  //   }
  // }
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