import React from "react";
import Typed from 'typed.js'

export const Type = (props) => {
    const el = React.useRef(null);
    const typed = React.useRef(null);

    React.useEffect(() => {
        const options = {
            strings: props.texts,
            typeSpeed: 20,
            backSpeed: 2,
            // loop: props.loop ? true : false
        };
        typed.current = new Typed(el.current, options);

        return () => {
            typed.current.destroy();
        }
    })

    return (
        <div className="wrap">
            <div className="type-wrap">
                <span ref={el} />
            </div>
        </div>
    );
}
