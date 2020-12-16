import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
} from 'reactstrap';

import './SlideShow.scss';

// const aishu_1 = require('../../assets/aishu/aishu_1.jpg');
// const aishu_2 = require('../../assets/aishu/aishu_2.jpg');
// const aishu_3 = require('../../assets/aishu/aishu_3.jpg');
// const aishu_4 = require('../../assets/aishu/aishu_4.jpg');
// const aishu_5 = require('../../assets/aishu/aishu_5.jpg');
// const aishu_6 = require('../../assets/aishu/aishu_6.jpg');
// const aishu_7 = require('../../assets/aishu/aishu_7.jpg');
// const aishu_8 = require('../../assets/aishu/aishu_8.jpg');
// const aishu_9 = require('../../assets/aishu/aishu_9.jpg');
// const aishu_10 = require('../../assets/aishu/aishu_10.jpg');
import aishu_1 from '../../assets/aishu/aishu_1.jpg';
import aishu_2 from '../../assets/aishu/aishu_2.jpg';
import aishu_3 from '../../assets/aishu/aishu_3.jpg';
import aishu_4 from '../../assets/aishu/aishu_4.jpg';
import aishu_5 from '../../assets/aishu/aishu_5.jpg';
import aishu_6 from '../../assets/aishu/aishu_6.jpg';
import aishu_7 from '../../assets/aishu/aishu_7.jpg';
import aishu_8 from '../../assets/aishu/aishu_8.jpg';
import aishu_9 from '../../assets/aishu/aishu_9.jpg';

const items = [
    {
        id: 1,
        src: aishu_1,
        altText: 'Cuteness',
        caption: 'Cuteness'
    },
    {
        id: 2,
        src: aishu_2,
        altText: 'Sweetness',
        caption: 'Sweetness'
    },
    {
        id: 3,
        src: aishu_3,
        altText: 'Pink perfect',
        caption: 'Pink perfect'
    },
    {
        id: 4,
        src: aishu_4,
        altText: 'So nice',
        caption: 'So nice'
    },
    {
        id: 5,
        src: aishu_5,
        altText: 'Red bunny',
        caption: 'Red bunny'
    },
    {
        id: 6,
        src: aishu_6,
        altText: 'White angel',
        caption: 'White angel'
    },
    {
        id: 7,
        src: aishu_7,
        altText: 'Ever green',
        caption: 'Ever green'
    },
    {
        id: 8,
        src: aishu_8,
        altText: 'Work look',
        caption: 'Work look'
    },
    {
        id: 9,
        src: aishu_9,
        altText: '1st time',
        caption: '1st time'
    }
];

const SlideShow = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                className="custom-tag"
                tag="div"
                key={item.id}
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
            >
                <img className="carousel-image" src={item.src} alt={item.altText} />
            </CarouselItem>
        );
    });

    return (
        <div className="slide-show">
            <Carousel
                activeIndex={activeIndex}
                next={next}
                enableTouch={true}
                slide={false}
                previous={previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
            <div className="mt-2 text-center">
                <h4 className="text-danger">
                    {items[activeIndex].caption}
                </h4>
            </div>
        </div>
    );
}

export default SlideShow;