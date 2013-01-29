$(document).ready(function() {


    $('.blurValue').hide();
	$('.blurIcon').click(function() {
        if ($('.blurValue').is(":hidden")) {
            $('.blurValue').slideDown('slow');
            $('.blurValue').css("visibility", "visible");
        }  
        else {
            $('.blurValue').hide();
        } 
        });



    $('.bcValue').hide();
    $('.bcIcon').click(function() {
        if ($('.bcValue').is(":hidden")) {
            $('.bcValue').slideDown('slow');
            $('.bcValue').css("visibility", "visible");
            //$('.bcIcon').hide();
        }  
        else {
            $('.bcValue').hide();
        } 
        });


    $('.caValue').hide();
    $('.caIcon').click(function() {
        if ($('.caValue').is(":hidden")) {
            $('.caValue').slideDown('slow');
            $('.caValue').css("visibility", "visible");
            //$('.bcIcon').hide();
        }  
        else {
            $('.caValue').hide();
        } 
        });

    $('.cropValue').hide();
    $('.cropIcon').click(function() {
        if ($('.cropValue').is(":hidden")) {
            $('.cropValue').slideDown('slow');
            $('.cropValue').css("visibility", "visible");
            //$('.bcIcon').hide();
        }  
        else {
            $('.cropValue').hide();
        } 
        });

    $('.glowValue').hide();
    $('.glowIcon').click(function() {
        if ($('.glowValue').is(":hidden")) {
            $('.glowValue').slideDown('slow');
            $('.glowValue').css("visibility", "visible");
        }  
        else {
            $('.glowValue').hide();
        } 
        });
    
    $('.hslValue').hide();
    $('.hslIcon').click(function() {
        if ($('.hslValue').is(":hidden")) {
            $('.hslValue').slideDown('slow');
            $('.hslValue').css("visibility", "visible");
        }  
        else {
            $('.hslValue').hide();
        } 
        });



    $('.lightenValue').hide();
    $('.lightenIcon').click(function() {
        if ($('.lightenValue').is(":hidden")) {
            $('.lightenValue').slideDown('slow');
            $('.lightenValue').css("visibility", "visible");
        }  
        else {
            $('.lightenValue').hide();
        } 
        });


    $('.mosaicValue').hide();
    $('.mosaicIcon').click(function() {
        if ($('.mosaicValue').is(":hidden")) {
            $('.mosaicValue').slideDown('slow');
            $('.mosaicValue').css("visibility", "visible");
        }  
        else {
            $('.mosaicValue').hide();
        } 
        });


    $('.noiseValue').hide();
    $('.noiseIcon').click(function() {
        if ($('.noiseValue').is(":hidden")) {
            $('.noiseValue').slideDown('slow');
            $('.noiseValue').css("visibility", "visible");
        }  
        else {
            $('.noiseValue').hide();
        } 
        });





    $('.posterValue').hide();
    $('.posterIcon').click(function() {
        if ($('.posterValue').is(":hidden")) {
            $('.posterValue').slideDown('slow');
            $('.posterValue').css("visibility", "visible");
        }  
        else {
            $('.posterValue').hide();
        } 
        });

    $('.sharpenValue').hide();
    $('.sharpenIcon').click(function() {
        if ($('.sharpenValue').is(":hidden")) {
            $('.sharpenValue').slideDown('slow');
            $('.sharpenValue').css("visibility", "visible");
        }  
        else {
            $('.sharpenValue').hide();
        } 
        });   

    $('.unsharpValue').hide();
    $('.unsharpIcon').click(function() {
        if ($('.unsharpValue').is(":hidden")) {
            $('.unsharpValue').slideDown('slow');
            $('.unsharpValue').css("visibility", "visible");
        }  
        else {
            $('.unsharpValue').hide();
        } 
        });



	$('li').hover(function(){
		$(this).addClass('hover');
	}, function(){$(this).removeClass();
	});

    $('img').hover(function() {
        $(this).addClass('hoverImg');
    }, function() {$(this).removeClass();
    });
   
    



});

function resetImg() {
    Pixastic.revert(document.getElementById('image'));
    };

function blurImg() {
    Pixastic.process(document.getElementById("image"), "blurfast", { amount: $('#sliderBl').val()});
};

function brightImg() {
    Pixastic.process(document.getElementById("image"), "brightness", {
        brightness : $("#sliderBr").val(),
        contrast : $("#sliderCon").val(),
        //legacy : $("#value-legacy").attr("checked")
    });
};

function colorImg()  {
    Pixastic.process(document.getElementById("image"), "coloradjust", {red: $('#sliderRe').val(), green: $('#sliderGr').val(), blue: $('#sliderBlue').val()});
};



function cropImg()  {
    Pixastic.process(document.getElementById("image"), "crop", {rect: {left: $('#x').val(), top: $('#y').val(), width: $('#w').val(), height: $('#h').val()}});
};


function desaturateImg()  {
    Pixastic.process(document.getElementById("image"), "desaturate", {average : false});
};

function edgeImg()  {
    Pixastic.process(document.getElementById("image"), "edges2");
};

function flipHImg()  {
    Pixastic.process(document.getElementById("image"), "fliph");
};

function flipVImg()  {
    Pixastic.process(document.getElementById("image"), "flipv");
};

function glowImg()  {
    Pixastic.process(document.getElementById("image"), "glow", {amount: $('#sliderGlowA').val(), radius: $('#sliderGlowR').val()});
};

function hslImg()  {
    Pixastic.process(document.getElementById("image"), "hsl", {hue: $('#sliderHue').val(), saturation: $('#sliderSat').val(), lightness: $('#sliderLight').val()});
};

function invertImg() {
    Pixastic.process(document.getElementById("image"), "invert");
};

function lightenImg() {
    Pixastic.process(document.getElementById("image"), "lighten", { amount: $('#sliderLighten').val()});
};

function mosaicImg()  {
    Pixastic.process(document.getElementById("image"), "mosaic", {blockSize: $('#sliderMosaic').val()});
};

function noiseImg()  {
    Pixastic.process(document.getElementById("image"), "noise", {mono: true, amount: $('#sliderNoiseA').val(), strength: $('#sliderNoiseS').val()});
};

function posterImg()  {
    Pixastic.process(document.getElementById("image"), "posterize", {levels: $('#sliderPoster').val()});
};

function rotateImg()  {
    Pixastic.process(document.getElementById("image"), "rotate", {angle: 90});
};

function sharpenImg()  {
    Pixastic.process(document.getElementById("image"), "sharpen", {amount : $('#sliderSharpen').val()});
};

function solarizeImg()  {
    Pixastic.process(document.getElementById("image"), "solarize");
};

function unsharpImg()  {
    Pixastic.process(document.getElementById("image"), "unsharpmask", {amount : $('#sliderUnsharpA').val(), radius: $('#sliderRadius').val(), threshold: $('#sliderThres').val()});
};
