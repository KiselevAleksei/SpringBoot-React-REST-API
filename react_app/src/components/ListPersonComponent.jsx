import React, {Component} from 'react';
import PersonService from "../services/PersonService";

class ListPersonComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            persons: []
        }
        this.addPerson = this.addPerson.bind(this);
        this.editPerson = this.editPerson.bind(this);
        this.deletePerson = this.deletePerson.bind(this);
    }

    componentDidMount() {
        PersonService.getPersons().then((res) => {
            this.setState({persons: res.data})
        });
    }

    deletePerson(id){
        PersonService.deletePerson(id).then( res => {
            this.setState({persons: this.state.persons.filter(person => person.id !== id)});
        });
    }
    viewPerson(id){
        this.props.history.push(`/view-person/${id}`);
    }
    editPerson(id){
        this.props.history.push(`/add-person/${id}`);
    }
    addPerson(){
        this.props.history.push(`/add-person/_add`);
    }
    render() {
        return (
            <div>
                <h2 className="text-center"> Persons list </h2>
                <div className = "row">
                    <button onClick={ () => this.addPerson()} className="btn btn-primary"> Add Person </button>
                    {/*<button className="btn btn-primary" this.addPerson}> Add Person</button>*/}
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th>Person First Name</th>
                            <th>Person Last Name</th>
                            <th>Person Email</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.persons.map(
                                person =>
                                    <tr key={person.id}>
                                        <td>{person.firstName}</td>
                                        <td>{person.lastName}</td>
                                        <td>{person.email}</td>
                                        <td>
                                            <button onClick={ () => this.editPerson(person.id)} className="btn btn-info"> Update </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.deletePerson(person.id)} className="btn btn-danger">Delete </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.viewPerson(person.id)} className="btn btn-info">View </button>
                                        </td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>

                </div>
            </div>
        );
    }
}

export default ListPersonComponent;