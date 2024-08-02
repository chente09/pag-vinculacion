/* play list music button */
$(document).ready(function(){
	
	var obj = document.createElement("audio");
	obj.src = "../pag-vinculacion/audio/audio.mp3";
	obj.volume = 1;
	obj.autoPlay = true;
	obj.preLoad = true;       
	
	$('#playNowBtn').click(function(e){
		var $playNowButton = $(this);																/* button variable */
		var $playlist = $playNowButton.parent().parent();						/* play list section class */
		var $disk			= $playlist.children().children('.disk1');			/* disk image */
		
		if ($disk.hasClass('rotating')) {
			$disk.removeClass('rotating');
			$playNowButton.children('i').removeClass('fa-pause').addClass('fa-play');
			obj.pause();
		} else {
			$disk.addClass('rotating');
			$playNowButton.children('i').removeClass('fa-play').addClass('fa-pause');
			obj.play();
		}
		e.preventDefault();
	});
	
});

/* Musica1 */
$(document).ready(function() {
    var obj = document.createElement("audio");
    obj.src = "../pag-vinculacion/audio/Siestasfeliz.mp3";
    obj.volume = 1;
    obj.autoPlay = true;
    obj.preLoad = true;

    $('#playNowBtn1').click(function(e) {
        var $playNowButton = $(this);  /* button variable */
        var $playlist = $playNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.addClass('rotating');
        $playNowButton.children('i').removeClass('fa-play').addClass('fa-play');
        obj.play();

        e.preventDefault();
    });

    $('#pauseNowBtn1').click(function(e) {
        var $pauseNowButton = $(this); /* button variable */
        var $playlist = $pauseNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.removeClass('rotating');
        $('#playNowBtn1').children('i').removeClass('fa-pause').addClass('fa-play');
        obj.pause();

        e.preventDefault();
    });
});

/* Musica 2 */
$(document).ready(function() {
    var obj = document.createElement("audio");
    obj.src = "../pag-vinculacion/audio/Todoelmundofeliz.mp3";
    obj.volume = 1;
    obj.autoPlay = true;
    obj.preLoad = true;

    $('#playNowBtn2').click(function(e) {
        var $playNowButton = $(this);  /* button variable */
        var $playlist = $playNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.addClass('rotating');
        $playNowButton.children('i').removeClass('fa-play').addClass('fa-play');
        obj.play();

        e.preventDefault();
    });

    $('#pauseNowBtn2').click(function(e) {
        var $pauseNowButton = $(this); /* button variable */
        var $playlist = $pauseNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.removeClass('rotating');
        $('#playNowBtn1').children('i').removeClass('fa-pause').addClass('fa-play');
        obj.pause();

        e.preventDefault();
    });
});

/* Musica 3 */
$(document).ready(function() {
    var obj = document.createElement("audio");
    obj.src = "../pag-vinculacion/audio/levantandolasmanos.mp3";
    obj.volume = 1;
    obj.autoPlay = true;
    obj.preLoad = true;

    $('#playNowBtn3').click(function(e) {
        var $playNowButton = $(this);  /* button variable */
        var $playlist = $playNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.addClass('rotating');
        $playNowButton.children('i').removeClass('fa-play').addClass('fa-play');
        obj.play();

        e.preventDefault();
    });

    $('#pauseNowBtn3').click(function(e) {
        var $pauseNowButton = $(this); /* button variable */
        var $playlist = $pauseNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.removeClass('rotating');
        $('#playNowBtn1').children('i').removeClass('fa-pause').addClass('fa-play');
        obj.pause();

        e.preventDefault();
    });
});

/* Musica 4 */
$(document).ready(function() {
    var obj = document.createElement("audio");
    obj.src = "../pag-vinculacion/audio/mibarco.mp3";
    obj.volume = 1;
    obj.autoPlay = true;
    obj.preLoad = true;

    $('#playNowBtn4').click(function(e) {
        var $playNowButton = $(this);  /* button variable */
        var $playlist = $playNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.addClass('rotating');
        $playNowButton.children('i').removeClass('fa-play').addClass('fa-play');
        obj.play();

        e.preventDefault();
    });

    $('#pauseNowBtn4').click(function(e) {
        var $pauseNowButton = $(this); /* button variable */
        var $playlist = $pauseNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.removeClass('rotating');
        $('#playNowBtn1').children('i').removeClass('fa-pause').addClass('fa-play');
        obj.pause();

        e.preventDefault();
    });
});

