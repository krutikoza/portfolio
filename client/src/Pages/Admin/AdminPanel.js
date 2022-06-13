import React, {useEffect, useState} from 'react'

import "./AdminPanel.css"
import {logout, updateUser} from "../../actions/user"

import {Typography, Button} from "@mui/material"

import {AiOutlineProject} from "react-icons/ai"
import {MdTimeline} from "react-icons/md"
import {Link} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"



const AdminPanel = () => {
    
    const dispatch = useDispatch();

    const {message:loginMessage} = useSelector((state) => state.login);
    const {message, error, loading} = useSelector((state) => state.update)
    

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const[skills, setSkills] = useState({})
    const[about, setAbout] = useState({})


    const logoutHandler = () =>{
        dispatch(logout());
    }

    const submitHandler = () => {
        dispatch(updateUser(name, email, password, skills, about));
    }
    

    const handleAboutImage = (e) =>{
        const file = e.target.files[0]
        const Reader = new FileReader();

        Reader.readAsDataURL(file)

        Reader.onload = ()=>{
            if(Reader.readyState === 2){
                setAbout({...about, avatar: Reader.result });
            }
        }
    };


    const handleImages = (e, val) =>{
        const file = e.target.files[0]
        const Reader = new FileReader();

        Reader.readAsDataURL(file)

        Reader.onload = ()=>{
            if(Reader.readyState === 2){
                if(val === 1){
                    setSkills({...skills, image1: Reader.result });
                }
                if(val === 2){
                    setSkills({...skills, image2: Reader.result });
                }
                if(val === 3){
                    setSkills({...skills, image3: Reader.result });
                }
                if(val === 4){
                    setSkills({...skills, image4: Reader.result });
                }
                if(val === 5){
                    setSkills({...skills, image5: Reader.result });
                }
                if(val === 6){
                    setSkills({...skills, image6: Reader.result });
                }
            }
        }
    };


    useEffect(() =>{
        if(error){
            dispatch({type: "CLEAR_ERRORS"})
        }
        
        if(message){
            dispatch({type: "CLEAR_MESSAGE"})
        }
        if(loginMessage){
            dispatch({type: "CLEAR_MESSAGE"})
        }
    },[alert, error, message, dispatch, loginMessage])

  return (
    <div className="adminPanel">
      <div className="adminPanelContainer">
            <Typography variant="h4">
                    <p>A</p>
                    <p>D</p>
                    <p>M</p>
                    <p>I</p>
                    <p style={{marginRight: "1vmax"}}>N</p>

                    <p>P</p>
                    <p>A</p>
                    <p>N</p>
                    <p>E</p>
                    <p>L</p>
            </Typography>

            <form onSubmit={submitHandler}>
                <input 
                type= "email"
                placeholder="Email"
                onChange={(e)=>setEmail(e.target.value)}
                className = "adminPanelInputs"
                />

                <input 
                type= "password"
                placeholder="Password"
                onChange={(e)=>setPassword(e.target.value)}
                className = "adminPanelInputs"
                />


                <div className="adminPanelSkill">
                    <div>
                        <Typography>Skill 1</Typography>
                        <div>
                            <input
                            className = "adminPanelFileUpload"
                            type="file"
                            onChange={(e) => handleImages(e,1)}
                            />
                        </div>
                    </div>

                    <div>
                        <Typography>Skill 2</Typography>
                        <div>
                            <input
                            className = "adminPanelFileUpload"
                            type="file"
                            onChange={(e) => handleImages(e,2)}
                            />
                        </div>
                    </div>

                    <div>
                        <Typography>Skill 3</Typography>
                        <div>
                            <input
                            className = "adminPanelFileUpload"
                            type="file"
                            onChange={(e) => handleImages(e,3)}
                            />
                        </div>
                    </div>

                    <div>
                        <Typography>Skill 4</Typography>
                        <div>
                            <input
                            className = "adminPanelFileUpload"
                            type="file"
                            onChange={(e) => handleImages(e,4)}
                            />
                        </div>
                    </div>

                    <div>
                        <Typography>Skill 5</Typography>
                        <div>
                            <input
                            className = "adminPanelFileUpload"
                            type="file"
                            onChange={(e) => handleImages(e,5)}
                            />
                        </div>
                    </div>
                    <div>
                        <Typography>Skill 6</Typography>
                        <div>
                            <input
                            className = "adminPanelFileUpload"
                            type="file"
                            onChange={(e) => handleImages(e,6)}
                            />
                        </div>
                    </div>



                    
                </div>
                
                <div className="adminPanelAbout">
                    <fieldset>
                        <legend>About</legend>
                        <input 
                        type="text"
                        placeholder="Name"
                        value={about.name}
                        onChange={(e) => setAbout({...about, name: e.target})}
                        className="adminPanelInputs"
                        />
                        <input 
                        type="text"
                        placeholder="About"
                        value={about.name}
                        onChange={(e) => setAbout({...about, name: e.target})}
                        className="adminPanelInputs"
                        />
                        <input 
                        type="text"
                        placeholder="Title"
                        value={about.name}
                        onChange={(e) => setAbout({...about, name: e.target})}
                        className="adminPanelInputs"
                        />
                        <input 
                        type="text"
                        placeholder="Subtitle"
                        value={about.name}
                        onChange={(e) => setAbout({...about, name: e.target})}
                        className="adminPanelInputs"
                        />
                        {console.log(about)}
                        <input 
                        type="text"
                        placeholder="Discription"
                        value={about.name}
                        onChange={(e) => setAbout({...about, name: e.target})}
                        className="adminPanelInputs"
                        />
                        <input 
                        type="text"
                        placeholder="Quote"
                        value={about.name}
                        onChange={(e) => setAbout({...about, name: e.target})}
                        className="adminPanelInputs"
                        />

                        <input 
                        type="file"
                        accept="image/*"
                        onChange={handleAboutImage}
                        className="adminPanelFileUpload"
                        />
                    </fieldset>
                </div>
                <Link to="/admin/timeline">
                    TIMELINE <MdTimeline />
                </Link>

                <Link to="/admin/project">
                    Project <AiOutlineProject />
                </Link>

                <Button type="submit" variant="contained" disabled={loading}>
                    Update
                </Button>
            </form>

        <Button
          variant="contained"
          color="error"
          style={{ display: "block", margin: "4vmax auto" }}
          onClick={logoutHandler}
        >
          LOGOUT
        </Button>
      </div>
    </div>
  )
}

export default AdminPanel
