import React from 'react'
import cn from 'classnames'

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {currentPosition: 0};
    }

    handleClick = (btnType) => () => {
        let {currentPosition} = this.state;

        if (btnType === 'prev') {
            currentPosition = (currentPosition !== 0) ? (currentPosition - 1) : (this.props.images.length - 1);
        } else {
            currentPosition = (currentPosition === this.props.images.length - 1) ? (0) : (currentPosition + 1);
        }

        this.setState({currentPosition: currentPosition});
    }

    handleClickPrev = this.handleClick('prev');
    handleClickNext = this.handleClick('next');

    renderCarouselItems() {
        const {images} = this.props;

        return images.map((el, index) => {
            const itemClass = cn("carousel-item", {
                active: this.state.currentPosition === index,
            });
            return (
                <div className={itemClass} key={index}>
                    <img src={el.src} className="d-block w-100" alt="carousel pic"></img>
                </div>
            )
        })
    }

    renderSpan(type, text) {
        return (
            <React.Fragment>
                <span className={`carousel-control-${type}-icon`} aria-hidden="true"></span>
                <span className="visually-hidden">{text}</span>
            </React.Fragment>
        )
    }

    render() {

        return (

            <div id="carouselExampleControls" className="carousel slide w-50" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {this.renderCarouselItems()}
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev" onClick={this.handleClickPrev}>
                    {this.renderSpan('prev', 'Previous')}

                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="next" onClick={this.handleClickNext}>
                    {this.renderSpan('next', 'Next')}
                </button>
            </div>

        )
    }
}

Carousel.defaultProps = {
    images: [
        {
            theme: 'island',
            src: 'http://cdn.shopify.com/s/files/1/0376/3161/articles/unnamed_0f4d66f6-2064-4cf7-8544-dbbc04932c91.jpg?v=1585957644'
        },
        {
            theme: 'yacht',
            src: 'https://marine-trade.com.ua/wp-content/uploads/2020/12/fiart-43-1-3-500x300.jpg'
        },
        {
            theme: 'castle',
            src: 'https://everest-tour.by/wp-content/uploads/2019/12/mir-nesvizh-2dn-500x300.jpg'
        }
    ]
}

export default Carousel



