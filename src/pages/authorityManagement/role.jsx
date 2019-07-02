import React from 'react';
import { Table, Divider, Tag ,Button,Modal,Transfer} from 'antd';
import axios from 'axios';
import {login} from '../../services/user'
const action = (text,record)=>{
  return <div>
    <Button onClick={(text,record)=>{
        console.log(text)
      }}>权限设置</Button>

  </div>
};

const dataSource = [
  {
    key: '1',
    name: '超级管理员',
  },
  {
    key: '2',
    name: '管理员',
  },
];

class Role extends React.Component{
  columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 200,
      render: (text,record)=>(
        <Button type="primary" size="small"
          onClick={()=>this.showModal(text,record)}
          >权限管理</Button>
      ),
    },
  ];
  state = {
    ModalText: 'Content of the modal',
    visible: false,
    confirmLoading: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleOk = () => {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };
  componentDidMount() {
    this.getMock();
  }
  getMock = () => {
    const targetKeys = [];
    const mockData = [];
    for (let i = 0; i < 20; i++) {
      const data = {
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        chosen: Math.random() * 2 > 1,
      };
      if (data.chosen) {
        targetKeys.push(data.key);
      }
      mockData.push(data);
    }
    this.setState({ mockData, targetKeys });
  };

  filterOption = (inputValue, option) => option.description.indexOf(inputValue) > -1;

  handleChange = targetKeys => {
    this.setState({ targetKeys });
  };

  handleSearch = (dir, value) => {
    console.log('search:', dir, value);
  };
  render(){
    const { visible, confirmLoading, ModalText } = this.state;
    return (
      <div style={{background:'#fff'}}>
        <Table dataSource={dataSource} columns={this.columns} bordered={true}
        pagination={false}/>
        <Modal
          title="权限管理"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <div>
            <Transfer
              dataSource={this.state.mockData}
              showSearch
              filterOption={this.filterOption}
              targetKeys={this.state.targetKeys}
              onChange={this.handleChange}
              onSearch={this.handleSearch}
              render={item => item.title}
            />
          </div>
        </Modal>
      </div>
    )
  }
}
export default Role;