/* Musica 5 */
$(document).ready(function() {
    var obj = document.createElement("audio");
    obj.src = "../pag-vinculacion/audio/soygrande.mp3";
    obj.volume = 1;
    obj.autoPlay = true;
    obj.preLoad = true;

    $('#playNowBtn5').click(function(e) {
        var $playNowButton = $(this);  /* button variable */
        var $playlist = $playNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.addClass('rotating');
        $playNowButton.children('i').removeClass('fa-play').addClass('fa-play');
        obj.play();

        e.preventDefault();
    });

    $('#pauseNowBtn5').click(function(e) {
        var $pauseNowButton = $(this); /* button variable */
        var $playlist = $pauseNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.removeClass('rotating');
        $('#playNowBtn1').children('i').removeClass('fa-pause').addClass('fa-play');
        obj.pause();

        e.preventDefault();
    });
});


/* Musica 6 */
$(document).ready(function() {
    var obj = document.createElement("audio");
    obj.src = "../pag-vinculacion/audio/elpatio.mp3";
    obj.volume = 1;
    obj.autoPlay = true;
    obj.preLoad = true;

    $('#playNowBtn6').click(function(e) {
        var $playNowButton = $(this);  /* button variable */
        var $playlist = $playNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.addClass('rotating');
        $playNowButton.children('i').removeClass('fa-play').addClass('fa-play');
        obj.play();

        e.preventDefault();
    });

    $('#pauseNowBtn6').click(function(e) {
        var $pauseNowButton = $(this); /* button variable */
        var $playlist = $pauseNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.removeClass('rotating');
        $('#playNowBtn1').children('i').removeClass('fa-pause').addClass('fa-play');
        obj.pause();

        e.preventDefault();
    });
});

/* Musica 7 */
$(document).ready(function() {
    var obj = document.createElement("audio");
    obj.src = "../pag-vinculacion/audio/activacion.mp3";
    obj.volume = 1;
    obj.autoPlay = true;
    obj.preLoad = true;

    $('#playNowBtn7').click(function(e) {
        var $playNowButton = $(this);  /* button variable */
        var $playlist = $playNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.addClass('rotating');
        $playNowButton.children('i').removeClass('fa-play').addClass('fa-play');
        obj.play();

        e.preventDefault();
    });

    $('#pauseNowBtn7').click(function(e) {
        var $pauseNowButton = $(this); /* button variable */
        var $playlist = $pauseNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.removeClass('rotating');
        $('#playNowBtn1').children('i').removeClass('fa-pause').addClass('fa-play');
        obj.pause();

        e.preventDefault();
    });
});

/* Musica 8 */
$(document).ready(function() {
    var obj = document.createElement("audio");
    obj.src = "../pag-vinculacion/audio/iguana.mp3";
    obj.volume = 1;
    obj.autoPlay = true;
    obj.preLoad = true;

    $('#playNowBtn8').click(function(e) {
        var $playNowButton = $(this);  /* button variable */
        var $playlist = $playNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.addClass('rotating');
        $playNowButton.children('i').removeClass('fa-play').addClass('fa-play');
        obj.play();

        e.preventDefault();
    });

    $('#pauseNowBtn8').click(function(e) {
        var $pauseNowButton = $(this); /* button variable */
        var $playlist = $pauseNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.removeClass('rotating');
        $('#playNowBtn1').children('i').removeClass('fa-pause').addClass('fa-play');
        obj.pause();

        e.preventDefault();
    });
});

