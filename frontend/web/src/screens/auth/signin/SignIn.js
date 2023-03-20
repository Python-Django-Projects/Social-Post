import React, { useState } from "react";
import '../../../scss/auth.scss'
import { signin_api } from "../../../services";
import { Button, Form, Input } from "antd";
import Checkbox from "antd/es/checkbox/Checkbox";
// import "antd/dist/antd.css";


function SignIn() {
  
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {

    event.preventDefault();
    
    let email = event.target.email.value;

    let password = event.target.password.value;

    // if(email.length === 0 || password.length === 0) {

    //   setError(true)
    // }
    try {
      // http://127.0.0.1:8000/auth/login/
     let result = await signin_api(email,password);
     console.log("result: ",result)
     alert(result.message)
      // Sign-in successful
    } catch (error) {

      setError(error.message);

    }
  };

  return (
    <div>
       {/* <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
   >
    <Form.Item
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form> */}
            <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                required
            />
            {error?
            <span> Invalid Email Adress </span>:''}
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                required
            />
            {error?
            <span> Invalid Password </span>:''}
            <button type="submit">Sign In</button>
            <button>Forgot password?</button>
            <Button type="primary">check me!</Button>
            <button><a href="/signup">register</a></button>
            </form>

        </div>
  );
}

export default SignIn;
