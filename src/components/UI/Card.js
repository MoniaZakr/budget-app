import './Card.css';

function Card(props) {
    // Main class plus all classes of children elements.
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>;
};

export default Card;