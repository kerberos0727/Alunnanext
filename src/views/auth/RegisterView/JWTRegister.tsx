import React from 'react';
import type { FC } from 'react';
import clsx from 'clsx';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import {
  Box,
  Button,
  // FormHelperText,
  Typography,
  makeStyles,
  Theme,
  Divider
} from '@material-ui/core';
import { useRouter } from 'next/router';
// import useIsMountedRef from 'hooks/useIsMountedRef';
import CustomTextField from 'components/CustomTextField';
import CustomMainButton from 'components/CustomMainButton';
import classNames from "classnames";
import { useDispatch } from 'react-redux';
import * as AuthenticationActions from 'actions/authentication.action';

interface JWTRegisterProps {
  className?: string;
  onClickedLoginProps?: any;
  viewDeviceType?: any
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '325px',
  },
  btn: {
    padding: '13px 12.5px',
    borderRadius: '50px',
    // width: '75%',
    width: '200px',
    // width: '487px',
    boxShadow: '0px 4px 25px rgba(72, 77, 255, 0.4)',
    fontWeight: 600,
    textTransform: 'unset',
  },
  form: {
    width: '100%',
    marginTop: 16,
  },
  btnWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 20,
  },
  loginWrapper: {
    marginTop: 26,
  },
  loginText: {
    color: '#546681',
    fontSize: 16,
    lineHeight: '26px',
  },
  loginLink: {
    fontSize: 16,
    lineHeight: '26px',
    fontWeight: 'bold',
    cursor: "pointer",
    color: "#4B4FE4"
  },
  socialWrapper: {

  },
  googleButton: {
    backgroundColor: '#fff',
    textTransform: 'unset',
    color: '#546681',
    fontSize: 16,
    lineHeight: '26px',
    fontWeight: 'normal',
    '&:hover': {
      background: '#fff',
    }
  },
  linkedInButton: {
    backgroundColor: '#0077B5',
    textTransform: 'unset',
    color: '#fff',
    fontSize: 16,
    lineHeight: '26px',
    fontWeight: 'normal',
    '&:hover': {
      background: '#0077B5',
    }
  },
  githubButton: {
    backgroundColor: '#161514',
    textTransform: 'unset',
    color: '#fff',
    fontSize: 16,
    lineHeight: '26px',
    '&:hover': {
      background: '#161514',
    }
  },
  providerIcon: {
    marginRight: 20
  },
  btnCommon: {
    marginBottom: 10,
    borderRadius: 16,
    height: 45,
    fontWeight: 300,
    // width: 325
  },
  divider: {
    flexGrow: 1,
    height: '2px',
    background: '#EFF0F6',
  },
  dividerText: {
    margin: 20
  },
  noWidth: {
    width: "unset"
  }
}));

const JWTRegister: FC<JWTRegisterProps> = ({ viewDeviceType, onClickedLoginProps, className, ...rest }) => {
  const history = useRouter();
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleGoogleClick = () => {
    console.log('Signing up with Google')
  };

  // const handleLinkedInClick = () => {

  // };

  // const handleGithubClick = () => {

  // };

  const onClickedLogin = (event) => {
    event.preventDefault();
    onClickedLoginProps();
  };

  const root = classNames({
    [classes.root]: true,
    [classes.noWidth]: viewDeviceType === 2,
  });

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          name: '',
          password: '',
          policy: false,
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
        })}
        onSubmit={(values) => {
          dispatch(AuthenticationActions.setSignUpEmail(values.email));
          history.push('/completeAccountSetup');
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values
        }) => (
          <div className={clsx("d-flex justify-content-center flex-column align-items-center", root)}>
            <div className={classes.socialWrapper}>
              <Button
                className={clsx(classes.googleButton, classes.btnCommon)}
                fullWidth
                onClick={handleGoogleClick}
                size="large"
                variant="contained"
              >
                <img
                  alt="Google"
                  className={classes.providerIcon}
                  src="/static/images/google.svg"
                />
                Continue with Google
              </Button>
              {/* <Button
                className={clsx(classes.linkedInButton, classes.btnCommon)}
                fullWidth
                onClick={handleLinkedInClick}
                size="large"
                variant="contained"
              >
                <img
                  alt="LinkedIn"
                  className={classes.providerIcon}
                  src="/static/images/linkedIn.svg"
                />
                Continue with Linkedin
              </Button>
              <Button
                className={clsx(classes.githubButton, classes.btnCommon)}
                fullWidth
                onClick={handleGithubClick}
                size="large"
                variant="contained"
              >
                <img
                  alt="LinkedIn"
                  className={classes.providerIcon}
                  src="/static/images/github.svg"
                />
                Continue with Github
              </Button> */}
              <Box
                alignItems="center"
                display="flex"
                mt={2}
              >
                <Divider
                  className={classes.divider}
                  orientation="horizontal"
                />
                <Typography
                  color="textSecondary"
                  variant="body1"
                  className={classes.dividerText}
                >
                  or
                </Typography>
                <Divider
                  className={classes.divider}
                  orientation="horizontal"
                />
              </Box>
            </div>
            <form
              className={clsx(className, classes.form)}
              onSubmit={handleSubmit}
              {...rest}
            >
              <CustomTextField
                error={Boolean(touched.email && errors.email)}
                required={Boolean(touched.email && errors.email)}
                fullWidth
                autoFocus
                helperText={touched.email && errors.email}
                label="Email"
                name="email"
                // onBlur={handleBlur}
                onChange={handleChange}
                type="email"
                value={values.email}
              />
              {/*
                <Box mt={3}>
                  <FormHelperText error>
                    {errors.submit}
                  </FormHelperText>
                </Box>
              */}
              <Box mt={2} className={classes.btnWrapper}>
                <CustomMainButton
                  disabled={isSubmitting}
                  label="Continue with Email"
                  type="submit"
                />
              </Box>
            </form>

          </div>
        )}
      </Formik>
      <div className={clsx("d-flex justify-content-center", classes.loginWrapper)}>
        <Typography className={classes.loginText}>I'm already a member &nbsp;</Typography>
        <Typography onClick={(e) => onClickedLogin(e)}>
          <div
            className={classes.loginLink}
          >
            Log in
          </div>
        </Typography>
      </div>
    </>
  );
};

JWTRegister.propTypes = {
  className: PropTypes.string
};

export default JWTRegister;
