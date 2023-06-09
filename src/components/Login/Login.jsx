import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Login = () => {

    const {signIn, signInWithGoogle} = useContext(AuthContext);
    
    const handleLogin = event => {
        event.preventDefault();
        
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        //password error or correct identification and validation link up hi dear.
        signIn(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            form .reset();
        })
        .catch(error =>{
            console.log(error);
        })
    }

    {/* signin with Google */}
    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                 <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Login !</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Enter email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Enter password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">LogIn</button>
                               
                            </div>
                        </form>
                        <p className='mb-4 ml-8'>
                            <Link to="/register" className="level-text-alt link-hover">
                                New Voter? Please Register !
                            </Link>     
                        </p>  
                        {/* signin with Google */}  
                        <div>
                        <button onClick={handleGoogleSignIn} className="btn btn-primary p-4 m-4">LogIn With Google</button>
                        </div>                   
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;