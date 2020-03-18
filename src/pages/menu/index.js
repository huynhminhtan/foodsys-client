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
  // Modal,
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

import Modal from './components/Modal'
import FoodModal from './components/FoodModal'
import { router } from 'utils'
import { Collapse, Select } from 'antd'
import { data, data2, data3, data4 } from './datasource'
import { Form } from '@ant-design/compatible'
import moment from 'moment'
import { connect } from 'dva'
import Penels from './components/Panels'
import PropTypes from 'prop-types'
import User from '../user'
import { stringify } from 'qs'

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

class MenuPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleRefresh = newQuery => {
    const { location } = this.props
    const { query, pathname } = location

    router.push({
      pathname,
      search: stringify(
        {
          ...query,
          ...newQuery,
        },
        { arrayFormat: 'repeat' }
      ),
    })
  }

  callback = key => {
    console.log(key)
  }

  showModal = () => {
    const { dispatch } = this.props

    dispatch({
      type: 'menu/showModal',
      payload: {
        modalType: 'create',
      },
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

  showFoodModal = index => {
    const { dispatch } = this.props

    dispatch({
      type: 'menu/showFoodModal',
      payload: {
        modalType: 'createFood',
        categoryId: index,
      },
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

  get modalProps() {
    const { dispatch, menu, loading } = this.props
    const { modalVisible, modalType } = menu

    return {
      visible: modalVisible,
      destroyOnClose: true,
      maskClosable: false,
      confirmLoading: loading.effects[`menu/${modalType}`],
      title: 'Add Category',
      centered: true,
      onOk: data => {
        dispatch({
          type: `menu/${modalType}`,
          payload: data,
        }).then(() => {
          this.handleRefresh()
        })
      },
      onCancel() {
        dispatch({
          type: 'menu/hideModal',
        })
      },
    }
  }

  get foodModalProps() {
    const { dispatch, menu, loading } = this.props
    const { foodModalVisible, modalType, categoryId } = menu

    return {
      visible: foodModalVisible,
      destroyOnClose: true,
      maskClosable: false,
      confirmLoading: loading.effects[`menu/${modalType}`],
      title: 'Add Food',
      centered: true,
      onOk: data => {
        dispatch({
          type: `menu/${modalType}`,
          payload: { ...data, categoryId },
        }).then(() => {
          this.handleRefresh()
        })
      },
      onCancel() {
        dispatch({
          type: 'menu/hideFoodModal',
        })
      },
    }
  }

  render() {
    const { dispatch, menu, loading } = this.props
    const { list } = menu
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
        <h2>Menu</h2>
        <Paragraph>
          Each category we have its own story, adding food to the menu.
        </Paragraph>

        <Row className="contentLink" type="flex">
          {/* <IconLink
        src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg"
        text="Quick Start"
      />
      <IconLink
        src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg"
        text=" Product Info"
      />
      <IconLink
        src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg"
        text="Product Doc"
      /> */}
          <Button type="primary" onClick={this.showModal}>
            Add Category
          </Button>
        </Row>
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

    // const getModalContent = () => {
    //   return (
    //     <Form>
    //       <FormItem label="Image" {...this.formLayout}>
    //         {getFieldDecorator(
    //           'title',
    //           {}
    //         )(
    //           <div>
    //             <Avatar
    //               style={{
    //                 backgroundColor: this.state.color,
    //                 verticalAlign: 'middle',
    //                 width: '100%',
    //                 height: 150,
    //               }}
    //               shape="square"
    //               size="large"
    //             >
    //               {this.state.user}
    //             </Avatar>
    //             <Button
    //               size="small"
    //               style={{verticalAlign: 'middle'}}
    //               onClick={this.changeUser}
    //             >
    //               Upload
    //             </Button>
    //           </div>
    //         )}
    //       </FormItem>
    //       <FormItem label="Name" {...this.formLayout}>
    //         {getFieldDecorator('title', {
    //           rules: [
    //             {
    //               required: true,
    //               message: 'Input phone please!',
    //             },
    //           ],
    //           initialValue: '',
    //         })(<Input placeholder="Input name"/>)}
    //       </FormItem>
    //
    //       <FormItem label="Price" {...this.formLayout}>
    //         {getFieldDecorator('title', {
    //           rules: [
    //             {
    //               required: true,
    //               message: 'Input number please!',
    //             },
    //           ],
    //           initialValue: '',
    //         })(<Input placeholder="Input price"/>)}
    //       </FormItem>
    //       <FormItem {...this.formLayout} label="Description">
    //         {getFieldDecorator('subDescription', {
    //           rules: [
    //             {
    //               message: 'Input options for reservation please！',
    //               min: 5,
    //             },
    //           ],
    //           initialValue: '',
    //         })(<TextArea rows={4} placeholder="Input description"/>)}
    //       </FormItem>
    //     </Form>
    //   )
    // };

    return (
      <div>
        <Card bordered={false}>
          <Content
            extraContent={
              <img
                src="https://gw.alipayobjects.com/mdn/mpaas_user/afts/img/A*KsfVQbuLRlYAAAAAAAAAAABjAQAAAQ/original"
                alt="content"
              />
            }
          >
            {content}
          </Content>
        </Card>

        <Card bordered={false}>
          <Collapse defaultActiveKey={['1']} onChange={this.callback}>
            {list.map((catAndFood, index) => (
              <Panel
                header={catAndFood.category.name}
                key={index}
                extra={genExtra()}
              >
                <List
                  grid={{ gutter: 16, column: 4 }}
                  dataSource={[...catAndFood.foods, nullData]}
                  renderItem={item => {
                    if (item && item.name) {
                      return (
                        <List.Item>
                          <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt={item.name} src={item.imageUrl} />}
                            actions={[
                              <a key="edit">Edit</a>,
                              <a key="remove">Remove</a>,
                            ]}
                          >
                            <Meta
                              title={item.name}
                              description={item.description}
                            />
                            <br />
                            <p className={styles.cardPtag}>
                              <span>Price: </span>
                              {item.price}đ
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
                          onClick={() =>
                            this.showFoodModal(catAndFood.category.id)
                          }
                        >
                          <PlusOutlined /> Add
                        </Button>
                      </List.Item>
                    )
                  }}
                />
              </Panel>
            ))}
          </Collapse>
        </Card>

        {/*<Modal*/}
        {/*  title="Add Category"*/}
        {/*  visible={this.state.visible}*/}
        {/*  onOk={this.handleOk}*/}
        {/*  onCancel={this.handleCancel}*/}
        {/*>*/}
        {/*  <Input placeholder="Input name of category"/>*/}
        {/*</Modal>*/}

        <Modal {...this.modalProps} />
        <FoodModal {...this.foodModalProps} />

        {/*<Modal*/}
        {/*  title="Add Food"*/}
        {/*  visible={this.state.visible2}*/}
        {/*  onOk={this.handleOk2}*/}
        {/*  onCancel={this.handleCancel2}*/}
        {/*>*/}
        {/*  /!*<span>dfdf</span>*!/*/}
        {/*  /!*<Input placeholder="Input name of category" />*!/*/}

        {/*  {getModalContent()}*/}
        {/*</Modal>*/}
      </div>
    )
  }
}

MenuPage.propTypes = {
  menu: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  loading: PropTypes.object,
}

export default connect(({ menu, loading }) => ({
  menu,
  loading,
}))(Form.create()(MenuPage))

// export default MenuPage
