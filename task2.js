var rowno = 1;
const icon = "C:\\Users\\hp\\Desktop\\LGMVIP\\Task2-Registration form\\icon.png";
function display() {
    var gender;
    let name = document.getElementById('Name').value;
    let course = document.getElementById('Course').value;
    let img = document.getElementById('Image').value;
    if (name == "" || course == "") {
        alert("Please fill the essential details");
    }
    else {
        let m = document.getElementById('Male');
        let f = document.getElementById('Female');
        let o = document.getElementById('Others');
        let x = document.getElementById('spl');
        let y = document.getElementById('spl2');
        let z = document.getElementById('spl3');
        const specialities = [];
        if (x.checked) {
            specialities.push(x.value);
        }
        if (y.checked) {
            specialities.push(y.value);
        }
        if (z.checked) {
            specialities.push(z.value);
        }
        if (specialities.length == 0) {
            specialities.push("none");
        }
        if ((m.checked) == true) {
            gender = m.value;
        }
        else if ((f.checked) == true) {
            gender = f.value;
        }
        else if ((o.checked) == true) {
            gender = o.value;
        }
        else {
            alert("Please select a gender");
        }
        let table = document.getElementById('infotable');
        var row = table.insertRow(rowno);
        var col1 = row.insertCell(0);
        var col2 = row.insertCell(1);
        col1.innerHTML = "<b> Name: </b>" + name + "<br> <b> Course: </b>" + course + "<br> <b> Gender: </b>" + gender + "<br> <b> Spl Areas: </b> " + specialities
        col2.innerHTML = "<img style='margin-left:15px;' src='" + img + "' onerror='ImgWrong(this);' width='160px' height='140px' alt='unable to load image'>"
        rowno = rowno + 1;
        document.getElementById('Name').value = "";
        document.getElementById('Course').value = "";
        document.getElementById('Image').value = "";
        m.checked = false;
        f.checked = false;
        o.checked = false;
        x.checked = false;
        y.checked = false;
        z.checked = false;
    }
}
function clean() {
    document.getElementById('Male').checked=false;
    document.getElementById('Female').checked=false;
    document.getElementById('Others').checked=false;
    document.getElementById('spl').checked=false;
    document.getElementById('spl2').checked=false;
    document.getElementById('spl3').checked=false;
    document.getElementById('Name').value = "";
    document.getElementById('Course').value = "";
    document.getElementById('Image').value = "";
}
function ImgWrong(Pic)
{
   Pic.src=icon;
   Pic.onerror=null;
   return true;
}