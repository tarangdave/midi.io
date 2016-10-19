var appbaseRef = require("./appbase").appbaseRef;
var config = require("./appbase").config;

var React = require('react');
var RecordRTC = require('recordrtc');
var Whammy = RecordRTC.Whammy;
var WhammyRecorder = RecordRTC.WhammyRecorder;
var StereoAudioRecorder = RecordRTC.StereoAudioRecorder;
var recorder = RecordRTC({}, {
    type: 'audio',
    recorderType: RecordRTC.WhammyRecorder
});
var Plate = React.createClass({
    componentDidMount: function() {
       /* appbaseRef.index({
  type: "midi",
  body: {
    "msg": "writing my first tweet!",
    "by": "jack",
    "using": ["appbase.io", "javascript", "streams"],
    "test": true
  }
}).on('data', function(res) {
  console.log("successfully indexed: ", res);
}).on('error', function(err) {
  console.log("indexing error: ", err);
});*/
        $(document).keypress(function(e){
			if(e.which == 55 || e.which == 116){
                //recorder.startRecording();
				console.log("pressed 7 button");
			}
			if(e.which == 56 || e.which == 121){
				console.log("pressed 8 button");
			}
			if(e.which == 57 || e.which == 117){
				console.log("pressed 9 button");
			}
			if(e.which == 52 || e.which == 103){
				console.log("pressed 4 button");
			}
			if(e.which == 53 || e.which == 104){
				console.log("pressed 5 button");
			}
			if(e.which == 54 || e.which == 106){
				console.log("pressed 6 button");
			}
			if(e.which == 49 || e.which == 118){
				console.log("pressed 1 button");
			}
			if(e.which == 50 || e.which == 98){
				console.log("pressed 2 button");
			}
			if(e.which == 51 || e.which == 110){
				console.log("pressed 3 button");
			}

		});
            
            var audio1 = document.getElementById('aud_1');
            var audio2 = document.getElementById('aud_2');
            var audio3 = document.getElementById('aud_3');
            var audio4 = document.getElementById('aud_4');
            var audio5 = document.getElementById('aud_5');
            var audio6 = document.getElementById('aud_6');
            var audio7 = document.getElementById('aud_7');
            var audio8 = document.getElementById('aud_8');
            var audio9 = document.getElementById('aud_9');

            var but_1v = document.getElementById('but_1');
            var but_2b = document.getElementById('but_2');
            var but_3n = document.getElementById('but_3');
            var but_4g = document.getElementById('but_4');
            var but_5h = document.getElementById('but_5');
            var but_6j = document.getElementById('but_6');
            var but_7t = document.getElementById('but_7');
            var but_8y = document.getElementById('but_8');
            var but_9u = document.getElementById('but_9');

            
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
function successCallback(stream){
                
                Uni_stream = stream;
                
            }
            
            function errorCallback(error){
                alert(error);
            }
            
            var mediaConstraints = {audio: true};
            
            navigator.mediaDevices.getUserMedia(mediaConstraints).then(successCallback).catch(errorCallback);
            
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
                            /*var reader = new FileReader();
                            reader.readAsDataURL(blob);
                            var file = document.querySelector('#files > input[type="file"]').files[0];*/
                           // var meta = blob['Blob'];
                           
                            url = URL.createObjectURL(blob);
                            var meta = url;
                            var data={ name:'',url:''};
                            data.name='img';
                            data.url=meta;

                            console.log(data);

                            
                            appbaseRef.index({
                                  type: "midi",
                                  body: {
                                    "button": "but_7t",
                                    "myBlob": data
                                  },
                                  contentType:"application/json; charset=utf-8",
                                  dataType: 'json'
                                }).on('data', function(res) {
                                  console.log("successfully indexed: ", res);
                                }).on('error', function(err) {
                                  console.log("indexing error: ", err);
                                });
                            //var m =url;
                            console.log(url);
                            
                            recordRTC.getDataURL(function(dataURL) { 
                                audio7 = new Howl({
                                src: [dataURL]
                            });
                                
                            });
                            
                            $("#blob_text").html(blob);
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
    },

    render: function(){
        return (
        <div>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Midi IO</a>
                    </div>
                </div>
            </nav>
            <div className="container">
            
			         <ul className="nav navbar-nav">
                    <li><button className="btn btn-danger"><span className="glyphicon glyphicon-record"></span></button>&nbsp;&nbsp;</li>
				            <li><button className="btn btn-success"><span className="glyphicon glyphicon-play"></span></button>&nbsp;&nbsp;</li>
				            <li><button className="btn btn-primary"><span className="glyphicon glyphicon-pause"></span></button>&nbsp;&nbsp;</li>
				            <li><button className="btn btn-default"><span className="glyphicon glyphicon-stop"></span></button></li>
               </ul>

		        </div>

            <div className="main_block">
                <button className="inner_block" id="but_7">
                        t
                    </button>
                    <button className="inner_block" id="but_8">
                        y
                    </button>
                    <button className="inner_block" id="but_9">
                        u
                    </button>
                    <button className="inner_block" id="but_4">
                        g
                    </button>
                    <button className="inner_block" id="but_5">
                        h
                    </button>
                    <button className="inner_block" id="but_6">
                        j
                    </button>
                    <button className="inner_block" id="but_1">
                        v
                    </button>
                    <button className="inner_block" id="but_2">
                        b
                    </button>
                    <button className="inner_block" id="but_3">
                        n
                    </button>
            </div>
            <pre id="blob_text"></pre>
        </div>

        )
    }
});

module.exports = Plate;
