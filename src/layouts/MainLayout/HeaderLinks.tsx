/*eslint-disable*/
import React from "react";
import type { FC } from 'react';
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import Link from 'next/link';

// @material-ui/core components
import { makeStyles, Button } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "./components/CustomDropdown/CustomDropdown";

const useStyles = makeStyles((theme) => ({
  list: {
    fontSize: "14px",
    margin: 0,
    paddingLeft: "0",
    listStyle: "none",
    paddingTop: "0",
    paddingBottom: "0",
    color: "inherit"
  },
  listItem: {
    float: "left",
    color: "inherit",
    position: "relative",
    display: "block",
    width: "auto",
    margin: "0",
    padding: "0",
    // [theme.breakpoints.down("sm")]: {
    //   width: "100%",
    //   "&:after": {
    //     width: "calc(100% - 30px)",
    //     content: '""',
    //     display: "block",
    //     height: "1px",
    //     marginLeft: "15px",
    //     backgroundColor: "#e5e5e5"
    //   }
    // }
  },
  listItemText: {
    padding: "0 !important"
  },
  navLink: {
    // color: "inherit",
    position: "relative",
    padding: "2rem 1.4375rem",
    textTransform: "inherit",
    borderRadius: 0,
    textDecoration: "none",
    margin: "0px",

    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "26px",
    color: "#546681",

    display: "inline-flex",

    "&:hover,&:focus": {
      fontWeight: 600,
      lineHeight: "19px",
      color: "#4B4FE4",
      borderTop: "2px solid #4B4FE4"
    },
    // [theme.breakpoints.down("sm")]: {
    //   width: "calc(100% - 30px)",
    //   marginLeft: "15px",
    //   textAlign: "left",
    //   "& > span:first-child": {
    //     justifyContent: "flex-start"
    //   }
    // }
  },
  login: {
    fontWeight: 600,
    color: "#4B4FE4",
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
  // notificationNavLink: {
  //   color: "inherit",
  //   padding: "0.9375rem",
  //   fontWeight: "400",
  //   fontSize: "12px",
  //   textTransform: "uppercase",
  //   lineHeight: "20px",
  //   textDecoration: "none",
  //   margin: "0px",
  //   display: "inline-flex",
  //   top: "4px"
  // },
  // registerNavLink: {
  //   top: "3px",
  //   position: "relative",
  //   fontWeight: "400",
  //   fontSize: "12px",
  //   textTransform: "uppercase",
  //   lineHeight: "20px",
  //   textDecoration: "none",
  //   margin: "0px",
  //   display: "inline-flex"
  // },
  navLinkActive: {
    backgroundColor: "rgba(255, 255, 255, 0.1)"
  },
  icons: {
    width: "20px",
    height: "20px",
    marginRight: "3px"
  },
  socialIcons: {
    position: "relative",
    fontSize: "20px !important",
    marginRight: "4px",
    color: "#4B4FE4"
  },
  dropdownLink: {
    "&,&:hover,&:focus": {
      color: "inherit",
      textDecoration: "none",
      display: "block",
      padding: "10px 20px"
    }
  },
}));

const HeaderLinks: FC = () => {

  const classes = useStyles();
  return (
    <>
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <Link href="/">
            <a className={classes.navLink}>Home</a>
          </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
          <CustomDropdown
            noLiPadding
            buttonText="Classes"
            buttonProps={{
              className: classes.navLink,
              color: "transparent"
            }}
            dropdownList={[
              <Link href="/classesView">
                <a className={classes.dropdownLink}>Python through algorithms</a>
              </Link>,
              <Link href="/">
                <a className={classes.dropdownLink}>AWS Cloud Development</a>
              </Link>,
              <Link href="/">
                <a className={classes.dropdownLink}>MERN Application</a>
              </Link>,
              <Link href="/">
                <a className={classes.dropdownLink}>Machine Learning in Python</a>
              </Link>,
              <Link href="/">
                <a className={classes.dropdownLink}>CI/CD Automation & Deployment</a>
              </Link>
            ]}
          />
        </ListItem>


        {/* <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Teachers"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          dropdownList={[
            <Link to="/teacher/Bradley-Woolf" className={classes.dropdownLink}>
              Jenny Wilson
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              Ronald Richards
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              Brooklyn Simmons
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              Cameron Williamson
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              Marvin McKinney
            </Link>
          ]}
        />
      </ListItem> */}
        <ListItem className={classes.listItem}>
          <Link href="/howWork">
            <a className={classes.navLink}>How it works</a>
          </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Link href="/blog">
            <a className={classes.navLink}>Blog</a>
          </Link>
        </ListItem>
      </List>


    </>
  );
}

export default HeaderLinks;
