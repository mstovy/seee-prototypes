function remove(el) {
    var element = el;
    var title = $(element).attr('title');
    console.log(title);
    $('.mutliSelect input[value="' + title + '"]').prop("checked", false);
    element.remove();
}