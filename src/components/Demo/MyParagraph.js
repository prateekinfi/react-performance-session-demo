import React from 'react';

import classes from './MyParagraph.module.css';

const MyParagraph = (props) => {
  console.log('MyParagraph RUNNING');
  return <p className={classes.MyParagraph}>My Paragraph</p>;
};

export default React.memo(MyParagraph);
