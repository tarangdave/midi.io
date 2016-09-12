
		window.onload = function(){
			/*
			var audio1 = document.getElementById('aud_1');
			var audio2 = document.getElementById('aud_2');
			var audio3 = document.getElementById('aud_3');
			var audio4 = document.getElementById('aud_4');
			var audio5 = document.getElementById('aud_5');
			var audio6 = document.getElementById('aud_6');
			var audio7 = document.getElementById('aud_7');
			var audio8 = document.getElementById('aud_8');
			var audio9 = document.getElementById('aud_9');
			*/
			
			var audio1;
			var audio2;
			var audio3;
			var audio4;
			var audio5;
			var audio6;
			var audio7;
			var audio8;
			var audio9;
			
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
						},1.1*1000);
					}else{
						if(but_7t.innerHTML != "playing"){
							recording7();
							//console.log(recordings);
						}
						
					}
				
					//audio7.play();
			}
			if(e.which == 89 || e.which == 121){
				if(but_8y.innerHTML == "play"){
						audio8.play();
						but_8y.innerHTML = "playing";
						setTimeout(function(){
							audio8.pause();
							but_8y.innerHTML = "play";
						},1.1*1000);
					}else{
						if(but_8y.innerHTML != "playing"){
							recording8();
							//console.log(recordings);
						}
						
					}
				//audio8.play();
				//console.log("pressed 8 button");
			}
			if(e.which == 85 || e.which == 117){
				if(but_9u.innerHTML == "play"){
						audio9.play();
						but_9u.innerHTML = "playing";
						setTimeout(function(){
							audio9.pause();
							but_9u.innerHTML = "play";
						},1.1*1000);
					}else{
						if(but_9u.innerHTML != "playing"){
							recording9();
							//console.log(recordings);
						}
						
					}
				//audio9.play();
				//console.log("pressed 9 button");
			}
			if(e.which == 71 || e.which == 103){
				if(but_4g.innerHTML == "play"){
						audio4.play();
						but_4g.innerHTML = "playing";
						setTimeout(function(){
							audio4.pause();
							but_4g.innerHTML = "play";
						},1.1*1000);
					}else{
						if(but_4g.innerHTML != "playing"){
							recording4();
							//console.log(recordings);
						}
						
					}
				//audio4.play();
				//console.log("pressed 4 button");
			}
			if(e.which == 72 || e.which == 104){
				if(but_5h.innerHTML == "play"){
						audio5.play();
						but_5h.innerHTML = "playing";
						setTimeout(function(){
							audio5.pause();
							but_5h.innerHTML = "play";
						},1.1*1000);
					}else{
						if(but_5h.innerHTML != "playing"){
							recording5();
							//console.log(recordings);
						}
						
					}
				//audio5.play();
				//console.log("pressed 5 button");
			}
			if(e.which == 74 || e.which == 106){
				if(but_6j.innerHTML == "play"){
						audio6.play();
						but_6j.innerHTML = "playing";
						setTimeout(function(){
							audio6.pause();
							but_6j.innerHTML = "play";
						},1.1*1000);
					}else{
						if(but_6j.innerHTML != "playing"){
							recording6();
							//console.log(recordings);
						}
						
					}
				//audio6.play();
				//console.log("pressed 6 button");
			}
			if(e.which == 86 || e.which == 118){
				if(but_1v.innerHTML == "play"){
						audio1.play();
						but_1v.innerHTML = "playing";
						setTimeout(function(){
							audio1.pause();
							but_1v.innerHTML = "play";
						},1.1*1000);
					}else{
						if(but_1v.innerHTML != "playing"){
							recording1();
							//console.log(recordings);
						}
						
					}
				//audio1.play();
				//console.log("pressed 1 button");
			}
			if(e.which == 66 || e.which == 98){
				if(but_2b.innerHTML == "play"){
						audio2.play();
						but_2b.innerHTML = "playing";
						setTimeout(function(){
							audio2.pause();
							but_2b.innerHTML = "play";
						},1.1*1000);
					}else{
						if(but_2b.innerHTML != "playing"){
							recording2();
							//console.log(recordings);
						}
						
					}
				//audio2.play();
				//console.log("pressed 2 button");
			}
			if(e.which == 78 || e.which == 110){
				if(but_3n.innerHTML == "play"){
						audio3.play();
						but_3n.innerHTML = "playing";
						setTimeout(function(){
							audio3.pause();
							but_3n.innerHTML = "play";
						},1.1*1000);
					}else{
						if(but_3n.innerHTML != "playing"){
							recording3();
							//console.log(recordings);
						}
						
					}
				//audio3.play();
				//console.log("pressed 3 button");
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
			
			/*but_1v.onclick = function(){
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
			}*/
			
			
			/*but_7t.onclick = function(){
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
				
			}*/
			
			function recording7(){
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
                    },1*1000);
                    return 0;
                }
                
            }
			
			function recording8(){
			var blob;
			var url;
				if(successCallback){
					//audio8.src = URL.createObjectURL(Uni_stream);
					//audio8.muted = true;
					var recordRTC = RecordRTC(Uni_stream,{
						type:'audio'
					});
					
					recordRTC.startRecording();
					//console.log("recording");
					but_8y.innerHTML = "Recording";
					setTimeout(function(){
						recordRTC.stopRecording(function(){
							but_8y.innerHTML = "play";
							blob = recordRTC.blob;
							//console.log(typeof(blob));
							console.log(blob);
							url = URL.createObjectURL(blob);
							console.log(url);
							recordRTC.getDataURL(function(dataURL) { 
                                audio8 = new Howl({
                                	src: [dataURL]
                            	});
							});
							//audio8.src = url;
							//audio8.muted = false;
							but_8y.disabled = false;
						});
					},1*1000);
					return 0;
				}
				
			}
			
			function recording9(){
			var blob;
			var url;
				if(successCallback){
					//audio9.src = URL.createObjectURL(Uni_stream);
					//audio9.muted = true;
					var recordRTC = RecordRTC(Uni_stream,{
						type:'audio'
					});
					
					recordRTC.startRecording();
					//console.log("recording");
					but_9u.innerHTML = "Recording";
					setTimeout(function(){
						recordRTC.stopRecording(function(){
							but_9u.innerHTML = "play";
							blob = recordRTC.blob;
							//console.log(typeof(blob));
							console.log(blob);
							url = URL.createObjectURL(blob);
							console.log(url);
							recordRTC.getDataURL(function(dataURL) { 
                                audio9 = new Howl({
                                	src: [dataURL]
                            	});
							});
							//audio9.src = url;
							//audio9.muted = false;
							but_9u.disabled = false;
						});
					},1*1000);
					return 0;
				}
				
			}
			
			function recording4(){
			var blob;
			var url;
				if(successCallback){
					//audio4.src = URL.createObjectURL(Uni_stream);
					//audio4.muted = true;
					var recordRTC = RecordRTC(Uni_stream,{
						type:'audio'
					});
					
					recordRTC.startRecording();
					//console.log("recording");
					but_4g.innerHTML = "Recording";
					setTimeout(function(){
						recordRTC.stopRecording(function(){
							but_4g.innerHTML = "play";
							blob = recordRTC.blob;
							//console.log(typeof(blob));
							console.log(blob);
							url = URL.createObjectURL(blob);
							console.log(url);
							recordRTC.getDataURL(function(dataURL) { 
                                audio4 = new Howl({
                                	src: [dataURL]
                            	});
							});
							//audio4.src = url;
							//audio4.muted = false;
							but_4g.disabled = false;
						});
					},1*1000);
					return 0;
				}
				
			}
			
			function recording5(){
			var blob;
			var url;
				if(successCallback){
					//audio5.src = URL.createObjectURL(Uni_stream);
					//audio5.muted = true;
					var recordRTC = RecordRTC(Uni_stream,{
						type:'audio'
					});
					
					recordRTC.startRecording();
					//console.log("recording");
					but_5h.innerHTML = "Recording";
					setTimeout(function(){
						recordRTC.stopRecording(function(){
							but_5h.innerHTML = "play";
							blob = recordRTC.blob;
							//console.log(typeof(blob));
							console.log(blob);
							url = URL.createObjectURL(blob);
							console.log(url);
							recordRTC.getDataURL(function(dataURL) { 
                                audio5 = new Howl({
                                	src: [dataURL]
                            	});
							});
							//audio5.src = url;
							//audio5.muted = false;
							but_5h.disabled = false;
						});
					},1*1000);
					return 0;
				}
				
			}
			
			function recording6(){
			var blob;
			var url;
				if(successCallback){
					//audio6.src = URL.createObjectURL(Uni_stream);
					//audio6.muted = true;
					var recordRTC = RecordRTC(Uni_stream,{
						type:'audio'
					});
					
					recordRTC.startRecording();
					//console.log("recording");
					but_6j.innerHTML = "Recording";
					setTimeout(function(){
						recordRTC.stopRecording(function(){
							but_6j.innerHTML = "play";
							blob = recordRTC.blob;
							//console.log(typeof(blob));
							console.log(blob);
							url = URL.createObjectURL(blob);
							console.log(url);
							recordRTC.getDataURL(function(dataURL) { 
                                audio6 = new Howl({
                                	src: [dataURL]
                            	});
							});
							//audio6.src = url;
							//audio6.muted = false;
							but_6j.disabled = false;
						});
					},1*1000);
					return 0;
				}
				
			}
			
			function recording1(){
			var blob;
			var url;
				if(successCallback){
					//audio1.src = URL.createObjectURL(Uni_stream);
					//audio1.muted = true;
					var recordRTC = RecordRTC(Uni_stream,{
						type:'audio'
					});
					
					recordRTC.startRecording();
					//console.log("recording");
					but_1v.innerHTML = "Recording";
					setTimeout(function(){
						recordRTC.stopRecording(function(){
							but_1v.innerHTML = "play";
							blob = recordRTC.blob;
							//console.log(typeof(blob));
							console.log(blob);
							url = URL.createObjectURL(blob);
							console.log(url);
							recordRTC.getDataURL(function(dataURL) { 
                                audio1 = new Howl({
                                	src: [dataURL]
                            	});
							});
							//audio1.src = url;
							//audio1.muted = false;
							but_1v.disabled = false;
						});
					},1*1000);
					return 0;
				}
				
			}
			function recording2(){
			var blob;
			var url;
				if(successCallback){
					//audio2.src = URL.createObjectURL(Uni_stream);
					//audio2.muted = true;
					var recordRTC = RecordRTC(Uni_stream,{
						type:'audio'
					});
					
					recordRTC.startRecording();
					//console.log("recording");
					but_2b.innerHTML = "Recording";
					setTimeout(function(){
						recordRTC.stopRecording(function(){
							but_2b.innerHTML = "play";
							blob = recordRTC.blob;
							//console.log(typeof(blob));
							console.log(blob);
							url = URL.createObjectURL(blob);
							console.log(url);
							recordRTC.getDataURL(function(dataURL) { 
                                audio2 = new Howl({
                                	src: [dataURL]
                            	});
							});
							//audio2.src = url;
							//audio2.muted = false;
							but_2b.disabled = false;
						});
					},1*1000);
					return 0;
				}
				
			}
			function recording3(){
			var blob;
			var url;
				if(successCallback){
					//audio3.src = URL.createObjectURL(Uni_stream);
					//audio3.muted = true;
					var recordRTC = RecordRTC(Uni_stream,{
						type:'audio'
					});
					
					recordRTC.startRecording();
					//console.log("recording");
					but_3n.innerHTML = "Recording";
					setTimeout(function(){
						recordRTC.stopRecording(function(){
							but_3n.innerHTML = "play";
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
							//audio3.src = url;
							//audio3.muted = false;
							but_3n.disabled = false;
						});
					},1*1000);
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
			
