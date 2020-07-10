import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

function App() {
    return (
        <div className="App-header">
            <Router>
                <div className="App-link">
                    <h2>shoesStore.id</h2>
                    <ul>
                        <li>
                            <Link to="/">Beranda</Link>
                        </li>
                        <li>
                            <Link to="/about">Produk</Link>
                        </li>
                        <li>
                            <Link to="/topics">Hubungi kami</Link>
                        </li>
                    </ul>
                </div>
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/topics">
                        <Topics />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>

            </Router>
        </div>
    );
}

function Home() {
    return (
        <>
            <div className="container">
                <h2>Selamat Datang, today's catalog </h2>
                <p>Web ini dibangun menggunakan react.js loh</p>

                <div className="kotak">
                    <div className="produk">
                        <img src="https://images-na.ssl-images-amazon.com/images/I/61utX8kBDlL._UY500_.jpg" width="100" height="100" />
                        <h3>Blue Ocean</h3>
                        <p>Harga Rp.100.000,-</p>
                    </div>

                    <div className="produk">
                        <img src="https://images-na.ssl-images-amazon.com/images/I/41Leu3gBUFL.jpg" width="100" height="100" />
                        <h3>Black Canary</h3>
                        <p>Harga Rp.100.000,-</p>
                    </div>

                    <div className="produk">
                        <img src="https://images-na.ssl-images-amazon.com/images/I/61utX8kBDlL._UY500_.jpg" width="100" height="100" />
                        <h3>Blue Ocean</h3>
                        <p>Harga Rp.100.000,-</p>
                    </div>


                </div>

            </div>

        </>
    );
}

function About() {
    return (

        <div className="container">
            <h2>Produk</h2>
            <div className="kotak">
                <div className="produk">
                    <img src="https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw26c108cf/images/d_08/M9160_D_08X1.jpg?sw=406" width="100" height="100" />
                    <h3>Converse</h3>
                    <p>Harga Rp.100.000,-</p>
                </div>

                <div className="produk">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQBnnQTFzjqX_N8294zIvzifcwQ80PLshdIkg&usqp=CAU" width="100" height="100" />
                    <h3>Black Canary</h3>
                    <p>Harga Rp.100.000,-</p>
                </div>

                <div className="produk">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0iCjiYHntjGhClAjKniilBwAFFo_JtLFxkQ&usqp=CAU" width="100" height="100" />
                    <h3>Blue Ocean</h3>
                    <p>Harga Rp.100.000,-</p>
                </div>

                <div className="produk">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRL-J85iJkEj8V0udIZL2plcfI-qSzUjxfssw&usqp=CAU" width="100" height="100" />
                    <h3>Blue Ocean</h3>
                    <p>Harga Rp.100.000,-</p>
                </div>
                <div className="produk">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRuj3F2fE4R0FJXH10mAgq4lGa76uFqjIO5Iw&usqp=CAU" width="100" height="100" />
                    <h3>Blue Ocean</h3>
                    <p>Harga Rp.100.000,-</p>
                </div>
                <div className="produk">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7uI1BoZLGKiCBFsfJmtDq8FvBn81tVmIDZA&usqp=CAU" width="100" height="100" />
                    <h3>Blue Ocean</h3>
                    <p>Harga Rp.100.000,-</p>
                </div>
            </div>


        </div>


    );


}

// menu tentang
function Topics() {

    return (
        <div className="container">
            <h2>Silahkan berikan rating untuk tampilan web ini</h2>
            <Counter />
            <br />
            <Forem />

        </div>
    );
}




// fitur pemberian rating
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { kucing: 0 };
    }

    render() {
        return (
            <div>
                <h2>Rating anda : {this.state.kucing}</h2>
                <p>
                    <button onClick={() => { this.setState({ kucing: this.state.kucing + 1 }) }}>Tambah</button>
                    <button onClick={() => { this.setState({ kucing: this.state.kucing - 1 }) }}>Kurangi</button>
                </p>
            </div>
        );
    }
}



//form untuk mengirimkan keluhan
class Forem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', gaji: 0, alamat: '', jabatan: '', mulai: '' };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
    }

    onValueChange(event) {
        this.setState({
            selectedOption: event.target.value
        });
    }

    onSubmit(event) {
        alert(`Nama: ${this.state.name} Gaji: ${this.state.gaji} Jenis Kelamin: ${this.state.selectedOption} Alamat: ${this.state.alamat} Jabatan: ${this.state.jabatan} mulai kerja: ${this.state.mulai} `);
        event.preventDefault();
    }

    onChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        const { name, jenis, alamat, gaji, mulai } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <h2>Hubungi Kami di :</h2>
                <label> Nama : <input name="name" type="text" value={name} onChange={this.onChange} /> </label> <br />
                <label> Kode Pesanan : <input name="gaji" type="text" value={gaji} onChange={this.onChange} /> </label> <br />
                <label> Tanggal Pesanan: <input name="mulai" type="date" value={mulai} onChange={this.onChange} /> </label> <br />

                <label>
                    Laki-laki :
                            <input
                        type="radio"
                        value="Laki-laki"
                        checked={this.state.selectedOption === "Laki-laki"}
                        onChange={this.onValueChange}
                    />
                </label>
                <label>
                    Perempuan :
                            <input
                        type="radio"
                        value="Perempuan"
                        checked={this.state.selectedOption === "Perempuan"}
                        onChange={this.onValueChange}
                    />
                </label>
                <br /> < br />
                <label> Keluhan: <textarea name="alamat" type="text" value={alamat} onChange={this.onChange} /> </label> <br />
                <input type="submit" />

            </form>
        );
    }
}



export default App;
