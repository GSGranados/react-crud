import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
import Nav from "../components/Nav/Nav";
class EditComponent extends React.Component {
  state = {
    dataEmployee: {},
    campName: "",
    campEmail: "",
    campPhone: "",
    campAddress: "",
    stringRole: "",
    selectRole: 0
  };
  componentDidMount() {
    let userId = this.props.match.params.id;
    console.log(userId);
    const url = `http://localhost:3000/employee/get/${userId}`;
    axios
      .get(url)
      .then(res => {
        const data = res.data[0];
        console.log(data);
        this.setState({
          dataEmployee: data,
          campName: data.name,
          campEmail: data.email,
          campPhone: data.phone,
          campAddress: data.address,
          stringRole: data.role.role,
          selectRole: data.roleId
        });
      })
      .catch(error => {
        alert(error);
      });
  }

  render() {
    return (
    <>
    <Nav />
      <div className="container py-4">
        <div className="form-row justify-content-center">
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={this.state.campName}
              onChange={value =>
                this.setState({ campName: value.target.value })
              }
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={this.state.campEmail}
              onChange={value =>
                this.setState({ campEmail: value.target.value })
              }
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputState">Role</label>
            <select
              id="inputState"
              className="form-control"
              onChange={value =>
                this.setState({ selectRole: value.target.value })
              }
            >
              <option defaultValue value={this.state.dataEmployee.roleId}>
                {this.state.stringRole}
              </option>
              <option value="1">Admin</option>
              <option value="2">Project Manager</option>
              <option value="3">Programer</option>
            </select>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Phone</label>
            <input
              type="number"
              className="form-control"
              placeholder="Phone"
              value={this.state.campPhone}
              onChange={value =>
                this.setState({ campPhone: value.target.value })
              }
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress">Address</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
            value={this.state.campAddress}
            onChange={value =>
              this.setState({ campAddress: value.target.value })
            }
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </div>
      </>
    );
  }
}
export default EditComponent;
