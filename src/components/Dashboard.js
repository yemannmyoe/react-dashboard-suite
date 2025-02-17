import React from 'react'
import TransactionChart from '../components/TransactionChart'
import RecentOrders from '../components/RecentOrders'
import BuyerProfileChart from '../components/BuyerProfileChart'
import DashboardGrid from './DashboardGrid'
import PropularProducts from './PropularProducts'

export default function Dashboard() {
	return (
		<div className="h-[calc(100vh-100px)] overflow-y-auto flex flex-col gap-4 p-4">
			<DashboardGrid />
			<div className="flex flex-row gap-4 w-full">
				<TransactionChart />
				<BuyerProfileChart/>
			</div>
			<div className="flex flex-row gap-4 w-full">
				<RecentOrders />
       			 <PropularProducts/>
			</div>
		</div>
	)
}