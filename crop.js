/*$(document).ready(function(){
    $('#image').Jcrop({
        onChange: showCoords,
        onSelect: showCoords
    });
});*/
    function showCoords(c)
{
    $('#x').val(c.x);
    $('#y').val(c.y);
    $('#w').val(c.w);
    $('#h').val(c.h);
}; 