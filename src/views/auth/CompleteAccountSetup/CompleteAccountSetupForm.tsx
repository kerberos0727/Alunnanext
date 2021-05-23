import React, { useState } from 'react';
import type { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import * as Yup from 'yup';
import { Field, Formik } from 'formik';
import {
  Box,
  Checkbox,
  FormHelperText,
  Typography,
  Link,
  makeStyles,
  Theme,
} from '@material-ui/core';
import {
  ToggleButtonGroup as FmToggleButtonGroup
} from 'formik-material-ui-lab';
// import useIsMountedRef from 'hooks/useIsMountedRef';
import CustomTextField from 'components/CustomTextField';
import CustomMainButton from 'components/CustomMainButton';
import { ToggleButton } from '@material-ui/lab';
import { withStyles } from '@material-ui/styles';
import { CompleteAccountStep, UserType } from 'types/user';
import { useRouter } from 'next/router';
import { IStoreState } from 'reducers/root.reducer';
import * as AuthenticationActions from 'actions/authentication.action';

interface CompleteAccountSetupFormProps {
  className?: string;
  setStep: any;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
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
    maxWidth: '325px',
  },
  btnWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 20,
  },
  agreementText: {
    color: '#546681',
    fontSize: 12,
    lineHeight: '20px',
    fontWeight: 400,
  },
  agreementLink: {
    color: '#4B4FE4',
  },
  policy: {
    padding: '0 9px',
    transform: 'scale(1.2)'
  },
  userType: {

  },
  toggleBtn: {
    width: '50%',
  }
}));

const StyledToggleButtonGroup = withStyles((theme) => ({
  root: {
    width: '100%',
    background: '#4B4FE4',
    borderRadius: '16px',
  },
  grouped: {
    textTransform: 'none',
    margin: 2,
    color: '#fff',
    fontWeight: 300,
    fontSize: 16,
    lineHeight: '26px',
    width: '100%',
    border: 'none',
    '&:not(:first-child)': {
      borderRadius: 10,
    },
    '&:first-child': {
      borderRadius: 10,
    },
    '&.Mui-selected': {
      borderRadius: 15,
      color: '#546681',
      fontWeight: 600,
      background: '#fff',
      '&:hover': {
        background: '#fff',
        color: '#546681',
      }
    }
  },
}))(FmToggleButtonGroup);

