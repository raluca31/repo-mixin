import React, { Component } from "react";
import HeaderComponent from "../src/components/headerComponent/headerComponent";
import MainComponent from "../src/components/mainComponent/mainComponent";
import AxiosAPICall from "./services/APICalls";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      showAddItemForm: false,
      newItem: {
        checked: false,
        text: ""
      },
      inEditing: false,
      editedItemId: ""
    };

    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.url = "http://localhost:8080/todo/";
  }

  getAllItems = () => {
    AxiosAPICall.getAllCall(this.url)
      .then(res => {
        this.setState({ items: res.data });
        //console.log(this.state.items);
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getAllItems();
  }

  handleDeleteItem = itemId => {
    console.log(itemId);
    AxiosAPICall.deleteCall(this.url + itemId)
      .then(res => {
        console.log(res);
        const items = this.state.items.filter(i => i._id !== itemId);
        this.setState({ items });
      })
      .catch(error => {
        console.log(error);
        alert(error);
      });
  };

  handleAddItem = () => {
    this.setState({ showAddItemForm: !this.state.showAddItemForm });
    console.log("Add btn clicked" + this.state.showAddItemForm);
  };

  handleDescriptionChange = e => {
    var newItem = { ...this.state.newItem };
    newItem.text = e.target.value;
    this.setState({ newItem });
  };

  handleSubmit = e => {
    e.preventDefault();
    const item = { ...this.state.newItem };

    AxiosAPICall.postCall(this.url, item)
      .then(res => {
        console.log(res); //eroare referitoare la cheia list itemului "ItemComponent"
        /* this.setState(prevState => {
          return { items: [...prevState.items, item] };
        }); */ this.getAllItems();
      })
      .catch(error => {
        console.log(error);
        alert(error);
      });

    var newItem = { ...this.state.newItem };
    newItem.text = "";
    this.setState({ newItem });
    console.log(this.state.newItem);
    this.setState({ showAddItemForm: !this.state.showAddItemForm });
  };

  handleCheckboxStatus = id => {
    console.log("Status changed " + id);
    var item = this.state.items.find(i => i._id === id);
    item.checked = !item.checked;
    AxiosAPICall.updateCall(this.url + id, { checked: item.checked })
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
        alert(error);
      });
  };

  handleEditItem = id => {
    console.log("Edit clicked " + id);
    this.setState({ inEditing: !this.state.inEditing });
    this.setState({ editedItemId: id });
    console.log(this.state.inEditing);
  };

  handleTextChanged = (id, text) => {
    console.log(text);
    AxiosAPICall.updateCall(this.url + id, { text: text })
      .then(res => {
        console.log(res);
        this.setState({ inEditing: !this.state.inEditing });
        this.setState({ editedItemId: "" });
        this.getAllItems();
      })
      .catch(error => {
        console.log(error);
        alert(error);
      });
  };

  render() {
    return (
      <React.Fragment>
        <HeaderComponent />
        <MainComponent
          items={this.state.items}
          onDeleteItem={this.handleDeleteItem}
          onAddItem={this.handleAddItem}
          showForm={this.state.showAddItemForm}
          onSubmit={this.handleSubmit}
          onDescriptionChange={this.handleDescriptionChange}
          onCheckboxStatusChanged={this.handleCheckboxStatus}
          onEditItem={this.handleEditItem}
          inEditing={this.state.inEditing}
          editedItemId={this.state.editedItemId}
          onTextChanged={this.handleTextChanged}
        />
      </React.Fragment>
    );
  }
}

export default App;
