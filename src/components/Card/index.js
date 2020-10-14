import React from 'react';
import styles from './index.css';

class Card extends React.Component {
    render() {
        return ( 
            <div className={styles.card}>
                <img src={this.props.image} alt={this.props.alt} />
                <div>
                    <h2>{this.props.header}</h2>
                    <hr />
                    <p>{this.props.children}</p>
                    <a className={styles.card_button} href={this.props.target}>{this.props.learnText}</a>
                </div>
            </div> 
        );
    }

    static defaultProps = {
        learnText: "Learn More",
        alt: "Samsung Camera",
        image: "https://images.unsplash.com/photo-1602524818604-fb5277190621?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80",
        target: "#"
    }

}

export default Card;
