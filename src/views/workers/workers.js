import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button, Container, Modal, ModalHeader, ModalBody, FormGroup, ModalFooter } from "reactstrap";

const data = [
    { id: 1, firstname: "Carlos", lastname: "Mendez", dni: 18345522, typeofuser: "blacksmith" },
    { id: 2, firstname: "Monica", lastname: "Carvajal", dni: 25634532, typeofuser: "Architect" },
    { id: 3, firstname: "Leon", lastname: "Pineda", dni:28934924, typeofuser: "Worker" },
];

class App extends React.Component {
    state = {
        data: data,
        modalInsert: false,
        modalUpdate: false,
        form: {
            id: "",
            firstname: "",
            lastname: "",
            dni: "",
            typeofuser: "",
        }
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            form: {
                ...this.state.form,
                [name]: value,
            }
        });
    };
    
    viewModalInsert = () => {
        this.setState({ modalInsert: true, form: { id: "", firstname: "", lastname: "", dni: "", typeofuser: "" } });
    };

    closeModalInsert = () => {
        this.setState({ modalInsert: false });
    };

    viewModalEdit = (element) => {
        this.setState({
            form: element,
            modalUpdate: true
        });
    };

    closeModalEdit = () => {
        this.setState({ modalUpdate: false });
    };

    insert = () => {
        const newRecord = { ...this.state.form };
        newRecord.id = this.state.data.length + 1;
        const list = [...this.state.data, newRecord];
        this.setState({ data: list, modalInsert: false });
    };

    edit = (form) => {
        const list = this.state.data.map(item => item.id === form.id ? form : item);
        this.setState({ data: list, modalUpdate: false });
    };

    delete = (form) => {
        const option = window.confirm("Do you want to delete this record with ID: " + form.id + "?");
        if (option) {
            const list = this.state.data.filter(item => item.id !== form.id);
            this.setState({ data: list });
        }
    };

    render() {
        return (
            <>
                <Container>
                    <Button color="primary" onClick={this.viewModalInsert}>Insert new worker</Button>

                    <Table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>DNI</th>
                                <th>Type of User</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map((element) => (
                                <tr key={element.id}>
                                    <td>{element.id}</td>
                                    <td>{element.firstname}</td>
                                    <td>{element.lastname}</td>
                                    <td>{element.dni}</td>
                                    <td>{element.typeofuser}</td>
                                    <td>
                                        <Button color="success" onClick={() => this.viewModalEdit(element)}>Edit</Button>{" "}
                                        <Button color="danger" onClick={() => this.delete(element)}>Delete</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Container>

                {/* Modal of insertion */}
                <Modal isOpen={this.state.modalInsert}>
                    <ModalHeader>Insert Worker</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <label>Firstname</label>
                            <input className="form-control" name="firstname" type="text" onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <label>Lastname</label>
                            <input className="form-control" name="lastname" type="text" onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <label>DNI</label>
                            <input className="form-control" name="dni" type="text" onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <label>Type of User</label>
                            <input className="form-control" name="typeofuser" type="text" onChange={this.handleChange} />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.insert}>Insert</Button>
                        <Button color="secondary" onClick={this.closeModalInsert}>Cancel</Button>
                    </ModalFooter>
                </Modal>

                {/* Modal of editind */}
                <Modal isOpen={this.state.modalUpdate}>
                    <ModalHeader>Edit Worker</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <label>Firstname</label>
                            <input className="form-control" name="firstname" type="text" value={this.state.form.firstname} onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <label>Lastname</label>
                            <input className="form-control" name="lastname" type="text" value={this.state.form.lastname} onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <label>DNI</label>
                            <input className="form-control" name="dni" type="text" value={this.state.form.dni} onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <label>Type of User</label>
                            <input className="form-control" name="typeofuser" type="text" value={this.state.form.typeofuser} onChange={this.handleChange} />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => this.edit(this.state.form)}>Edit</Button>
                        <Button color="secondary" onClick={this.closeModalEdit}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </>
        );
    }
}

export default App;
