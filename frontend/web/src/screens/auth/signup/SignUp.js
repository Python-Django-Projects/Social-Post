import React, { useRef, useState } from 'react';



function SignUp() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const dobRef = useRef(null);
  const genderRef = useRef(null);
  const phoneRef = useRef(null);
  const [error, setError] = useState(false);


  const handleSubmit = (event) => {
    event.preventDefault();
    
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const dob = dobRef.current.value;
    const gender = genderRef.current.value;
    const phone = phoneRef.current.value;
    if(email.length === 0 || password.length === 0) {
      setError(true)}
    // Handle form submission with form data
    console.log(email, password, firstName, lastName, dob, gender, phone);
  };

  return (

    <form onSubmit={handleSubmit} className="signup-form">
      <label>
        Email:
        <input type="email" ref={emailRef} />
        {error?<span> Invalid Email Adress </span>:''}
      </label>
      <label>
        Password:
        <input type="password" ref={passwordRef} required/>
        {error?<span> Invalid password </span>:''}
      </label>
      <label>
        First Name:
        <input type="text" ref={firstNameRef}  required/>
        {error?<span> Invalid first name </span>:''}
      </label>
      <label>
        Last Name:
        <input type="text" ref={lastNameRef} />
        {error?<span> Invalid last name </span>:''}
      </label>
      <label>
        Date of Birth:
        <input type="date" ref={dobRef} />
        {error?<span> Invalid date of Birth </span>:''}
      </label>
      <label>
        Gender:
        <select ref={genderRef}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
      <label>
        Phone Number:
        <input type="tel" ref={phoneRef} />
        {error&&phoneRef.length<=0?<span> Invalid phone number </span>:''}
      </label>
      <button type="submit">Submit</button>
      <button> <a href='/'>Login</a></button>
    </form>
  );
}

export default SignUp;



// import React, { useState } from 'react';

// function MyForm() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({});

//   const validateForm = () => {
//     let errors = {};

//     if (!name) {
//       errors.name = 'Name is required';
//     }

//     if (!email) {
//       errors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       errors.email = 'Invalid email address';
//     }

//     if (!password) {
//       errors.password = 'Password is required';
//     } else if (password.length < 8) {
//       errors.password = 'Password must be at least 8 characters';
//     }

//     return errors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const errors = validateForm();

//     if (Object.keys(errors).length === 0) {
//       // Submit form data to server
//     } else {
//       setErrors(errors);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Name:</label>
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//         {errors.name && <span className="error">{errors.name}</span>}
//       </div>
//       <div>
//         <label>Email:</label>
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         {errors.email && <span className="error">{errors.email}</span>}
//       </div>
//       <div>
//         <label>Password:</label>
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         {errors.password && <span className="error">{errors.password}</span>}
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default MyForm;
