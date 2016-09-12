
		window.onload = function(){
			/*var audio1 = document.getElementById('aud_1');
			var audio2 = document.getElementById('aud_2');
			var audio3 = document.getElementById('aud_3');
			var audio4 = document.getElementById('aud_4');
			var audio5 = document.getElementById('aud_5');
			var audio6 = document.getElementById('aud_6');
			var audio7 = document.getElementById('aud_7');
			var audio8 = document.getElementById('aud_8');
			var audio9 = document.getElementById('aud_9');
			*/
			
			/*var audio1 = new Audio("aud_1_kick1.wav");
			var audio2 = new Audio("aud_2_kick2.wav");
			var audio3 = new Audio("aud_3_kick3.wav");
			var audio4 = new Audio("aud_4_snare1.wav");
			var audio5 = new Audio("aud_6_snare2.wav");
			var audio6 = new Audio("aud_5_shaker2.wav");
			var audio7 = new Audio();
			var audio8 = new Audio("aud_3_ride2.wav");
			var audio9 = new Audio("aud_4_ride3.wav");
			*/
			
			var audio1 = new Howl({
				src: ['aud_1_kick1.wav']
			});
			var audio2 = new Howl({
				src: ['aud_2_kick2.wav']
			});
			var audio3 = new Howl({
				src: ['aud_3_kick3.wav']
			});
			var audio4 = new Howl({
				src: ['aud_4_snare1.wav']
			});
			var audio5 = new Howl({
				src: ['aud_6_snare2.wav']
			});
			var audio6 = new Howl({
				src: ['aud_5_shaker2.wav']
			});
			var audio7;
			
			var audio8 = new Howl({
				src: ['aud_3_ride2.wav']
			});
			var audio9 = new Howl({
				src: ['aud_4_ride3.wav']
			});
			
			var but_1v = document.getElementById('but_1');
			var but_2b = document.getElementById('but_2');
			var but_3n = document.getElementById('but_3');
			var but_4g = document.getElementById('but_4');
			var but_5h = document.getElementById('but_5');
			var but_6j = document.getElementById('but_6');
			var but_7t = document.getElementById('but_7');
			var but_8y = document.getElementById('but_8');
			var but_9u = document.getElementById('but_9');
			
			
			/*
			audio1.src = "aud_1_kick1.wav";	
			audio2.src = "aud_2_kick2.wav";
			audio3.src = "aud_3_kick3.wav";
			audio4.src = "aud_4_snare1.wav";
			audio5.src = "aud_6_snare2.wav";
			audio6.src = "aud_5_shaker2.wav";
			audio8.src = "aud_3_ride2.wav";
			audio9.src = "aud_4_ride3.wav";
			*/
			
			
			//var button = document.getElementByID("inner_block");
			
			var Uni_stream;
			var recordings;
			
			$(document).keydown(function(e){
			if(e.which == 84 || e.which == 116){
				if(but_7t.innerHTML == "play"){
						audio7.play();
						but_7t.innerHTML = "playing";
						setTimeout(function(){
							audio7.pause();
							but_7t.innerHTML = "play";
						},2.1 * 1000);
					}else{
						if(but_7t.innerHTML != "playing"){
							recording();
							//console.log(recordings);
						}
						
					}
				
					//audio7.play();
			}
			if(e.which == 89 || e.which == 121){
				audio8.play();
				
				console.log("pressed 8 button");
			}
			if(e.which == 85 || e.which == 117){
				audio9.play();
				console.log("pressed 9 button");
			}
			if(e.which == 71 || e.which == 103){
				audio4.play();
				console.log("pressed 4 button");
			}
			if(e.which == 72 || e.which == 104){
				audio5.play();
				console.log("pressed 5 button");
			}
			if(e.which == 74 || e.which == 106){
				audio6.play();
				console.log("pressed 6 button");
			}
			if(e.which == 86 || e.which == 118){
				audio1.play();
				console.log("pressed 1 button");
			}
			if(e.which == 66 || e.which == 98){
				audio2.play();
				console.log("pressed 2 button");
			}
			if(e.which == 78 || e.which == 110){
				audio3.play();
				console.log("pressed 3 button");
			}
			
		});
			
			/*$(document).keydown(function(e){
			
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
			});*/
			
			but_1v.onclick = function(){
				audio1.play();
			}
			
			but_2b.onclick = function(){
				audio2.play();
			}
			
			but_3n.onclick = function(){
				audio3.play();
			}
			
			but_4g.onclick = function(){
				audio4.play();
			}
			
			but_5h.onclick = function(){
				audio5.play();
			}
			
			but_6j.onclick = function(){
				audio6.play();
			}
			
			//but_7t.onclick = function(){
			//	audio7.play();
			//}
			
			but_8y.onclick = function(){
				audio8.play();
			}
			
			but_9u.onclick = function(){
				audio9.play();
			}
			
			
			but_7t.onclick = function(){
				if(but_7t.innerHTML == "play"){
						audio7.play();
						but_7t.innerHTML = "playing";
						setTimeout(function(){
							audio7.pause();
							but_7t.innerHTML = "play";
						},2.1 * 1000);
					}else{
						if(but_7t.innerHTML != "playing"){
							recording();
						}
					}
				
			}
			
			function recording(){
			var blob;
			var url;
				if(successCallback){
					//audio7.src = URL.createObjectURL(Uni_stream);
					//audio7.muted = true;
					var recordRTC = RecordRTC(Uni_stream,{
						type:'audio'
					});
					
					recordRTC.startRecording();
					//console.log("recording");
					but_7t.innerHTML = "Recording";
					setTimeout(function(){
						recordRTC.stopRecording(function(){
							but_7t.innerHTML = "play";
							blob = recordRTC.blob;
							//console.log(typeof(blob));
							console.log(blob);
							url = URL.createObjectURL(blob);
							console.log(url);
							recordRTC.getDataURL(function(dataURL) { 
								audio7 = new Howl({
								src: [dataURL]
							});
							});
							
							//audio7.muted = false;
							but_7t.disabled = false;
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
			