/* Musica 9 */
$(document).ready(function() {
    var obj = document.createElement("audio");
    obj.src = "../pag-vinculacion/audio/clase.mp3";
    obj.volume = 1;
    obj.autoPlay = true;
    obj.preLoad = true;

    $('#playNowBtn9').click(function(e) {
        var $playNowButton = $(this);  /* button variable */
        var $playlist = $playNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.addClass('rotating');
        $playNowButton.children('i').removeClass('fa-play').addClass('fa-play');
        obj.play();

        e.preventDefault();
    });

    $('#pauseNowBtn9').click(function(e) {
        var $pauseNowButton = $(this); /* button variable */
        var $playlist = $pauseNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.removeClass('rotating');
        $('#playNowBtn1').children('i').removeClass('fa-pause').addClass('fa-play');
        obj.pause();

        e.preventDefault();
    });
});

/* Musica 10 */
$(document).ready(function() {
    var obj = document.createElement("audio");
    obj.src = "../pag-vinculacion/audio/saludarmanos.mp3";
    obj.volume = 1;
    obj.autoPlay = true;
    obj.preLoad = true;

    $('#playNowBtn10').click(function(e) {
        var $playNowButton = $(this);  /* button variable */
        var $playlist = $playNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.addClass('rotating');
        $playNowButton.children('i').removeClass('fa-play').addClass('fa-play');
        obj.play();

        e.preventDefault();
    });

    $('#pauseNowBtn10').click(function(e) {
        var $pauseNowButton = $(this); /* button variable */
        var $playlist = $pauseNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.removeClass('rotating');
        $('#playNowBtn1').children('i').removeClass('fa-pause').addClass('fa-play');
        obj.pause();

        e.preventDefault();
    });
});

/* Musica 11 */
$(document).ready(function() {
    var obj = document.createElement("audio");
    obj.src = "../pag-vinculacion/audio/pez.mp3";
    obj.volume = 1;
    obj.autoPlay = true;
    obj.preLoad = true;

    $('#playNowBtn11').click(function(e) {
        var $playNowButton = $(this);  /* button variable */
        var $playlist = $playNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.addClass('rotating');
        $playNowButton.children('i').removeClass('fa-play').addClass('fa-play');
        obj.play();

        e.preventDefault();
    });

    $('#pauseNowBtn11').click(function(e) {
        var $pauseNowButton = $(this); /* button variable */
        var $playlist = $pauseNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.removeClass('rotating');
        $('#playNowBtn1').children('i').removeClass('fa-pause').addClass('fa-play');
        obj.pause();

        e.preventDefault();
    });
});

/* Musica 12 */
$(document).ready(function() {
    var obj = document.createElement("audio");
    obj.src = "../pag-vinculacion/audio/parati.mp3";
    obj.volume = 1;
    obj.autoPlay = true;
    obj.preLoad = true;

    $('#playNowBtn12').click(function(e) {
        var $playNowButton = $(this);  /* button variable */
        var $playlist = $playNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.addClass('rotating');
        $playNowButton.children('i').removeClass('fa-play').addClass('fa-play');
        obj.play();

        e.preventDefault();
    });

    $('#pauseNowBtn12').click(function(e) {
        var $pauseNowButton = $(this); /* button variable */
        var $playlist = $pauseNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.removeClass('rotating');
        $('#playNowBtn1').children('i').removeClass('fa-pause').addClass('fa-play');
        obj.pause();

        e.preventDefault();
    });
});

/* Musica 13 */
$(document).ready(function() {
    var obj = document.createElement("audio");
    obj.src = "../pag-vinculacion/audio/emociones.mp3";
    obj.volume = 1;
    obj.autoPlay = true;
    obj.preLoad = true;

    $('#playNowBtn13').click(function(e) {
        var $playNowButton = $(this);  /* button variable */
        var $playlist = $playNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.addClass('rotating');
        $playNowButton.children('i').removeClass('fa-play').addClass('fa-play');
        obj.play();

        e.preventDefault();
    });

    $('#pauseNowBtn13').click(function(e) {
        var $pauseNowButton = $(this); /* button variable */
        var $playlist = $pauseNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.removeClass('rotating');
        $('#playNowBtn1').children('i').removeClass('fa-pause').addClass('fa-play');
        obj.pause();

        e.preventDefault();
    });
});

