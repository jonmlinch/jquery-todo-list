// need to create function to add form iput to list
//function to clear form
//function for completion checkbox
//function for what happens when box is checkeds
console.log('Hello World');

document.addEventListener("DOMContentLoaded", function(){
	console.log("dom content loaded");
	$("#submit").on("click", function(e){
		e.preventDefault();
		addItem();
		deleteButton();
		removeItem();
		clearInput();
		strikeOut();
	});
	
	$("#task").on("click", function(){
		$('#task').val("");
	});

	
	// $("li").on("click", function(){
	// 	$("li").addClass('checked');
	// 	console.log('checked!')
	// });
});

function addItem(){
		var newTask = $("<li></li>");
		newTask.text($('#task').val());
		$("ul").append(newTask);
		console.log('Item Submitted')
	}

function deleteButton(){
  var button = $("<button></button>");
  button.text("Delete");
  button.addClass('close');
  $("li").append(button);
  console.log('Delete Button made!');
 }

function removeItem(){
	$("button").on('click', function(){
		$(this).parent('li').remove();
	})
}

function clearInput(){
	$('#task').val("");
}

function strikeOut(){
	$("li").on('click', function(){
		$(this).toggleClass('checked');
		console.log("checked!");
	})
}