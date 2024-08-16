import React, { useState } from 'react';
import Axios from 'axios';
import UploadImage from './UploadImage';

const ImageUpload = () => {
  const [imageUrl, setImageUrl] = useState('');

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const url = await UploadImage(file);
    setImageUrl(url);
   
  };
 

  return (
    <div>
      <input type="file" onChange={handleImageUpload} />
      {imageUrl && (
        <div> 
    
          <p>Image uploaded successfully!{imageUrl}</p>
          <img src={imageUrl} alt="Uploaded" style={{ maxWidth: '300px' }} />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