/* Musica 14 */
$(document).ready(function() {
    var obj = document.createElement("audio");
    obj.src = "../pag-vinculacion/audio/dedo.mp3";
    obj.volume = 1;
    obj.autoPlay = true;
    obj.preLoad = true;

    $('#playNowBtn14').click(function(e) {
        var $playNowButton = $(this);  /* button variable */
        var $playlist = $playNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.addClass('rotating');
        $playNowButton.children('i').removeClass('fa-play').addClass('fa-play');
        obj.play();

        e.preventDefault();
    });

    $('#pauseNowBtn14').click(function(e) {
        var $pauseNowButton = $(this); /* button variable */
        var $playlist = $pauseNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.removeClass('rotating');
        $('#playNowBtn1').children('i').removeClass('fa-pause').addClass('fa-play');
        obj.pause();

        e.preventDefault();
    });
});


/* Musica 15 */
$(document).ready(function() {
    var obj = document.createElement("audio");
    obj.src = "../pag-vinculacion/audio/miemocion.mp3";
    obj.volume = 1;
    obj.autoPlay = true;
    obj.preLoad = true;

    $('#playNowBtn15').click(function(e) {
        var $playNowButton = $(this);  /* button variable */
        var $playlist = $playNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.addClass('rotating');
        $playNowButton.children('i').removeClass('fa-play').addClass('fa-play');
        obj.play();

        e.preventDefault();
    });

    $('#pauseNowBtn15').click(function(e) {
        var $pauseNowButton = $(this); /* button variable */
        var $playlist = $pauseNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.removeClass('rotating');
        $('#playNowBtn1').children('i').removeClass('fa-pause').addClass('fa-play');
        obj.pause();

        e.preventDefault();
    });
});


/* Musica 16 */
$(document).ready(function() {
    var obj = document.createElement("audio");
    obj.src = "../pag-vinculacion/audio/sientoadentro.mp3";
    obj.volume = 1;
    obj.autoPlay = true;
    obj.preLoad = true;

    $('#playNowBtn16').click(function(e) {
        var $playNowButton = $(this);  /* button variable */
        var $playlist = $playNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.addClass('rotating');
        $playNowButton.children('i').removeClass('fa-play').addClass('fa-play');
        obj.play();

        e.preventDefault();
    });

    $('#pauseNowBtn16').click(function(e) {
        var $pauseNowButton = $(this); /* button variable */
        var $playlist = $pauseNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.removeClass('rotating');
        $('#playNowBtn1').children('i').removeClass('fa-pause').addClass('fa-play');
        obj.pause();

        e.preventDefault();
    });
});


/* Musica 17 */
$(document).ready(function() {
    var obj = document.createElement("audio");
    obj.src = "../pag-vinculacion/audio/cancionemociones.mp3";
    obj.volume = 1;
    obj.autoPlay = true;
    obj.preLoad = true;

    $('#playNowBtn17').click(function(e) {
        var $playNowButton = $(this);  /* button variable */
        var $playlist = $playNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.addClass('rotating');
        $playNowButton.children('i').removeClass('fa-play').addClass('fa-play');
        obj.play();

        e.preventDefault();
    });

    $('#pauseNowBtn17').click(function(e) {
        var $pauseNowButton = $(this); /* button variable */
        var $playlist = $pauseNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.removeClass('rotating');
        $('#playNowBtn1').children('i').removeClass('fa-pause').addClass('fa-play');
        obj.pause();

        e.preventDefault();
    });
});


/* Musica 18 */
$(document).ready(function() {
    var obj = document.createElement("audio");
    obj.src = "../pag-vinculacion/audio/buenciudadano.mp3";
    obj.volume = 1;
    obj.autoPlay = true;
    obj.preLoad = true;

    $('#playNowBtn18').click(function(e) {
        var $playNowButton = $(this);  /* button variable */
        var $playlist = $playNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.addClass('rotating');
        $playNowButton.children('i').removeClass('fa-play').addClass('fa-play');
        obj.play();

        e.preventDefault();
    });

    $('#pauseNowBtn18').click(function(e) {
        var $pauseNowButton = $(this); /* button variable */
        var $playlist = $pauseNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.removeClass('rotating');
        $('#playNowBtn1').children('i').removeClass('fa-pause').addClass('fa-play');
        obj.pause();

        e.preventDefault();
    });
});


