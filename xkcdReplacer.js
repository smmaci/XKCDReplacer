function replaceAll() {
        var wordsOriginal = ['gaffe', 'ancient', 'star-studded', 'remains to be seen',
	'silver bullet', 'subway system', 'surprising', 'war of words','tension','cautiously optimistic','doctor who',
	'win votes','behind the headlines','email','facebook post','tweet','facebook ceo','latest','disrupt','meeting','scientists'];
	
	var wordsReplace = ['magic spell','haunted','blood-soaked','will never be known','way to kill Werewolves',
	'tunnels i found','surprising (but not to me)','Interplanetary War','sexual tension','delusional','The Big Bang Theory',
	'find Pokémon','beyond the grave','poem','this guy','final','destroy','Ménage à Trois','Channing Tatum and his friends'];
	
	var b = document.body;
	var i;
	for(i = 0;i < wordsOriginal.length; i++){
	  var pattern = new RegExp("\\b" + wordsOriginal[i] + "\\b","ig");
	  b.innerHTML=b.innerHTML.replace(pattern, wordsReplace[i]); 
	}
        
      }

window.onload = replaceAll;