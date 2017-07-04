$(function(){
    $('#btn-send').click(sendForm)
});

function sendForm (e){
    e.preventDefault();
    $.ajax({
    url: "https://formspree.io/Kostela1992@gmail.com", 
    method: "POST",
    data: {
        name: $('#name_').val(),
        email: $('#e-mail').val(),
        phone: $('#phone').val(),
        comment: $('#comment').val()
        
    },
    dataType: "json"
})
.done(function(){
    $('form').html('<h1>Thank you</h1>')
});
}