/* Musica 19 */
$(document).ready(function() {
    var obj = document.createElement("audio");
    obj.src = "../pag-vinculacion/audio/estoeslanaturaleza.mp3";
    obj.volume = 1;
    obj.autoPlay = true;
    obj.preLoad = true;

    $('#playNowBtn19').click(function(e) {
        var $playNowButton = $(this);  /* button variable */
        var $playlist = $playNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.addClass('rotating');
        $playNowButton.children('i').removeClass('fa-play').addClass('fa-play');
        obj.play();

        e.preventDefault();
    });

    $('#pauseNowBtn19').click(function(e) {
        var $pauseNowButton = $(this); /* button variable */
        var $playlist = $pauseNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.removeClass('rotating');
        $('#playNowBtn1').children('i').removeClass('fa-pause').addClass('fa-play');
        obj.pause();

        e.preventDefault();
    });
});


/* Musica 20 */
$(document).ready(function() {
    var obj = document.createElement("audio");
    obj.src = "../pag-vinculacion/audio/nuevosabores.mp3";
    obj.volume = 1;
    obj.autoPlay = true;
    obj.preLoad = true;

    $('#playNowBtn20').click(function(e) {
        var $playNowButton = $(this);  /* button variable */
        var $playlist = $playNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.addClass('rotating');
        $playNowButton.children('i').removeClass('fa-play').addClass('fa-play');
        obj.play();

        e.preventDefault();
    });

    $('#pauseNowBtn20').click(function(e) {
        var $pauseNowButton = $(this); /* button variable */
        var $playlist = $pauseNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.removeClass('rotating');
        $('#playNowBtn1').children('i').removeClass('fa-pause').addClass('fa-play');
        obj.pause();

        e.preventDefault();
    });
});



/* Musica 21 */
$(document).ready(function() {
    var obj = document.createElement("audio");
    obj.src = "../pag-vinculacion/audio/diversidadcultural.mp3";
    obj.volume = 1;
    obj.autoPlay = true;
    obj.preLoad = true;

    $('#playNowBtn21').click(function(e) {
        var $playNowButton = $(this);  /* button variable */
        var $playlist = $playNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.addClass('rotating');
        $playNowButton.children('i').removeClass('fa-play').addClass('fa-play');
        obj.play();

        e.preventDefault();
    });

    $('#pauseNowBtn21').click(function(e) {
        var $pauseNowButton = $(this); /* button variable */
        var $playlist = $pauseNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.removeClass('rotating');
        $('#playNowBtn1').children('i').removeClass('fa-pause').addClass('fa-play');
        obj.pause();

        e.preventDefault();
    });
});




/* Musica 22 */
$(document).ready(function() {
    var obj = document.createElement("audio");
    obj.src = "../pag-vinculacion/audio/quesaborsera.mp3";
    obj.volume = 1;
    obj.autoPlay = true;
    obj.preLoad = true;

    $('#playNowBtn22').click(function(e) {
        var $playNowButton = $(this);  /* button variable */
        var $playlist = $playNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.addClass('rotating');
        $playNowButton.children('i').removeClass('fa-play').addClass('fa-play');
        obj.play();

        e.preventDefault();
    });

    $('#pauseNowBtn22').click(function(e) {
        var $pauseNowButton = $(this); /* button variable */
        var $playlist = $pauseNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.removeClass('rotating');
        $('#playNowBtn1').children('i').removeClass('fa-pause').addClass('fa-play');
        obj.pause();

        e.preventDefault();
    });
});

/* Musica 23 */
$(document).ready(function() {
    var obj = document.createElement("audio");
    obj.src = "../pag-vinculacion/audio/colorespais.mp3";
    obj.volume = 1;
    obj.autoPlay = true;
    obj.preLoad = true;

    $('#playNowBtn23').click(function(e) {
        var $playNowButton = $(this);  /* button variable */
        var $playlist = $playNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.addClass('rotating');
        $playNowButton.children('i').removeClass('fa-play').addClass('fa-play');
        obj.play();

        e.preventDefault();
    });

    $('#pauseNowBtn23').click(function(e) {
        var $pauseNowButton = $(this); /* button variable */
        var $playlist = $pauseNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.removeClass('rotating');
        $('#playNowBtn1').children('i').removeClass('fa-pause').addClass('fa-play');
        obj.pause();

        e.preventDefault();
    });
});


