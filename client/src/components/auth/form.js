import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import {
  Container,
  Paper,
  Typography,
  Grid,
  Input,
  Button,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio
} from '@material-ui/core'

import makeStyles from './styles.js'
import { signIn, signUp } from '../../actions/user'

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: ''
}
const Form = (props) => {
  const classess = makeStyles()
  const [isSignUp, setIsSignUp] = useState(true)
  const [formData, setformData] = useState(initialState)
  const [error, setError] = useState(false)
  const dispatch = useDispatch()

  const handleChange = e => {
    setformData({ ...formData, [e.target.name]: e.target.value })
  }
  const switchMode = () => {
    setError(false)
    setIsSignUp(!isSignUp)
  }

  const handleConfirmPasswordChange = e => {
    if (e.target.value !== formData.password) {
      setError(true)
    } else {
      setError(false)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (isSignUp) {
      dispatch(signUp(formData))
      setIsSignUp(!isSignUp)
    } else {
      dispatch(signIn(formData))
      props.setUser(sessionStorage.getItem('user'))
    }
  }

  return (
    <Container className={classess.container}>
      <Paper className={classess.paper}>
        <Typography className={classess.heading} variant="h4">
          {isSignUp ? 'Register' : 'Login'}
        </Typography>
        <form className={classess.form} onSubmit={handleSubmit}>
          <Grid className={classess.input}>
            {isSignUp && <>
              <Input
                name="firstName"
                placeholder="First Name"
                onChange={handleChange}
                autoFocus
                className={classess.input}
              />
              <Input
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
                autoFocus
                className={classess.input}
              />
              </>
              }

            <Input
              name="email"
              placeholder="Email"
              onChange={handleChange}
              autoFocus
              className={classess.input}
            />
            <Input
              name="password"
              placeholder="Password"
              type="password"
              onChange={handleChange}
              autoFocus
              className={classess.input}
            />
            {isSignUp &&
              <Input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Passoword"
                onChange={handleConfirmPasswordChange}
                autoFocus
                className={classess.input}
              />}
            {error &&
              <span style={{ color: 'red' }}>
                Password does not matched !{' '}
              </span>
              }
        
          </Grid>
          <Grid className={classess.footer1}>
            <Button className={classess.btnSubmit} type="submit">
              {isSignUp ? 'Register' : 'Log In'}
            </Button>
          </Grid>
        </form>
        <Grid justify="flex-end" className={classess.footer}>
          <Grid item>
            <Button onClick={switchMode} className={classess.btnSwitch}>
              {isSignUp
                ? 'Already have a account ? Sign in'
                : 'Dont have account? Sign up'}
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}

export default Form
