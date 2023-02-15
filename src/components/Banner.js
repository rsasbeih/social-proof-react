import React from 'react';
import classes from './Banner.module.css';
import BannerRatingItem from './BannerRatingItem';
function Banner() {
        return (
                <section className={classes.banner}>
                        <div className={classes['banner__info']}>
                                <h1>10,000+ of our users love our products.</h1>
                                <p>We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.</p>
                        </div>
                        <div>
                                <ul className={classes['banner__ratings']}>
                                        <BannerRatingItem rating="5" text="Rated 5 Stars in Reviews" />
                                        <BannerRatingItem rating="5" text="Rated 5 Stars in Report Guru" />
                                        <BannerRatingItem rating="5" text="Rated 5 Stars in BestTech" />
                                </ul>
                        </div>
                </section>
        );
}
export default Banner;