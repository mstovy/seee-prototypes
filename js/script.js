function remove(el) {
    var element = el;
    var title = $(element).attr('title');
    $('.mutliSelect input[value="' + title + '"]').prop("checked", false);
    element.remove();
}

function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("multiSelect");
    console.log(div);
    a = div.getElementsByTagName('li');
    console.log(a);
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}