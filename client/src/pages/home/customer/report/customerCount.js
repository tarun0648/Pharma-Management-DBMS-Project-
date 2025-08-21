import React from "react";

export default class customercount extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        users:[],
        isLoading: false,
        isError: false
      }
    }
async componentDidMount() {
  this.setState({isLoading: true})
 
  const response = await fetch("http://localhost:1300/searchcustomer/customerCount")

  if(response.ok)
  {
    const users = await response.json()
      console.log(users[0])
      this.setState({users, isLoading:false})
    }
    else
    {
      this.setState({isError:true, isLoading:false})
    }
  }

  renderTableRows = () => {
    return this.state.users[0].map(user => {
      return (
        <tr>
          <td>{user.pincode}</td>
          <td>{user.Frequency}</td>
        </tr>
      )
    })
  }
renderTableHeader = () => {
    return Object.keys(this.state.users[0][0]).map(attr => <th key={attr}>{attr.toUpperCase()}</th>)
  }

  
  render() {
    const { users, isLoading, isError } = this.state

    if (isLoading) {
      return <div>Loading...</div>
    }

    if (isError) {
      return <div>Error</div>
    }

    return users.length > 0
      ? (
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <table style={{border: "3px solid var(--primary-green)",padding: "20px 16px", width: "400px", color: "var(--primary-green)"}}>
          <caption style={{border: "3px solid var(--primary-green)",padding: "20px 16px", color: "var(--secondary-green)"}}><h1><b>Area wise customer frequency list</b></h1>
          Total records : {users[0].length}</caption>
          <thead style={{backgroundColor: "var(--primary-black)", border: "1px solid var(--primary-green)", color: "var(--primary-green)"}}>
            <tr style={{border: "1px solid var(--primary-green)", padding: "10px 8px"}}>
              {this.renderTableHeader()}
            </tr>
          </thead>
          <tbody style={{backgroundColor: "var(--secondary-black)", border: "1px solid var(--primary-green)", textAlign: "center", padding: "10px 8px", color: "var(--primary-green)"}}>
            {this.renderTableRows()}
          </tbody>
        </table>
        </div>
      ) : (
        <div>
          No users.
      </div>
      )
  }
}
          
