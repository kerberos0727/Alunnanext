import React, { useEffect } from 'react';
import Head from 'next/head';
import { Provider, useDispatch } from 'react-redux';
import { SettingsProvider } from '../src/contexts/SettingsContext';
import configStore from '../src/store/config.store';
import { create } from 'jss';
import rtl from 'jss-rtl';
import MomentUtils from '@date-io/moment';
import { jssPreset, StylesProvider, ThemeProvider } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import Amplify from 'aws-amplify';
import GlobalStyles from '../src/components/GlobalStyles';
import ScrollReset from '../src/components/ScrollReset';
import useSettings from '../src/hooks/useSettings';
import { createTheme } from '../src/theme';
import { THEMES } from '../src/constants/theme.constant';
import * as CourseActions from '../src/actions/courses.action';
import { AWS_COGNITO } from '../src/constants/configurations.constant';
import withRedux from "next-redux-wrapper";
import App from 'next/app';
import '../src/App.scss'
import '../src/styles/_main.scss';
import 'nprogress/nprogress.css';

const store = configStore();

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

Amplify.configure({
    aws_cognito_region: AWS_COGNITO.REGION,
    aws_user_pools_id: AWS_COGNITO.USER_POOL_ID,
    aws_user_pools_web_client_id: AWS_COGNITO.APP_CLIENT_ID,
});

const theme = createTheme({
    direction: 'ltr',
    responsiveFontSizes: true,
    theme: 'LIGHT'
})

class MyApp extends App {
    constructor(props) {
        super(props);
        this.state = {
            theme: [],
        };
    }

    ComponentDidMount() {
        const dispatch = useDispatch();
        dispatch(CourseActions.requestCourses());
        // const { settings } = useSettings();

        // const theme = createTheme({
        //     direction: settings.direction,
        //     responsiveFontSizes: settings.responsiveFontSizes,
        //     theme: THEMES.LIGHT
        // });
        // alert('asdf')
        // console.log('theme--->', theme)
        // this.setState({ theme: theme });
    }

    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    render() {
        const { Component, pageProps } = this.props;

        const Layout = Component.layout || (({ children }) => <>{children}</>);
        return (
            <React.Fragment>
                <Head>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, shrink-to-fit=no"
                    />
                    <script type="text/javascript" id="hs-script-loader" async defer src="//js-na1.hs-scripts.com/19690452.js"></script>
                    <title>Alunna</title>
                </Head>
                <Provider store={store}>
                    <SettingsProvider>
                        <ThemeProvider theme={theme}>
                            <StylesProvider jss={jss}>
                                <MuiPickersUtilsProvider utils={MomentUtils}>
                                    <GlobalStyles />
                                    <ScrollReset />
                                    <Layout>
                                        <Component {...pageProps} />
                                    </Layout>
                                </MuiPickersUtilsProvider>
                            </StylesProvider>
                        </ThemeProvider>
                    </SettingsProvider>
                </Provider>
            </React.Fragment>
        );
    }
}

// export default MyApp;
const makeStore = () => store;
export default withRedux(makeStore)(MyApp, { debug: true });