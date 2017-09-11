import React, { Component } from 'react';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      textBuffer: ''
    };
    this.edit = this.edit.bind(this);
    this.save = this.save.bind(this);
    this.cancel = this.cancel.bind(this);
    this.remove = this.remove.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.selectOnFocus = this.selectOnFocus.bind(this);
  }
  handleChange(e) {
    this.setState({
      textBuffer: e.target.value
    });
  }
  selectOnFocus(e) {
    e.target.select();
  }
  edit() {
    this.setState({
      editing: true,
      textBuffer: this.props.text
    });
  }
  save() {
    this.props.onSave(this.props.id, this.state.textBuffer);
    this.setState({
      editing: false,
      textBuffer: ''
    });
  }
  cancel() {
    this.setState({
      editing: false,
      textBuffer: ''
    });
  }
  remove() {
    this.props.onRemove(this.props.id);
  }
  renderDisplay() {
    return (
      <tr >
        <td>
          <div className="item">
            <p>{this.props.text}</p>
            <span className="btn-group">
              <button onClick={this.edit} className="btn btn-default btn-sm" type="button">
                 <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
              </button>
              <button onClick={this.remove} className="btn btn-default btn-sm" type="button">
                 <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
              </button>
            </span>
          </div>
        </td>
      </tr>
    );
  }
  renderEdit() {
    return (
      <tr >
        <td>
          <div className="item">
            <textarea
              autoFocus
              className="form-control"
              value={this.state.textBuffer}
              onChange={this.handleChange}
              onFocus={this.selectOnFocus}
            />
            <span className="btn-group">
              <button onClick={this.save} className="btn btn-default btn-sm" type="button">
                 <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
              </button>
              <button onClick={this.cancel} className="btn btn-default btn-sm" type="button">
                 <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
              </button>
            </span>
          </div>
        </td>
      </tr>
    );
  }
  render() {
    return (this.state.editing ? this.renderEdit() : this.renderDisplay());
  }
}

export default Item;
