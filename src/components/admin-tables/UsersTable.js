import React from "react";
import Table from 'react-bootstrap/Table';
import { useState } from "react";
import ModalStyle1 from "../layout/ModalStyle1";


// const users = [
//     {
//         id: 1,
//         name: 'abbas',
//         age: 30,
//         email: "abbas@gmail.com"

//     }, {
//         id: 2,
//         name: 'abbas',
//         age: 30,
//         email: "abbas@gmail.com"
//     }, {
//         id: 3,
//         name: 'abbas',
//         age: 30,
//         email: "abbas@gmail.com"
//     }
// ]
function UsersTable() {
    // let arr = [1, 2, 3, 4]
    // let mappedArr = arr.map((num, index) => {
    //     if (index === 1) {
    //         return "hamada";
    //     }

    //     return num * 2;
    // })

    // console.log(mappedArr);

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    // hena 3amalna state ghayarna beeha users men dummy data le empty array haigy y render elcomponent
    // hayla2ih empty f users.map haykhosh 3ala add user handler w ye2om yedif elgedid eli gy men elform
    // sa3etha lazem a3mel comment lel dummy data fo2 3shan mayeb2ash fi etnen array esmohom users
    const [users, setUsers] = useState([])
    /**
     * ana 3ayz kol object yerga3 b shakl tr
     * zy mana kont 3ayz kol rakam yerga3 madroob f 2
     */
    let tableData = users.map((user) => <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.age}</td>
        <td>{user.email}</td>
    </tr>)
    const addUserHandler = (enteredName, enteredAge, enteredEmail) => {
        setUsers((prevstate) => {
            return ([...prevstate, { id: Math.random(), name: enteredName, age: enteredAge, email: enteredEmail }]
            )
        })
        setShow(false)

    }
    return (
        <div className="m-3">
            <div className="d-flex justify-content-between align-items-center ">
                <h1>UsersTable</h1>
                <button onClick={handleShow}>Add User</button>
                <ModalStyle1 show={show} setShow={setShow} addUserHandler={addUserHandler} />
            </div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData}
                </tbody>
            </Table>
        </div >
    )
}
export default UsersTable