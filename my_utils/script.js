

var taskInput = document.getElementById("new-task"); // Recherche l'id de l'input tache
var addButton = document.getElementsByTagName("button")[0];//premier boutton de l'ajout tâche
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //Recherche l'id incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks"); //Recherche l'id complete-tasks

//Création d'une nouvelle tâche

var createNewTaskElement = function(taskString) {
	// Crée la liste avec la balise li
  var listItem = document.createElement("li");
  // crée un checkbox
  var checkBox = document.createElement("input");
  // Crée un label pour le nom de la tâche
  var label = document.createElement("label");
  // Crée un input quand edition
  var editInput = document.createElement("input");
  // crée un boutton pour editer la tâche
  var editButton = document.createElement("button");
  // crée un boutton pour l'effacer
  var deleteButton = document.createElement("button");
  
  //Modifie chaque élements
  checkBox.type = "checkBox";
  editInput.type = "text";
  
  editButton.innerText = "Editer";
  editButton.className = "edit";
  deleteButton.innerText = "Supprimer";
  deleteButton.className = "delete";
  
  label.innerText = taskString;
  
  // Recherche les li par leurs élements
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

	return listItem;
}


//Ajout d'une tâche
var addTask = function() {
  //Crée la tâche par rapport à ce qui est renseigner dans l'input "ajouter une tache"
  var listItem = createNewTaskElement(taskInput.value);
  //Ajout de la tache dans la liste de tache a faire
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
  // L'input vaut string
  taskInput.value = "";
}

//Editer une tache existante
var editTask = function() {
  
var listItem = this.parentNode;
  // Recherche les balises
var editInput = listItem.querySelector("input[type=text]");
var label = listItem.querySelector("label");
  // ou la class contient editMode
var containsClass = listItem.classList.contains("editMode");
  
  
  // si la class du parent est editMode
  if (containsClass) {
    //Modifie la valeur et on l'integre dans l'input
      label.innerText = editInput.value;
  } else {
      // on modifie la class pour devenir editMode
     	editInput.value = label.innerText;
  }
  //Toggle .editMode on the parent 
  listItem.classList.toggle("editMode");
}

//Suprime tache existante
var deleteTask = function () {

		//Suprimmer le parent dans le ul
  	var listItem = this.parentNode;
  	var ul = listItem.parentNode;
  
  	ul.removeChild(listItem);
}

//Si la tache est éffectué
var taskCompleted = function() {

  //i la checkbox est coché
  //Il bascule dans la liste "FAIT"
   var listItem = this.parentNode;
   completedTasksHolder.appendChild(listItem);
   bindTaskEvents(listItem, taskIncomplete);
}


//Si la tache n'est pas éffectué
var taskIncomplete = function() {
     //Si la check box n'est pas coché
      //Il bascule dans la liste "A FAIRE"
  var listItem = this.parentNode;
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
}


//Si on clique sur le boutton ajouter alors ca execute la fonction addTask (Ajouter tâche)
addButton.addEventListener("click", addTask); 


var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
  	// Recherche les boutton dans les listes
  	var checkBox = taskListItem.querySelector('input[type="checkbox"]');
    var editButton = taskListItem.querySelector("button.edit");
    var deleteButton = taskListItem.querySelector("button.delete");
		//Si on clique sur le boutton Editer alors ça execute la fonction editTask
  	editButton.onclick = editTask;
		//Si on clique sur le boutton Supprimer alors ça execute la fonction deleteTask
 		deleteButton.onclick = deleteTask;
		//Si on coche ou décoche la checkbox alors ça execute le paramètre
  	checkBox.onchange = checkBoxEventHandler;
  
}

//Affiche les tâches par nombre de tâche incomplete
for (var i = 0; i < incompleteTasksHolder.children.length; i ++) {
}

//Affiche les tâches par nombre de tâche complete
for (var i = 0; i < completedTasksHolder.children.length; i ++) {
}