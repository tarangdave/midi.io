
		window.onload = function(){
			var audio = document.querySelector('audio');
			
			var button = document.getElementById('btn_t');
			var Uni_stream;
			var recordings;
			
			$(document).keydown(function(e){
			if(e.which == 84 || e.which == 116){
				if(button.innerHTML == "play"){
						audio.play();
						button.innerHTML = "playing";
						setTimeout(function(){
							audio.pause();
							button.innerHTML = "play";
						},2.1 * 1000);
					}else{
						if(button.innerHTML != "playing"){
							recording();
							//console.log(recordings);
						}
						
					}
			}
			if(e.which == 89 || e.which == 121){
				console.log("pressed 8 button");
			}
			if(e.which == 85 || e.which == 117){
				console.log("pressed 9 button");
			}
			if(e.which == 71 || e.which == 103){
				console.log("pressed 4 button");
			}
			if(e.which == 72 || e.which == 104){
				console.log("pressed 5 button");
			}
			if(e.which == 74 || e.which == 106){
				console.log("pressed 6 button");
			}
			if(e.which == 86 || e.which == 118){
				console.log("pressed 1 button");
			}
			if(e.which == 66 || e.which == 98){
				console.log("pressed 2 button");
			}
			if(e.which == 78 || e.which == 110){
				console.log("pressed 3 button");
			}
			
		});
			
			$(document).keydown(function(e){
			
				if(e.which == 55){
					if(button.innerHTML == "play"){
						audio.play();
						button.innerHTML = "playing";
						setTimeout(function(){
							audio.pause();
							button.innerHTML = "play";
						},2.1 * 1000);
					}else{
						recording();
					}
				}
			});
			
			button.onclick = function(){
				if(button.innerHTML == "play"){
						audio.play();
						button.innerHTML = "playing";
						setTimeout(function(){
							audio.pause();
							button.innerHTML = "play";
						},2.1 * 1000);
					}else{
						if(button.innerHTML != "playing"){
							recording();
						}
					}
				
			}
			
			function recording(){
			var blob;
			var url;
				if(successCallback){
					audio.src = URL.createObjectURL(Uni_stream);
					audio.muted = true;
					var recordRTC = RecordRTC(Uni_stream,{
						type:'audio'
					});
					
					recordRTC.startRecording();
					//console.log("recording");
					button.innerHTML = "Recording";
					setTimeout(function(){
						recordRTC.stopRecording(function(){
							button.innerHTML = "play";
							blob = recordRTC.blob;
							//console.log(typeof(blob));
							console.log(blob);
							url = URL.createObjectURL(blob);
							console.log(url);
							audio.src = url;
							audio.muted = false;
							button.disabled = false;
						});
					},2 * 1000);
					return 0;
				}
				
			}
			
			/*
			document.getElementById("btn_play").onclick = function(){
				audio.play();
				setTimeout(function(){
					audio.pause();
				},2 * 1000);
			}
			*/
			
			function successCallback(stream){
				
				Uni_stream = stream;
				
			}
			
			function errorCallback(error){
				alert(error);
			}
			
			var mediaConstraints = {audio: true};
			
			navigator.mediaDevices.getUserMedia(mediaConstraints).then(successCallback).catch(errorCallback);
			
		}
			
