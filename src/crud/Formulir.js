import React from 'react' 
import {Form, Button} from 'react-bootstrap'

const Formulir = ({nama, deskripsi, harga, handleChange, handleSubmit, id}) => {
    return (
        <div>
        <h4>{id ? "Edit Data" : "Tambah Data"}</h4>
        <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="nama">
    <Form.Label>Nama Buku</Form.Label>
    <Form.Control type="text" name="nama" placeholder="nama" value={nama} onChange={(event) => handleChange(event)} required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="deskripsi">
    <Form.Label>Deskripsi</Form.Label>
    <Form.Control type="textarea" name="deskripsi"  placeholder="deskripsi" value={deskripsi} onChange={(event) => handleChange(event)} required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="harga">
    <Form.Label>Harga Buku</Form.Label>
    <Form.Control type="number" name="harga"  placeholder="harga" value={harga} onChange={(event) => handleChange(event)} required/>
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>
    );
};

export default Formulir