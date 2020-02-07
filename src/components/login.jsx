import React from "react";
import {Field, reduxForm} from 'redux-form'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <Field placeholder={"Your Name"} name={"Your Name"} component={"input"}/>

                </div>
                <div>
                    <Field type="email" placeholder={"Email Adress"} name={"Email Adress"} component={"input"}/>
                </div>
                <div className="alo">
                    <button className="button">Create Your Free Account</button>
                </div>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }
    return <div className="secondBlock">

        <iframe className="video" width="800" height="370" src="https://www.youtube.com/embed/_4SLzFJgAXM"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
        <div className="block">
            <div className="LoginWindow">
                <h1 className="letter">START NOW</h1>
                <p>Register today for instant 100% FREE access to the Ripple Code Bot</p>
            </div>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    </div>
}

export default Login;