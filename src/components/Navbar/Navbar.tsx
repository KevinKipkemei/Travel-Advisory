import './Navbar.css'
// import { Autocomplete } from '@react-google-maps/api';

const Navbar = () => {
    return(
        <div>
            <nav className="navbar">
                <h1>Travel Companion</h1>
                {/* <Autocomplete> */}
                    <input className='search-input' placeholder='Enter location'/>
                {/* </Autocomplete> */}
            </nav>
        </div>
    )
}

export default Navbar;