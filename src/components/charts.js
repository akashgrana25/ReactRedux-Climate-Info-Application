import React from 'react';
import { Sparklines } from 'react-sparklines';


export default (props) => {
  return(
    <div>
      <Sparklines width = {150} height = {180} data={props.data}> </Sparklines>
    </div>
  );
}
