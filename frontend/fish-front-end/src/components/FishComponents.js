import React from "react";
import Addfish from "./AddFish";

function FishComponents(props) {
  return (
    <div className="fishSection">
      <div className="fishContent">
        <h2 className="mb-5">
          We currently have {props.count} fishies on the list of Fishes, you can
          add yours
        </h2>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Type</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {props.fishies.map((fishies, index) => {
              return (
                <tr key={index}>
                  <td>{fishies.id}</td>
                  <td>{fishies.name}</td>
                  <td>{fishies.type}</td>
                  <td>
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => props.handleEdit(fishies, index)}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-danger btn-sm"
                    onClick = {()=>props.handleDelete(fishies)}
                    >Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button className="btn btn-primary my-3" onClick={props.addFish}>
          Add a fish
        </button>
        <Addfish
          isAdding={props.isAdding}
          addFish={props.addFish}
          cancel={props.cancel}
          handleInputChange={props.handleInputChange}
          fishName={props.fishName}
          fishType={props.fishType}
          handleSubmit={props.handleSubmit}
        />
      </div>
    </div>
  );
}

export default FishComponents;
