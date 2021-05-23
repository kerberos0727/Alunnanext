import React, { useEffect } from 'react';
// import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { create } from 'jss';
import rtl from 'jss-rtl';
import MomentUtils from '@date-io/moment';
// import { SnackbarProvider } from 'notistack';
import { jssPreset, StylesProvider, ThemeProvider } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import Amplify from 'aws-amplify';
import GlobalStyles from 'components/GlobalStyles';
import ScrollReset from 'components/ScrollReset';
// import SettingsNotification from 'components/SettingsNotification';
import useSettings from 'hooks/useSettings';
import { createTheme } from 'theme';
import routes, { renderRoutes } from 'routes/Routes';
import { THEMES } from 'constants/theme.constant';

import * as CourseActions from 'actions/courses.action';

import './App.scss';
import { AWS_COGNITO } from 'constants/configurations.constant';

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

Amplify.configure({
    aws_cognito_region: AWS_COGNITO.REGION,
    aws_user_pools_id: AWS_COGNITO.USER_POOL_ID,
    aws_user_pools_web_client_id: AWS_COGNITO.APP_CLIENT_ID,
});

const App = () => {
    const dispatch = useDispatch();
    const { settings } = useSettings();

    const theme = createTheme({
        direction: settings.direction,
        responsiveFontSizes: settings.responsiveFontSizes,
        theme: THEMES.LIGHT
    });

    useEffect(() => {
        dispatch(CourseActions.requestCourses());
    }, [dispatch]);

    return (
        <ThemeProvider theme={theme}>
            <StylesProvider jss={jss}>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                    {/* <BrowserRouter> */}
                    <GlobalStyles />
                    <ScrollReset />
                    {/* <SettingsNotification /> */}
                    {renderRoutes(routes)}
                    {/* </BrowserRouter> */}
                </MuiPickersUtilsProvider>
            </StylesProvider>
        </ThemeProvider>
    );
};

export default App;
