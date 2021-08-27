let listaNomi = ["Michele", "Luigi", "Mario", "Fausto", "Luisa"];
let nomeInvitato = prompt("Inserire nome invitato:");
let verificato = false;

for(let i = 0; i < listaNomi.length; i++){
	if(nomeInvitato == listaNomi[i]){
	    verificato = true;
	}
}



if( verificato == true){
    alert("Sei ammesso al party!!!");
}else{
    alert("Non sei ammesso al party!!!");
}