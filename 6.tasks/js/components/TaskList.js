var TaskList = React.createClass({

	onClick: function(i){
		console.log("clicked "+ this.props.items[i])
	},
	
	render: function(){

/*		var displayTask = function(task){
			return <li>{task}</li>
		};*/

		var displayTask = (task, i) => <li onClick ={this.onClick.bind(this,i)} key={i} >{task}</li>;
		return (
			<ul>
				{this.props.items.map(displayTask)}
			</ul>
		);
	}
});
