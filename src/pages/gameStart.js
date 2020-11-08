import {Link} from 'react-router-dom';
import Image from '../image/hand.png'

const GameStart = () => {
    return(
        <div className="mainPages firstPageCover">
            <div>
                <img className="imgHand" src={Image} alt="A hand"/>
            </div>
            <div>
                <p className="title">Who wants to be a millionaire?</p>
                <Link to="/game">
                    <button className="orangeButton">Start</button>
                </Link>

            </div>
        </div>
    )
}

export default GameStart;