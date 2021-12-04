import React from 'react';
// import OperanTugas from './OperanTugas';

export default  class StateProps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Mobil: 'BMW, Suzuki, Tesla'
        }
    }
    
    gantiMobil = (Mobil_baru) => {
        this.setState({
            Mobil: Mobil_baru
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.Mobil}</h2>
                <button onClick={() => this.gantiMobil("Suzuki, Tesla")}>Ganti Mobil</button>
                {/* <button onClick={() => this.gantiMobil("Tesla")}>Tesla</button> */}
                {/* <OperanTugas Mobil = {this.state.Mobil}/> */}
                {/* <button onClick={() => this.setState({ Mobil: 'Bakso'})}>Bakso</button>
                <button onClick={() => this.setState({ Mobil: ''})}>Gamau Makan</button> */}
            </div>
        )
    }
}