import React, { Component } from 'react';

class AddEvent extends Component {
    constructor(props) {
    super(props) 
    this.state = {
        title: "",
        description: "",
        date: "",
        location: "",
        banner: "" 
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        const field = event.target.name;
        this.setState({
        [field]: event.target.value
        })
      }

    handleSubmit(event) { 
        event.preventDefault();
        alert(this.state.title + ' created!');


    }

    render() {
        return (
            
    <div className="AddEventForm" style={{ margin: "0 250px" }}>
              <form encType="multipart/form-data" action="/upload" method="POST" onSubmit={this.handleSubmit}>
    
                <div className="form-field">
                  <label>Title:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter event title"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                  />
                </div>
    
                <div className="form-field">
                  <label>Description:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter event description"
                    name="description"
                    value={this.state.description}
                    onChange={this.handleChange}
                  />
                </div>
    
                <div className="form-field">
                  <label>Date:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter date in the format mm.dd.yyyy"
                    name="date"
                    value={this.state.date}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="form-field">
                  <label>Location:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter location"
                    name="location"
                    value={this.state.location}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="form-field">
                  <label>Event Banner:</label>
                  <input
                    type="file"
                    className="form-control"
                    placeholder="Upload event banner"
                    name="banner"
                    accept="image/*"
                    value={this.state.banner}
                    onChange={this.handleChange}
                  />
                </div>
    
                <button type="submit">Submit</button>
              </form>
            
            </div>
        )
    }
    
}

export default AddEvent