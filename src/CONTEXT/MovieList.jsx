import React, {Component} from 'react';
import UserContext from "./userContext";
import MovieRow from "./MovieRow";

class MovieList extends Component {
componentDidMount() {
	console.log(this.context)
}

	render() {
		return (
			<UserContext.Consumer>
				{userContext => <div>
					Movie List {this.context.name}
					<MovieRow />
				</div>}
			</UserContext.Consumer>
		);
	}
}

MovieList.contextType = UserContext
export default MovieList;
