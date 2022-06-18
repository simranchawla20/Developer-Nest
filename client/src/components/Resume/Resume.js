import React from "react";
import Basic from "./components/Left/Basic";
import Right from "./components/Right/Right";
import "./styles.css";
import ResumeContextProvider from "./contexts/ResumeContext";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import myClasses from "./components/Left/Left.module.css";
import logo from "../../img/devNestLogo.png";
import thumbn from "./assets/templateA.png";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";


function Templates() {
    const useStyles = makeStyles({
      headerLink: {
        color: "#FF8E53",
        minWidth: 100,
        marginLeft: 30,
      },
    });
  
    const classes = useStyles();
  
    return (
      <div className="left">
        <div className={myClasses.headerLeft}>
          <Link to="/resume" style={{ textAlign: "left" }}>
            <img src={logo} alt="logo" className={myClasses.img2} height="80"/>
          </Link>
        </div>
        <hr className={myClasses.hr2} />
        <h2 className={myClasses.templatesH2}>Templates</h2>
        <div className={myClasses.cards}>
          <div className={myClasses.templateCard}>
            <img src={thumbn} alt="thumbnail" className={myClasses.imgThumb} />
            <Button
              className={classes.headerLink}
              component={Link}
              to="/resume/basic"
            >
              The Basic
            </Button>
          </div>
          {/* Placeholder for a second template */}
          {/* <div className={myClasses.templateCard}>
            <img src={thumbn} alt="thumbnail" className={myClasses.imgThumb} />
            <Button
              className={classes.headerLink}
              component={Link}
              to="/basic/header"
            >
              The Stylish
            </Button>
          </div> */}
        </div>
      </div>
    );
  }
  

function Resume() {
    return (
      <div className="resume-app">
        <ResumeContextProvider>
          <BrowserRouter>
            <Switch>
              <Route path="/resume" component={Templates} exact />
              <Route path="/resume/basic" component={Basic} />
            </Switch>
          </BrowserRouter>
          <Right />
        </ResumeContextProvider>
      </div>
    
    );
  }
  
  export default Resume;