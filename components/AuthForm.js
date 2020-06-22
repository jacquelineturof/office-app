import React, { useState } from 'react'

import Button from './UI/Button'
import Input from './UI/Input'

import checkValidity from '../utility/checkValidity'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import classes from './AuthForm.module.css'

const AuthProviders = ({ formType }) => (
    <div className = { classes.AuthProvidersContainer }>
        <h1>{ formType === 'register' ? 'Get Started' : 'Login' }</h1>
        <div className = { classes.AuthProviders }>
            <div className = { [ classes.IconContainer, classes.FacebookBlue, "Center" ].join(' ') }>
                <FontAwesomeIcon 
                    icon = { [ 'fab', 'facebook' ] } 
                    className = { classes.Icon } />
            </div>
            <div className = { [ classes.IconContainer, classes.GoogleRed, "Center" ].join(' ') }>
                <FontAwesomeIcon 
                    icon = { [ 'fab', 'google' ] } 
                    className = { classes.Icon } />
            </div>
        </div>
    </div>
)

const Banner = ({ formType }) => (
    <div className = { classes.Banner }>
        <h1 className = { classes.AppName }><span className = "Bold Uppercase">super</span>cubicle</h1>
        <p className = { classes.Tag }>Hempen halter wench hornswaggle hail-shot nipper boom yo-ho-ho topmast gangplank parley. Barkadeer belay salmagundi provost mizzen pillage Shiver me timbers black jack scuppers fire in the hole.</p>
        <AuthProviders formType = { formType } />
    </div>
)

const FormControl = ({ formType, setFormType }) => (
    <div className = { classes.FormControlContainer }>
        <Button 
            type = { formType === 'login' ? "Active" : "Simple" }
            clicked = { () => setFormType('login') }>
            Login
        </Button>
        <Button 
            type = { formType === 'register' ? "Active" : "Simple" }
            clicked = { () => setFormType('register') }>
            Register
        </Button>
    </div>
)

const Form = ({ formType, setFormType }) => {
    /*
        Form Inputs
    */
    const [ username, setUsername ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ confirmPassword, setConfirmPassword ] = useState('')

     /*
        INPUT Validation State
    */
    const [ usernameIsValid, setUsernameIsValid ] = useState('')
    const [ emailIsValid, setEmailIsValid ] = useState('')
    const [ passwordIsValid, setPasswordIsValid ] = useState('')
    const [ confirmIsValid, setConfirmIsValid ] = useState('confirm')

    const [ usernameIsTouched, setUsernameIsTouched ] = useState(false)
    const [ emailIsTouched, setEmailIsTouched ] = useState(false)
    const [ passwordIsTouched, setPasswordIsTouched ] = useState(false)
    const [ confirmIsTouched, setConfirmIsTouched ] = useState(false)

    /*
        Form Inputs Config
    */
    const USERNAME_CONFIG = {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Username'
        },
        iconConfig: {
            name: 'signature',
            package: 'fal'
        },
        value: username,
        changed: e => inputChangedHandler('username', e.target.value),
        touched: usernameIsTouched,
        valid: usernameIsValid,
        warningMessage: 'Must be between 4 - 20 characters.'
    }

    const EMAIL_CONFIG = {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Your Email'
        },
        iconConfig: {
            name: 'at',
            package: 'fal'
        },
        value: email,
        changed: e => inputChangedHandler('email', e.target.value),
        touched: emailIsTouched,
        valid: emailIsValid,
        warningMessage: 'Must be valid email.'
    }

    const PASSWORD_CONFIG = {
        elementType: 'input',
        elementConfig: {
            type: 'password',
            placeholder: 'Password'
        },
        iconConfig: {
            name: 'lock-alt',
            package: 'fal'
        },
        value: password,
        changed: e => inputChangedHandler('password', e.target.value),
        touched: passwordIsTouched,
        valid: passwordIsValid,
        warningMessage: 'Password must be six characters minimum.'
    }

    const CONFIRM_PASSWORD_CONFIG = {
        elementType: 'input',
        elementConfig: {
            type: 'password',
            placeholder: 'Confirm Password'
        },
        iconConfig: {
            name: 'check',
            package: 'fal'
        },
        value: confirmPassword,
        changed:  e => inputChangedHandler('confirm', e.target.value),
        touched: confirmIsTouched,
        valid: confirmIsValid,
        warningMessage: 'Password must be six characters minimum.'
    }
    
    // Form Heading
    let heading

    if (formType === 'login') heading = 'Login'
    else if (formType === 'register') heading = 'Register'
    else heading = 'Send Password Reset Email'

    // forgot password button, set formType = 'forgotPassword'
    const forgotPasswordButton = (
        <Button
            type = "Forgot" 
            clicked = { () => setFormType('forgotPassword') }>
            Forgot Password?
        </Button>
    )

    /*
        Form Handlers
        changed/submit
    */
    const inputChangedHandler = (controlName, value) => {
        const emailValidityRules = {
            required: true,
            isEmail: true
        }

        const usernameValidityRules = {
            required: true,
            minLength: 6,
            maxLength: 14
        }

        const passwordValidityRules = {
            required: true,
            minLength: 6
        }

        switch(controlName) {
            case('username'):
                setUsernameIsTouched(true)
                const isValidUsername = checkValidity(value, usernameValidityRules)
                setUsernameIsValid(isValidUsername)
                setUsername(value)
                break
            case('email'):
                setEmailIsTouched(true)
                const isValidEmail = checkValidity(value, emailValidityRules)
                setEmailIsValid(isValidEmail)
                setEmail(value)
                break
            case('password'):
                setPasswordIsTouched(true)
                const isValidPassword = checkValidity(value, passwordValidityRules)
                setPasswordIsValid(isValidPassword)
                setPassword(value)
                break
            case('confirm'):
                setConfirmIsTouched(true)
                const isConfirmValid = checkValidity(value, passwordValidityRules)
                setConfirmIsValid(isConfirmValid)
                setConfirmPassword(value)
                break
            default: return // ERROR
        }
    }

    return (
        <form className = { classes.Form }>
            <FormControl formType = { formType } setFormType = { setFormType } />
            <h1>{ heading }</h1>
            <div className = { classes.InputsContainer }>
                { 
                    formType === 'forgotPassword' 
                        ? null 
                        : <Input { ...USERNAME_CONFIG } /> 
                }
                {
                    formType === 'login'
                        ? null
                        : <Input { ...EMAIL_CONFIG } />
                }
                {
                    formType === 'forgotPassword'
                        ? null
                        : <Input  { ...PASSWORD_CONFIG } />
                }

                {
                    formType === 'register'
                        ? <Input { ...CONFIRM_PASSWORD_CONFIG } />
                        : null
                }
            </div>
            <Button isSubmit = { true } type = "Primary">
                Submit
            </Button>
            { formType === 'login' ? forgotPasswordButton : null }
        </form>
    )
}

const AuthForm = () => {
    // formTypes -> 'login', 'register', 'forgotPassword
    const [ formType, setFormType ] = useState('login')
    
    return (
        <div className = { classes.AuthFormContainer }>
            <Banner formType = { formType } />
            <Form formType = { formType } setFormType = { setFormType } />
        </div>
    )
}

export default AuthForm