import React from 'react' 
import {Table, Button,} from 'react-bootstrap'

const Tabel = ({bukus, editData, hapusData}) => {
    return (
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Nama Buku</th>
      <th>Deskripsi</th>
      <th>Harga</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {bukus.map((buku, index) => {
      return(
        <tr key={index}>
      <td>{index + 1}</td>
      <td>{buku.nama}</td>
      <td>{buku.deskripsi}</td>
      <td>{buku.harga}</td>
      <td><Button variant="primary" type="submit" size="sm" onClick={() => editData(buku.id) }>
    Edit
  </Button>&nbsp;&nbsp;&nbsp;
  <Button variant="primary" type="submit" size="sm" onClick={() => hapusData(buku.id) }>
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