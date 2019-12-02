
function search() {
    var input = document.getElementById("input");
    var filter = input.value.toUpperCase();
    var ul = document.getElementById("vid-ul");
    var li = ul.getElementsByTagName("li");
    var a, i, txtValue;
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}