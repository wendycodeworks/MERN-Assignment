import React, { Component } from 'react';

class EditEvent extends Component {
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
        alert(this.state.title + ' has been updated!');
    }

    // Use existing data as placeholder


}


export default EditEvent 