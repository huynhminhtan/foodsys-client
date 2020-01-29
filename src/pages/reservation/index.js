import React from 'react'
// import '@ant-design/compatible/assets/index.css'
import { Page } from 'components'
import styles from './index.less'
import moment from 'moment'
import list from './datasource'
import { DownOutlined, PlusOutlined } from '@ant-design/icons'

import {
  Avatar,
  Button,
  Card,
  Col,
  DatePicker,
  Dropdown,
  Input,
  List,
  Menu,
  Modal,
  Progress,
  Radio,
  Row,
  Select,
  Result,
} from 'antd'
import { connect } from 'dva'
import PropTypes from 'prop-types'
import User from '../user'

const RadioButton = Radio.Button
const RadioGroup = Radio.Group
const SelectOption = Select.Option
const { Search, TextArea } = Input

@connect(({ reservation, loading }) => ({ reservation, loading }))
class Reservation extends React.Component {
  constructor(props) {
    super(props)
  }

  showEditModal = item => {
    // this.setState({
    //   visible: true,
    //   current: item,
    // });
  }

  render() {
    const { dispatch, reservation, loading } = this.props
    const { list, pagination, selectedRowKeys } = reservation

    const Info = ({ title, value, bordered }) => (
      <div className={styles.headerInfo}>
        <span>{title}</span>
        <p>{value}</p>
        {bordered && <em />}
      </div>
    )

    const editAndDelete = (key, currentItem) => {
      if (key === 'edit') this.showEditModal(currentItem)
      else if (key === 'delete') {
        Modal.confirm({
          title: '删除任务',
          content: '确定删除该任务吗？',
          okText: '确认',
          cancelText: '取消',
          onOk: () => this.deleteItem(currentItem.id),
        })
      }
    }

    const extraContent = (
      <div className={styles.extraContent}>
        <RadioGroup defaultValue="all">
          <RadioButton value="all">All</RadioButton>
          <RadioButton value="waiting">Waiting</RadioButton>
          <RadioButton value="confirmed">Confirmed</RadioButton>
        </RadioGroup>
        <Search
          className={styles.extraContentSearch}
          placeholder="Search username"
          onSearch={() => ({})}
        />
      </div>
    )

    const paginationProps = {
      showSizeChanger: true,
      showQuickJumper: true,
      pageSize: 5,
      total: 50,
    }

    const ListContent = ({
      data: {
        userName,
        createdAt,
        percent,
        status,
        number,
        isConfirmed,
        userNameMessenger,
      },
    }) => (
      <div className={styles.listContent}>
        <div className={styles.listContentItem}>
          <span>Number of seats</span>
          <p>{number}</p>
        </div>

        <div className={styles.listContentItem}>
          <span>Booking Time</span>
          <p>{moment(parseInt(createdAt) * 1000).format('DD/MM/YYYY HH:mm')}</p>
        </div>

        <div className={styles.listContentItem}>
          <span>User Messenger</span>
          <p>{userNameMessenger}</p>
        </div>

        <div className={styles.listContentItem}>
          <Progress
            percent={parseInt(isConfirmed) * 100}
            status={status}
            strokeWidth={6}
            style={{
              width: 120,
            }}
          />
        </div>
      </div>
    )

    const MoreBtn = ({ item }) => (
      <Dropdown
        overlay={
          <Menu onClick={({ key }) => editAndDelete(key, item)}>
            <Menu.Item key="edit">Edit</Menu.Item>
            <Menu.Item key="delete">Delete</Menu.Item>
          </Menu>
        }
      >
        <a>
          More <DownOutlined />
        </a>
      </Dropdown>
    )

    console.log('data=' + JSON.stringify(list))
    return (
      <div className={styles.standardList}>
        <Card bordered={false}>
          <Row>
            <Col sm={8} xs={24}>
              <Info title="Waiting Status" value="8 reservation" bordered />
            </Col>
            <Col sm={8} xs={24}>
              <Info title="Total reservation" value="32 reservation" bordered />
            </Col>
            <Col sm={8} xs={24}>
              <Info title="Confirmed" value="24 reservation" />
            </Col>
          </Row>
        </Card>

        <Card
          className={styles.listCard}
          bordered={false}
          title="Reservation List"
          style={{
            marginTop: 24,
          }}
          bodyStyle={{
            padding: '0 32px 40px 32px',
          }}
          extra={extraContent}
        >
          <List
            size="large"
            rowKey="id"
            // loading={loading}
            pagination={paginationProps}
            dataSource={list}
            renderItem={item => (
              <List.Item
                actions={[
                  <a
                    key="edit"
                    onClick={e => {
                      e.preventDefault()
                      this.showEditModal(item)
                    }}
                  >
                    Confirm
                  </a>,
                  <MoreBtn key="more" item={item} />,
                ]}
              >
                <List.Item.Meta
                  avatar={
                    <Avatar src={item.avatar} shape="square" size="large" />
                  }
                  title={
                    <a>
                      {item.userName} - {item.phone}
                    </a>
                  }
                  description={item.options}
                  className={styles.antListItemMeta}
                />
                <ListContent data={item} />
              </List.Item>
            )}
          />
        </Card>
      </div>
    )
  }
}

Reservation.propTypes = {
  reservation: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  loading: PropTypes.object,
}

export default Reservation
