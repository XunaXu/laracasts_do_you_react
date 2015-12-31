var TaskApp = React.createClass({

	getInitialState: function(){
		return {
			items: []
		}
	},

	addTask: function(e){
		var items = this.state.items.concat([this.state.task])
		var task = ''
		this.setState({items,task})
		e.preventDefault()
	},

	onChange: function(e){
		var task = e.target.value
		this.setState({task})
	},

	render: function(){
		return (
			<div>
				<h1> My Task </h1>
				<TaskList items={this.state.items} />
				<form onSubmit={this.addTask}>
					<input onChange ={this.onChange} value={this.state.task}/>
					<button> Add Task </button>
				</form>
			</div>
		)
	}
});

React.render(<TaskApp />, document.body);