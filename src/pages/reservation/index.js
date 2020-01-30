import React from 'react'
// import '@ant-design/compatible/assets/index.css'
import { Page } from 'components'
import styles from './index.less'
import moment from 'moment'
import list from './datasource'
import { DownOutlined, PlusOutlined } from '@ant-design/icons'
import { Form } from '@ant-design/compatible'

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

const FormItem = Form.Item

const RadioButton = Radio.Button
const RadioGroup = Radio.Group
const SelectOption = Select.Option
const { Search, TextArea } = Input

// @connect(({ reservation, loading }) => ({ reservation, loading }))
class Reservation extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false,
      done: false,
      current: undefined,
    }
  }

  formLayout = {
    labelCol: {
      span: 7,
    },
    wrapperCol: {
      span: 13,
    },
  }

  addBtn = undefined

  showEditModal = item => {
    this.setState({
      visible: true,
      current: item,
    })
  }

  handleDone = () => {
    setTimeout(() => this.addBtn && this.addBtn.blur(), 0)
    this.setState({
      done: false,
      visible: false,
    })
  }

  handleCancel = () => {
    setTimeout(() => this.addBtn && this.addBtn.blur(), 0)
    this.setState({
      visible: false,
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { dispatch, form } = this.props
    const { current } = this.state
    const id = current ? current.id : ''
    setTimeout(() => this.addBtn && this.addBtn.blur(), 0)
    form.validateFields((err, fieldsValue) => {
      if (err) return
      this.setState({
        done: true,
      })
      dispatch({
        type: 'listBasicList/submit',
        payload: {
          id,
          ...fieldsValue,
        },
      })
    })
  }

  deleteItem = id => {
    const { dispatch } = this.props
    dispatch({
      type: 'listBasicList/submit',
      payload: {
        id,
      },
    })
  }

  render() {
    const { dispatch, reservation, loading } = this.props
    const { list, pagination, selectedRowKeys } = reservation
    const { visible, done, current = {} } = this.state
    const {
      form: { getFieldDecorator },
    } = this.props

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
          title: 'Delete Reservation',
          content: 'Are you sure you want to delete this reservation？',
          okText: 'Delete',
          cancelText: 'Cancel',
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
          placeholder="Search username, phone"
          onSearch={() => ({})}
        />
      </div>
    )

    const modalFooter = done
      ? {
          footer: null,
          onCancel: this.handleDone,
        }
      : {
          okText: 'Edit',
          onOk: this.handleSubmit,
          onCancel: this.handleCancel,
        }

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

    const getModalContent = () => {
      if (done) {
        return (
          <Result
            status="success"
            title="Edit successful"
            subTitle="Edit information for reservation successful."
            extra={
              <Button type="primary" onClick={this.handleDone}>
                Yes
              </Button>
            }
            className={styles.formResult}
          />
        )
      }

      return (
        <Form onSubmit={this.handleSubmit}>
          <FormItem label="User name reservation" {...this.formLayout}>
            {getFieldDecorator('title', {
              rules: [
                {
                  required: true,
                  message: 'Input name please!',
                },
              ],
              initialValue: current.userName,
            })(<Input placeholder="Input Name" />)}
          </FormItem>
          <FormItem label="Phone" {...this.formLayout}>
            {getFieldDecorator('title', {
              rules: [
                {
                  required: true,
                  message: 'Input phone please!',
                },
              ],
              initialValue: current.phone,
            })(<Input placeholder="Input Name" />)}
          </FormItem>
          <FormItem label="Number of seats" {...this.formLayout}>
            {getFieldDecorator('title', {
              rules: [
                {
                  required: true,
                  message: 'Input number please!',
                },
              ],
              initialValue: current.number,
            })(<Input placeholder="Input Name" />)}
          </FormItem>
          <FormItem label="Booking time" {...this.formLayout}>
            {getFieldDecorator('createdAt', {
              rules: [
                {
                  required: true,
                  message: '',
                },
              ],
              initialValue: current.createdAt
                ? moment(parseInt(current.createdAt) * 1000)
                : null,
            })(
              <DatePicker
                showTime
                placeholder="Input booking time"
                format="YYYY-MM-DD HH:mm:ss"
                style={{
                  width: '100%',
                }}
              />
            )}
          </FormItem>
          <FormItem label="Status reservation" {...this.formLayout}>
            {getFieldDecorator('owner', {
              rules: [
                {
                  required: true,
                  message: 'Input status reservation please!',
                },
              ],
              initialValue: 'Confirmed',
            })(
              <Select placeholder="Confirmed">
                <SelectOption value="confirmed">Confirmed</SelectOption>
                <SelectOption value="waiting">Waiting</SelectOption>
              </Select>
            )}
          </FormItem>
          <FormItem {...this.formLayout} label="Options">
            {getFieldDecorator('subDescription', {
              rules: [
                {
                  message: 'Input options for reservation please！',
                  min: 5,
                },
              ],
              initialValue: current.options,
            })(<TextArea rows={4} placeholder="Input options" />)}
          </FormItem>
        </Form>
      )
    }

    console.log('data=' + JSON.stringify(list))
    return (
      <div>
        <div className={styles.standardList}>
          <Card bordered={false}>
            <Row>
              <Col sm={8} xs={24}>
                <Info title="Waiting Status" value="8 reservation" bordered />
              </Col>
              <Col sm={8} xs={24}>
                <Info
                  title="Total reservation"
                  value="32 reservation"
                  bordered
                />
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
                        // this.showEditModal(item)
                        Modal.confirm({
                          title: 'Confirm Reservation',
                          content:
                            'Are you sure you want to confirm this reservation?',
                          okText: 'Confirm',
                          cancelText: 'Cancel',
                          // onOk: () => this.deleteItem(currentItem.id),
                        })
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

        <Modal
          title={done ? null : `Edit ${current ? 'Reservation' : 'More'}`}
          className={styles.standardListForm}
          width={640}
          bodyStyle={
            done
              ? {
                  padding: '72px 0',
                }
              : {
                  padding: '28px 0 0',
                }
          }
          destroyOnClose
          visible={visible}
          {...modalFooter}
        >
          {getModalContent()}
        </Modal>
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

// export default Reservation
// export default Reservation(Form.create()(Reservation));
export default connect(({ reservation, loading }) => ({
  reservation,
  loading,
}))(Form.create()(Reservation))
