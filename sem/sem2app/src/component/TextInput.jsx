import { useState } from "react";

function TextInput() {
    const [text, setText] = useState();

    const getText = ({ target }) => {
        setText(target.value);
    };

    return (
        <div>
            <input type="text" value={text} onChange={getText} maxLength={50} />
            <p>вы ввели: {text}</p>
        </div>
    );
}

export default TextInput;