
window.onload = function(){
	var recordRTC;
	function successCallback(stream){
	var audio = document.querySelector('audio');
	var options = {
		mimeType : 'audio/ogg',
		audioBitsPerSecond: 128000
	}
	
	recordRTC = RecordRTC(stream, options);
	recordRTC.startRecording();
	setTimeout(function() {
		
	}, 5 * 1000);
		console.log("then");
	recordRTC.stopRecording(function(audioURL){
			audio.src = audioURL;
			
			var recordedBlob = recordRTC.getBlob();
			record.getDataURL(function(dataURL){});	
	
});
	}
							
/*	
	document.querySelector('button').onclick = function() {
		var button = this;
	
		//console.log("hmm");
		
		if(button.innerHTML == 'start recording'){
			//console.log("inside start");
			button.innerHTML = 'stop recording';
			recordRTC.startRecording();
		
		}
	
		if(button.innerHTML == 'stop recording'){
			button.innerHTML = 'start recording';
			recordRTC.stopRecording(function(audioURL){
			audio.src = audioURL;
			
			var recordedBlob = recordRTC.getBlob();
			record.getDataURL(function(dataURL){});
		});
	}
};
*/	
	function errorCallback(error){
	console.log(error);
}

var mediaConstraints = { audio : true };

navigator.mediaDevices.getUserMedia(mediaConstraints).then(successCallback).catch(errorCallback);
}






