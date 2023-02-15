import Review from "./Review";
import classes from './Reviews.module.css';
import coltonImage from '../images/image-colton.jpg';
import ireneImage from '../images/image-irene.jpg';
import anneImage from '../images/image-anne.jpg';
function Reviews() {
        return (
                <section>
                        <ul className={classes['reviews']}>
                                <Review
                                        image={coltonImage}
                                        name="Colton Smith"
                                        verification="Verified Buyer"
                                        description='"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"'
                                />
                                <Review
                                        image={ireneImage}
                                        name="Irene Roberts"
                                        verification="Verified Buyer"
                                        description='"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."'
                                />
                                <Review
                                        image={anneImage}
                                        name="Anne Wallace"
                                        verification="Verified Buyer"
                                        description='"Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"'
                                />
                        </ul>
                </section>
        );
}
export default Reviews;