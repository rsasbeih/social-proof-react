import React from 'react';
import classes from './BannerRatingItem.module.css';
import starIcon from '../images/icon-star.svg';

function BannerRatingItem(props) {
        const stars = [];
        for (let i = 0; i < props.rating; i++) {
                stars.push(<img key={i} src={starIcon} alt="star" />);
        }
        return (
                <li className={classes['banner__ratings--item']}>
                        <div className={classes['banner__ratings--stars']}>
                                {stars}
                        </div>
                        <p>{props.text}</p>
                </li>
        );
}
export default BannerRatingItem;