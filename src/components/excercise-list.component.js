import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Excercise = props => (
    <tr>
      <td>{props.excercise.name}</td>
      <td>{props.excercise.description}</td>
      <td>{props.excercise.duration}</td>
      <td>{props.excercise.date.substring(0,10)}</td>
      <td>
        <Link to={"/edit/"+props.excercise._id}>Edit</Link> | <a href="#" onClick={() => { props.deleteExcercise(props.excercise._id) }}>Delete</a>
      </td>
    </tr>
);

export default class ExcerciseList extends Component {

    constructor(props){
        super(props);

        this.deleteExcercise = this.deleteExcercise.bind(this);

        this.state = {excercises:[]};

    }

    componentDidMount(){
        axios.get('http://localhost:5000/excercise/')
            .then(res => {
                this.setState({excercises: res.data})
            })
            .catch((error)=>{
                console.log(error);
            });
    }

    deleteExcercise(id){
        axios.delete('http://localhost:5000/excercise/'+id)
            .then(res => console.log(res));

        this.setState({
            excercises: this.state.excercises.filter(ele => ele._id !== id)
        });
    }

    excerciseList(){
        return this.state.excercises.map(curretExc => {
            return <Excercise excercise={curretExc} deleteExcercise={this.deleteExcercise} key={curretExc._id}/>;
        })
    }

    render(){
        return (
            <div>
                <h3>Logged Exercises</h3>
                <table className="table">
                <thead className="thead-light">
                    <tr>
                    <th>Username</th>
                    <th>Description</th>
                    <th>Duration</th>
                    <th>Date</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { this.excerciseList() }
                </tbody>
                </table>
            </div>
        )
    }
}