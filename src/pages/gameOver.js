import {Link} from "react-router-dom";
import Image from "../image/hand.png";
import { withRouter } from "react-router";

const GameOver = (props) => {
    const state = props.location.state;
    console.log(state)
    return(
        <div className="mainPages lastPageCover">
            <div>
                <img className="imgHand" src={Image} alt="A hand"/>
            </div>
            <div className="titlePosition">
                <p className="titleTotalScore">Total score:</p>
                <p className="earned">{state.sum} earned</p>
                <Link to="/gameStart">
                    <button className="orangeButton">Try again</button>
                </Link>
            </div>
        </div>



    )
}

export default  withRouter(GameOver);