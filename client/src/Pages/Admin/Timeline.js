import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addTimeline, deleteTimeline, getUser } from "../../actions/user";
import { MdKeyboardBackspace } from "react-icons/md";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const Timeline = () => {
  const { message, error, loading } = useSelector((state) => state.update);
  const { message: loginMessage } = useSelector((state) => state.login);
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  
  const submitHandler = async (e) => {
    e.preventDefault();
    await dispatch(addTimeline(title, description, date));
    dispatch(getUser());
  };
  const deleteHandler = async (id) => {
    await dispatch(deleteTimeline(id));
    dispatch(getUser());
  };

  useEffect(() => {
    if (error) {
      
      dispatch({ type: "CLEAR_ERRORS" });
    }
    if (message) {
      
      dispatch({ type: "CLEAR_MESSAGE" });
    }

    if (loginMessage) {
      
      dispatch({ type: "CLEAR_MESSAGE" });
    }
  }, [ error, message, dispatch, loginMessage]);

  return (
    <div className="adminPanel">
      <div className="adminPanelContainer">
        <Typography variant="h4">
          <p>A</p>
          <p>D</p>
          <p>M</p>
          <p>I</p>
          <p style={{ marginRight: "1vmax" }}>N</p>

          <p>P</p>
          <p>A</p>
          <p>N</p>
          <p>E</p>
          <p>L</p>
        </Typography>

        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="adminPanelInputs"
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="adminPanelInputs"
          />
          <input
            type="date"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            // onChange = {(e)=> console.log(e.target.value)}
            className="adminPanelInputs"
          />

          <Link to="/login">
            BACK <MdKeyboardBackspace />
          </Link>

          <Button type="submit" variant="contained" disabled={loading}>
            Add
          </Button>
        </form>

      </div>
    </div>
  );
};

export default Timeline;
