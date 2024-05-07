import React, { useState } from 'react'

function Registration() {

const [FormData, setFormData] = useState({
    name: '',
    age: '',
    profession: '',
    mobile: '',
    email: '',
    pass: '',
    con_pass: '',
    photo:null
})



const handleSubmit = (e) => {
    e.preventDefault()
    console.log(FormData)


    if (FormData.photo) {
        // Process the image here, for example, upload it to a server
        // You can use FormData.photo to access the selected file
        // For demonstration purposes, let's just display the image
        const reader = new FileReader();
        reader.onload = () => {
          const imageData = reader.result;
          console.log('Image Data:', imageData);
          // Here you can do further processing with the image data, such as displaying it or uploading it to a server
        };
        reader.readAsDataURL(FormData.photo);
}}

// userEffect(()=>{
//     console.log(FormData)
// },[])


  return (

    <div>
      <form action='' onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Name: </label>
            <input type="text" placeholder='Full Name' name='name' min={5} value={FormData.name} onChange={(e)=>{setFormData({...FormData, name : e.target.value})}} required  />
        </div>

        <div>
            <label htmlFor="age">Age: </label>
            <input type="number" placeholder='Enter Your Age' name='age' value={FormData.age} onChange={(e)=>{setFormData({...FormData, age : e.target.value}) }} required  />
        </div>

        <div>
            <label htmlFor="profession">Profession: </label>
            <input type="text" placeholder='What is your Profession?' name='profession' value={FormData.profession} onChange={(e)=>{setFormData({...FormData,profession:e.target.value})}} required  />
        </div>

        <div>
            <label htmlFor="mobile">Mobile-Number: </label>
            <input type="number" placeholder='Enter your Phone number' name='mobile' value={FormData.mobile} onChange={(e)=>{setFormData({...FormData,mobile:e.target.value})}} required  />
        </div>

        <div>
            <label htmlFor="email">Email: </label>
            <input type="email" placeholder='Enter Your E-mail address' name='email' value={FormData.email} onChange={(e)=>{setFormData({...FormData,email:e.target.value})}} required />
        </div>

        <div>
            <label htmlFor="photo">Photo: </label>
            <input type="file" placeholder='Provide your Photo' name='photo' accept='image/' onChange={e=>setFormData({ ...FormData, photo: e.target.files[0] })} required />
        </div>

        {/* <div>
            <label htmlFor="pass">Password: </label>
            <input type="password" placeholder='Enter Password' name='pass' value={FormData.pass} onChange={(e)=>{setFormData({...FormData,pass:e.target.value})}} required  />
        </div>

        <div>
            <label htmlFor="confirm-pass">Confirm Password: </label>
            <input type="password" placeholder='Confirm your password' name='confirm-pass' value={FormData.con_pass} onChange={(e)=>{setFormData({...FormData,con_pass:e.target.value})}} required  />
        </div> */}

        <div>
            <button type='submit' >Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Registration
