import React, { useState } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CFormSelect,
  CNavbar,
  CNavbarBrand,
  CNavLink,
  CAlert
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilLocationPin, cilList, cilDescription, cilUser, cilEnvelopeOpen } from '@coreui/icons';

const ComplaintForm = () => {
  const [formData, setFormData] = useState({
    user_id: '',
    nombre: '',
    apellid: '',
    correo: '',
    description: '',
    id_parish: '',
    address: '',
    problems_id: '',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage('');
    setError('');

    try {
      const response = await fetch('http://localhost:3001/complaints');
      const complaints = await response.json();

      const exists = complaints.some((complaint) => complaint.user_id === formData.user_id);
      if (exists) {
        setError('The ID has already been used for a complaint.');
        return;
      }

      const complaintData = {
        id: formData.user_id, 
        user_id: formData.user_id,
        nombre: formData.nombre,
        apellid: formData.apellid,
        correo: formData.correo,
        problems_id: parseInt(formData.problems_id),
        description: formData.description,
        id_parish: parseInt(formData.id_parish),
        address: formData.address,
        status_id: 1,
        complaint_date: new Date().toISOString().split('T')[0]
      };

      const postResponse = await fetch('http://localhost:3001/complaints', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(complaintData),
      });

      if (postResponse.ok) {
        setMessage('Report sent successfully');
        setFormData({
          user_id: '', nombre: '', apellid: '', correo: '',
          description: '', id_parish: '', address: '', problems_id: ''
        });
      } else {
        setError('Error sending the complaint');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('No se pudo conectar con el servidor');
    }
  };

  return (
    <>
      <CNavbar className="navcom">
        <CContainer fluid>
          <CNavbarBrand>Complaints</CNavbarBrand>
          <CNavLink href="#/login" className="text-nav">Login</CNavLink>
        </CContainer>
      </CNavbar>

      <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md={9} lg={7} xl={6}>
              <CCard className="mx-4">
                <CCardBody className="p-4">
                  <CForm onSubmit={handleSubmit}>
                    <h1>Send Complaint</h1>
                    <p className="text-body-secondary">Complete the following fields</p>
                    
                    {message && <CAlert color="success">{message}</CAlert>}
                    {error && <CAlert color="danger">{error}</CAlert>} 

                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="ID"
                        name="user_id"
                        value={formData.user_id}
                        onChange={handleChange}
                        required
                      />
                    </CInputGroup>

                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="first name"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                      />
                    </CInputGroup>

                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="last name"
                        name="apellid"
                        value={formData.apellid}
                        onChange={handleChange}
                        required
                      />
                    </CInputGroup>

                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilEnvelopeOpen} />
                      </CInputGroupText>
                      <CFormInput
                        type="email"
                        placeholder="email"
                        name="correo"
                        value={formData.correo}
                        onChange={handleChange}
                        required
                      />
                    </CInputGroup>
                    
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilDescription} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Problem description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                      />
                    </CInputGroup>

                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilLocationPin} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                      />
                    </CInputGroup>

                    <CInputGroup className="mb-3">
                      <CInputGroupText>Parish</CInputGroupText>
                      <CFormSelect
                        name="id_parish"
                        value={formData.id_parish}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Seleccione una parroquia</option>
                        <option value="1">San Juan Bautista</option>
                        <option value="2">La Concordia</option>
                        <option value="3">Pedro María Morantes</option>
                        <option value="4">San Sebastián</option>
                        <option value="5">Francisco Romero Lobo</option>
                      </CFormSelect>
                    </CInputGroup>

                    <CInputGroup className="mb-3">
                      <CInputGroupText>type of problem</CInputGroupText>
                      <CFormSelect
                        name="problems_id"
                        value={formData.problems_id}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Seleccione un problema</option>
                        <option value="1">Brocales</option>
                        <option value="2">Alumbrado público</option>
                        <option value="3">Asfaltado vial</option>
                        <option value="4">Aseo público</option>
                        <option value="5">Colectores</option>
                        <option value="6">Pavimento rígido</option>
                      </CFormSelect>
                    </CInputGroup>

                    <div className="d-grid">
                      <CButton type="submit" className='button_register'>Send Complaint</CButton>
                    </div>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    </>
  );
};

export default ComplaintForm;
