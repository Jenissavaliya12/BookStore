import React, { useCallback, useState } from "react";

function RegisterUser() {

    const[formData,setFormData] = useState({
        username:'',
        email:'',
        dob:'',
        phone:''
    })

    const handleInputChange = useCallback((e) => {
        const {name , value} = e.target
        setFormData(formData => ({...formData,[name] : value}))
    },[])

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        console.log(formData)

    },[formData])

  return (
    <div className="text-center">
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Phone number:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Date of birth:
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterUser;
