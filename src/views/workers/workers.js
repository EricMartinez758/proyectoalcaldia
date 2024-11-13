import React, { useState } from "react";

const initialData = [
  { id: 1, firstname: "Carlos", lastname: "Mendez", dni: 18345522, typeofuser: "Blacksmith" },
  { id: 2, firstname: "Monica", lastname: "Carvajal", dni: 25634532, typeofuser: "Architect" },
  { id: 3, firstname: "Leon", lastname: "Pineda", dni: 28934924, typeofuser: "Worker" },
];

function Workers() {
  const [data, setData] = useState(initialData);
  const [modalInsert, setModalInsert] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
  const [form, setForm] = useState({
    id: "",
    firstname: "",
    lastname: "",
    dni: "",
    typeofuser: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const openInsertModal = () => {
    setForm({ id: "", firstname: "", lastname: "", dni: "", typeofuser: "" });
    setModalInsert(true);
  };

  const closeInsertModal = () => setModalInsert(false);

  const openEditModal = (item) => {
    setForm(item);
    setModalUpdate(true);
  };

  const closeEditModal = () => setModalUpdate(false);

  const handleInsert = () => {
    const newData = [...data, { ...form, id: data.length + 1 }];
    setData(newData);
    closeInsertModal();
  };

  const handleEdit = () => {
    const updatedData = data.map((item) => (item.id === form.id ? form : item));
    setData(updatedData);
    closeEditModal();
  };

  const handleDelete = (id) => {
    if (window.confirm("Do you want to delete this record?")) {
      const filteredData = data.filter((item) => item.id !== id);
      setData(filteredData);
    }
  };

  return (
    <div className="container mt-4">
      <button className="btn btn-primary mb-3" onClick={openInsertModal}>
        Insert New Worker
      </button>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>DNI</th>
            <th>Type of User</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.firstname}</td>
              <td>{item.lastname}</td>
              <td>{item.dni}</td>
              <td>{item.typeofuser}</td>
              <td>
                <button className="btn btn-success btn-sm mx-1" onClick={() => openEditModal(item)}>
                  Edit
                </button>
                <button className="btn btn-danger btn-sm mx-1" onClick={() => handleDelete(item.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal Insert */}
      {modalInsert && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Insert Worker</h5>
                <button className="btn-close" onClick={closeInsertModal}></button>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  name="firstname"
                  placeholder="Firstname"
                  className="form-control mb-2"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="lastname"
                  placeholder="Lastname"
                  className="form-control mb-2"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="dni"
                  placeholder="DNI"
                  className="form-control mb-2"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="typeofuser"
                  placeholder="Type of User"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
              <div className="modal-footer">
                <button className="btn btn-primary" onClick={handleInsert}>
                  Insert
                </button>
                <button className="btn btn-secondary" onClick={closeInsertModal}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Edit */}
      {modalUpdate && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Worker</h5>
                <button className="btn-close" onClick={closeEditModal}></button>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  name="firstname"
                  placeholder="Firstname"
                  className="form-control mb-2"
                  value={form.firstname}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="lastname"
                  placeholder="Lastname"
                  className="form-control mb-2"
                  value={form.lastname}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="dni"
                  placeholder="DNI"
                  className="form-control mb-2"
                  value={form.dni}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="typeofuser"
                  placeholder="Type of User"
                  className="form-control"
                  value={form.typeofuser}
                  onChange={handleChange}
                />
              </div>
              <div className="modal-footer">
                <button className="btn btn-primary" onClick={handleEdit}>
                  Save
                </button>
                <button className="btn btn-secondary" onClick={closeEditModal}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Workers;
