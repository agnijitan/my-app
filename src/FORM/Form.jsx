import React,{useState} from 'react'
import style from './form.module.css'

export default function FORM() {

    // const [name, setName] = useState (" ")
    // const [email, setEmail] = useState (" ")
    // const [password, setPassword] = useState (" ")

    const [user, setUser] = useState ({name: '', email: '', password: ''})
    const {name, email,password} = user


    const handleSubmit = (e) => {
        console.log("The form has been submitted");
        e.preventDefault();
        // let userInfo = {
        //     name : name,
        //     email: email,
        //     password : password
        // }
        // console.log(userInfo);
        console.log(user);
    }

    // const handleNameChange = (e) => {
    //     // setName(e.target.value);
    //     setUser({name: e.target.value,email, password})
    // }

    // const handleEmailChange = (e) => {
    //     // setEmail(e.target.value);
    //     setUser({name,email: e.target.value, password})
    // }

    // const handlePasswordChange = (e) => {
    //     // setPassword(e.target.value);
    //     setUser({name,email, password: e.target.value})
    // }

    const handleChange = (e) => {
        const fieldName = e.target.name;
        setUser({...user, [e.target.name]: e.target.value});
    };


    //    if (fieldName==='name'){
    //     setUser({name: e.target.value,email, password})  
    //    }
    //    else if (fieldName==='email'){
    //     setUser({name,email: e.target.value, password})
    //    }
    //    else if (fieldName==='password'){
    //     setUser({name,email, password: e.target.value})
    //    }
    // }

    return (
        <div>
            <h1>Registration</h1>
            <br />
            <form action = "" onSubmit = {handleSubmit}> 
                <div className={style.formGroup}>
                    <label html for = "name">Name: </label>
                    <input 
                        type = "text"
                        name = "name"
                        id = "name"
                        // onChange = {handleNameChange}
                        onChange = {handleChange}
                        value = {name}
                        required  />
                </div>
              
                <div className={style.formGroup}>
                    <label html for = "email">Email: </label>
                    <input 
                        type = "text"
                        name = "email"
                        id = "email"
                        // onChange = {handleEmailChange}
                        onChange = {handleChange}
                        value = {email}
                        required />
                </div>
                
                <div className={style.formGroup}>
                    <label html for = "password">Password: </label>
                    <input 
                        type = "password"
                        name = "password"
                        id = "password"
                        // onChange = {handlePasswordChange}
                        onChange = {handleChange}
                        value = {password}
                        required />
                </div>
              
                <div className={style.formGroup}>
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    )
}
