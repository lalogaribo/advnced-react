import React from 'react';

export const withTooltip = (WrappedComponent) => {
	class WithTooltip extends React.Component {
		state = {
			isVisible: false
		}

		onMouseOver = () => {
			this.setState({ isVisible: true})
		}

		onMouseLeft = () => {
			this.setState({ isVisible: false})
		}

		render() {
			return(
				<div onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseLeft}>
					<WrappedComponent isVisible={this.state.isVisible} />
				</div>
			)
		}
	}

	return WithTooltip;
}
