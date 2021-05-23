import React from 'react';
import clsx from 'clsx';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  FormHelperText,
  makeStyles,
  Typography,
} from '@material-ui/core';
import Link from 'next/link';
import CustomTextField from 'components/CustomTextField';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import * as AuthenticationActions from 'actions/authentication.action';
import * as RequestionSelectors from 'selectors/requesting.selector';
import * as ErrorSelectors from 'selectors/error.selector';
import { IStoreState } from 'reducers/root.reducer';

const useStyles = makeStyles(() => ({
  root: {
    width: '325px',
  },
  btn: {
    padding: '13px 12.5px',
    borderRadius: '50px',
    width: '200px',
    boxShadow: '0px 4px 25px rgba(72, 77, 255, 0.4)',
    textTransform: 'unset',
  },
  form: {},
  btnWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 20,
  },
  forgotPassword: {
    fontSize: 12,
    fontWeight: 600,
    lineHeight: '26px',
  },
  signupWrapper: {
    marginTop: 26,
  },
  signup: {
    color: '#546681',
    fontSize: 16,
    lineHeight: '26px',
  },
  signupLink: {
    fontSize: 16,
    lineHeight: '26px',
    fontWeight: 'bold',
    cursor: 'pointer',
    color: '#4B4FE4',
  },
  noWidth: {
    width: 'unset',
  },
}));

interface ComponentProps {
  openRegister?: () => void;
  openLogin?: () => void;
  viewDeviceType?: any;
}

const JWTLoginForm = (props: ComponentProps) => {
  const dispatch = useDispatch();
  const loginError = useSelector((state: IStoreState) =>
    ErrorSelectors.selectError(
      state,
      AuthenticationActions.REQUEST_AUTHENTICATION_LOGIN
    )
  );

  const isLoggingIn = useSelector((state: IStoreState) =>
    RequestionSelectors.selectRequesting(
      state,
      AuthenticationActions.REQUEST_AUTHENTICATION_LOGIN
    )
  );
  const classes = useStyles();

  const hanldeRegister = () => {
    return props.openRegister && props.openRegister();
  };

  // const handleLogin = () => {
  //   return props.openLogin && props.openLogin();
  // };

  const root = classNames({
    [classes.root]: true,
    [classes.noWidth]: true,
  });

  return (
    <>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        validationSchema={Yup.object().shape({
          // email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
          // password: Yup.string().max(255).required('Password is required')
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          dispatch(AuthenticationActions.setSignUpEmail(values.username));
          dispatch(AuthenticationActions.login(values.username, values.password));
          dispatch(AuthenticationActions.checkCurrentAuthenticatedUser());
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
        }) => (
          <div
            className={clsx(
              'd-flex justify-content-center flex-column align-items-center',
              root
            )}
          >
            <form
              // noValidate
              onSubmit={handleSubmit}
              className={clsx(root, classes.form)}
            >
              <CustomTextField
                error={!!(touched.username && errors.username)}
                fullWidth
                autoFocus
                helperText={touched.username && errors.username}
                label="Email"
                name="username"
                onBlur={handleBlur}
                onChange={handleChange}
                type="email"
                value={values.username}
              />
              <CustomTextField
                error={Boolean(touched.password && errors.password)}
                fullWidth
                helperText={touched.password && errors.password}
                label="Password"
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                type="password"
                value={values.password}
              />
              {loginError && (
                <Box marginBottom={1}>
                  <FormHelperText error>{loginError.message}</FormHelperText>
                </Box>
              )}
              <Link
                // component={RouterLink}
                href="/notFound"
              // variant="body2"
              // color="primary"
              // className={classes.forgotPassword}
              >
                Forgot password
              </Link>
              <Box mt={2} className={classes.btnWrapper}>
                <Button
                  color="primary"
                  className={classes.btn}
                  disabled={isSubmitting || isLoggingIn}
                  size="large"
                  type="submit"
                  variant="contained"
                // onClick={handleLogin}
                >
                  {isLoggingIn ? 'Logging In...' : 'Log In'}
                </Button>
              </Box>
            </form>
          </div>
        )}
      </Formik>
      <div
        className={clsx('d-flex justify-content-center', classes.signupWrapper)}
      >
        <Typography className={classes.signup}>
          I'm a new user &nbsp;
        </Typography>
        <Typography onClick={hanldeRegister}>
          <div className={classes.signupLink}>Sign up</div>
        </Typography>
      </div>
    </>
  );
};

export default JWTLoginForm;
