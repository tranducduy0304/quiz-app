import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { FcPlus} from "react-icons/fc";

function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("user");
    const [img, setImg] = useState("");
    const [previewImage, setPreviewImage] = useState("");

    const handleUploadImage = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewImage(URL.createObjectURL(event.target.files[0]));
            setImg(event.target.files[0]);
        }
        else {}
        console.log(event.target.files[0]);
    }
    
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
        Launch demo modal
        </Button>

        <Modal show={show} onHide={handleClose} size="xl" backdrop="static" className='modal-add-user'>
            <Modal.Header closeButton>
            <Modal.Title>Add new user</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className='row g-3'>
                    <div class="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" value={email} placeholder="Email" onChange={(event) => setEmail(event.target.value)}/>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputAddress">Username</label>
                        <input type="text" class="form-control" id="inputAddress" value={username} placeholder="weekii" onChange={(event) => setUsername(event.target.value)}/>
                    </div>
                    <div class="form-group">
                        <label for="inputPassword4">Password</label>
                        <input type="password" class="form-control" id="inputPassword4" value={password} placeholder="You must have a lease 8 character." onChange={(event) => setPassword(event.target.value)}/>
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputState">Role</label>
                        <select id="inputState" class="form-control" onChange={(event) => setRole(event.target.value)}>
                            <option value='user'>User</option>
                            <option value='admin'>Admin</option>
                        </select>
                    </div>
                    <div className="col-md-12">
                        <label className="form-label label-upload" htmlFor="labelUpload" value={img}>
                            <FcPlus/>Upload File Image
                            </label>
                        <input type="file" id="labelUpload" onChange={(event) => handleUploadImage(event)} hidden/>
                    </div>
                    <div className="col-md-12 img-preview">
                        {previewImage ? 
                            <img src={previewImage} alt="#" />
                            :
                            <span>Preview Image</span>
                        }
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Save
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    )    
}

export default Example;