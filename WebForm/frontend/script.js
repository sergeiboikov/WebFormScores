var selectedRow = null

function onFormSubmit(){
    formData = readFormData();
    if(selectedRow == null)
        insertNewRecord(formData);
        else 
        updateRecord(formData);
}

function onFormClear(){
    formData = readFormData();
    resetForm();
}

function readFormData(){
    var formData = {};
    formData["coursename"] = document.getElementById("coursename").value;
    formData["reviewername"] = document.getElementById("reviewername").value;
    formData["studentname"] = document.getElementById("studentname").value;
    formData["taskname"] = document.getElementById("taskname").value;
    formData["subtaskname"] = document.getElementById("subtaskname").value;
    formData["mark"] = document.getElementById("mark").value;
    formData["nameconv"] = document.getElementById("nameconv").value;
    formData["sarg"] = document.getElementById("sarg").value;
    formData["aliases"] = document.getElementById("aliases").value;
    formData["determsorting"] = document.getElementById("determsorting").value;
    formData["ontime"] = document.getElementById("ontime").value;
    formData["extra"] = document.getElementById("extra").value;
    formData["comment"] = document.getElementById("comment").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("scoresList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.coursename;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.reviewername;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.studentname;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.taskname;

    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.subtaskname;

    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.mark;

    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.nameconv;

    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.sarg;

    cell9 = newRow.insertCell(8);
    cell9.innerHTML = data.aliases;

    cell10 = newRow.insertCell(9);
    cell10.innerHTML = data.determsorting;

    cell11 = newRow.insertCell(10);
    cell11.innerHTML = data.ontime;

    cell12 = newRow.insertCell(11);
    cell12.innerHTML = data.extra;

    cell13 = newRow.insertCell(12);
    cell13.innerHTML = data.comment;

    cell13 = newRow.insertCell(13);
    cell13.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                        <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("coursename").value = "";
    document.getElementById("reviewername").value = "";
    document.getElementById("studentname").value = "";
    document.getElementById("taskname").value = "";
    document.getElementById("subtaskname").value = "";
    document.getElementById("mark").value = "";
    document.getElementById("nameconv").value = "";
    document.getElementById("sarg").value = "";
    document.getElementById("aliases").value = "";
    document.getElementById("determsorting").value = "";
    document.getElementById("ontime").value = "";
    document.getElementById("extra").value = "";
    document.getElementById("comment").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("coursename").value = selectedRow.cells[0].innerHTML;
    document.getElementById("reviewername").value = selectedRow.cells[1].innerHTML;
    document.getElementById("studentname").value = selectedRow.cells[2].innerHTML;
    document.getElementById("taskname").value = selectedRow.cells[3].innerHTML;
    document.getElementById("subtaskname").value = selectedRow.cells[4].innerHTML;
    document.getElementById("mark").value = selectedRow.cells[5].innerHTML;
    document.getElementById("nameconv").value = selectedRow.cells[6].innerHTML;
    document.getElementById("sarg").value = selectedRow.cells[7].innerHTML;
    document.getElementById("aliases").value = selectedRow.cells[8].innerHTML;
    document.getElementById("determsorting").value = selectedRow.cells[9].innerHTML;
    document.getElementById("ontime").value = selectedRow.cells[10].innerHTML;
    document.getElementById("extra").value = selectedRow.cells[11].innerHTML;
    document.getElementById("comment").value = selectedRow.cells[12].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.coursename;
    selectedRow.cells[1].innerHTML = formData.reviewername;
    selectedRow.cells[2].innerHTML = formData.studentname;
    selectedRow.cells[3].innerHTML = formData.taskname;
    selectedRow.cells[4].innerHTML = formData.subtaskname;
    selectedRow.cells[5].innerHTML = formData.mark;
    selectedRow.cells[6].innerHTML = formData.nameconv;
    selectedRow.cells[7].innerHTML = formData.sarg;
    selectedRow.cells[8].innerHTML = formData.aliases;
    selectedRow.cells[9].innerHTML = formData.determsorting;
    selectedRow.cells[10].innerHTML = formData.ontime;
    selectedRow.cells[11].innerHTML = formData.extra;
    selectedRow.cells[12].innerHTML = formData.comment;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById("scoresList").deleteRow(row.rowIndex);
        selectedRow = null;
    }
    
}