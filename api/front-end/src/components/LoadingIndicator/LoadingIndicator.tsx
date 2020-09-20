import {Spinner} from "react-bootstrap";
import styles from "./LoadingIndicator.module.css";
import React from "react";

/**
 * Centered loading indicator
 * @constructor
 */
export const LoadingIndicator = (props: any) => {
  return (
    <div className="d-flex justify-content-center">
      <div style={{width: '32px', height: '32px'}}>
        <Spinner animation="grow" variant={props.isDark ? 'dark' : 'light'} className={styles.SpinnerDiv}/>
      </div>
    </div>
  );
};
