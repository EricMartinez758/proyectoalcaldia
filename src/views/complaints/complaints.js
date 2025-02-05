import React, { useEffect, useState } from "react";
import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CFormSelect,
} from "@coreui/react";

const Complaints = () => {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const response = await fetch("http://localhost:3001/complaints");
        if (!response.ok) {
          throw new Error("Error al cargar las denuncias");
        }
        const data = await response.json();
        setComplaints(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchComplaints();
  }, []);

  // Función para actualizar el estado de la denuncia en el servidor
  const handleStatusChange = async (id, newStatus) => {
    try {
      const response = await fetch(`http://localhost:3001/complaints/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        throw new Error("Error al actualizar el estado");
      }

      // Actualizar el estado localmente
      setComplaints((prevComplaints) =>
        prevComplaints.map((complaint) =>
          complaint.id === id ? { ...complaint, status: newStatus } : complaint
        )
      );
    } catch (error) {
      console.error("Error al actualizar estado:", error);
    }
  };

  if (loading) return <p>Cargando denuncias...</p>;
  if (error) return <p>Error al cargar denuncias: {error}</p>;

  return (
    <div>
      <h2>List of Complaints Made</h2>
      <CTable hover>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell>ID</CTableHeaderCell>
            <CTableHeaderCell>Users</CTableHeaderCell>
            <CTableHeaderCell>Problems</CTableHeaderCell>
            <CTableHeaderCell>description</CTableHeaderCell>
            <CTableHeaderCell>Parish</CTableHeaderCell>
            <CTableHeaderCell>Address</CTableHeaderCell>
            <CTableHeaderCell>Status</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {complaints.map((complaint) => (
            <CTableRow key={complaint.id}>
              <CTableDataCell>{complaint.id}</CTableDataCell>
              <CTableDataCell>{`${complaint.nombre} ${complaint.apellido}`}</CTableDataCell>
              <CTableDataCell>{complaint.problems_id}</CTableDataCell>
              <CTableDataCell>{complaint.description}</CTableDataCell>
              <CTableDataCell>{complaint.id_parish}</CTableDataCell>
              <CTableDataCell>{complaint.address}</CTableDataCell>
              <CTableDataCell>
                <CFormSelect
                  value={complaint.status}
                  onChange={(e) => handleStatusChange(complaint.id, e.target.value)}
                >
                  <option value="Recibido">Received</option>
                  <option value="En revisión">Under review</option>
                  <option value="Aceptado">Accepted</option>
                </CFormSelect>
              </CTableDataCell>
              <CTableDataCell>{complaint.fecha}</CTableDataCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
    </div>
  );
};

export default Complaints;
