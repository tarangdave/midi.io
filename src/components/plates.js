var React = require('react');

var Plate = React.createClass({
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

         
        <div className="row">
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