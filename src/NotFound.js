import React, { Component } from 'react';
import { Layout, Breadcrumb } from 'antd';
import './App.css';

const styles = {
  breadCrumb: { margin: '16px 0' },
  content: { background: '#fff', padding: 24, minHeight: 280 }
};

class NotFound extends Component {
  render() {
    const { Header, Content } = Layout;
    return (
      <Layout className="layout">
        <Header><div className="logo" /></Header>
        <Content>
          <Breadcrumb style={styles.breadCrumb}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Not Found</Breadcrumb.Item>
          </Breadcrumb>
          <div style={styles.content}>
            <p>Not found</p>
          </div>
        </Content>
      </Layout>
    );
  }
}

export default NotFound;
