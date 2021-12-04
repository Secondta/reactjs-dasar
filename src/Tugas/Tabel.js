import React from 'react' 
import {Table, Button, Card} from 'react-bootstrap'

const leptops   = [
  {
      nama: 'Dell XPS 13',
      stock: 13,
      harga: 33000000
  },
  {
      nama: 'Lenovo Yoga C930',
      stock: 11,
      harga: 27000000
  },
  {
      nama: 'Dell XPS 15',
      stock: 4,
      harga: 50399000
  },
  {
      nama: 'MSI GS65 Stealth',
      stock: 9,
      harga: 51999000
  },
  {
      nama: 'HP Spectre X360',
      stock: 13,
      harga: 13999000
  },
  {
      nama: 'Acer Aspire 7 A715-71',
      stock: 20,
      harga: 16999000
  },
  {
      nama: 'Razer Blade 15 Advanced Model',
      stock: 2,
      harga: 23500000
  },
  {
      nama: ' Asus ZenBook UX310UQ Core i7',
      stock: 5,
      harga: 2342764
  },
  {
      nama: 'Acer Chromebook 514',
      stock: 10,
      harga: 3725173
  },
  {
      nama: 'Toshiba Portege X20W',
      stock: 18,
      harga: 1499000
  },
]

const total_bayar = leptops.reduce((total_harga, leptop) => total_harga+leptop.harga*leptop.stock, 0);
const total_stock = leptops.reduce((total_stock, leptop) => total_stock+leptop.stock, 0);

const Tabel = () => {
    return (
      <div>
            <h2>Toko Laptop Jaya Jaya Jaya</h2>
        <Table striped bordered hover variant="info">
  <thead>
    <tr>
      <th>No</th>
      <th>Nama Laptop</th>
      <th>Stock</th>
      <th>Harga</th>
      <th>Total Harga</th>
      <th>Action</th>
    </tr>
  </thead>
  {leptops.map((leptop, index) => (
  <tbody>
                  <tr>
                <td>
                    <p>{index + 1}.</p>
                </td>
                        <td>
                    <p>{leptop.nama}</p>
                </td>
                        <td>
                    <p>{leptop.stock}</p>
                </td>
                        <td>
                    <p>Rp{leptop.harga},00</p>
                </td>
                        <td>
                    <p>Rp{leptop.harga * leptop.stock},00</p>
                </td>
                <td>
                    <p><Button variant="primary" type="submit">
                    Submit
                  </Button></p>
                </td>
                    </tr>
                </tbody>))}
</Table>
<Card>
  <Card.Header><h3>Filter harga laptop sultan yang lebih dari Rp20.000.000</h3></Card.Header>
  <Card.Body>
    <Card.Text>
    <ul>
        {leptops.filter((leptop) => leptop.harga > 20000000)
        .map((leptop, index) => (
        <p>{index + 1}. {leptop.nama + ': Rp ' + leptop.harga}</p>
        ))}
    </ul>
    </Card.Text>
  </Card.Body>
</Card>
<h3>Total Bayar Semua Laptop : {total_bayar}</h3>
<h3>Total Semua Stock Laptop : {total_stock}</h3>
</div>
    );
};

export default Tabel