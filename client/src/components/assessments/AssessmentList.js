import React from 'react';
import Assessments from './Assessments';

const AssessmentList = ({ assessments, updateAssessment, deleteAssessment }) => (
 <div>
   { assessments.map( assessment =>
       <Assessments
         key={assessment.id}
         {...assessment}
         updateAssessment={updateAssessment}
         deleteAssessment={deleteAssessment}
       />
     )
   }
 </div>
)

export default AssessmentList;
