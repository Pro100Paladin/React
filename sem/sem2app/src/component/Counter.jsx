import { useEffect, useState } from "react";

function Counter() {

    const [count, setCounter] = useState(0)


    return ( 
        <div>
            <button onClick={() => setCounter(count +1)}>Click {count}</button>
            {/* <p>{count}</p> */}
        </div>
     );
}

export default Counter;