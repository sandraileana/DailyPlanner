var actualDate = moment().format('LLLL');
$('#currentDay').html(actualDate);

$(document).ready(function(){
    $('.saveBtn').on('click', function (){
        var text = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');
    
        localStorage.setItem(time, text);
    })
    
    $('#h7 .description').val(localStorage.getItem('h7'));
    $('#h8 .description').val(localStorage.getItem('h8'));
    $('#h9 .description').val(localStorage.getItem('h9'));
    $('#h10 .description').val(localStorage.getItem('h10'));
    $('#h11 .description').val(localStorage.getItem('h11'));
    $('#h12 .description').val(localStorage.getItem('h12'));
    $('#h13 .description').val(localStorage.getItem('h13'));
    $('#h14 .description').val(localStorage.getItem('h14'));
    $('#h15 .description').val(localStorage.getItem('h15'));
    $('#h16 .description').val(localStorage.getItem('h16'));
    $('#h17 .description').val(localStorage.getItem('h17'));
    $('#h18 .description').val(localStorage.getItem('h18'));

    function Tracktime(){
        var actualTime = moment().hour();
        $('.time-block').each(function(){
            var timeblock = parseInt($(this).attr('id').split('h')[1]);
            if (timeblock < actualTime){
                $(this).removeClass('future');
                $(this).removeClass('present');
                $(this).addClass('past');
            } else if (timeblock === actualTime){
                $(this).removeClass('future');
                $(this).addClass('present');
                $(this).removeClass('past');
            } else {
                $(this).addClass('future');
                $(this).removeClass('present');
                $(this).removeClass('past');
            }

        })
    }

    Tracktime();

})