/* Musica 24 */
$(document).ready(function() {
    var obj = document.createElement("audio");
    obj.src = "../pag-vinculacion/audio/adentrofuera.mp3";
    obj.volume = 1;
    obj.autoPlay = true;
    obj.preLoad = true;

    $('#playNowBtn24').click(function(e) {
        var $playNowButton = $(this);  /* button variable */
        var $playlist = $playNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.addClass('rotating');
        $playNowButton.children('i').removeClass('fa-play').addClass('fa-play');
        obj.play();

        e.preventDefault();
    });

    $('#pauseNowBtn24').click(function(e) {
        var $pauseNowButton = $(this); /* button variable */
        var $playlist = $pauseNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.removeClass('rotating');
        $('#playNowBtn1').children('i').removeClass('fa-pause').addClass('fa-play');
        obj.pause();

        e.preventDefault();
    });
});


/* Musica 25 */
$(document).ready(function() {
    var obj = document.createElement("audio");
    obj.src = "../pag-vinculacion/audio/abrocierro.mp3";
    obj.volume = 1;
    obj.autoPlay = true;
    obj.preLoad = true;

    $('#playNowBtn25').click(function(e) {
        var $playNowButton = $(this);  /* button variable */
        var $playlist = $playNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.addClass('rotating');
        $playNowButton.children('i').removeClass('fa-play').addClass('fa-play');
        obj.play();

        e.preventDefault();
    });

    $('#pauseNowBtn25').click(function(e) {
        var $pauseNowButton = $(this); /* button variable */
        var $playlist = $pauseNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.removeClass('rotating');
        $('#playNowBtn1').children('i').removeClass('fa-pause').addClass('fa-play');
        obj.pause();

        e.preventDefault();
    });
});


/* Musica 26 */
$(document).ready(function() {
    var obj = document.createElement("audio");
    obj.src = "../pag-vinculacion/audio/canciongusanito.mp3";
    obj.volume = 1;
    obj.autoPlay = true;
    obj.preLoad = true;

    $('#playNowBtn26').click(function(e) {
        var $playNowButton = $(this);  /* button variable */
        var $playlist = $playNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.addClass('rotating');
        $playNowButton.children('i').removeClass('fa-play').addClass('fa-play');
        obj.play();

        e.preventDefault();
    });

    $('#pauseNowBtn26').click(function(e) {
        var $pauseNowButton = $(this); /* button variable */
        var $playlist = $pauseNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.removeClass('rotating');
        $('#playNowBtn1').children('i').removeClass('fa-pause').addClass('fa-play');
        obj.pause();

        e.preventDefault();
    });
});


/* Musica 27 */
$(document).ready(function() {
    var obj = document.createElement("audio");
    obj.src = "../pag-vinculacion/audio/colitagris.mp3";
    obj.volume = 1;
    obj.autoPlay = true;
    obj.preLoad = true;

    $('#playNowBtn27').click(function(e) {
        var $playNowButton = $(this);  /* button variable */
        var $playlist = $playNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.addClass('rotating');
        $playNowButton.children('i').removeClass('fa-play').addClass('fa-play');
        obj.play();

        e.preventDefault();
    });

    $('#pauseNowBtn27').click(function(e) {
        var $pauseNowButton = $(this); /* button variable */
        var $playlist = $pauseNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.removeClass('rotating');
        $('#playNowBtn1').children('i').removeClass('fa-pause').addClass('fa-play');
        obj.pause();

        e.preventDefault();
    });
});



/* Musica 28 */
$(document).ready(function() {
    var obj = document.createElement("audio");
    obj.src = "../pag-vinculacion/audio/gatomiau.mp3";
    obj.volume = 1;
    obj.autoPlay = true;
    obj.preLoad = true;

    $('#playNowBtn28').click(function(e) {
        var $playNowButton = $(this);  /* button variable */
        var $playlist = $playNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.addClass('rotating');
        $playNowButton.children('i').removeClass('fa-play').addClass('fa-play');
        obj.play();

        e.preventDefault();
    });

    $('#pauseNowBtn28').click(function(e) {
        var $pauseNowButton = $(this); /* button variable */
        var $playlist = $pauseNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.removeClass('rotating');
        $('#playNowBtn1').children('i').removeClass('fa-pause').addClass('fa-play');
        obj.pause();

        e.preventDefault();
    });
});




