import React from 'react' 
import {Form, Button} from 'react-bootstrap'

const Formulir = () => {
    return (
        <div>
        <h4>Tambah Data</h4>
        <Form>
  <Form.Group className="mb-3" controlId="nama">
    <Form.Label>Nama Laptop</Form.Label>
    <Form.Control type="text" placeholder="nama" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="deskripsi">
    <Form.Label>Deskripsi</Form.Label>
    <Form.Control type="textarea" placeholder="deskripsi" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="harga">
    <Form.Label>Harga Buku</Form.Label>
    <Form.Control type="number" placeholder="harga" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>
    );
};

export default Formulir