import React from 'react';
// import Dialog from '../Dialog';
import '../User/User.css';
import { withTracker } from 'meteor/react-meteor-data';
import Loans from '/imports/api/Loans';

class User extends React.Component{
    constructor(props){
        super(props);
        this.state={
        }
    }
    RequestLoan=()=>{
        console.log('request Loan');
        let userDetails = {
            amount: this.refs.amount.value,
            LoanReason: this.refs.reason.value,
        }
        console.log("userDetails ",userDetails);
        Loans.insert({
            amount : userDetails.amount,
            status : 'PENDING',
            LoanReason : userDetails.LoanReason,
            createdAt: new Date(), 
          });
    
    }
    CancelRequest=(id)=>{
        event.preventDefault();
        console.log('Cancel Request',id);
        Loans.remove(id);
    }
    render(){
        return(
            <React.Fragment>
                <div><h2>Customer</h2></div>
                <div className='row col s6 m8 l10 xl10'>
                    <ul id='nav-mobile' className='right hide-on-med-and-down'>
                        <li className='nav-item'>
                            <button data-target="modal1" className="btn modal-trigger">Add Task</button>
                        </li>
                    </ul>
                    <div id="modal1" className="modal">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel"><div>NewLoan</div></h5>
                                <button type="button" className="modal-close close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="pb-3"><input type="text" className="form-control" name="" placeholder="enter amount" ref="amount" /></div>
                                <div className="pb-3"><input type="text" className="form-control" name="" placeholder="enter description" ref="reason" /></div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="modal-close btn" data-dismiss="modal">Close</button>
                                <button type="button" className="modal-close btn gapButton" onClick={this.RequestLoan}  data-dismiss="modal">Request Loan</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row col s12 m12 l12 xl12'>
                    <center >
                        <table className="paleBlueRows">
                            <thead>
                                <tr>
                                    <th>Amount</th>
                                    <th>Status</th>
                                    <th>LoanReason</th>
                                    <th>Cancel Request</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.loans.map((loan, i) =>
                                    <tr key={loan._id}>
                                        <td>{loan.amount}</td>
                                        <td>{loan.status}</td>
                                        <td>{loan.LoanReason}</td>
                                        {loan.status==='PENDING' ? <td><center><img src="https://f4.bcbits.com/img/0008163076_21.jpg" alt="cancel" value={loan._id} onClick={()=>this.CancelRequest(loan._id)} width="20" height="20"/></center></td> : <td><center>Not Allowed</center></td>}
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </center>
                </div>
            </React.Fragment>
        )
    }
}
export default withTracker(() => {
    return {
      loans: Loans.find({}).fetch(),
    };
  })(User);