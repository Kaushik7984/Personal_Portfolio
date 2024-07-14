import './hero.scss'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="wrapper">
                <div className="textContainer">
                    <h2>Kaushik Tapaniya</h2>
                    <h1>Frontend Developer</h1>
                    <div className="buttons">
                        <button>See the Latest Works</button>
                        <button>Contact Me</button>
                    </div>
                    <img src="/scroll.png" alt="scroll" />
                </div>
            </div>
            <div className="imageContainer">
                <img src=".images/photo.png" alt="" />
            </div>
        </div>
    )
}

export default Hero