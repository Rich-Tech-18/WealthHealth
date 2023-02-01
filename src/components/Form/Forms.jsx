import './Forms.css';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { dataUser } from '../../app/store';
import ModalComp from '../ModalComp/ModalComp';
import states from './stateList';


/**
 * Component for showing a forms element.
 *
 * @component
 * 
 * @return HTML element
 * 
 */




const Forms = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        startDate: '',
        street: '',
        city: '',
        zipCode: '',
        department: '',
        state: ''
    });
    const [modalIsOpen, setModalIsOpen] = useState(false);


/**
 * function for increment the table of the employee.
 *
 * @param {string} - the value of the input
 * 
 * @return Object
 * 
 */

     
    const handleChange = ({currentTarget}) => {
        const {name, value} = currentTarget;
        if(name === 'dateOfBirth' || name === 'startDate'){
            const elemDate = new Date(value);
            setData({...data, [name] : elemDate.toLocaleDateString("fr")}); 
        }else{
           setData({...data, [name] : value}); 
        }
    
    }

/**
 * function for submit the table of the employee.
 *
 * @param {e} - the event on the click
 * 
 * @return Object
 * 
 */
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(dataUser(data));
    }
/**
 * function for open the modal on click event.
 * 
 * @return boolean
 * 
 */

    const handleModal = () =>{
        document.body.style.overflow = "hidden";
        setModalIsOpen(true);
    }



    return(
        <React.Fragment>
            <form onSubmit={handleSubmit} id="create-employee">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" name="firstName" onChange={handleChange}/>

                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" name="lastName" onChange={handleChange}/>

                <label htmlFor="date-of-birth">Date of Birth</label>
                <input id="date-of-birth" type="date" name="dateOfBirth" onChange={handleChange}/>

                <label htmlFor="start-date">Start Date</label>
                <input id="start-date" type="date" name="startDate" onChange={handleChange}/>

                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" name="street" onChange={handleChange}/>

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" name="city" onChange={handleChange}/>

                    <label htmlFor="state">State</label>
                    <select name="state" id="state" defaultValue=" " onChange={handleChange}>
                        <option value=" " disabled hidden> </option>
                        {states.map((elem, index) => {
                            return(
                                <option value={elem.abbreviation} key={index}>{elem.name}</option>
                            )
                            
                        })}
                    </select>

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" name="zipCode" onChange={handleChange}/>
                </fieldset>

                <label htmlFor="department">Department</label>
                <select name="department" id="department" defaultValue=" " onChange={handleChange}>
                    <option value=" " disabled hidden> </option>
                    <option value="Sales">Sales</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Human Resources">Human Resources</option>
                    <option value="Legal">Legal</option>
                </select>
                <button onClick={handleModal}>Save</button>
                {modalIsOpen && <ModalComp closeModal={setModalIsOpen}/>}
                
            </form> 
            
        </React.Fragment>
        

           
    )
}

export default Forms;