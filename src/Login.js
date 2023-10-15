import React, { useState } from 'react';
import style from './Login.module.css';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Avatar from '@mui/material/Avatar';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import LoginIcon from '@mui/icons-material/Login';

function Login() {
  const [user] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [selectedDropdown1, setSelectedDropdown1] = useState('Option 1');
  const [selectedDropdown2, setSelectedDropdown2] = useState('Option A');
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setAgreed(checked);
    } else {
      if (name === 'firstName') {
        setFirstName(value);
      } else if (name === 'email') {
        setEmail(value);
      } else if (name === 'phoneNumber') {
        setPhoneNumber(value);
      } else if (name === 'password') {
        setPassword(value);
      }
    }
  };

  const handleDropdown1Change = (e) => {
    setSelectedDropdown1(e.target.value);
  };

  const handleDropdown2Change = (e) => {
    setSelectedDropdown2(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!user && !firstName) {
      newErrors.firstName = 'First Name is required';
    }

    if (!user && !email) {
      newErrors.email = 'Email is required';
    }

    if (!user && !phoneNumber) {
      newErrors.phoneNumber = 'Phone Number is required';
    }

    if (!user && !password) {
      newErrors.password = 'Password is required';
    }

    if (!agreed) {
      newErrors.agreed = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form data submitted:');
      console.log('First Name:', firstName);
      console.log('Email:', email);
      console.log('Phone Number:', phoneNumber);
      console.log('Password:', password);
      console.log('Dropdown 1:', selectedDropdown1);
      console.log('Dropdown 2:', selectedDropdown2);
    }
  };

  return (
    <div className={style.main}>
      <div className={style.Leftside}>
        <div className={style.left}>
          <h1>
            Manage Your Money <span className={style.addSpace}>Anywhere</span>
          </h1>
          <h5>
            View all the analytics and grow your business from
            <span className={style.addSpace}> Anywhere!</span>
          </h5>
          <div className={style.Box}>
  
            <p>
              This analytics platform is a game-changer! It's easy to use, provides valuable insights, and has helped me make smarter business decisions.
           
              <Avatar alt="Travis Howard" src="https://tse3.mm.bing.net/th?id=OIP.Crz5ALkGjYOXyy805pM7WAHaH1&pid=Api&P=0&h=220" />
            <h6>Casey Bachmeyer</h6>
            <h6>Founder, Sisyphus Ventures</h6>
            </p>
           
          </div>
        </div>
      </div>
      <div className={style.right}>
        <div className={style.signin}>
          <h4>Create an account</h4>
        </div>
        <div className={style.btnmain}>
          {!user ? (
            <button className={style.gbtn}><StorefrontIcon /> Merchant</button>
          ) : (
            <button className={style.gbtn}>Agent</button>
          )}
          <button className={style.gbtn}><PermIdentityIcon /> Agent</button>
        </div>
        <div className={style.form}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className={`${style.input} ${errors.firstName ? style.error : ''}`}
            value={user ? user.firstName : firstName}
            onChange={handleInputChange}
          />
          {errors.firstName && <div className={style.errorMessage}>{errors.firstName}</div>}
          <select
            name="dropdown1"
            className={`${style.input} ${errors.dropdown1 ? style.error : ''}`}
            value={selectedDropdown1}
            onChange={handleDropdown1Change}
          >
            <option value="Option 1">Where is your company based</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
          <input
            type="email"
            name="email"
            placeholder="Business Email"
            className={`${style.input} ${errors.email ? style.error : ''}`}
            value={user ? user.email : email}
            onChange={handleInputChange}
          />
          {errors.email && <div className={style.errorMessage}>{errors.email}</div>}
          <select
            name="dropdown2"
            className={`${style.input} ${errors.dropdown2 ? style.error : ''}`}
            value={selectedDropdown2}
            onChange={handleDropdown2Change}
          >
            <option value="Option A">Please Select an Industry</option>
            <option value="Option B">Option B</option>
            <option value="Option C">Option C</option>
          </select>
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            className={`${style.input} ${errors.phoneNumber ? style.error : ''}`}
            value={user ? user.phoneNumber : phoneNumber}
            onChange={handleInputChange}
          />
          <Input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            className={`${style.input} ${errors.password ? style.error : ''}`}
            value={user ? user.password : password}
            onChange={handleInputChange}
            endAdornment={
              <InputAdornment position="end">
                {showPassword ? (
                  <VisibilityIcon
                    onClick={() => setShowPassword(false)}
                    style={{ cursor: 'pointer' }}
                  />
                ) : (
                  <VisibilityOffIcon
                    onClick={() => setShowPassword(true)}
                    style={{ cursor: 'pointer' }}
                  />
                )}
              </InputAdornment>
            }
          />
          {errors.password && <div className={style.errorMessage}>{errors.password}</div>}
          <label>
            <input
              type="checkbox"
              name="agreed"
              checked={agreed}
              onChange={handleInputChange}
            />
            I accept the privacy policy
          </label>
          {errors.agreed && <div className={style.errorMessage}>{errors.agreed}</div>}
          <button className={style.sbtn} onClick={handleSubmit}>
            Create an Account
          </button>
        </div>
        <div className={style.signin}>
          <p>Already have an account?  <LoginIcon/>Log In</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
