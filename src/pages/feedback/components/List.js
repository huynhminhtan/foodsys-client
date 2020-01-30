import React, { PureComponent } from 'react'
import { Table, Avatar } from 'antd'
import { withI18n } from '@lingui/react'
import { Ellipsis } from 'ant-design-pro'
import styles from './List.less'
import moment from 'moment'
import Link from 'umi/link'

@withI18n()
class List extends PureComponent {
  render() {
    const { i18n, ...tableProps } = this.props
    const columns = [
      {
        title: i18n.t`OrderId`,
        dataIndex: 'id',
        align: 'left',
      },
      {
        title: i18n.t`User name`,
        dataIndex: 'name',
        align: 'left',
        render: (text, record) => <Link to={`order/${record.id}`}>{text}</Link>,
      },
      {
        title: i18n.t`Feedback`,
        dataIndex: 'feedback',
        align: 'left',
      },
      {
        title: i18n.t`Rate`,
        dataIndex: 'rate',
        align: 'left',
      },
    ]

    return (
      <Table
        {...tableProps}
        pagination={{
          ...tableProps.pagination,
          showTotal: total => i18n.t`Total ${total} Items`,
        }}
        bordered
        // scroll={{x: 1200}}
        className={styles.table}
        columns={columns}
        simple
        rowKey={record => record.id}
      />
    )
  }
}

export default List
