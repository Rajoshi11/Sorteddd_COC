import Axios from 'axios';
import React, { useEffect,useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import InputControl from "../InputControl/InputControl";
// import { auth } from "../../firebase";
import styles from "../pages/Signup/Signup.module.css";
// import UploadForm from "../../components/UploadForm";

 
function Userinfo({setLoan, setA}){
    const [firstname,setFirstname] = useState("");
    const [lastname,setLastname] = useState("");
    const [age,setAge] = useState("");
    const [gender,setGender] = useState("");
    const [height,setHeight] = useState("");
    const [weight,setWeight] = useState("");
    const [creativity,setCreativity] = useState("");
    const [sports,setSports] = useState("");
    const [going,setGoing] = useState("");
    const [films,setFilms] = useState("");
    const [music,setMusic] = useState("");
    const [pet,setPet] = useState("");
    const [values,setValues] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        Axios.post("http://127.0.0.1:5000/api/userinfo",{
            'firstName':firstname,
            'lastname':lastname,
            'age':parseInt(age,10),
            'gender':gender,
            'height':parseInt(height,10),
            'weight':parseInt(weight,10),
            'creativity':creativity,
            'sports':sports,
            'going':going,
            'films':films,
            'music':music,
            'pet':pet,
            'values':values,
        })
        .then((response) => {
            var loan = response.data.Prediction;
            setLoan(loan);
            // var a = age;
            // setA(a);
            console.log(loan);
        }).catch((err)=>{
            console.log(err);
        })
    }
    
    return(
        <>
        <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 style={{color: 'black', fontSize: '40px', paddingLeft: '130px'}}>User Info</h1>
            <form onSubmit={handleSubmit} class="grid grid-cols-2 gap-10">
                <label>First Name: </label>
                <input type="text" name="title" value={firstname} onChange={(e)=> setFirstname(e.target.value)}/>
                <br/><br/>
                <label>Last Name: </label>
                <input type="text" name="title" value={lastname} onChange={(e)=> setLastname(e.target.value)}/>
                <br/><br/>
                <label>Age: </label>
                <input type="text" name="title" value={age} onChange={(e)=> setAge(e.target.value)}/>
                <br/><br/>
                <label>Gender: </label>
                <input type="text" name="title" value={gender} onChange={(e)=> setGender(e.target.value)}/>
                <br/><br/>
                <label>Height: </label>
                <input type="text" name="title" value={height} onChange={(e)=> setHeight(e.target.value)}/>
                <br/><br/>
                <label>Weight: </label>
                <input type="text" name="title" value={weight} onChange={(e)=> setWeight(e.target.value)}/>
                <br/><br/>
                <label>Creativity: </label>
                <input type="text" name="title" value={creativity} onChange={(e)=> setCreativity(e.target.value)}/>
                <br/><br/>
                <label>Sports: </label>
                <input type="text" name="title" value={sports} onChange={(e)=> setSports(e.target.value)}/>
                <br/><br/>
                <label>Going: </label>
                <input type="text" name="title" value={going} onChange={(e)=> setGoing(e.target.value)}/>
                <br/><br/>
                <label>Films: </label>
                <input type="text" name="title" value={films} onChange={(e)=> setFilms(e.target.value)}/>
                <br/><br/>
                <label>Music: </label>
                <input type="text" name="title" value={music} onChange={(e)=> setMusic(e.target.value)}/>
                <br/><br/>
                <label>Pet: </label>
                <input type="text" name="title" value={pet} onChange={(e)=> setPet(e.target.value)}/>
                <br/><br/>
                <label>Values: </label>
                <input type="text" name="title" value={values} onChange={(e)=> setValues(e.target.value)}/>
                <br/><br/>
                
                <input type="submit" value="Post" />
            </form>
            </div>
            </div>
        </>
    )
}


export default Userinfo
