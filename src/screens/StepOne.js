import React,{useState, useEffect} from 'react';
import { Link,Redirect } from 'react-router-dom';
import 'rsuite/dist/rsuite.min.css';
import { useSelector,useDispatch } from 'react-redux'; 
import { Loader } from 'rsuite'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'

export default function StepOne() {

const [gender, setGender] = useState('');
const [probability, setProbability] = useState('');
const [finish, setFinish] = useState('');
const [count, setCount] = useState('');
const [age,setAge ]= useState(0)

const dispatch = useDispatch() ;
const redux = useSelector((state)=> state ) ;

useEffect(() => {

    (async () => {
// ***************************** ASK API & SET STATE  ******************************** 
          var rawResponse = await fetch(`https://api.genderize.io?name=${redux.saveUser.firstName}`)
          rawResponse = await rawResponse.json();

          setGender(rawResponse.gender.toUpperCase())
          setProbability(rawResponse.probability)
          setCount(rawResponse.count)
          setFinish(true)
// ***************************** SEND to REDUX store  ******************************** 
         

    })(); 
  }, []);

  // ***************************** CONTROL IF NAME IS DEFINED  ******************************** 

  if (redux.saveUser.firstName  ===  undefined || redux.saveUser.lastName === undefined) {
    return <Redirect to='/' />
}

  // ***************************** FUNCTION ONCLICK ******************************** 

function sendToStore(age,gender,probability,count) {    
  dispatch({
    type:'user/setUserFinish',
    payload: {                    
        gender:gender,
        probability:probability,
        count:count,
        age:age

    }
   }) 
}

// ***************************** CONTROL IF LOAD FINISH******************************** 

  if(!finish){
    return  <div style={styles.container}>
          <Loader size="lg" content="Loading" />
           </div>
   
  }else{

// ***************************** RETURN BLOCK ******************************** 

    return (

<div style={styles.container}>
   <Link to="/" style={{position:'absolute',top:'40px',left:'40px'}}> <FontAwesomeIcon icon={faArrowCircleLeft}  style={{height:'40px'}}/> </Link> 

                        {/* RESULT - API */}

     <div style={{display:'flex', flexDirection:'row'}} >
       <div style={{display:'flex', flexDirection:'column'}}>
          <div>                                                                       
            <p style={styles.titre}> <span style={styles.span}>Gender :</span> {'\u00A0'} {'\u00A0'} {gender}</p>  
          </div>
      
          <div>
            <p style={styles.titre}> <span style={styles.span}>Probability :</span> {'\u00A0'} {'\u00A0'} {probability}</p>
          </div>
      </div>

                        {/* FORM - Age */}
           
            <div style={{marginLeft:'50px'}}>
            <p style={styles.titre}> <span style={styles.spanHow}>How</span> old are you ?</p>
            <input
            placeholder='32'
            type="number"
            style={styles.input}
            onChange={(e) => setAge(e.target.value)} 
            value={age}/>
            </div>
            
     </div>


   <Link to="/StepTwo" onClick={()=> sendToStore(age,gender,probability,count)} style={styles.button} className="btn btn-primary mt-5">Next</Link>

</div>
    )
  }; 
}

// ***************************** STYLES BLOCK ******************************** 

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
      fontSize : '25px'
  },
  input : {

    boxShadow: '1px 2px 9px black',
    borderRadius: '5px',
    border : 0,
    height :'40px',
    paddingLeft: '20px',
    marginLeft:'20px',
    marginTop:'20px'

},
span :{

  fontSize: '20px',
  fontWeight:'bold'
},
spanHow :{

  fontSize: '30px',
  fontWeight:'bold'
},
button : {
  width: '150px',
  textDecoration: 'none'
},
   }