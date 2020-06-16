import React from 'react'

function AddFish(props) {
  return (
    <div className={props.isAdding ? "showModal" : "hideModal"}>
      <form onSubmit={props.handleSubmit} className="popup">
        <div className="form-title">
          <h1 className="mb-5">Add Fish</h1>
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
            value={props.value}
            name="fishName"
            placeholder="input a name for the fish"
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
            value={props.value}
            name="fishType"
            placeholder="input a category for the fish"
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-success">
            Save
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

export default AddFish
