import React, { useEffect } from 'react';
import type { FC } from 'react';
import classNames from "classnames";
import PropTypes from 'prop-types';
import {
  AppBar,
  makeStyles,
  Toolbar,
  Container,
  Hidden,
  Drawer,
  Button,
  Grid
} from '@material-ui/core';
import IconButton from "@material-ui/core/IconButton";
import {Menu as MenuIcon, Close} from "@material-ui/icons";
import Headerlinks from './HeaderLinks';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
// @material-ui/icons
import RegisterView from 'views/auth/RegisterView';
import LoginView from 'views/auth/LoginView';

const useStyles = makeStyles((theme) => ({

  appBar: {
    display: "flex",
    border: 0,
    borderRadius: "3px",
    padding: "0.625rem 0",
    marginBottom: "20px",
    color: "#555",
    width: "100%",
    backgroundColor: "#fff",
    boxShadow: "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",
    transition: "all 150ms ease 0s",
    alignItems: "center",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    position: "relative",
    zIndex: "unset"
  },
  absolute: {
    position: "absolute",
    zIndex: 1100
  },
  fixed: {
    position: "fixed",
    zIndex: 1100
  },
  container: {
    minHeight: "50px",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    flexWrap: "nowrap"
  },
  flex: {
    flex: 1
  },
  title: {
    lineHeight: "30px",
    fontSize: "18px",
    borderRadius: "3px",
    textTransform: "none",
    color: "inherit",
    padding: "8px 16px",
    letterSpacing: "unset",
    "&:hover,&:focus": {
      color: "inherit",
      background: "transparent"
    }
  },
  appResponsive: {
    margin: "20px 10px"
  },
  primary: {
    backgroundColor: "red",
    color: "#FFFFFF",
    boxShadow:
      "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(156, 39, 176, 0.46)"
  },
  info: {
    backgroundColor: "red",
    color: "#FFFFFF",
    boxShadow:
      "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(0, 188, 212, 0.46)"
  },
  success: {
    color: "#FFFFFF",
    boxShadow:
      "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(76, 175, 80, 0.46)"
  },
  warning: {
    color: "#FFFFFF",
    boxShadow:
      "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(255, 152, 0, 0.46)"
  },
  danger: {
    color: "#FFFFFF",
    boxShadow:
      "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(244, 67, 54, 0.46)"
  },
  rose: {
    color: "#FFFFFF",
    boxShadow:
      "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(233, 30, 99, 0.46)"
  },
  transparent: {
    backgroundColor: "transparent !important",
    boxShadow: "none",
    paddingTop: "0",
    color: "#FFFFFF"
  },
  dark: {
    color: "#FFFFFF",
    backgroundColor: "#212121 !important",
    boxShadow:
      "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(33, 33, 33, 0.46)"
  },
  white: {
    border: "0",
    padding: "0.625rem 0",
    marginBottom: "20px",
    color: "#555",
    backgroundColor: "#fff !important",
    boxShadow:
      "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)"
  },
  drawerPaper: {
    border: "none",
    bottom: "0",
    transitionProperty: "top, bottom, width",
    transitionDuration: ".2s, .2s, .35s",
    transitionTimingFunction: "linear, linear, ease",
    width: "100%",
    position: "fixed",
    display: "block",
    top: "0",
    height: "100vh",
    right: "0",
    left: "auto",
    visibility: "visible",
    // overflowY: "visible",
    borderTop: "none",
    textAlign: "left",
    paddingRight: "0px",
    paddingLeft: "0",
  },
  anchor: {
    color: '#546681',
    fontWeight: 600,
    fontSize: 16,
    lineHeight: '19px',
    textTransform: 'none',
    '&:hover': {
      background: '#fff',
    }
  },
  signup: {
    fontWeight: 600,
    backgroundColor: "#4B4FE4",
    borderRadius: "999px",
    margin: "4rem 2rem 2rem 2rem",
    width: "calc(100% - 4rem)",
    textAlign: "center",
    color: "#fff",
    padding: "1rem 0"
  },
  phone: {
    lineHeight: "26px",
    borderTop: "0",
    width: "100%",
    textAlign: "center"
  },
  marginRight5: {
    marginRight: "5px"
  },
  socialIcons: {
    position: "relative",
    fontSize: "20px !important",
    marginRight: "4px",
    color: "#4B4FE4"
  },
  center: {},
  modal: {
    maxWidth: "1200px"
  },
  modalHeader: {
    position: 'absolute',
    right: 0,
    top: 0,
    padding: 0
  },
  modalTitle: {},
  modalBody: {},
  modalFooter: {},
  modalFooterCenter: {},
}));
interface TopBarProps {
  className?: string;
  inlineImageUrl?: string;
  imageAlt?: string;
  classImageBackground?: string;
  modalValue?: number;
  updateModalValue?: any;
  viewDeviceType?: number;
}
const MobileTopBar: FC<TopBarProps> = (props) => {
  const classes = useStyles();
  const brandImage = '/static/images/logo.svg';
  const [modal, setModal] = React.useState(0);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  useEffect(() => { setModal(props.modalValue) }, [props.modalValue]);

  const loginModalOpen = () => {
    setMobileOpen(false);
    setModal(1);
  };

  const registerModalOpen = () => {
    setMobileOpen(false);
    setModal(2);
  };

  const closeModal = () => {
    setModal(0);
    if(props.modalValue)
      props.updateModalValue();
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes.absolute]: false,
    [classes.fixed]: true
  });
  return (<AppBar className={appBarClasses}>
      <Toolbar className={classes.container}>
        <Hidden mdUp>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <img src={brandImage} alt="brand" />
          <Button className={classes.anchor} onClick={() => loginModalOpen()}>
            Login
          </Button>
        </Hidden>
      </Toolbar>
      <Hidden mdUp implementation="js">
        <Drawer
          variant="temporary"
          anchor={"right"}
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper
          }}
          onClose={handleDrawerToggle}
        >
          <div className={classes.appResponsive}>
            <Grid>
              <div style={{width: "30%", float: "left", textAlign: "left"}}>
                <IconButton
                    key="close"
                    aria-label="Close"
                    color="primary"
                    onClick={() => handleDrawerToggle()}
                    style={{paddingTop: 0}}
                  >
                    <Close />
                </IconButton>
              </div>
              <div style={{width: "40%", float: "left", textAlign: "center"}}>
              <img src={brandImage} alt="brand" />
              </div>
              <div style={{width: "30%", float: "left", textAlign: "right"}}>
              <Button className={classes.anchor} onClick={() => loginModalOpen()}>
                Login
              </Button>
              </div>
            </Grid>
            <Headerlinks />
            <Button
              onClick={() => registerModalOpen()}
              className={classes.signup}
            >
              Sign Up
            </Button>
            <Button
                href="tel:+1-818-808-9948"
                className={classes.phone}
              >
              <i className={classes.socialIcons + " fab fa-twitter"} />
              (+1) 818 808-9948
            </Button>
          </div>
        </Drawer>
      </Hidden>
      <Dialog
        classes={{
          root: classes.center,
          paper: classes.modal
        }}
        open={modal > 0}
        keepMounted
        onClose={() => closeModal()}
        aria-labelledby="modal-slide-title"
        aria-describedby="modal-slide-description"
      >
        <Container
          className={classes.container}
          maxWidth="lg"
        >
          <DialogTitle
            id="classic-modal-slide-title"
            disableTypography
            className={classes.modalHeader}
          >
            <IconButton
              key="close"
              aria-label="Close"
              color="primary"
              onClick={() => closeModal()}
            
            >
              <Close />
            </IconButton>
          </DialogTitle>
          {(modal === 2) ? (<RegisterView openLogin={loginModalOpen} viewDeviceType={2} />) : (<LoginView openRegister={registerModalOpen} viewDeviceType={2}  />)}
        </Container>
      </Dialog>
    </AppBar>
  );
};

MobileTopBar.propTypes = {
  className: PropTypes.string
};

export default MobileTopBar;