/* Musica 29 */
$(document).ready(function() {
    var obj = document.createElement("audio");
    obj.src = "../pag-vinculacion/audio/pajaritosventana.mp3";
    obj.volume = 1;
    obj.autoPlay = true;
    obj.preLoad = true;

    $('#playNowBtn29').click(function(e) {
        var $playNowButton = $(this);  /* button variable */
        var $playlist = $playNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.addClass('rotating');
        $playNowButton.children('i').removeClass('fa-play').addClass('fa-play');
        obj.play();

        e.preventDefault();
    });

    $('#pauseNowBtn29').click(function(e) {
        var $pauseNowButton = $(this); /* button variable */
        var $playlist = $pauseNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.removeClass('rotating');
        $('#playNowBtn1').children('i').removeClass('fa-pause').addClass('fa-play');
        obj.pause();

        e.preventDefault();
    });
});



/* Musica 30 */
$(document).ready(function() {
    var obj = document.createElement("audio");
    obj.src = "../pag-vinculacion/audio/quesuena.mp3";
    obj.volume = 1;
    obj.autoPlay = true;
    obj.preLoad = true;

    $('#playNowBtn30').click(function(e) {
        var $playNowButton = $(this);  /* button variable */
        var $playlist = $playNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.addClass('rotating');
        $playNowButton.children('i').removeClass('fa-play').addClass('fa-play');
        obj.play();

        e.preventDefault();
    });

    $('#pauseNowBtn30').click(function(e) {
        var $pauseNowButton = $(this); /* button variable */
        var $playlist = $pauseNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.removeClass('rotating');
        $('#playNowBtn1').children('i').removeClass('fa-pause').addClass('fa-play');
        obj.pause();

        e.preventDefault();
    });
});


/* Musica 31 */
$(document).ready(function() {
    var obj = document.createElement("audio");
    obj.src = "../pag-vinculacion/audio/cancionsecreto.mp3";
    obj.volume = 1;
    obj.autoPlay = true;
    obj.preLoad = true;

    $('#playNowBtn31').click(function(e) {
        var $playNowButton = $(this);  /* button variable */
        var $playlist = $playNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.addClass('rotating');
        $playNowButton.children('i').removeClass('fa-play').addClass('fa-play');
        obj.play();

        e.preventDefault();
    });

    $('#pauseNowBtn31').click(function(e) {
        var $pauseNowButton = $(this); /* button variable */
        var $playlist = $pauseNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.removeClass('rotating');
        $('#playNowBtn1').children('i').removeClass('fa-pause').addClass('fa-play');
        obj.pause();

        e.preventDefault();
    });
});




/* Musica 32 */
$(document).ready(function() {
    var obj = document.createElement("audio");
    obj.src = "../pag-vinculacion/audio/escuchahazlo.mp3";
    obj.volume = 1;
    obj.autoPlay = true;
    obj.preLoad = true;

    $('#playNowBtn32').click(function(e) {
        var $playNowButton = $(this);  /* button variable */
        var $playlist = $playNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.addClass('rotating');
        $playNowButton.children('i').removeClass('fa-play').addClass('fa-play');
        obj.play();

        e.preventDefault();
    });

    $('#pauseNowBtn32').click(function(e) {
        var $pauseNowButton = $(this); /* button variable */
        var $playlist = $pauseNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.removeClass('rotating');
        $('#playNowBtn1').children('i').removeClass('fa-pause').addClass('fa-play');
        obj.pause();

        e.preventDefault();
    });
});




