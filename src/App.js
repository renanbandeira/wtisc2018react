import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout, Button, Breadcrumb } from 'antd';
import firebase from 'firebase';
import { connect } from 'react-firebase';
import credentials from './credentials';
import './App.css';

const name1 = 'WTISC 2018';
const name2 = 'ReactJS Training';

const styles = {
  breadCrumb: { margin: '16px 0' },
  content: { background: '#fff', padding: 24, minHeight: 280 }
};

firebase.initializeApp(credentials);

class App extends Component {
  changeName = () => {
    const name = this.props.name === name1 ? name2 : name1;
    this.props.setName(name);
  }

  render() {
    const { Header, Content } = Layout;
    return (
      <Layout className="layout">
        <Header><div className="logo" /></Header>
        <Content>
          <Breadcrumb style={styles.breadCrumb}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div style={styles.content}>
            <Button type="primary" onClick={this.changeName}>Change name</Button>
            <p>{`Welcome to ${this.props.name}`}</p>
          </div>
        </Content>
      </Layout>
    );
  }
}

App.propTypes = {
  setName: PropTypes.func,
  name: PropTypes.string
};

export default connect((props, ref) => ({
  name: 'name',
  setName: value => ref('name').set(value)
}))(App);
