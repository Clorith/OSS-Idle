import './hero.css';

function Hero( props ) {
    return (
        <div className="hero-box">
            <div className="hero-box-content">
                {props?.title &&
                    <h2>
                        { props.title }
                    </h2>
                }

                { props?.children }
            </div>
        </div>
    )
}

export default Hero;
