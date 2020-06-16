import React, { Component } from "react";
import FishComponents from "./FishComponents";
import EditFish from "./EditFish";

class Contents extends Component {
  state = {
    fishies: [],
    isAdding: false,
    isEditting: false,
    fishName: "",
    fishType: ""
  };

  componentDidMount() {
    //make API call to the server to load all the data in the database once the application is started
    fetch("http://localhost:3000/fishes")
      .then(response => response.json())
      .then(data => {
        //use compare method to sort the data according to the id
        const sorted = data.sort(this.compare);
        this.setState({ fishies: sorted });
      })
      .catch(err => console.log(err));
  }
  compare = (a, b) => {
    const bandA = a.id;
    const bandb = b.id;
    let bandC = bandA > bandb ? 1 : -1;
    return bandC;
  };

  addFish = event => {
    //change the state of the add fish to display a modal box for users to add
    event.preventDefault();
    this.setState({
      ...this.state,
      isAdding: !this.state.isAdding
    });
  };

  handleInputChange = event => {
    //make form data controlled input
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleEdit = (fishies, index) => {
    //get the value of the clicked item and as well the index from the fishcomponent class
    let id = fishies.id;
    let fishName = fishies.name;
    let fishType = fishies.type;
    //set the values into the state for the edit formt to be able to read
    this.setState({
      ...this.state,
      isEditting: !this.state.isEditting,
      fishName,
      fishType,
      id,
      gotten: fishies,
      index
    });
  };
  handleFinishEditting = event => {
    // triggered as soon as user finish editting
    event.preventDefault();
    let name = this.state.fishName;
    let id = this.state.id;
    let type = this.state.fishType;
    let originalFishies = [...this.state.fishies];
    let index = this.state.index;
    let fish = { name, type };
    let copied = [...originalFishies];
    copied.splice(index, 1, fish);

    this.setState({
      isEditting: !this.state.isEditting,
      fishies: copied
    });
    //  this is the settings for the fetch method
    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, type })
    };

    fetch(`http://localhost:3000/fishes/${id}`, requestOptions)
      .then(response => response.json())
      .then(data => {
        let copied = [...this.state.fishies];
        copied.splice(index, 1, data);
        this.setState({
          ...this.state,
          fishies: copied
        });
      })
      .catch(err => {
        alert("sorry an error occured while trying to eDITING fish", err);
        this.setState({
          ...this.state,
          fishies: originalFishies
        });
      });
  };

  cancel = event => {
    event.preventDefault();
    this.setState({
      ...this.state,
      isEditting: false,
      isAdding: false
    });
  };
  handleDelete = fish => {
    const id = fish.id;
    const originalFishies = [...this.state.fishies];
    let deleted = this.state.fishies.filter(d => d.id !== fish.id);

    this.setState({
      fishies: deleted
    });

    fetch(`http://localhost:3000/fishes/${id}`, { method: "DELETE" })
      .then(response => response.json())
      .then(data => {
        alert(data.message);
        this.setState({
          fishies: deleted
        });
      })
      .catch(err => {
        alert("sorry an error occured while trying to Delete fish")
        this.setState({
          fishies: originalFishies
        });
        console.log(err)
      });
  };

  handleSubmit = event => {
    event.preventDefault();
    // get all the data to be used from the state
    let originalFishies = [...this.state.fishies];
    let name = this.state.fishName;
    let type = this.state.fishType;
    // check if the fishies array is not empty
    // if yes return o if no return the id of the last element
    let checkId =
      originalFishies.length < 1
        ? 0
        : originalFishies[originalFishies.length - 1].id;

    const newData = { id: ++checkId, name, type };

    this.setState({
      ...this.state,
      isAdding: !this.state.isAdding,
      fishName: "",
      fishType: "",
      fishies: [...originalFishies, newData]
    });
    //this is the settings for the fetch method
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, type })
    };

    fetch("http://localhost:3000/fishes", requestOptions)
      .then(response => response.json())
      .then(data => {
        this.setState({
          ...this.state,
          originalFishies: [...originalFishies, data]
        });
      })
      .catch(err => {
        alert("sorry an error occured while trying to add fish", err);
        this.setState({
          ...this.state,
          fishies: originalFishies
        });
      });
  };

  render() {
    return (
      <div className="contents">
        <FishComponents
          cancel={this.cancel}
          fishies={this.state.fishies}
          count={this.state.fishies.length}
          isAdding={this.state.isAdding}
          addFish={this.addFish}
          fishName={this.state.fishName}
          fishType={this.state.fishType}
          handleInputChange={this.handleInputChange}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
          handleSubmit={this.handleSubmit}
        />
        <EditFish
          name={this.state.fishName}
          type={this.state.fishType}
          id={this.state.id}
          isEditting={this.state.isEditting}
          cancel={this.cancel}
          handleInputChange={this.handleInputChange}
          handleFinishEditting={this.handleFinishEditting}
        />
      </div>
    );
  }
}

export default Contents;
