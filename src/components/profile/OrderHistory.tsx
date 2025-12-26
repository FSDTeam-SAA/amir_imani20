import React from 'react'
import { Button } from '@/components/ui/button'

const OrderHistory = () => {
  // Mock data for order history
  const orders = [
    {
      id: 1,
      invoice: '12345',
      item: 'Product Name',
      date: '27/10/2025',
      amount: '$500.00',
      status: 'Unpaid'
    },
    {
      id: 2,
      invoice: '12345',
      item: 'Product Name',
      date: '27/10/2025',
      amount: '$500.00',
      status: 'Paid'
    },
    {
      id: 3,
      invoice: '12345',
      item: 'Service Name',
      date: '27/10/2025',
      amount: '$500.00',
      status: 'Paid'
    },
    {
      id: 4,
      invoice: '12345',
      item: 'Product Name',
      date: '27/10/2025',
      amount: '$500.00',
      status: 'Paid'
    },
    {
      id: 5,
      invoice: '12345',
      item: 'Product Name',
      date: '27/10/2025',
      amount: '$500.00',
      status: 'Paid'
    },
    {
      id: 6,
      invoice: '12345',
      item: 'Service Name',
      date: '27/10/2025',
      amount: '$500.00',
      status: 'Unpaid'
    },
    {
      id: 7,
      invoice: '12345',
      item: 'Product Name',
      date: '27/10/2025',
      amount: '$500.00',
      status: 'Paid'
    },
    {
      id: 8,
      invoice: '12345',
      item: 'Product Name',
      date: '27/10/2025',
      amount: '$500.00',
      status: 'Paid'
    },
  ];

  return (
    <div className='w-full'>
      {/* Header */}
      <div className='mb-8'>
        <h2 className='text-2xl font-bold text-gray-900'>Order History</h2>
        <p className='text-gray-500 mt-1'>Manage your personal information and profile details.</p>
      </div>

      {/* Table */}
      <div className='overflow-x-auto'>
        <table className='w-full border-collapse'>
          <thead>
            <tr className='border-b border-gray-100'>
              <th className='pb-4 text-left text-xs font-semibold text-teal-500 uppercase tracking-wider pl-4'>INVOICE</th>
              <th className='pb-4 text-left text-xs font-semibold text-teal-500 uppercase tracking-wider'>Item</th>
              <th className='pb-4 text-left text-xs font-semibold text-teal-500 uppercase tracking-wider'>
                <div className='flex items-center gap-1 cursor-pointer'>
                  BILLING DATE
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </th>
              <th className='pb-4 text-center text-xs font-semibold text-teal-500 uppercase tracking-wider'>AMOUNT</th>
              <th className='pb-4 text-right text-xs font-semibold text-teal-500 uppercase tracking-wider pr-4'>STATUS</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-50'>
            {orders.map((order) => (
              <tr key={order.id} className='hover:bg-gray-50/50 transition-colors'>
                <td className='py-4 pl-4 text-sm font-medium text-gray-600'>{order.invoice}</td>
                <td className='py-4 text-sm text-gray-600'>{order.item}</td>
                <td className='py-4 text-sm text-gray-600'>{order.date}</td>
                <td className='py-4 text-sm font-semibold text-gray-900 text-center'>{order.amount}</td>
                <td className='py-4 text-right pr-4'>
                  <span className={`inline-flex items-center px-3 py-1 rounded-md text-xs font-medium
                    ${order.status === 'Paid' 
                      ? 'bg-green-50 text-green-600' 
                      : 'bg-red-50 text-red-500'
                    }`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className='flex items-center justify-between mt-8 pt-4 border-t border-gray-100'>
        <span className='text-sm text-gray-500'>Page 1 of 10</span>
        <div className='flex gap-2'>
          <Button variant="outline" size="sm" className='rounded-full px-6' disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm" className='rounded-full px-6'>
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

export default OrderHistory