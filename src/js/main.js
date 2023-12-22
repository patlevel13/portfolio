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
// --------------effect matrix----------
// geting canvas by Boujjou Achraf
var c = document.querySelector("#c");
var ctx = c.getContext("2d");

//making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

//chinese characters - taken from the unicode charset
var matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
//converting the string into an array of single characters
matrix = matrix.split("");

var font_size = 10;
var columns = c.width/font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for(var x = 0; x < columns; x++)
    drops[x] = 1; 

//drawing the characters
function draw()
{
    //Black BG for the canvas
    //translucent BG to show trail
    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "green";//green text
    ctx.font = font_size + "px arial";
    //looping over drops
    for(var i = 0; i < drops.length; i++)
    {
        //a random chinese character to print
        var text = matrix[Math.floor(Math.random()*matrix.length)];
        //x = i*font_size, y = value of drops[i]*font_size
        ctx.fillText(text, i*font_size, drops[i]*font_size);

        //sending the drop back to the top randomly after it has crossed the screen
        //adding a randomness to the reset to make the drops scattered on the Y axis
        if(drops[i]*font_size > c.height && Math.random() > 0.975)
            drops[i] = -2;

        //incrementing Y coordinate
        drops[i]++;
    }
}
setInterval(draw, 30);
/*---------------- fin effet matrix --------------

/*send mail with ajax*/
$('#send-email').click(function(e){
    e.preventDefault();
    var data = {
        email: $('#email').val(),
        name: $('#name').val(),
        firstname: $('#firstname').val(),
        message: $('#message').val()
    };
    // Ajax
    $.ajax({
        url: "mail.php",
        type: 'POST',
        data: data,
        success: function(data) {
            $('#js_alert_success').css({'display' : 'block'});
            setTimeout(function(){
                $('#js_alert_success').css({'display' : 'none'});
                $('#email').val("");
                $('#name').val("");
                $('#firstname').val("");
                $('#message').val("")
            }, 3000);
        },
        error: function(data) {
            $('#js_alert_danger').css({'display' : 'block'});
            setTimeout(function(){
                $('#js_alert_danger').css({'display' : 'none'});
                $('#email').val("");
                $('#name').val("");
                $('#firstname').val("");
                $('#message').val("")
            }, 3000);
        }
    });
});


