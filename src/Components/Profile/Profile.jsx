import React, { useState } from 'react';
import './Profile.css';
import { getAuth, updateProfile } from 'firebase/auth';

const Profile = ({ username, userProfileImage }) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleUploadImage = async () => {
    try {
      // Get the current user
      const user = getAuth().currentUser;

      // Upload image to Firebase Storage
      // Implement your logic for uploading image here
      // For example:
      // const storageRef = ref(storage, `images/${user.uid}/${image.name}`);
      // await uploadBytes(storageRef, image);

      // Update user's profile with the new image URL
      // For example:
      // const downloadURL = await getDownloadURL(storageRef);
      // await updateProfile(user, { photoURL: downloadURL });

      // Clear selected image
      setImage(null);

      // You can optionally show a success message or update the UI after successful upload
    } catch (error) {
      console.error('Error uploading image:', error.message);
    }
  };

  return (
    <div className="profile">
      <h2>Welcome, {username}!</h2>
      <div className="profile-image">
        <img src={userProfileImage} alt="Profile" />
      </div>
      <div className="image-upload">
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <button onClick={handleUploadImage}>Upload Image</button>
      </div>
    </div>
  );
};

export default Profile;
