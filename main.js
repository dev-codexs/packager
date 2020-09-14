

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).val()).select();
    document.execCommand("copy");
    $temp.remove();
    $.notify("Copied !!","success");
}

$(document).ready(function(){
    $('#package').on('click', function(){
        $('#out').val(``)
        $('#cover-spin').show(0)
       $.ajax({
            url: 'https://codex-server.devcodex.repl.co/codex',
            method: 'POST',
            data: { js: `${($('#ori').val())}` },
            success: function(data, textStatus, jqXHR) {
                $('#out').val(JSON.parse(data.result))
                $('#cover-spin').hide(0)
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert('Error occurred!');
            }
    })
})
    $('#ori').val(`alert('Safe, me !!')`)
    $('#out').val(``)
})