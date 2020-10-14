import React from 'react';

class Grid extends React.Component {

    render() {
        return ( <div style={
            {
                display: "grid", 
                gridTemplateColumns: this.props.autofit ? `repeat( auto-fit, minmax(250px, 1fr) )` : `repeat( ${this.props.columns}, minmax(${this.props.minmax}, 1fr) )`,
                gap: this.props.gap
            }
        }>{this.props.children}</div> );
    }

    static defaultProps = {
        columns: 2,
        minmax: "250px",
        autofit: true,
        gap: "15px"
    }

}

export default Grid;
