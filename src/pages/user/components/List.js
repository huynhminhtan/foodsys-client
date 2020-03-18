import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Table, Modal, Avatar } from 'antd'
import { DropOption } from 'components'
import { Trans, withI18n } from '@lingui/react'
import Link from 'umi/link'
import styles from './List.less'
import moment from 'moment'

const { confirm } = Modal

@withI18n()
class List extends PureComponent {
  handleMenuClick = (record, e) => {
    const { onDeleteItem, onEditItem, i18n } = this.props

    if (e.key === '1') {
      onEditItem(record)
    } else if (e.key === '2') {
      confirm({
        title: i18n.t`Are you sure delete this record?`,
        onOk() {
          onDeleteItem(record.messengerId)
        },
      })
    }
  }

  render() {
    const { onDeleteItem, onEditItem, i18n, ...tableProps } = this.props

    // console.log('oki-----' + JSON.stringify(tableProps.dataSource))

    const columns = [
      {
        title: <Trans>MessengerId</Trans>,
        dataIndex: 'messengerId',
        key: 'messengerId',
        // fixed: 'left',
        // width: 72,
      },
      {
        title: <Trans>Avatar</Trans>,
        dataIndex: 'avatar',
        key: 'avatar',
        width: 82,
        // fixed: 'left',
        render: text => <Avatar style={{ marginLeft: 8 }} src={text} />,
      },
      {
        title: <Trans>Name</Trans>,
        dataIndex: 'name',
        key: 'name',
        render: (text, record) => <Link>{text}</Link>,
        // render: (text, record) => <Link to={`user/${record.id}`}>{text}</Link>,
      },
      {
        title: <Trans>Gender</Trans>,
        dataIndex: 'gender',
        key: 'gender',
      },
      {
        title: <Trans>Phone</Trans>,
        dataIndex: 'phone',
        key: 'phone',
      },
      {
        title: <Trans>Email</Trans>,
        dataIndex: 'email',
        key: 'email',
      },
      {
        title: <Trans>Contact</Trans>,
        dataIndex: 'contact',
        key: 'contact',
      },
      {
        title: <Trans>CreatedAt</Trans>,
        dataIndex: 'createdAt',
        key: 'createdAt',
        render: text => (
          <span>{moment(parseInt(text)).format('DD/MM/YYYY HH:mm:ss')}</span>
        ),
      },
      {
        title: <Trans>UpdatedAt</Trans>,
        dataIndex: 'updatedAt',
        key: 'updatedAt',
        render: text => (
          <span>{moment(parseInt(text)).format('DD/MM/YYYY HH:mm:ss')}</span>
        ),
      },
      {
        title: <Trans>Operation</Trans>,
        key: 'operation',
        fixed: 'right',
        render: (text, record) => {
          return (
            <DropOption
              onMenuClick={e => this.handleMenuClick(record, e)}
              menuOptions={[
                { key: '1', name: i18n.t`Update` },
                { key: '2', name: i18n.t`Delete` },
              ]}
            />
          )
        },
      },
    ]

    return (
      <Table
        {...tableProps}
        pagination={{
          ...tableProps.pagination,
          showTotal: total => i18n.t`Total ${total} Items`,
        }}
        className={styles.table}
        bordered
        scroll={{ x: 1200 }}
        columns={columns}
        simple
        rowKey={record => record.id}
      />
    )
  }
}

List.propTypes = {
  onDeleteItem: PropTypes.func,
  onEditItem: PropTypes.func,
  location: PropTypes.object,
}

export default List
