import React from 'react'
// import '@ant-design/compatible/assets/index.css'
import { Page } from 'components'
import styles from './index.less'
import moment from 'moment'
import list from './datasource'
import { DownOutlined, PlusOutlined } from '@ant-design/icons'
import { Form } from '@ant-design/compatible'
import { success } from '../../components/Message/Message'
import {
  increaseReservationStatus,
  ReservationStatusEnum,
  getPercentReservationStatus,
} from '../../enums/ReservationStatusEnum'

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
        type: 'reservation/updateReservation',
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
      type: 'reservation/delete',
      payload: {
        id,
      },
    })
  }

  confirmReservation = (id, status) => {
    const { dispatch } = this.props
    dispatch({
      type: 'reservation/update',
      payload: {
        id: id,
        status: status,
      },
    }).then(() => {
      success('Update Status Reservation #' + id + ' success')
      dispatch({
        type: 'reservation/query',
        payload: { page: 1, pageSize: 10 },
      })
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
          <RadioButton value="confirmed">Confirmed</RadioButton>
          <RadioButton value="Canceled">Canceled</RadioButton>
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
          okText: 'Updated',
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
      data: { userName, createdAt, percent, status, number, userNameMessenger },
    }) => (
      <div className={styles.listContent}>
        <div className={styles.listContentItem}>
          <span>Number of seats</span>
          <p>{number}</p>
        </div>

        <div className={styles.listContentItem}>
          <span>Booking Time</span>
          <p>{moment(parseInt(createdAt)).format('DD/MM/YYYY HH:mm')}</p>
        </div>

        <div className={styles.listContentItem}>
          <span>User Messenger</span>
          <p>{userNameMessenger}</p>
        </div>

        <div className={styles.listContentItem}>
          <Progress
            percent={getPercentReservationStatus(status)}
            status={
              getPercentReservationStatus(status) === 31 ? 'exception' : status
            }
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
          <FormItem style={{ display: 'none' }} label="" {...this.formLayout}>
            {getFieldDecorator('userId', {
              initialValue: current.userId,
            })(<Input placeholder="Input Name" />)}
          </FormItem>

          <FormItem style={{ display: 'none' }} label="" {...this.formLayout}>
            {getFieldDecorator('createdAt', {
              initialValue: current.createdAt,
            })(<Input placeholder="Input Name" />)}
          </FormItem>

          <FormItem style={{ display: 'none' }} label="" {...this.formLayout}>
            {getFieldDecorator('updatedAt', {
              initialValue: Date.now(),
            })(<Input placeholder="Input Name" />)}
          </FormItem>

          <FormItem style={{ display: 'none' }} label="" {...this.formLayout}>
            {getFieldDecorator('isActive', {
              initialValue: current.isActive,
            })(<Input placeholder="Input Name" />)}
          </FormItem>

          <FormItem label="User reservation" {...this.formLayout}>
            {getFieldDecorator('userName', {
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
            {getFieldDecorator('phone', {
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
            {getFieldDecorator('number', {
              rules: [
                {
                  required: true,
                  message: 'Input number please!',
                },
              ],
              initialValue: current.number,
            })(<Input placeholder="Input number" />)}
          </FormItem>
          <FormItem label="Booking date" {...this.formLayout}>
            {getFieldDecorator('reservationsDate', {
              rules: [
                {
                  required: true,
                  message: '',
                },
              ],
              initialValue: current.reservationsDate
                ? moment(parseInt(current.reservationsDate))
                : null,
            })(
              <DatePicker
                showTime
                placeholder="Input booking date"
                format="DD-MM-YYYY"
                style={{
                  width: '100%',
                }}
              />
            )}
          </FormItem>
          <FormItem label="Booking time" {...this.formLayout}>
            {getFieldDecorator('reservationsTime', {
              rules: [
                {
                  required: true,
                  message: 'Input booking time!',
                },
              ],
              initialValue: current.reservationsTime,
            })(<Input placeholder="Input booking time" />)}
          </FormItem>
          <FormItem label="Status reservation" {...this.formLayout}>
            {getFieldDecorator('status', {
              rules: [
                {
                  required: true,
                  message: 'Input status reservation please!',
                },
              ],
              initialValue: current.status,
            })(
              <Select>
                <SelectOption value="INIT">INIT</SelectOption>
                <SelectOption value="CONFIRMED">CONFIRMED</SelectOption>
                <SelectOption value="COMPLETED">COMPLETED</SelectOption>
                <SelectOption value="CANCELED">CANCELED</SelectOption>
              </Select>
            )}
          </FormItem>
          <FormItem {...this.formLayout} label="Options">
            {getFieldDecorator('options', {
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

    // console.log('data=' + JSON.stringify(list))

    function countStatus(list, status) {
      return list.filter(x => x.status === status).length
    }

    const totalReservation = list.length
    const waitingReservation = countStatus(list, 'INIT')
    const confirmedReservation = countStatus(list, 'CONFIRMED')

    return (
      <div>
        <div className={styles.standardList}>
          <Card bordered={false}>
            <Row>
              <Col sm={8} xs={24}>
                <Info
                  title="Waiting Status"
                  value={waitingReservation + ' reservation'}
                  bordered
                />
              </Col>
              <Col sm={8} xs={24}>
                <Info
                  title="Total reservation"
                  value={totalReservation + ' reservation'}
                  bordered
                />
              </Col>
              <Col sm={8} xs={24}>
                <Info
                  title="Confirmed"
                  value={confirmedReservation + ' reservation'}
                />
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
                          onOk: () =>
                            this.confirmReservation(item.id, 'CONFIRMED'),
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
