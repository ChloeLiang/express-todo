import React from 'react';
import Layout from './Layout';
import List from './List';

class Tasks extends React.Component {
  render() {
    return (
      <Layout>
        <List tasks={this.props.tasks} />
      </Layout>
    );
  }
}

export default Tasks;
