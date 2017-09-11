import React, { Component } from 'react';
import Item from './Item.js';

class ItemTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {id: 1, text: "text1"},
        {id: 2, text: "text2"},
        {id: 3, text: "text3"}
      ]
    };
    this.uniqueId = Math.max(...this.state.items.map(item => item.id)) || 0;
    this.nextId = this.nextId.bind(this);
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }
  nextId() {
    return ++this.uniqueId;
  }
  remove(id) {
    this.setState({
      items: this.state.items.filter(item => item.id !== id)
    });
  }
  add() {
    this.setState({
      items: [
        ...this.state.items,
        {id: this.nextId(), text: 'Type new text here.'}
      ]
    });
  }
  update(id, newText) {
    var updatedItems = this.state.items.map(
      item => (item.id !== id) ? item : { id: id, text: newText }
    );
    this.setState({
      items: updatedItems
    });
  }
  renderItem(item) {
    return (
      <Item
        key={item.id}
        id={item.id}
        text={item.text}
        onRemove={this.remove}
        onSave={this.update}
      />
    );
  }
  render() {
    return (
      <table className="table">
        <caption>Displaying list of items</caption>
        <tbody>
          {this.state.items.map(this.renderItem)}
          <tr>
            <td>
              <button onClick={this.add} className="btn btn-default col-md-1" type="button">
                <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default ItemTable;
