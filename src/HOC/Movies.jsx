import React, {Component} from 'react';
import {withTooltip} from './withTooltip'

class Movies extends Component {
	render() {
		const {isVisible} = this.props;
		return (
			<div>
				<h3>Movies</h3>
				{isVisible && <p>Movies tooltip</p>}
			</div>
		);
	}
}

export default withTooltip(Movies) ;
