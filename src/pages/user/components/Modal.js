import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {
  Input,
  InputNumber,
  Radio,
  Modal,
  Cascader,
  Typography,
  Avatar,
} from 'antd'
import { Form } from '@ant-design/compatible'
import '@ant-design/compatible/assets/index.css'
import { Trans, withI18n } from '@lingui/react'
import city from 'utils/city'

const FormItem = Form.Item

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
}

@withI18n()
@Form.create()
class UserModal extends PureComponent {
  handleOk = () => {
    const { item = {}, onOk, form } = this.props
    const { validateFields, getFieldsValue } = form

    validateFields(errors => {
      if (errors) {
        return
      }
      const data = {
        ...getFieldsValue(),
        key: item.key,
      }
      onOk(data)
    })
  }

  render() {
    const { item = {}, onOk, form, i18n, ...modalProps } = this.props
    const { getFieldDecorator } = form

    return (
      <Modal {...modalProps} onOk={this.handleOk}>
        <Form layout="horizontal">
          <FormItem
            label={i18n.t`Avatar`}
            style={{ display: 'none' }}
            hasFeedback
            {...formItemLayout}
          >
            {getFieldDecorator('avatar', {
              initialValue: item.avatar,
            })(<Avatar size="large" src={item.avatar} />)}
          </FormItem>
          <FormItem
            label={i18n.t`Created At`}
            style={{ display: 'none' }}
            hasFeedback
            {...formItemLayout}
          >
            {getFieldDecorator('createdAt', {
              initialValue: item.createdAt,
            })(<Input />)}
          </FormItem>
          <FormItem
            label={i18n.t`Updated At`}
            style={{ display: 'none' }}
            hasFeedback
            {...formItemLayout}
          >
            {getFieldDecorator('updatedAt', {
              initialValue: Date.now(),
            })(<Input />)}
          </FormItem>
          <FormItem
            label={i18n.t`MessengerId`}
            style={{ display: 'none' }}
            hasFeedback
            {...formItemLayout}
          >
            {getFieldDecorator('messengerId', {
              initialValue: item.messengerId,
            })(
              <Typography.Text code className="ant-form-text" type="secondary">
                {item.messengerId}
              </Typography.Text>
            )}
          </FormItem>
          <FormItem label={i18n.t`MessengerId`} hasFeedback {...formItemLayout}>
            <Typography.Text code className="ant-form-text" type="secondary">
              {item.messengerId}
            </Typography.Text>
          </FormItem>
          <FormItem label={i18n.t`Name`} hasFeedback {...formItemLayout}>
            {getFieldDecorator('name', {
              initialValue: item.name,
              rules: [
                {
                  required: true,
                },
              ],
            })(<Input />)}
          </FormItem>
          <FormItem label={i18n.t`Gender`} hasFeedback {...formItemLayout}>
            {getFieldDecorator('gender', {
              initialValue: item.gender,
              rules: [
                {
                  required: true,
                  type: 'string',
                  initialValue: item.gender,
                },
              ],
            })(
              <Radio.Group>
                <Radio value="Male">
                  <Trans>Male</Trans>
                </Radio>
                <Radio value="Female">
                  <Trans>Female</Trans>
                </Radio>
              </Radio.Group>
            )}
          </FormItem>
          <FormItem label={i18n.t`Phone`} hasFeedback {...formItemLayout}>
            {getFieldDecorator('phone', {
              initialValue: item.phone,
              rules: [
                {
                  required: true,
                  pattern: /^0\d{9}$/,
                  message: i18n.t`The input is not valid phone!`,
                },
              ],
            })(<Input />)}
          </FormItem>
          <FormItem label={i18n.t`Email`} hasFeedback {...formItemLayout}>
            {getFieldDecorator('email', {
              initialValue: item.email,
              rules: [
                {
                  required: true,
                  pattern: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,
                  message: i18n.t`The input is not valid E-mail!`,
                },
              ],
            })(<Input />)}
          </FormItem>
          <FormItem label={i18n.t`Contact`} hasFeedback {...formItemLayout}>
            {getFieldDecorator('contact', {
              initialValue: item.contact,
              rules: [
                {
                  required: true,
                },
              ],
            })(<Input />)}
          </FormItem>
        </Form>
      </Modal>
    )
  }
}

UserModal.propTypes = {
  type: PropTypes.string,
  item: PropTypes.object,
  onOk: PropTypes.func,
}

export default UserModal
