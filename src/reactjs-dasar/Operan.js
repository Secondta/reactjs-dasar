import React from 'react';

export default  class Operan extends React.Component {
    
    gantiMakanan = (makanan_baru) => {
        this.setState({
            makanan: makanan_baru
        })
    }
    render() {
        return(
            <div>
                <h2>Operan State yang menjadi props: {this.props.makanan}</h2>
                <button onClick={() => this.gantiMakanan("Soto")}>Soto</button>
            </div>
        )
    }
}