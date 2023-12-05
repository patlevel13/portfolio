$(document).ready(function () {
  // open modal
$('#open-modal').click(function () {
    $('#modal-to-open').css({
        'display': 'block',
    });
    });
    /*close modal*/
    $('#close-modal').click(function () {
        $('#modal-to-open').css({
            'display':'none',
        });
    });
});
