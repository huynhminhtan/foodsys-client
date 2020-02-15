import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Tabs } from 'antd'
import { router } from 'utils'
import { stringify } from 'qs'
import { withI18n } from '@lingui/react'
import { Page } from 'components'
import List from './components/List'
import data from './datasource'

const { TabPane } = Tabs

const EnumPostStatus = {
  ALL: 1,
  ORDERED: 2,
  CONFIRMED: 3,
  DELIVERING: 4,
  COMPLETED: 5,
  CANCELED: 6,
}

@withI18n()
@connect(({ order, loading }) => ({ order, loading }))
class Order extends PureComponent {
  handleTabClick = key => {
    const { pathname } = this.props.location

    router.push({
      pathname,
      search: stringify({
        status: key,
      }),
    })
  }

  get listProps() {
    const { order, loading, location } = this.props
    const { list, pagination } = order
    const { query, pathname } = location

    console.log('list== ' + JSON.stringify(list))
    return {
      pagination,
      // dataSource: data,
      dataSource: list,
      loading: loading.effects['order/query'],
      onChange(page) {
        router.push({
          pathname,
          search: stringify({
            ...query,
            page: page.current,
            pageSize: page.pageSize,
          }),
        })
      },
    }
  }

  render() {
    const { location, i18n } = this.props
    const { query } = location

    return (
      <Page inner>
        <Tabs
          // activeKey={
          //   query.status === String(EnumPostStatus.ORDERED)
          //     ? String(EnumPostStatus.ALL)
          //     : String(EnumPostStatus.ORDERED)
          // }
          activeKey={String(EnumPostStatus.ALL)}
          onTabClick={this.handleTabClick}
        >
          <TabPane tab={i18n.t`All`} key={String(EnumPostStatus.ALL)}>
            <List {...this.listProps} />
          </TabPane>

          <TabPane tab={i18n.t`Ordered`} key={String(EnumPostStatus.ORDERED)}>
            <List {...this.listProps} />
          </TabPane>

          <TabPane
            tab={i18n.t`Confirmed`}
            key={String(EnumPostStatus.CONFIRMED)}
          >
            <List {...this.listProps} />
          </TabPane>

          <TabPane
            tab={i18n.t`Delivering`}
            key={String(EnumPostStatus.DELIVERING)}
          >
            <List {...this.listProps} />
          </TabPane>

          <TabPane
            tab={i18n.t`Completed`}
            key={String(EnumPostStatus.COMPLETED)}
          >
            <List {...this.listProps} />
          </TabPane>

          <TabPane tab={i18n.t`Canceled`} key={String(EnumPostStatus.CANCELED)}>
            <List {...this.listProps} />
          </TabPane>
        </Tabs>
      </Page>
    )
  }
}

Order.propTypes = {
  post: PropTypes.object,
  loading: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
}

export default Order
