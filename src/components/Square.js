import { useState, useEffect } from "react";

export default function Square(props) {

    const [imgLink, setImgLink] = useState("null");

    useEffect(() => {
        if(!props.filledWith) {
            setImgLink(null);
        }
    }, [props.filledWith]);

    function handleClick() {
        if (!props.filledWith) {
            if (props.player === "X") {
                setImgLink("X.svg");
            }
            else if (props.player === "O") {
                setImgLink("o.svg");
            }
            props.handleClick(props.id);
        }
    };

    function handleMouseEnter() {
        if (!props.filledWith) {
            if (props.player === "X") {
                setImgLink("X.svg");
            }
            else if (props.player === "O") {
                setImgLink("o.svg");
            }
        }
    };

    function handleMouseLeave() {
        if (!props.filledWith) {
            setImgLink(null);
        }
    };

    return (
        <div className="square" id={props.id} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
            <img src={imgLink} alt="" />
        </div>
    )
};
