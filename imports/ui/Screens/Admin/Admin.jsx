import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Loans from '/imports/api/Loans';

class Admin extends React.Component{
    constructor(props){
        super(props);
    }
    ApproveLoan=(id)=>{
        console.log('Approve Loan ',id);
        Loans.update(id, {
            $set: { status : 'APPROVED'},
          });
    }
    RejectLoan=(id)=>{
        console.log('RejectLoan ',id);
        Loans.update(id, {
            $set: { status : 'REJECTED'},
          });
    }
    render() {
        return (
            <div>
                <div>
                    <div style={{ float: 'right', marginRight: "2em" }}> <button className="btn btn-danger" onClick={this.Logout}>LogOut</button> </div>

                    <h4>Admin Home</h4>
                    <br />
                    <div>
                        <center><table className="paleBlueRows">
                            <thead>
                                <tr>
                                    <th>Amount</th>
                                    <th>Status</th>
                                    <th>Description</th>
                                    <th>Change Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.loans.map((loan, i) =>
                                        <tr key={loan._id}>
                                            <td>{loan.amount}</td>
                                            <td>{loan.status}</td>
                                            <td>{loan.LoanReason}</td>
                                            {loan.status === "PENDING" && <td><center><button style={{marginBottom: "5px"}} className="btn btn-warning" onClick={()=>this.ApproveLoan(loan._id)}>Approve</button><button  className="btn btn-warning" onClick={()=>this.RejectLoan(loan._id)}>Reject</button></center></td>}
                                            {loan.status === "REJECTED" && <td><span className='btn btn-danger'>Rejected</span></td>}
                                            {loan.status === "APPROVED" && <td><span className='btn btn-success'>Approved</span></td>}
                                        </tr>
                                    )}
                            </tbody>
                        </table>
                        </center>

                    </div>

                </div>
            </div>
        )
    }
}
export default withTracker(() => {
    return {
      loans: Loans.find({}).fetch(),
    };
  })(Admin);