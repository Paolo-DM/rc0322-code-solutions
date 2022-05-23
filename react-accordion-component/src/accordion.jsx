import React from 'react';
class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.topics = props.topics;

    this.state = {
      selectedTopicId: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (Number(event.target.id) === Number(this.state.selectedTopicId)) {
      this.setState({ selectedTopicId: null });
    } else {
      this.setState({ selectedTopicId: Number(event.target.id) });
    }
  }

  render() {
    const currentId = this.state.selectedTopicId;
    const listTopics = this.topics.map(topic =>
      <div key={topic.id} onClick={this.handleClick}>
        <li id={topic.id} >
          {topic.title}
        </li>
        <li className={(Number(topic.id) === currentId) ? 'content' : 'content hidden'}>{topic.content}</li>
      </div>
    );

    return (
      <div className='topics-container'>
        <ul >{listTopics}</ul>
      </div>
    );
  }
}

export default Accordion;
