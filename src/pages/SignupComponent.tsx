import './AuthComponent.css';


const SignupComponent = () => {

    return (
        <div className="auth-container">
            <>
                <h1>Sign up
                </h1>
                <button onClick={() => {}}>Auth0 (redirect)</button>
                <button onClick={() =>{} }>Auth0 (popup)</button>
                <h3>Other login options</h3>
                <div className="other-login-options">
                    <button onClick={() => {/* Custom login logic */
                    }}>e-mail
                    </button>
                    <button onClick={() => {/* Add Google login logic */
                    }}>Google
                    </button>
                    <button onClick={() => {/* Add Facebook login logic */
                    }}> Facebook
                    </button>
                </div>
            </>

        </div>
    );
}

export default SignupComponent;