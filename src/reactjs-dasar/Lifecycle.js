import React from 'react'
import Sublifecycle from './Sublifecycle'

export default class Lifecycle extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            makanan : 'Bakso',
            data: {},
            tampilHalamanSub: false
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => response.json())
        .then((json) => {this.setState({
            data : json
        })
    })
    }

    ubahMakanan(value) {
        this.setState({
            makanan: value
        })
    }
    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/todos/1')
    //     .then((response) => response.json())
    //     .then((json) => {console.log("Simpan Then 2: ",  json)})
    // }
    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/todos/1')
    //     .then((response) => console.log("Hasil: ", response.json()))
    //     .then((json) => console.log("Json: ",  json))
    // }

    render() {
        // console.log("Data : ", this.state.data)
        return (
            <div>
                {/* <h2>{this.state.data.title}</h2> */}
                <h2>{this.state.makanan}</h2>
                {this.state.tampilHalamanSub && <Sublifecycle ubahMakanan={(value) => this.ubahMakanan(value)} />}

                <button onClick={() => this.setState({tampilHalamanSub: !this.state.tampilHalamanSub})}>Tampilkan Halaman Sub</button>
            </div>
        )
    }
}