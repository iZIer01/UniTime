import React from 'react';

import TimeTablerMenu from '../TimeTablerMenu'; 
import TimeTablerHeader from '../TimeTablerHeader';

import styles from "../Style/TimeTable.module.css"; 

const TimeTable = () => {
  return (
    <section className={styles.TimeTable}> 
      <TimeTablerMenu />
      <TimeTablerHeader/>  
    </section>
  );
};

export default TimeTable;
