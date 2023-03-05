import React, {useState} from 'react';
import axios from 'axios';
import Webcam from 'react-webcam';

const WebcamCapture = () => {
  const webcamRef = React.useRef(null);
  const videoConstraints = {
    width : 200,
    height : 200,
    facingMode: 'user'
  };
  const[name, setName] = useState('')
  const capture = React.useCallback(
  () => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(`imageSrc = ${imageSrc}`)
                //for deployment, you should put your backend url / api
    axios.post('http://127.0.0.1:5000/api', {data : imageSrc})
    	  .then(res => {
      	  console.log(`response = ${res.data}`)
      	  setName(res.data)
    })
    	  .catch(error => {
      	  console.log(`error = ${error}`)
    })
  }, 
   [webcamRef]
  );
  
  return (
  <div
  style={{
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fba4c4',
    height: '100vh'
  }}>
    <Webcam
      audio = {false}
      height = {300}
      ref = {webcamRef}
      screenshotFormat = "image/jpeg"
      width = {350}
      videoConstraints = {videoConstraints}
	/>
  <div>
    <br/>
    <button onClick={capture} style={{backgroundColor:'#FFF'}}>Click Me!</button>
	<h2 style={{color:'#000'}}>{name === 'Verified'? 'Loggedin' : 'Login'}</h2>
  </div>
  </div>
	);
  
};

export default WebcamCapture;