/* Musica 33 */
$(document).ready(function() {
    var obj = document.createElement("audio");
    obj.src = "../pag-vinculacion/audio/brincaya.mp3";
    obj.volume = 1;
    obj.autoPlay = true;
    obj.preLoad = true;

    $('#playNowBtn33').click(function(e) {
        var $playNowButton = $(this);  /* button variable */
        var $playlist = $playNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.addClass('rotating');
        $playNowButton.children('i').removeClass('fa-play').addClass('fa-play');
        obj.play();

        e.preventDefault();
    });

    $('#pauseNowBtn33').click(function(e) {
        var $pauseNowButton = $(this); /* button variable */
        var $playlist = $pauseNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.removeClass('rotating');
        $('#playNowBtn1').children('i').removeClass('fa-pause').addClass('fa-play');
        obj.pause();

        e.preventDefault();
    });
});



/* Musica 34 */
$(document).ready(function() {
    var obj = document.createElement("audio");
    obj.src = "../pag-vinculacion/audio/levantamanos.mp3";
    obj.volume = 1;
    obj.autoPlay = true;
    obj.preLoad = true;

    $('#playNowBtn34').click(function(e) {
        var $playNowButton = $(this);  /* button variable */
        var $playlist = $playNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.addClass('rotating');
        $playNowButton.children('i').removeClass('fa-play').addClass('fa-play');
        obj.play();

        e.preventDefault();
    });

    $('#pauseNowBtn34').click(function(e) {
        var $pauseNowButton = $(this); /* button variable */
        var $playlist = $pauseNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.removeClass('rotating');
        $('#playNowBtn1').children('i').removeClass('fa-pause').addClass('fa-play');
        obj.pause();

        e.preventDefault();
    });
});



/* Musica 35 */
$(document).ready(function() {
    var obj = document.createElement("audio");
    obj.src = "../pag-vinculacion/audio/quesuena2.mp3";
    obj.volume = 1;
    obj.autoPlay = true;
    obj.preLoad = true;

    $('#playNowBtn35').click(function(e) {
        var $playNowButton = $(this);  /* button variable */
        var $playlist = $playNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.addClass('rotating');
        $playNowButton.children('i').removeClass('fa-play').addClass('fa-play');
        obj.play();

        e.preventDefault();
    });

    $('#pauseNowBtn35').click(function(e) {
        var $pauseNowButton = $(this); /* button variable */
        var $playlist = $pauseNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.removeClass('rotating');
        $('#playNowBtn1').children('i').removeClass('fa-pause').addClass('fa-play');
        obj.pause();

        e.preventDefault();
    });
});




/* Musica 36 */
$(document).ready(function() {
    var obj = document.createElement("audio");
    obj.src = "../pag-vinculacion/audio/rasgado.mp3";
    obj.volume = 1;
    obj.autoPlay = true;
    obj.preLoad = true;

    $('#playNowBtn36').click(function(e) {
        var $playNowButton = $(this);  /* button variable */
        var $playlist = $playNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.addClass('rotating');
        $playNowButton.children('i').removeClass('fa-play').addClass('fa-play');
        obj.play();

        e.preventDefault();
    });

    $('#pauseNowBtn36').click(function(e) {
        var $pauseNowButton = $(this); /* button variable */
        var $playlist = $pauseNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.removeClass('rotating');
        $('#playNowBtn1').children('i').removeClass('fa-pause').addClass('fa-play');
        obj.pause();

        e.preventDefault();
    });
});




/* Musica 37 */
$(document).ready(function() {
    var obj = document.createElement("audio");
    obj.src = "../pag-vinculacion/audio/cuerpodonde.mp3";
    obj.volume = 1;
    obj.autoPlay = true;
    obj.preLoad = true;

    $('#playNowBtn37').click(function(e) {
        var $playNowButton = $(this);  /* button variable */
        var $playlist = $playNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.addClass('rotating');
        $playNowButton.children('i').removeClass('fa-play').addClass('fa-play');
        obj.play();

        e.preventDefault();
    });

    $('#pauseNowBtn37').click(function(e) {
        var $pauseNowButton = $(this); /* button variable */
        var $playlist = $pauseNowButton.parent().parent(); /* play list section class */
        var $disk = $playlist.children().children('.disk1'); /* disk image */

        $disk.removeClass('rotating');
        $('#playNowBtn1').children('i').removeClass('fa-pause').addClass('fa-play');
        obj.pause();

        e.preventDefault();
    });
});
