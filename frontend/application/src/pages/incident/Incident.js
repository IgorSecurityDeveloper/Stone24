import '../incident/Incident.css';

function Incident() {
    return (
        
        <div className="container bg-light shadow-lg form-position">
            <h2 className='mt-2'>Create Incident</h2>
            <form>

                <div className="form-group mt-4">
                    <div className="row">
                        <div className="col">

                            {/* To identify who is getting in contact */}
                            <label className='mt-2' for="userId">User in contact: </label>
                            <input type="text" className="form-control form-control-sm" id="userId" placeholder='User name or Id' />

                            {/* To identify who is receiving the service */}
                            <label className='mt-2' for="userId">User: </label>
                            <input type="text" className="form-control form-control-sm" id="userId" placeholder='User name or Id' />

                            <label className='mt-2' for="buildingCode">Building code: </label>
                            <input type="text" className="form-control form-control-sm" id="buildingCode" />

                            <label className='mt-2' for="ticketNumber">Ticket Number: </label>
                            <input type="text" className="form-control form-control-sm" id="ticketNumber" />


                        </div>

                        <div className="col">

                            <label className='mt-2' for="Contact">Contact method:</label>
                            <select className="form-control form-control-sm" id="Contact">
                                <option>Email</option>
                                <option>Phone</option>
                                <option>Chat</option>
                            </select>

                            <label className='mt-2' for="priority">Priority:</label>
                            <select className="form-control form-control-sm" id="priority">
                                <option>Low</option>
                                <option>Medium</option>
                                <option>High</option>
                            </select>

                            <label className='mt-2' for="impact">Impact:</label>
                            <select className="form-control form-control-sm" id="impact">
                                <option>Low</option>
                                <option>Medium</option>
                                <option>High</option>
                            </select>
                        </div>

                    </div>



                    <label className='mt-2' for="shortdescription">Short Description: </label>
                    <input type="text" className="form-control form-control-sm" id="shortdescription" placeholder="Short Description / building code / user contact" />
                </div>

                <div className="form-group">
                    <label className='mt-2' for="descricao">Description:</label>
                    <textarea className="form-control form-control-sm" id="description" rows="6" placeholder="Insert Incident Descrition"></textarea>
                </div>
                <div className="form-group">
                </div>
                <button type="submit" className="mt-4 ml-4 btn btn-primary">Create Ticket</button>
                <button type="reset" className="mt-4 ml-4 btn btn-danger">Reset Ticket</button>
            </form>
        </div>
    );

} export default Incident;