const CompleteAccountSetupForm: FC<CompleteAccountSetupFormProps> = ({ className, setStep, ...rest }) => {
  const classes = useStyles();
  const history = useRouter();
  const dispatch = useDispatch();
  const authState = useSelector(
    (state: IStoreState) => state.authentication
  );
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState<UserType>(UserType.Student);

  return (
    <Formik
      initialValues={{
        userType: UserType.Student,
        username: '',
        firstName: '',
        middleName: '',
        lastName: '',
        password: '',
        confirmPassword: '',
        policy: false,
        submit: null
      }}
      validationSchema={Yup.object().shape({
        firstName: Yup.string().max(255).required('First name is required'),
        middleName: Yup.string().max(255),
        lastName: Yup.string().max(255).required('Last name is required'),
        password: Yup.string().matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        ),
        confirmPassword: Yup.string().min(8).oneOf([Yup.ref('password'), null], 'Passwords must match'),
        policy: Yup.boolean().oneOf([true], 'You need to agree our terms & conditions'),
      })}
      onSubmit={async (values, {
        setErrors,
        setStatus,
        setSubmitting
      }) => {
        let fields = {
          username: authState.pedingingSignUpEmail,
          password: values.password,
          given_name: values.firstName,
          family_name: values.lastName,
          middle_name: values.middleName
        };
        setTimeout(function () {
          if (role === UserType.Teacher) {
            setStep(CompleteAccountStep.Teacher_Question);
          }
          else {
            // history.push('/thank-you?action=registration')
            history.push('/noPayment')
          }
        }, 2000);
        dispatch(AuthenticationActions.signUp(fields));
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
        <div className={clsx("d-flex justify-content-center flex-column align-items-center", classes.root)}>
          <form
            noValidate
            onSubmit={handleSubmit}
            className={clsx(className, classes.form)}
            {...rest}
          >
            <Box className={classes.userType} mb={4}>
              <Field
                component={StyledToggleButtonGroup}
                size="small"
                name="userType"
                exclusive={true}
                type="checkbox"
                value={role}
                onChange={(event: any, newRole: UserType) => {
                  setRole(newRole)
                }}
              >
                <ToggleButton
                  value={UserType.Teacher}

                  className={classes.toggleBtn}
                >
                  I'm a Teacher
                </ToggleButton>
                <ToggleButton
                  value={UserType.Student}
                  className={classes.toggleBtn}
                >
                  I'm a Student
                </ToggleButton>
              </Field>
            </Box>
            <CustomTextField
              error={Boolean(touched.firstName && errors.firstName)}
              fullWidth
              helperText={touched.firstName && errors.firstName}
              required={Boolean(touched.firstName && errors.firstName)}
              label="First name*"
              name="firstName"
              onBlur={handleBlur}
              onChange={handleChange}
              type="text"
              value={values.firstName}
            />
            <CustomTextField
              error={Boolean(touched.middleName && errors.middleName)}
              fullWidth
              helperText={touched.middleName && errors.middleName}
              label="Middle name"
              name="middleName"
              onBlur={handleBlur}
              onChange={handleChange}
              type="text"
              value={values.middleName}
            />
            <CustomTextField
              error={Boolean(touched.lastName && errors.lastName)}
              fullWidth
              helperText={touched.lastName && errors.lastName}
              required={Boolean(touched.lastName && errors.lastName)}
              label="Last name*"
              name="lastName"
              onBlur={handleBlur}
              onChange={handleChange}
              type="text"
              value={values.lastName}
            />
            <CustomTextField
              error={Boolean(touched.password && errors.password)}
              fullWidth
              helperText={touched.password && errors.password}
              required={Boolean(touched.password && errors.password)}
              label="Create password*"
              name="password"
              onBlur={handleBlur}
              onChange={handleChange}
              type={showPassword ? 'text' : 'password'}
              value={values.password}
              endElement={showPassword
                ? (<img src="/static/images/visibility.svg" alt="show password" onClick={() => setShowPassword(!showPassword)} />)
                : (<img src="/static/images/visibility_off.svg" alt="hide password" onClick={() => setShowPassword(!showPassword)} />)
              }
            />
            <CustomTextField
              error={Boolean(touched.confirmPassword && errors.confirmPassword)}
              fullWidth
              helperText={touched.confirmPassword && errors.confirmPassword}
              required={Boolean(touched.confirmPassword && errors.confirmPassword)}
              label="Confirm password*"
              name="confirmPassword"
              onBlur={handleBlur}
              onChange={handleChange}
              type="password"
              value={values.confirmPassword}
            // endElement={showPassword
            //   ? (<img src="/static/images/visibility.svg" alt="show password" onClick={() => setShowPassword(!showPassword)}/>)
            //   : (<img src="/static/images/visibility_off.svg" alt="hide password" onClick={() => setShowPassword(!showPassword)} />)
            // }
            />
            <Box
              alignItems="flex-start"
              display="flex"
              mt={2}
              ml={-1}
            >
              <Checkbox
                checked={values.policy}
                name="policy"
                onChange={handleChange}
                className={classes.policy}
              />
              <Typography
                variant="body2"
                color="textSecondary"
                className={classes.agreementText}
              >
                Yes, I understand agree to the&nbsp;
                <span className={classes.agreementLink}>
                  <Link
                    component="a"
                    href="#"
                    color="secondary"
                  >
                    Terms of Service
                  </Link>
                </span>,
                including the <span className={classes.agreementLink}>
                  <Link
                    component="a"
                    href="#"
                    color="secondary"
                  >
                    User Agreement
                  </Link>
                </span>&nbsp;and&nbsp;
                <span className={classes.agreementLink}>
                  <Link
                    component="a"
                    href="#"
                    color="secondary"
                  >
                    Privacy Policy
                  </Link>
                </span>
              </Typography>
            </Box>
            {errors.submit && (
              <Box mt={3}>
                <FormHelperText error>
                  {errors.submit}
                </FormHelperText>
              </Box>
            )}
            <Box mt={2} className={classes.btnWrapper}>
              <CustomMainButton
                disabled={isSubmitting}

                label="Create account"
                type="submit"
              />
            </Box>
          </form>
        </div>
      )}
    </Formik>
  );
};

export default CompleteAccountSetupForm;
