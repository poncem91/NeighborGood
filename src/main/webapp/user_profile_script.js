// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

function deleteRow(row) {
    if (confirm("Are you sure that you want to delete this already published task?")) {
        var rowIndex = row.parentNode.parentNode.rowIndex;
        document.getElementById("need-help").deleteRow(rowIndex);
    }
}

function deleteInProgress() {
    window.alert("You cannot delete an 'IN PROGRESS' task.")
}

function editInProgress() {
    window.alert("You cannot edit an 'IN PROGRESS' task.")
}

function completeTask(row) {
    if (confirm("Are you sure that you have already completed the task?")) {
        var rowIndex = row.parentNode.parentNode.rowIndex;
        document.getElementById("offer-help").deleteRow(rowIndex);
    }
}

function showNeedHelp() {
    document.getElementById("need-help").style.display = "table";
    document.getElementById("create").style.display = "block";
    document.getElementById("offer-help").style.display = "none";
    document.getElementById("need-help-button").style.backgroundColor = "#3e8e41";
    document.getElementById("offer-help-button").style.backgroundColor = "#4CAF50";
    displayNeedHelpTasks();
}

function showOfferHelp() {
    document.getElementById("need-help").style.display = "none";
    document.getElementById("create").style.display = "none";
    document.getElementById("offer-help").style.display = "table";
    document.getElementById("need-help-button").style.backgroundColor = "#4CAF50";
    document.getElementById("offer-help-button").style.backgroundColor = "#3e8e41";
}

function showModal() {
    var modal = document.getElementById("createTaskModal");
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("createTaskModal");
    modal.style.display = "none";
}

// If the user clicks outside of the modal, closes the modal directly
window.onclick = function(event) {
    var modal = document.getElementById("createTaskModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

async function displayNeedHelpTasks() {
    const response = await fetch("/mytasks/needhelp");
    const taskResponse = await response.json();
    const needHelpTable = document.getElementById("need-help");
    needHelpTable.innerHTML = "";
    var headerRow = document.createElement("tr");
    var headers = ["Task Overview", "Helper", "Status", "Edit", "Delete"];
    for (var index = 0; index < headers.length; index++) {
        var th = document.createElement("th");
        th.appendChild(document.createTextNode(headers[index]));
        headerRow.appendChild(th);
    }
    needHelpTable.appendChild(headerRow);
    for (var index = 0; index < taskResponse.length; index++) {
        var tr = document.createElement("tr");
        var task = taskResponse[index];
        var data = [task.detail, task.helper, task.status];
        for (var i = 0; i < data.length; i++) {
            var td = document.createElement("td");
            td.appendChild(document.createTextNode(data[i]));
            tr.appendChild(td);
        }
        var editTd = document.createElement("td");
        var editBtn = document.createElement("button");
        editBtn.className = "edit-task";
        editBtn.addEventListener("click", showModal);
        editBtn.innerHTML = '<i class="fa fa-edit"></i>';
        editTd.appendChild(editBtn);
        var deleteTd = document.createElement("td");
        var deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-task";
        deleteBtn.addEventListener("click", deleteInProgress);
        deleteBtn.innerHTML = '<i class="fa fa-trash-o"></i>';
        deleteTd.appendChild(deleteBtn);
        tr.appendChild(editTd);
        tr.appendChild(deleteTd);
        needHelpTable.appendChild(tr);
    }
}