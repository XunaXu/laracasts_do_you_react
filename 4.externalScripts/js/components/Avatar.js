	var Avatar = React.createClass({

		getDefaultProps: function(){
			return {
				path: "./fh04.png"
			}
		},

		render: function () {
			return (
				<div>
					<a href={this.props.path}>
					<img src = {this.props.path} />	
					</a>	
				</div>
			);
		}
	});

	React.render(<Avatar/>, document.body);