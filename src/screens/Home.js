import React, { useState}  from 'react';
import { Link } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';





export default function Home() {

    const [firstName, setFirstname] =  useState('')
    const [lastName, setLastName] =  useState('')
    const [error, setError] = useState('Input empty')
    const [to, setTo] = useState('')
    const dispatch = useDispatch() ;



    function verif() {

        if (lastName !== '' && firstName !== '') {
        setError('')
        setTo('/StepOne')
        }else{
        setError('Input empty')
        setTo('/')
        }
    }




function sendToStore(firstName,lastName) {   




    var essai = <p style={{color:'red'}}> Input empty </p>
  
  if (firstName !== '' && lastName !== '' ) {
    
    dispatch({
    type:'user/setUser',
    payload: {                       
      firstName:firstName,
      lastName:lastName,
    }
   }) 
//   return  setTo("/StepOne")

  }else{
    console.log('oui');
    setError(essai)
    // return setTo("/")
  }
}


    return (

        <div style={styles.container}>
        <div style={{display:'flex', flexDirection:'row'}}>

            <div  style={{marginRight:'50px'} }>
            <h3>FirstName</h3>
            <input
            placeholder='Jhon'
            style={styles.input}
             onChange={(e) => {
                setFirstname(e.target.value)
                verif()
            }} 
             value={firstName}/>
            </div>
      
            <div style={{marginLeft:'50px'}}>
            <h3>LastName</h3>
            <input
            placeholder='Doe'
            style={styles.input}
             onChange={(e) => {
                setLastName(e.target.value)
                verif()
            }} 
             value={lastName}/>
            </div>
        </div>
        <Link to={to} onClick={()=> sendToStore(firstName,lastName)} style={styles.button} className="btn btn-primary mt-5"> Next</Link>
        {error}

        
        </div>

    
    );
   }
 

   const styles = {
    container : {

        height:'100vH',
        justifyContent:'center',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        background:"linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize:"400% 400%",

    },

    button : {
        width: '150px'
    },
    input : {

        boxShadow: '1px 2px 9px black',
        borderRadius: '5px',
        border : 0,
        height :'40px',
        paddingLeft: '20px'
    }

   }