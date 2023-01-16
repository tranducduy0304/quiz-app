import Example from "./Model";
import "./managerUser.scss"

const ManagerUser = (props) => {
    return ( 
        <div className="manager-user-container">
            <div className="title">
                Manger User
            </div>
            <div className="users-content">
                <div>
                    <button>Add new users</button>
                </div>
                <div >   
                    tab users
                </div>
            </div>
            <Example/>
        </div>
    );
}

export default ManagerUser;