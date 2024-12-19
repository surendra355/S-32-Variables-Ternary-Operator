import React from 'react'

function MarkSheet(props) {
    let engMarks = Number(props.engMarks);
    let hinMarks =Number(props.hinMarks);
    let telMarks =Number(props.telMarks);
    let matMarks =Number(props.matMarks);
    let sciMarks =Number(props.sciMarks);
    let socMarks =Number(props.socMarks);

    let totalMarks = engMarks+hinMarks+telMarks+matMarks+sciMarks+socMarks;
    let perc = (totalMarks/600) *100
  return (
    <div>
      <table>
        <caption>{props.name} MarkSheet</caption>
        <thead>
            <tr>
                <th>Subject</th>
                <th>Max Marks</th>
                <th>Marks Obtained</th>
                <th>Results</th>
                <th>Remarks</th>
            </tr>
        </thead>
        <tbody>
           <tr>
            <td>English</td>
            <td>100</td>
            <td>{engMarks}</td>
            <td>{engMarks>=35 ? "pass" : "fail"}</td>
            <td>{engMarks>=35 ? "Good" : "Need To Improve"}</td>
            </tr>
            <tr>
            <td>Hindi</td>
            <td>100</td>
            <td>{hinMarks}</td>
            <td>{hinMarks>=35 ? "pass" : "fail"}</td>
            <td>{hinMarks>=35 ? "Good" : "Need To Improve"}</td>
            </tr>
            <tr>
            <td>Telugu</td>
            <td>100</td>
            <td>{telMarks}</td>
            <td>{telMarks>=35 ? "pass" :"fail"}</td>
            <td>{telMarks>=35 ? "Good" : "Need To Improve"}</td>
            </tr>
            <tr>
            <td>Maths</td>
            <td>100</td>
            <td>{matMarks}</td>
            <td>{matMarks>=35 ? "pass" :"fail"}</td>
            <td>{matMarks>=35 ? "Good" : "Need To Improve"}</td>
            </tr>
            <tr>
            <td>Science</td>
            <td>100</td>
            <td>{sciMarks}</td>
            <td>{sciMarks>=35 ? "pass" :"fail"}</td>
            <td>{sciMarks>=35 ? "Good" : "Need To Improve"}</td>
            </tr>
            <tr>
            <td>Social</td>
            <td>100</td>
            <td>{socMarks}</td>
            <td>{socMarks>=35 ? "pass" :"fail"}</td>
            <td>{socMarks>=35 ? "Good" : "Need To Improve"}</td>
            </tr>
          
        </tbody>
        <tfoot>
            <th>Total</th>
            <th>600</th>
            <th>{totalMarks}({perc.toFixed(3)}%)</th>
            <th>Pass</th>
            <th>Good</th>
        </tfoot>
      </table>
      
    </div>
  )
}

export default MarkSheet
