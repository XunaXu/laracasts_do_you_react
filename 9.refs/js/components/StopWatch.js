var StopWatch = React.createClass({

	getInitialState: function() {
		return {
			time: 0,
			until: 0,
			enabled: true
		};
	},

	start: function() {
		//doesn't support es6, set it up in gulpFile.js with babelify + browserify
		// this.interval = setInterval( ()=>{
		// 	this.tick();
		// }, 1000);
		//React.findDOMNode(this.refs.goButton).disabled = true;
		this.setState({disabled: true});
		this.interval = setInterval(function(){
			this.tick();
			if(this.isTimeUp()){
				this.finish();
			}
		}.bind(this), 1000);
	},

	tick: function(){
		this.setState({time: this.state.time + 1});
	},

	isTimeUp: function(){
		return this.state.time == this.state.until;
	},

	finish: function(){
		console.log('Ding');
		//React.findDOMNode(this.refs.goButton).disabled = false;
		React.findDOMNode(this.refs.input).focus();
		//this.setState({time:0, until:'', enabled: true});
		this.replaceState(this.getInitialState());
		return clearInterval(this.interval);
	},

	type: function(e){
		this.setState({until: e.target.value});
	},

	render: function() {
		return (
			<div>
				<input ref="input" onChange={this.type} value={this.state.until}/>
				<button ref="goButton" disabled ={!this.state.enabled} onClick={this.start}>Go</button>
				<h1>{this.state.time}</h1>
			</div>
		); 
	}
});

React.render(<StopWatch />, document.body);