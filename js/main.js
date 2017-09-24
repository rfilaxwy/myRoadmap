function main(){
  $('.fader').hide();
  $('.fader').fadeIn(2000);
};
$(document).ready(main);

function dropDown(idname){
	document.getElementById(idname).style.display='block';
}