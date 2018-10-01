class TestComponent extends React.Component {
  constructor() {
    super();
    this.onClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const { id } = event.target;
    console.log(id);
  }

  render() {
    return (
      <div>
        <h3 id={this.props.id} onClick={this.onClick}>
          {this.props.name}
        </h3>
      </div>
    );
  }
}
