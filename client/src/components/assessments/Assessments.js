import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const Assessments = ({ id, updateAssessment, deleteAssessment }) => (
  <div style={styles.flex}>
   <div style={styles.flex}>
     <Button
       onClick={() => updateAssessment(id)}
     />
   </div>
   <Button
     onClick={() => deleteAssessment(id)}
   >
     <Icon name="trash" />
   </Button>
 </div>
)


export default Assessments;
