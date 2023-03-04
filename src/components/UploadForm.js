import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg'];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpeg)');
    }
  };

  return ( 
    <form>
      <label style={{ display: 'flex', marginLeft: '200px', width: '28px', height: '28px', border: '1px solid #efb6b2', borderRadius: '50%', margin: 'auto', lineHeight: '24px', color: '#efb6b2', fontWeight: 'bold', fontSize: '24px'}}>
        <input style={{height: 0, width: 0, opacity: 0}} type="file" onChange={handleChange} />
        <span style={{ paddingLeft: '4px'}}>+</span>
      </label>
      <div className="output">
        { error && <div className="error">{ error }</div>}
        { file && <div>{ file.name }</div> }
        { file && <ProgressBar file={file} setFile={setFile} /> }
      </div>
    </form>
  );
}

export default UploadForm;