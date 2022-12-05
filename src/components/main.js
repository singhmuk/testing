import React, {useState} from "react";
import PaasName from './passname'

const Main = () => {
    const [username] = useState('Krishana');

    return(
        <div>
            <PaasName name={username} />
        </div>
    )
}

export default Main;