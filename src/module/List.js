import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

class listComponent extends React.Component {
  state = {
    listEmployee: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:3000/employee/list")
      .then(res => {
        const data = res.data;
        console.log(data);
        this.setState({ listEmployee: data });
      })
      .catch(error => {
        alert(error);
      });
  }
  render() {
    return (
      <table className="table table-hover table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Role</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Phone</th>
            <th colSpan="2">Action</th>
          </tr>
        </thead>
        <tbody>{this.loadFillData()}</tbody>
      </table>
    );
  }
  //Method that it will work after component mounted.
  loadFillData() {
    return this.state.listEmployee.map(data => {
      return (
        <tr key={data.id}>
          <th>{data.id}</th>
          <td>{data.role.role}</td>
          <td>{data.name}</td>
          <td>{data.email}</td>
          <td>{data.address}</td>
          <td>{data.phone}</td>
          <td>
            <Link
              className="btn btn-outline-info "
              to={{
                pathname: `/edit/${data.id}`,
                state: {data}
              }}
            >
              Edit
            </Link>
          </td>
          <td>
            <button className="btn btn-outline-danger "> Delete </button>
          </td>
        </tr>
      );
    });
  }
}

export default listComponent;