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
    this.state = {}
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

  handleCancel = e => {
    console.log(e)
    this.setState({
      visible: false,
    })
  }

  showModal2 = () => {
    this.setState({
      visible2: true,
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

  render() {
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
        <Button type="primary" onClick={this.showModal2}>
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

    const getModalContent = () => {
      return (
        <Form>
          <FormItem label="Image" {...this.formLayout}>
            {getFieldDecorator(
              'title',
              {}
            )(
              <div>
                <Avatar
                  style={{
                    backgroundColor: this.state.color,
                    verticalAlign: 'middle',
                    width: '100%',
                    height: 150,
                  }}
                  shape="square"
                  size="large"
                >
                  {this.state.user}
                </Avatar>
                <Button
                  size="small"
                  style={{ verticalAlign: 'middle' }}
                  onClick={this.changeUser}
                >
                  Upload
                </Button>
              </div>
            )}
          </FormItem>
          <FormItem label="Title" {...this.formLayout}>
            {getFieldDecorator('title', {
              rules: [
                {
                  required: true,
                  message: 'Input phone please!',
                },
              ],
              initialValue: '',
            })(<Input placeholder="Input title" />)}
          </FormItem>
          <FormItem {...this.formLayout} label="Description">
            {getFieldDecorator('subDescription', {
              rules: [
                {
                  message: 'Input options for reservation please！',
                  min: 5,
                },
              ],
              initialValue: '',
            })(<TextArea rows={4} placeholder="Input description" />)}
          </FormItem>
          <FormItem label="Code" {...this.formLayout}>
            {getFieldDecorator('title', {
              rules: [
                {
                  required: true,
                  message: 'Input number please!',
                },
              ],
              initialValue: '',
            })(<Input placeholder="Input code" />)}
          </FormItem>

          <FormItem label="From" {...this.formLayout}>
            {getFieldDecorator('createdAt', {
              rules: [
                {
                  required: true,
                  message: '',
                },
              ],
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

          <FormItem label="To" {...this.formLayout}>
            {getFieldDecorator('createdAt', {
              rules: [
                {
                  required: true,
                  message: '',
                },
              ],
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

          <FormItem label="Precent down" {...this.formLayout}>
            {getFieldDecorator('title', {
              rules: [
                {
                  required: true,
                  message: 'Input number please!',
                },
              ],
              initialValue: '',
            })(<Input placeholder="Input precent down" />)}
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
            dataSource={[...data]}
            renderItem={item => {
              if (item && item.name) {
                return (
                  <List.Item>
                    <Card
                      hoverable
                      style={{ width: 340 }}
                      cover={<img alt={item.name} src={item.imageUrl} />}
                      actions={[
                        <a key="edit">Edit</a>,
                        <a key="remove">Remove</a>,
                      ]}
                    >
                      <Meta title={item.name} description={item.description} />
                      <br />
                      <p className={styles.cardPtag}>
                        <span>Code: </span>
                        {item.code}
                      </p>
                      <p className={styles.cardPtag}>
                        <span>Precent down: </span>
                        {item.precentDown}%
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
              }

              return (
                <List.Item>
                  <Button
                    type="dashed"
                    className={styles.btnCard}
                    onClick={this.showModal2}
                  >
                    <PlusOutlined /> Add
                  </Button>
                  {/*<Card*/}
                  {/*  hoverable*/}
                  {/*  style={{width: 240}}*/}
                  {/*  cover={<img alt={item.name} src={item.imageUrl}/>}*/}
                  {/*>*/}
                  {/*  <Meta title={item.name} description={item.description}/>*/}
                  {/*  <br/>*/}
                  {/*  <p className={styles.cardPtag}>*/}
                  {/*    <span>Prixxxxxce: </span>*/}
                  {/*    {item.price}đ*/}
                  {/*  </p>*/}
                  {/*</Card>*/}
                </List.Item>
              )
            }}
          />
        </Card>

        <Modal
          title="Add Category"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          {/*<span>dfdf</span>*/}
          <Input placeholder="Input name of category" />
        </Modal>

        <Modal
          title="Add Promotion"
          visible={this.state.visible2}
          onOk={this.handleOk2}
          onCancel={this.handleCancel2}
        >
          {/*<span>dfdf</span>*/}
          {/*<Input placeholder="Input name of category" />*/}

          {getModalContent()}
        </Modal>
      </div>
    )
  }
}

export default connect(({ reservation, loading }) => ({
  reservation,
  loading,
}))(Form.create()(PromotionPage))
