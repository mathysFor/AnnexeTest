import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import 'rsuite/dist/rsuite.min.css';
import { useSelector } from 'react-redux'; 
import { Loader } from 'rsuite'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'

export default function StepOne(props) {


const [finish, setFinish] = useState('');
const [ageFromApi,setAgeFromApi]= useState(0);
const redux = useSelector((state)=> state ) ;


useEffect(() => {

    (async () => {

      // ***************************** ASK & SET commercantList ****************************** 
                var rawResponse = await fetch(`https://api.agify.io?name=${redux.saveUser.firstName}`)
                rawResponse = await rawResponse.json();
                setAgeFromApi(rawResponse.age)
                setFinish(true)
      // ***************************** SET commercantList AVEC adresse en LAT/LNG  ****************************** 
       
          })(); 
  


  }, []);

  if(!finish){
    return  <div style={styles.container}>
          <Loader size="lg" content="Loading" />
           </div>
   
  }else{
    return (

<div style={styles.container}>
<Link to="/StepOne" style={{position:'absolute',top:'40px',left:'40px'}}> <FontAwesomeIcon icon={faArrowCircleLeft}  style={{height:'40px'}}/> </Link> 

     <div style={{display:'flex', flexDirection:'row'}} >
       <div style={{display:'flex', flexDirection:'column'}}>
     
          <div>
            <p style={styles.titre}> <span style={{fontSize: '20px'}}>FirstName :</span> {redux.saveUser.firstName}</p>
          </div>
          <div>
            <p style={styles.titre}> <span style={{fontSize: '20px'}}>Gender :</span> {redux.saveUser.gender}</p>
          </div>
      
      </div>
           
    
          <div>
            <p style={styles.titre}> <span style={{fontSize: '20px'}}>lastName :</span> {redux.saveUser.lastName}</p>
          </div>
          <div>
            <p style={styles.titre}> <span style={{fontSize: '20px'}}>Age :</span> {redux.saveUser.age}</p>
          </div>
          <div>
            <p style={styles.titre}> <span style={{fontSize: '20px'}}>Age of your name :</span> {ageFromApi}</p>
          </div>
            
     </div>

<Link to="/StepTwo"  style={styles.button} className="btn btn-primary mt-5">Next</Link>

</div>
    )
  } 
   }



   const styles = {
    container : {

        height:'100vH',
        width:'100vw',
        justifyContent:'center',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        background:"linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize:"400% 400%",

    },
    titre : {
      margin : '20px',
  },
  input : {

    boxShadow: '1px 2px 9px black',
    borderRadius: '5px',
    border : 0,
    height :'40px',
    paddingLeft: '20px',
    marginLeft:'20px',
    marginTop:'35px'

},
button : {
  width: '150px'
},
   }