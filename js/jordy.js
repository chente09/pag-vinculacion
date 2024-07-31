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
    obj.src = "../pag-vinculacion/audio/audio.mp3";
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
    obj.src = "../pag-vinculacion/audio/queen.mp3";
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
    obj.src = "../pag-vinculacion/audio/ponk.mp3";
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
