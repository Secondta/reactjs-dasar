import React from 'react' 
import {Table, Button,} from 'react-bootstrap'

const Tabel = ({leptops, editData, hapusData}) => {
    return (
        <Table striped bordered hover size="sm" variant="dark">
  <thead>
    <tr>
      <th>No</th>
      <th>Nama</th>
      <th>Harga</th>
      <th>Stock</th>
      <th>Total Harga</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {leptops.map((leptop, index) => {
      return(
        <tr key={index}>
      <td>{index + 1}</td>
      <td>{leptop.nama}</td>
      <td>Rp{leptop.harga},00</td>
      <td>{leptop.stock}</td>
      <td>Rp{leptop.stock * leptop.harga},00</td>
      <td><Button variant="secondary" type="submit" size="sm" onClick={() => editData(leptop.id) }>
    Edit
  </Button>&nbsp;||&nbsp;
  <Button variant="secondary" type="submit" size="sm" onClick={() => hapusData(leptop.id) }>
    Hapus
  </Button></td>
    </tr>
      )
    })}
    
  </tbody>
</Table>
    );
};

export default Tabel