// src/views/complaints/Complaints.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react';
import { fetchComplaints } from '../../redux/slices/complaintSlice';

const Complaints = () => {
  const dispatch = useDispatch();
  const { complaints, loading, error } = useSelector((state) => state.complaints);

  useEffect(() => {
    dispatch(fetchComplaints());
  }, [dispatch]);

  if (loading) return <p>Cargando denuncias...</p>;
  if (error) return <p>Error al cargar denuncias: {error}</p>;

  return (
    <div>
      <h2>Listado de Denuncias Realizadas</h2>
      <CTable hover>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell>ID</CTableHeaderCell>
            <CTableHeaderCell>Usuario</CTableHeaderCell>
            <CTableHeaderCell>Problema</CTableHeaderCell>
            <CTableHeaderCell>Descripción</CTableHeaderCell>
            <CTableHeaderCell>Parroquia</CTableHeaderCell>
            <CTableHeaderCell>Dirección</CTableHeaderCell>
            <CTableHeaderCell>Estado</CTableHeaderCell>
            <CTableHeaderCell>Fecha</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {complaints.map((complaint) => (
            <CTableRow key={complaint.complaints_id}>
              <CTableDataCell>{complaint.complaints_id}</CTableDataCell>
              <CTableDataCell>{complaint.id}</CTableDataCell>
              <CTableDataCell>{complaint.problems_id}</CTableDataCell>
              <CTableDataCell>{complaint.description}</CTableDataCell>
              <CTableDataCell>{complaint.id_parish}</CTableDataCell>
              <CTableDataCell>{complaint.address}</CTableDataCell>
              <CTableDataCell>{complaint.status_id}</CTableDataCell>
              <CTableDataCell>{complaint.complaint_date}</CTableDataCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
    </div>
  );
};

export default Complaints;
