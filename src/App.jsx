import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RotatingLines } from 'react-loader-spinner'

function App() {

    const {isLoading, isError} = useSelector((state) => state.items);
    
    return (
        <>
            <Header />

            <div id='idapp1'>
                <center>
                    {isLoading === false && isError === true ? <h1>An error occurred.</h1>: null}
                    {isLoading ? <h1 id="idapp2"><RotatingLines color="blue" /></h1> : <Outlet/>}
                </center>
            </div>

            <Footer />

        </>
    )
}

export default App
