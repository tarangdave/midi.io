var React = require('react');

var Plate = React.createClass({
    componentDidMount: function() {
        $(document).keypress(function(e){
			if(e.which == 55 || e.which == 116){
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
                <button className="inner_block">
                    7
                </button>
                <button className="inner_block">
                    8
                </button>
                <button className="inner_block">
                    9
                </button>
                <button className="inner_block">
                    4
                </button>
                <button className="inner_block">
                    5
                </button>
                <button className="inner_block">
                    6
                </button>
                <button className="inner_block">
                    1
                </button>
                <button className="inner_block">
                    2
                </button>
                <button className="inner_block">
                    3
                </button>
            </div>
        </div>
        )
    }
});

module.exports = Plate;
