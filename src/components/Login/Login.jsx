import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../redux/reducers/auth-reducer";
import {Input} from "../common/FormControls/FormControls";
import {requiredField} from "../../redux/utilities/validators/validators";
import {Redirect} from "react-router-dom";
import {getCaptchaURL, getIsAuth} from "../../redux/selectors/auth-selectors";

function Login ({login, isAuth, captchaURL}) {
    const handleLogin = values => {
        login(values)
    }

    if (isAuth) {
        return <Redirect to={'profile/14088'}/>
    }

    return (
        <div className="py-3 px-3">
            <h1>Login</h1>
            <LoginReduxForm onSubmit={handleLogin} captchaURL={captchaURL}/>
        </div>
    )
}

function LoginForm ({handleSubmit, error, captchaURL}) {
    return (
        <form onSubmit={handleSubmit}>
            <div className="inputBlocks my-3">
                <div className="input-block">
                    <Field
                        component={Input}
                        validate={[requiredField]}
                        name={'email'} type={'email'} placeholder="Email"
                    />
                </div>
                <div className="input-block my-3">
                    <Field
                        component={Input}
                        validate={[requiredField]}
                        name={'password'} type={'password'} placeholder="Password"
                    />
                </div>
                <div className="input-block form-check">
                    <label className="form-check-label">
                        <Field
                            className="form-check-input"
                            name={'rememberMe'}
                            component={'input'} type={'checkbox'}
                        />
                        <p className="mb-0">Запомнить меня</p>
                    </label>
                </div>
                {error &&
                    <div className="alert alert-danger mt-3" role="alert">
                        {error}
                    </div>
                }
                {captchaURL &&
                <div className="input-block">
                    <div className="my-3"><img src={captchaURL} alt=""/></div>
                    <Field name={'captcha'} component={'input'} type={'text'}/>
                </div>
                }
            </div>
            <button className="btn btn-primary px-5">Войти</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'loginForm'})(LoginForm)

const mapStateToProps = state => ({
    isAuth: getIsAuth(state),
    captchaURL: getCaptchaURL(state)
})

export default connect(mapStateToProps, {login})(Login)