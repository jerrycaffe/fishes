import React from "react";

function EditFish(props) {
  return (
    <div className={props.isEditting ? "showModal" : "hideModal"}>
      <form onSubmit={props.handleFinishEditting} className="popup">
        <div className="form-title">
          <h1 className="mb-5">Edit Fish with id {props.id}</h1>
        </div>
        <hr />
        <div className="form-group">
          <label>
            <h4>Fish Name: </h4>
          </label>
          <input
            className="form-control"
            type="text"
            onChange={props.handleInputChange}
            value={props.name}
            name="fishName"
          />
        </div>
        <div className="form-group">
          <label>
            <h4>Fish Type: </h4>
          </label>
          <input
            className="form-control"
            type="text"
            onChange={props.handleInputChange}
            value={props.type}
            name="fishType"
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-success btn-sm">
            Finish Editting
          </button>
          <button
            type="button"
            className="btn btn-danger mx-5"
            onClick={props.cancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditFish;
