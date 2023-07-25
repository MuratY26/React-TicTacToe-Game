import Square from "./Square";
import { useState } from "react";

export default function Board(props) {
    const [player, setPlayer] = useState("X");
    const [filled, setFilled] = useState(Array(9).fill(null));
    const [history, setHistory] = useState([]);

    function handleClick(id) {
        if (!props.winner) {
            let nextState = [...filled];
            nextState[id] = player;
            isWin(nextState);

            setFilled(nextState);

            let nextHistory = [...history];
            nextHistory.push(id);
            setHistory(nextHistory);
            
            if (player === "X") {
                setPlayer("O");
            }
            else {
                setPlayer("X");
            }
        }
    };

    function isWin(boardState) {
        let [zero, one, two, three, four, five, six, seven, eight] = boardState; //might change with for loop
        if(zero && zero === one && zero === two)
        props.setWinner(zero);  // ";" 
        else if(three && three === four && three === five)
        props.setWinner(three);
        else if(six && six === seven && six === eight)
        props.setWinner(six);
        else if(zero && zero === three && zero === six)
        props.setWinner(zero);
        else if(one && one === four && one === seven) 
        props.setWinner(one);
        else if(two && two === five && two === eight)
        props.setWinner(two);
        else if(zero && zero === four && zero === eight)
        props.setWinner(zero);
        else if(two && two === four && two === six)
        props.setWinner(two);
    };

    function handleReset() {
        setFilled(Array(9).fill(null));
        setPlayer("X");
        props.setWinner(null);
    };

    function handleUndo() {
        let nextHistory = [...history];
        let lastPlayedSquare = nextHistory.pop();
        setHistory(nextHistory);

        if (lastPlayedSquare !== undefined) {
            let nextState = [...filled];
            nextState[lastPlayedSquare] = null;
            setFilled(nextState);
        }
        
        if (player === "X") {
            setPlayer("O");
        }
        else {
            setPlayer("X");
        }
    };

    return (
        <div>
            <div className="board">
                <Square id="0" filledWith={filled[0]} handleClick={handleClick} player={player} />
                <Square id="1" filledWith={filled[1]} handleClick={handleClick} player={player} />
                <Square id="2" filledWith={filled[2]} handleClick={handleClick} player={player} />
                <Square id="3" filledWith={filled[3]} handleClick={handleClick} player={player} />
                <Square id="4" filledWith={filled[4]} handleClick={handleClick} player={player} />
                <Square id="5" filledWith={filled[5]} handleClick={handleClick} player={player} />
                <Square id="6" filledWith={filled[6]} handleClick={handleClick} player={player} />
                <Square id="7" filledWith={filled[7]} handleClick={handleClick} player={player} />
                <Square id="8" filledWith={filled[8]} handleClick={handleClick} player={player} />
            </div>
            <div className="buttons">
                <div onClick={handleReset}>
                    Reset
                </div>
                <div onClick={!props.winner ? handleUndo : null} className={props.winner ? "red" : null}>
                    Undo
                </div>
            </div>
        </div>
    );
};