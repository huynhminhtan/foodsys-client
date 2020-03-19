import React from 'react'
import { Page } from 'components'
import styles from './index.less'
import {
  PageHeader,
  Menu,
  Dropdown,
  Button,
  Icon,
  Tag,
  Typography,
  Row,
  Col,
  Card,
  List,
  Avatar,
  Modal,
  Result,
  Input,
  DatePicker,
} from 'antd'
// import Star from 'antd/icons/Star';
import {
  HeartTwoTone,
  SmileTwoTone,
  EditTwoTone,
  DeleteTwoTone,
  PlusOutlined,
} from '@ant-design/icons'

import { Collapse, Select } from 'antd'
import data from './datasource'
import { Form } from '@ant-design/compatible'
import moment from 'moment'
import { connect } from 'dva'
import PropTypes from 'prop-types'

const { Paragraph } = Typography
const { Panel } = Collapse
const { Meta } = Card
const SelectOption = Select.Option
const FormItem = Form.Item
const { Search, TextArea } = Input

const btnStyle = {
  marginLeft: 5,
}

const genExtra = () => (
  <div>
    <Button icon={<EditTwoTone />} size="small" />
    <Button style={btnStyle} icon={<DeleteTwoTone />} size="small" />
  </div>
)

class PromotionPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      done: false,
      current: undefined,
    }
  }

  callback = key => {
    console.log(key)
  }

  showModal = () => {
    this.setState({
      visible: true,
    })
  }

  handleOk = e => {
    console.log(e)
    this.setState({
      visible: false,
    })
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

  // handleCancel = e => {
  //   console.log(e)
  //   this.setState({
  //     visible: false,
  //   })
  // }

  showModal2 = () => {
    this.setState({
      visible2: true,
    })
  }

  showAddPromotionModal = item => {
    this.setState({
      visible: true,
      current: item,
    })
  }

  handleOk2 = e => {
    console.log(e)
    this.setState({
      visible2: false,
    })
  }

  handleCancel2 = e => {
    console.log(e)
    this.setState({
      visible2: false,
    })
  }

  formLayout = {
    labelCol: {
      span: 7,
    },
    wrapperCol: {
      span: 13,
    },
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
    console.log('handleSubmit=====')
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
        type: 'promotion/create',
        payload: {
          ...fieldsValue,
        },
      })
    })
  }

  render() {
    const { dispatch, promotion, loading } = this.props
    const { list, pagination, selectedRowKeys } = promotion
    const { visible, done, current = {} } = this.state
    const nullData = {}
    const {
      form: { getFieldDecorator },
    } = this.props

    const Content = ({ children, extraContent }) => {
      return (
        <Row className="content" type="flex">
          <div className="main" style={{ flex: 1 }}>
            {children}
          </div>
          <div
            className="extra"
            style={{
              marginLeft: 80,
            }}
          >
            {extraContent}
          </div>
        </Row>
      )
    }

    const content = (
      <div className="content">
        <h2>Promotion</h2>
        <Paragraph>Promotions at the store.</Paragraph>
        <Button type="primary" onClick={this.showAddPromotionModal}>
          Add Promotion
        </Button>
      </div>
    )

    const btnstyle = {
      width: 100,
    }
    const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`

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
          <FormItem
            style={{ display: 'none' }}
            label="Is Active"
            {...this.formLayout}
          >
            {getFieldDecorator('isActive', {
              rules: [
                {
                  required: true,
                },
              ],
              initialValue: 1,
            })(<Input placeholder="Input is active" />)}
          </FormItem>

          <FormItem
            style={{ display: 'none' }}
            label="Created At"
            {...this.formLayout}
          >
            {getFieldDecorator('createdAt', {
              rules: [
                {
                  required: true,
                },
              ],
              initialValue: Date.now(),
            })(<Input placeholder="Input image url" />)}
          </FormItem>

          <FormItem label="Image Url" {...this.formLayout}>
            {getFieldDecorator('imageUrl', {
              rules: [
                {
                  required: true,
                  message: 'Input image url please!',
                },
              ],
              initialValue: '',
            })(<Input placeholder="Input image url" />)}
          </FormItem>

          <FormItem label="Title" {...this.formLayout}>
            {getFieldDecorator('title', {
              rules: [
                {
                  required: true,
                  message: 'Input title please!',
                },
              ],
              initialValue: '',
            })(<Input placeholder="Input title" />)}
          </FormItem>
          <FormItem {...this.formLayout} label="Content">
            {getFieldDecorator('content', {
              rules: [
                {
                  message: 'Input content please！',
                  min: 5,
                },
              ],
              initialValue: '',
            })(<TextArea rows={4} placeholder="Input content" />)}
          </FormItem>
          <FormItem label="Code" {...this.formLayout}>
            {getFieldDecorator('code', {
              rules: [
                {
                  required: true,
                  message: 'Input code please!',
                },
              ],
              initialValue: '',
            })(<Input placeholder="Input code" />)}
          </FormItem>

          <FormItem label="From" {...this.formLayout}>
            {getFieldDecorator('availableFrom', {
              rules: [
                {
                  required: true,
                  message: '',
                },
              ],
            })(
              <DatePicker
                showTime
                placeholder="Input availableFrom"
                format="YYYY-MM-DD HH:mm"
                style={{
                  width: '100%',
                }}
              />
            )}
          </FormItem>

          <FormItem label="To" {...this.formLayout}>
            {getFieldDecorator('availableTo', {
              rules: [
                {
                  required: true,
                  message: '',
                },
              ],
            })(
              <DatePicker
                showTime
                placeholder="Input availableTo"
                format="YYYY-MM-DD HH:mm"
                style={{
                  width: '100%',
                }}
              />
            )}
          </FormItem>

          <FormItem label="Percent down" {...this.formLayout}>
            {getFieldDecorator('percentDown', {
              rules: [
                {
                  required: true,
                  message: 'Input percent down please!',
                },
              ],
              initialValue: '',
            })(<Input placeholder="Input percent down" />)}
          </FormItem>
        </Form>
      )
    }

    return (
      <div>
        <Card bordered={false}>
          <Content>{content}</Content>
        </Card>

        <Card bordered={false}>
          <List
            grid={{ gutter: 16, column: 3 }}
            // dataSource={[...data]}
            dataSource={list}
            renderItem={item => {
              // if (item && item.name) {
              return (
                <List.Item>
                  <Card
                    hoverable
                    style={{ width: 340 }}
                    cover={<img alt={item.title} src={item.imageUrl} />}
                    actions={[
                      <a key="edit">Edit</a>,
                      <a key="remove">Remove</a>,
                    ]}
                  >
                    <Meta title={item.title} description={item.content} />
                    <br />
                    <p className={styles.cardPtag}>
                      <span>Code: </span>
                      {item.code}
                    </p>
                    <p className={styles.cardPtag}>
                      <span>Precent down: </span>
                      {item.percentDown}%
                    </p>
                    <p className={styles.cardPtag}>
                      <span>Available from: </span>
                      {moment(parseInt(item.availableFrom)).format(
                        'DD/MM/YYYY HH:mm'
                      )}
                    </p>
                    <p className={styles.cardPtag}>
                      <span>Available to: </span>
                      {moment(parseInt(item.availableTo)).format(
                        'DD/MM/YYYY HH:mm'
                      )}
                    </p>
                  </Card>
                </List.Item>
              )
              // }

              // return (
              //   <List.Item>
              //     <Button
              //       type="dashed"
              //       className={styles.btnCard}
              //       onClick={this.showModal2}
              //     >
              //       <PlusOutlined /> Add
              //     </Button>
              //     {/*<Card*/}
              //     {/*  hoverable*/}
              //     {/*  style={{width: 240}}*/}
              //     {/*  cover={<img alt={item.name} src={item.imageUrl}/>}*/}
              //     {/*>*/}
              //     {/*  <Meta title={item.name} description={item.description}/>*/}
              //     {/*  <br/>*/}
              //     {/*  <p className={styles.cardPtag}>*/}
              //     {/*    <span>Prixxxxxce: </span>*/}
              //     {/*    {item.price}đ*/}
              //     {/*  </p>*/}
              //     {/*</Card>*/}
              //   </List.Item>
              // )
            }}
          />
        </Card>

        {/*<Modal*/}
        {/*  title="Add Category"*/}
        {/*  visible={this.state.visible}*/}
        {/*  onOk={this.handleOk}*/}
        {/*  onCancel={this.handleCancel}*/}
        {/*>*/}
        {/*  /!*<span>dfdf</span>*!/*/}
        {/*  <Input placeholder="Input name of category" />*/}
        {/*</Modal>*/}

        <Modal
          title="Add Promotion"
          // onOk={this.handleOk2}
          // onCancel={this.handleCancel2}
          {...modalFooter}
          visible={visible}
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
        >
          {/*<span>dfdf</span>*/}
          {/*<Input placeholder="Input name of category" />*/}

          {getModalContent()}
        </Modal>
      </div>
    )
  }
}

PromotionPage.propTypes = {
  reservation: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  loading: PropTypes.object,
}

export default connect(({ promotion, loading }) => ({
  promotion,
  loading,
}))(Form.create()(PromotionPage))
