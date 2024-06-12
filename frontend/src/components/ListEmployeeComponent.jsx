import React, { useEffect, useState } from 'react'
import { deleteEmployee, listEmplooyes } from '../services/EmplooyeService'
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponent = () => {

    const [Employees, setEmplooyes] = useState([])

    const navigator = useNavigate();
    useEffect(() => {
        getAllEmployees();
    }, [])

    function getAllEmployees() {
        listEmplooyes().then((response) => {
            setEmplooyes(response.data)
        }).catch(error => {
            console.error(error)
        })
    }

    function addNewEmployee() {
        navigator('/add-employee')
    }
    function updateEmployee(id) {
        navigator(`/edit-employee/${id}`)
    }

    function removeEmployee(id) {
        console.log(id);
        deleteEmployee(id).then((response) => {
            getAllEmployees();
        }).catch(error => {
            console.error(error);
        })
    }


    return (
        <div className='container'>
            <h2 className='text-center'>List Of Employees</h2>
            <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add employee</button>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Emplooye First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email Id</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Employees.map(employee =>
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>
                                    <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}>Update</button>
                                    <button className='btn btn-danger' onClick={() => removeEmployee(employee.id)}
                                        style={{ marginLeft: '10px' }}
                                    >Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListEmployeeComponent