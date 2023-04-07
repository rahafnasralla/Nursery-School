import './Application.scss'
export default function Application() {

    return (
        <div className="body">
        <div className="container">
        <div className="apply-box">
            <h1>Job Application <span class="title-small">(web)</span></h1>

            <form action="">
                <div className="form-container">
                    <div className="form-control">
                        <label for="first-name">First Name</label>
                        <input type="text" id="first-name" name="first-name" placeholder="Enter First Name"/>
                    </div>
                    <div className="form-control">
                        <label for="last-name">Last Name</label>
                        <input type="text" id="last-name" name="last-name" placeholder="Enter Last Name"/>
                    </div>
                    <div className="form-control">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter Email"/>
                    </div>
                    <div className="form-control">
                        <label for="job-role">Job Role</label>
                        <select name="job-role" id="job_role">
                            <option value="">Select Job Role</option>
                            <option value="frontend">Frontend Development</option>
                            <option value="backend">Backend Development</option>
                            <option value="full-stack">Full Stack Web Development</option>
                            <option value="ui-ux">UI & UX Designer</option>
                        </select>
                    </div>
                    <div className="textarea-control">
                        <label for="address">Address</label>
                        <textarea name="address" id="address" cols="50" rows="4" placeholder="Enter Address"></textarea>
                        
                    </div>
                    <div className="form-control">
                        <label for="city">City</label>
                        <input type="text" id="city" name="city" placeholder="Enter City"/>
                    </div>
                    <div className="form-control">
                        <label for="pincod">Pincode</label>
                        <input type="number" id="pincod" name="pincod" placeholder="Enter Pincod"/>
                    </div>
                    <div className="form-control">
                        <label for="date">Date</label>
                        <input value="2022-10-24" type="date" id="date" name="date" placeholder="Enter Date"/>
                    </div>
                    <div className="form-control">
                        <label for="upload">Upload Your CV</label>
                        <input type="file" id="upload" name="upload"/>
                    </div>
                </div>
                <div className="button-container">
                    <button type="submit">Apply Now</button>
                </div>
            </form>
            
        </div>
    </div>

        </div>
        
    )
}