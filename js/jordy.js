
var currentPlaying = null;


/* Musica1 */
$(document).ready(function() {
    var obj = document.createElement("audio");
    obj.src = "../pag-vinculacion/audio/Siestasfeliz.mp3";
    obj.volume = 1;
    obj.autoPlay = false;
    obj.preLoad = true;

    $('#playNowBtn1').click(function(e) {
        if (currentPlaying) {
            currentPlaying.pause(); 
            currentPlaying.currentTime = 0;
        }
        currentPlaying = obj; 
        obj.play();
        e.preventDefault();
    });

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
        e.preventDefault(); 
        $('#playNowBtn1').children('i').removeClass('fa-pause').addClass('fa-play');
        obj.pause();
    });

    $('#downloadBtn1').click(function(e) {
        e.preventDefault(); 
        var link = document.createElement('a');
        link.href = obj.src;
        link.download = 'Siestasfeliz.mp3'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

});

/* Musica 2 */
$(document).ready(function() {
    var obj = document.createElement("audio");
    obj.src = "../pag-vinculacion/audio/Todoelmundofeliz.mp3";
    obj.volume = 1;
    obj.autoPlay = false;
    obj.preLoad = true;

    $('#playNowBtn2').click(function(e) {
        if (currentPlaying) {
            currentPlaying.pause(); 
            currentPlaying.currentTime = 0;
        }
        currentPlaying = obj; 
        obj.play();
        e.preventDefault();
    });


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

    $('#downloadBtn2').click(function(e) {
        e.preventDefault(); // Prevenir la acción por defecto del enlace
        var link = document.createElement('a');
        link.href = obj.src;
        link.download = 'Todoelmundofeliz.mp3'; // Puedes cambiar el nombre del archivo aquí
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

});

/* Musica 3 */
$(document).ready(function() {
    var obj = document.createElement("audio");
    obj.src = "../pag-vinculacion/audio/levantandolasmanos.mp3";
    obj.volume = 1;
    obj.autoPlay = false;
    obj.preLoad = true;


    $('#playNowBtn3').click(function(e) {
        if (currentPlaying) {
            currentPlaying.pause(); 
            currentPlaying.currentTime = 0;
        }
        currentPlaying = obj; 
        obj.play();
        e.preventDefault();
    });

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

    $('#downloadBtn3').click(function(e) {
        e.preventDefault(); 
        var link = document.createElement('a');
        link.href = obj.src;
        link.download = 'levantandolasmanos.mp3'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
        if (currentPlaying) {
            currentPlaying.pause(); 
        }
        currentPlaying = obj; 
        obj.play();
        e.preventDefault();
    });

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
    $('#downloadBtn4').click(function(e) {
        e.preventDefault(); 
        var link = document.createElement('a');
        link.href = obj.src;
        link.download = 'mibarco.mp3'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
        if (currentPlaying) {
            currentPlaying.pause(); 
            currentPlaying.currentTime = 0;
        }
        currentPlaying = obj; 
        obj.play();
        e.preventDefault();
    });

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
    $('#downloadBtn5').click(function(e) {
        e.preventDefault(); 
        var link = document.createElement('a');
        link.href = obj.src;
        link.download = 'soygrande.mp3'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
        if (currentPlaying) {
            currentPlaying.pause(); 
            currentPlaying.currentTime = 0;
        }
        currentPlaying = obj; 
        obj.play();
        e.preventDefault();
    });

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
    $('#downloadBtn6').click(function(e) {
        e.preventDefault(); 
        var link = document.createElement('a');
        link.href = obj.src;
        link.download = 'elpatio.mp3'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
        if (currentPlaying) {
            currentPlaying.pause(); 
            currentPlaying.currentTime = 0;
        }
        currentPlaying = obj; 
        obj.play();
        e.preventDefault();
    });
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
    $('#downloadBtn7').click(function(e) {
        e.preventDefault(); 
        var link = document.createElement('a');
        link.href = obj.src;
        link.download = 'activacion.mp3'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
        if (currentPlaying) {
            currentPlaying.pause(); 
            currentPlaying.currentTime = 0;
        }
        currentPlaying = obj; 
        obj.play();
        e.preventDefault();
    });
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
    $('#downloadBtn8').click(function(e) {
        e.preventDefault(); 
        var link = document.createElement('a');
        link.href = obj.src;
        link.download = 'iguana.mp3'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
        if (currentPlaying) {
            currentPlaying.pause(); 
            currentPlaying.currentTime = 0;
        }
        currentPlaying = obj; 
        obj.play();
        e.preventDefault();
    });
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
    $('#downloadBtn9').click(function(e) {
        e.preventDefault(); 
        var link = document.createElement('a');
        link.href = obj.src;
        link.download = 'clase.mp3'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
        if (currentPlaying) {
            currentPlaying.pause(); 
            currentPlaying.currentTime = 0;
        }
        currentPlaying = obj; 
        obj.play();
        e.preventDefault();
    });
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
    $('#downloadBtn10').click(function(e) {
        e.preventDefault(); 
        var link = document.createElement('a');
        link.href = obj.src;
        link.download = 'saludarmanos.mp3'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
        if (currentPlaying) {
            currentPlaying.pause(); 
            currentPlaying.currentTime = 0;
        }
        currentPlaying = obj; 
        obj.play();
        e.preventDefault();
    });
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
    $('#downloadBtn11').click(function(e) {
        e.preventDefault(); 
        var link = document.createElement('a');
        link.href = obj.src;
        link.download = 'pez.mp3'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
        if (currentPlaying) {
            currentPlaying.pause(); 
            currentPlaying.currentTime = 0;
        }
        currentPlaying = obj; 
        obj.play();
        e.preventDefault();
    });
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
    $('#downloadBtn12').click(function(e) {
        e.preventDefault(); 
        var link = document.createElement('a');
        link.href = obj.src;
        link.download = 'parati.mp3'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
        if (currentPlaying) {
            currentPlaying.pause(); 
            currentPlaying.currentTime = 0;
        }
        currentPlaying = obj; 
        obj.play();
        e.preventDefault();
    });
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
    $('#downloadBtn13').click(function(e) {
        e.preventDefault(); 
        var link = document.createElement('a');
        link.href = obj.src;
        link.download = 'emociones.mp3'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
        if (currentPlaying) {
            currentPlaying.pause(); 
            currentPlaying.currentTime = 0;
        }
        currentPlaying = obj; 
        obj.play();
        e.preventDefault();
    });
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
    $('#downloadBtn14').click(function(e) {
        e.preventDefault(); 
        var link = document.createElement('a');
        link.href = obj.src;
        link.download = 'dedo.mp3'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
        if (currentPlaying) {
            currentPlaying.pause(); 
            currentPlaying.currentTime = 0;
        }
        currentPlaying = obj; 
        obj.play();
        e.preventDefault();
    });
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
    $('#downloadBtn15').click(function(e) {
        e.preventDefault(); 
        var link = document.createElement('a');
        link.href = obj.src;
        link.download = 'miemocion.mp3'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
        if (currentPlaying) {
            currentPlaying.pause(); 
            currentPlaying.currentTime = 0;
        }
        currentPlaying = obj; 
        obj.play();
        e.preventDefault();
    });
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
    $('#downloadBtn16').click(function(e) {
        e.preventDefault(); 
        var link = document.createElement('a');
        link.href = obj.src;
        link.download = 'sientoadentro.mp3'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
        if (currentPlaying) {
            currentPlaying.pause(); 
            currentPlaying.currentTime = 0;
        }
        currentPlaying = obj; 
        obj.play();
        e.preventDefault();
    });
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
    $('#downloadBtn17').click(function(e) {
        e.preventDefault(); 
        var link = document.createElement('a');
        link.href = obj.src;
        link.download = 'cancionemociones.mp3'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
        if (currentPlaying) {
            currentPlaying.pause(); 
            currentPlaying.currentTime = 0;
        }
        currentPlaying = obj; 
        obj.play();
        e.preventDefault();
    });
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
    $('#downloadBtn18').click(function(e) {
        e.preventDefault(); 
        var link = document.createElement('a');
        link.href = obj.src;
        link.download = 'buenciudadano.mp3'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
        if (currentPlaying) {
            currentPlaying.pause(); 
            currentPlaying.currentTime = 0;
        }
        currentPlaying = obj; 
        obj.play();
        e.preventDefault();
    });
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
    $('#downloadBtn19').click(function(e) {
        e.preventDefault(); 
        var link = document.createElement('a');
        link.href = obj.src;
        link.download = 'estoeslanaturaleza.mp3'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
        if (currentPlaying) {
            currentPlaying.pause(); 
            currentPlaying.currentTime = 0;
        }
        currentPlaying = obj; 
        obj.play();
        e.preventDefault();
    });
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
    $('#downloadBtn20').click(function(e) {
        e.preventDefault(); 
        var link = document.createElement('a');
        link.href = obj.src;
        link.download = 'nuevosabores.mp3'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
        if (currentPlaying) {
            currentPlaying.pause();
            currentPlaying.currentTime = 0; 
        }
        currentPlaying = obj; 
        obj.play();
        e.preventDefault();
    });
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
    $('#downloadBtn21').click(function(e) {
        e.preventDefault(); 
        var link = document.createElement('a');
        link.href = obj.src;
        link.download = 'diversidadcultural.mp3'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
        if (currentPlaying) {
            currentPlaying.pause(); 
            currentPlaying.currentTime = 0;
        }
        currentPlaying = obj; 
        obj.play();
        e.preventDefault();
    });
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
    $('#downloadBtn22').click(function(e) {
        e.preventDefault(); 
        var link = document.createElement('a');
        link.href = obj.src;
        link.download = 'quesaborsera.mp3'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
        if (currentPlaying) {
            currentPlaying.pause(); 
            currentPlaying.currentTime = 0;
        }
        currentPlaying = obj; 
        obj.play();
        e.preventDefault();
    });
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
    $('#downloadBtn23').click(function(e) {
        e.preventDefault(); 
        var link = document.createElement('a');
        link.href = obj.src;
        link.download = 'colorespais.mp3'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
        if (currentPlaying) {
            currentPlaying.pause(); 
            currentPlaying.currentTime = 0;
        }
        currentPlaying = obj; 
        obj.play();
        e.preventDefault();
    });
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
    $('#downloadBtn24').click(function(e) {
        e.preventDefault(); 
        var link = document.createElement('a');
        link.href = obj.src;
        link.download = 'adentrofuera.mp3'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
        if (currentPlaying) {
            currentPlaying.pause(); 
            currentPlaying.currentTime = 0;
        }
        currentPlaying = obj; 
        obj.play();
        e.preventDefault();
    });
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
    $('#downloadBtn25').click(function(e) {
        e.preventDefault(); 
        var link = document.createElement('a');
        link.href = obj.src;
        link.download = 'abrocierro.mp3'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
        if (currentPlaying) {
            currentPlaying.pause(); 
            currentPlaying.currentTime = 0;
        }
        currentPlaying = obj; 
        obj.play();
        e.preventDefault();
    });
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
    $('#downloadBtn26').click(function(e) {
        e.preventDefault(); 
        var link = document.createElement('a');
        link.href = obj.src;
        link.download = 'canciongusanito.mp3'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
        if (currentPlaying) {
            currentPlaying.pause(); 
            currentPlaying.currentTime = 0;
        }
        currentPlaying = obj; 
        obj.play();
        e.preventDefault();
    });
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
    $('#downloadBtn27').click(function(e) {
        e.preventDefault(); 
        var link = document.createElement('a');
        link.href = obj.src;
        link.download = 'colitagris.mp3'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
        if (currentPlaying) {
            currentPlaying.pause(); 
            currentPlaying.currentTime = 0;
        }
        currentPlaying = obj; 
        obj.play();
        e.preventDefault();
    });
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
    $('#downloadBtn28').click(function(e) {
        e.preventDefault(); 
        var link = document.createElement('a');
        link.href = obj.src;
        link.download = 'gatomiau.mp3'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
        if (currentPlaying) {
            currentPlaying.pause(); 
            currentPlaying.currentTime = 0;
        }
        currentPlaying = obj; 
        obj.play();
        e.preventDefault();
    });
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
    $('#downloadBtn29').click(function(e) {
        e.preventDefault(); 
        var link = document.createElement('a');
        link.href = obj.src;
        link.download = 'pajaritosventana.mp3'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
        if (currentPlaying) {
            currentPlaying.pause(); 
            currentPlaying.currentTime = 0;
        }
        currentPlaying = obj; 
        obj.play();
        e.preventDefault();
    });
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
    $('#downloadBtn30').click(function(e) {
        e.preventDefault(); 
        var link = document.createElement('a');
        link.href = obj.src;
        link.download = 'quesuena.mp3'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
        if (currentPlaying) {
            currentPlaying.pause(); 
            currentPlaying.currentTime = 0;
        }
        currentPlaying = obj; 
        obj.play();
        e.preventDefault();
    });
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
    $('#downloadBtn31').click(function(e) {
        e.preventDefault(); 
        var link = document.createElement('a');
        link.href = obj.src;
        link.download = 'cancionsecreto.mp3'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
        if (currentPlaying) {
            currentPlaying.pause(); 
            currentPlaying.currentTime = 0;
        }
        currentPlaying = obj; 
        obj.play();
        e.preventDefault();
    });
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
    $('#downloadBtn32').click(function(e) {
        e.preventDefault(); 
        var link = document.createElement('a');
        link.href = obj.src;
        link.download = 'escuchahazlo.mp3'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
        if (currentPlaying) {
            currentPlaying.pause(); 
            currentPlaying.currentTime = 0;
        }
        currentPlaying = obj; 
        obj.play();
        e.preventDefault();
    });
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
    $('#downloadBtn33').click(function(e) {
        e.preventDefault(); 
        var link = document.createElement('a');
        link.href = obj.src;
        link.download = 'brincaya.mp3'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
        if (currentPlaying) {
            currentPlaying.pause(); 
            currentPlaying.currentTime = 0;
        }
        currentPlaying = obj; 
        obj.play();
        e.preventDefault();
    });
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
    $('#downloadBtn34').click(function(e) {
        e.preventDefault(); 
        var link = document.createElement('a');
        link.href = obj.src;
        link.download = 'levantamanos.mp3'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
        if (currentPlaying) {
            currentPlaying.pause(); 
            currentPlaying.currentTime = 0;
        }
        currentPlaying = obj; 
        obj.play();
        e.preventDefault();
    });
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
    $('#downloadBtn35').click(function(e) {
        e.preventDefault(); 
        var link = document.createElement('a');
        link.href = obj.src;
        link.download = 'quesuena2.mp3'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
        if (currentPlaying) {
            currentPlaying.pause(); 
            currentPlaying.currentTime = 0;
        }
        currentPlaying = obj; 
        obj.play();
        e.preventDefault();
    });
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
    $('#downloadBtn36').click(function(e) {
        e.preventDefault(); 
        var link = document.createElement('a');
        link.href = obj.src;
        link.download = 'rasgado.mp3'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
        if (currentPlaying) {
            currentPlaying.pause(); 
            currentPlaying.currentTime = 0;
        }
        currentPlaying = obj; 
        obj.play();
        e.preventDefault();
    });
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
    $('#downloadBtn37').click(function(e) {
        e.preventDefault(); 
        var link = document.createElement('a');
        link.href = obj.src;
        link.download = 'cuerpodonde.mp3'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
