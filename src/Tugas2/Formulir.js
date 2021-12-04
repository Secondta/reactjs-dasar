import React from 'react' 
import {Form, Button, InputGroup, FormControl} from 'react-bootstrap'

const Formulir = ({nama, stock, harga, handleChange, handleSubmit, id}) => {
    return (
        <div>
        <h4>{id ? "Edit Data Penjualan" : "Tambah Data Penjualan"}</h4>
        <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="nama">
    <Form.Label>Nama</Form.Label>
    <Form.Control type="text" name="nama" placeholder="nama" value={nama} onChange={(event) => handleChange(event)} required/>
  </Form.Group>
  <Form.Label>Harga</Form.Label>
      <InputGroup className="mb-2">
        <InputGroup.Text>Rp</InputGroup.Text>
        <FormControl id="inlineFormInputGroup" name="harga"  placeholder="harga" value={harga} onChange={(event) => handleChange(event)} required />
        <span class="input-group-text">,00</span>
      </InputGroup>
  <Form.Group className="mb-3" controlId="stock">
    <Form.Label>Stock</Form.Label>
    <Form.Control type="number" name="stock"  placeholder="stock" value={stock} onChange={(event) => handleChange(event)} required/>
  </Form.Group>
  <Button variant="secondary" type="submit" size="sm">
    Submit
  </Button>
</Form>
</div>
    );
};

export default Formulir