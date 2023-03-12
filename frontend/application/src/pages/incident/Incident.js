import { useState } from 'react';
import '../incident/Incident.css';

function Incident() {

    const [incident, setIncident] = useState(false);

    function createIncident() {
        setIncident(true);
    }

    return (
        <div className="container shadow-lg">
            <h2>Create Incident</h2>
            <form>
                <div className="form-group">
                    <label for="userId">User Id: </label>
                    <input type="text" className="form-control" id="userId" />
                    <label for="Contact">Contact Method:</label>
                    <select className="form-control" id="Contact">
                        <option>Email</option>
                        <option>Phone</option>
                        <option>Chat</option>
                    </select>
                    <label for="priority">Priority</label>
                    <select className="form-control" id="priority">
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                    </select>
                    <label for="impact">Impact</label>
                    <select className="form-control" id="impact">
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                    </select>
                    <label for="shortdescription">Short Description: </label>
                    <input type="text" className="form-control" id="shortdescription" placeholder="Short Description / building code / user contact" />
                </div>
                <div className="form-group">
                    <label for="descricao">Description</label>
                    <textarea className="form-control" id="description" rows="3" placeholder="Insert Incident Descrition"></textarea>
                </div>
                <div className="form-group">
                </div>
                <button type="submit" className="btn btn-primary">Create Ticket</button>
            </form>
        </div>
    );

} export default Incident;