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