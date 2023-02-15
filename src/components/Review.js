import classes from './Review.module.css';
function Review(props) {
        return (
                <li className={classes.review}>
                        <div className={classes['review__author']}>
                                <img className={classes['review__img']} src={props.image} alt="review author" />
                                <div className={classes['review__author--info']}>
                                        <p className={classes['review__name']}>{props.name}</p>
                                        <p className={classes['review__verification']}>{props.verification}</p>
                                </div>
                        </div>
                        <p className={classes['review__description']}>{props.description}</p>
                </li>
        );
}
export default Review;