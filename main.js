


var list = ["projects","skills","experiences"]

var view = function(x) {
    const element = document.getElementById(x);
    element.addEventListener('click',()=>{
        document.getElementById(x+"-content").scrollIntoView();
    })
}

var g = list.map((el,id)=>{
    view(el)
})

var projects = ["KoraaKaagaz","SecureSign"];


var attachListeners = function(x) {
    const element = document.getElementById(x);
    element.addEventListener('click',()=>{
        document.getElementById(x+'-video').classList.remove('hidden');
        document.getElementsByTagName('body')[0].scrollIntoView();
    })
    document.getElementById(x+'-close').addEventListener('click',()=>{
        stopVideo(document.getElementById(x+'-video'));
        document.getElementById(x+'-video').classList.add('hidden');
        document.getElementById("projects-content").scrollIntoView();
    
    })
}

var g = projects.map((el,id)=>{
    attachListeners(el);
})

var stopVideo = function ( element ) {
	var iframe = element.querySelector( 'iframe');
	var video = element.querySelector( 'video' );
	if ( iframe ) {
		var iframeSrc = iframe.src;
		iframe.src = iframeSrc;
	}
	if ( video ) {
		video.pause();
	}
};