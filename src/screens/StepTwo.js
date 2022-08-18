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

  var text ;

  if (ageFromApi < redux.saveUser.age) {
    text =  <h3>You are older than your firstname.. Maybe you are the first " {redux.saveUser.firstName} " ? </h3>
  }else{
    text =  <h3>{redux.saveUser.firstName} existed {ageFromApi - redux.saveUser.age} years before you born, now there is {redux.saveUser.count} {redux.saveUser.firstName} in the world</h3>

  }

  if(!finish){
    return  <div style={styles.container}>
          <Loader size="lg" content="Loading" />
           </div>
   
  }else{
    return (

<div style={styles.container}>
<Link to="/StepOne" style={{position:'absolute',top:'40px',left:'40px'}}> <FontAwesomeIcon icon={faArrowCircleLeft}  style={{height:'40px'}}/> </Link> 

          <div style={{marginBottom:'30px'}}>
            {text}
          </div>
     <div style={{display:'flex', flexDirection:'row'}} >

           <div>
            <p style={styles.titre}> <span style={styles.span} >LastName :</span> {redux.saveUser.lastName}</p>
          </div>
          <div>
            <p style={styles.titre}> <span style={styles.span} >Gender :</span> {redux.saveUser.gender}</p>
          </div>
          <div>
            <p style={styles.titre}> <span style={styles.span} >Your Age :</span> {redux.saveUser.age}</p>
          </div>
          <div>
            <p style={styles.titre}> <span style={styles.span} >Age of your name :</span> {ageFromApi}</p>
          </div>
            {/* {text} */}
     </div>

<Link to="/StepThree"  style={styles.button} className="btn btn-primary mt-5">Find Origin </Link>

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
      fontSize : '20px',

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
span :{

  fontSize: '20px',
  fontWeight:'bold'
},
button : {
  width: '150px'
},
   }