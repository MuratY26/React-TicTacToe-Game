import { useState, useEffect } from "react";
export default function ScoreBoard(props) {
    const [score, setScore] = useState({ X: 0, O: 0 });

    useEffect(() => {
        if(props.winner === 'X') {
            setScore({
                ...score,
                X : score.X + 1
            })
        }
        else if(props.winner === 'O') {
            setScore({
                ...score,
                O : score.O + 1
            })
        }   
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.winner]);

    function handleResetScore() {
        setScore({ X: 0, O: 0 });
    };

    return (
        <div className="scoreboard">
            {props.winner ? (<div className="winnerdisplay">
                {props.winner} Wins!
            </div>) : <div></div>}
            <div className="scores">
                <div class="x-score">
                    X : <span>{score.X}</span>
                </div>
                <div class="o-score">
                    O : <span>{score.O}</span>
                </div>
            </div>
            <div class="resetscore" onClick={handleResetScore}>
                Reset Score
            </div>
        </div>
    )
};