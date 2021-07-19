import React, { useState } from 'react';
interface IProps {
    name: string,
    email: string,


}


const Contract = ({name, email}: IProps): JSX.Element => {

    const [contract, setContract] = useState("")
    const [contractList, setContractList] = useState<string[]>([])
    const onClick = () => {
        setContractList([...contractList, contract])
        setContract('')
    }
    return (
        <div className='card'>
            <h1>Contract List</h1>
            <div className="form">
                <input value={contract} type="text" name='name' placeholder="Contract Name" onChange={(e)=> setContract(e.target.value)}/>
                <button onClick={onClick}>Add</button>
            </div>
            <strong>{contract}</strong>
            <p>
                <strong>Name</strong> {name}
            </p>
            <p>
                <strong>Email</strong> {email}
            </p>
        </div>
    );
};

export default Contract;