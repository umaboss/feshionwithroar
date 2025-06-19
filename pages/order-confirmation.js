import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '@/components/Layout/Layout'
import { CheckCircle, Package, Truck, Home, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function OrderConfirmation() {
  const router = useRouter()

  // Mock order data - in a real app, this would come from the order ID
  const order = {
    id: 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
    date: new Date().toLocaleDateString(),
    total: 156.47,
    items: [
      { name: 'Wireless Headphones', quantity: 1, price: 79.99 },
      { name: 'Phone Case', quantity: 2, price: 23.75 },
      { name: 'Screen Protector', quantity: 1, price: 12.99 }
    ],
    shipping: {
      address: '123 Main St, City, State 12345',
      method: 'Standard Shipping (5-7 business days)'
    },
    estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()
  }

  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>
          <p className="text-xl text-gray-600">
            Thank you for your purchase. Your order has been successfully placed.
          </p>
        </div>

        {/* Order Details */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="border-b border-gray-200 pb-6 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold">Order #{order.id}</h2>
                <p className="text-gray-600">Placed on {order.date}</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-primary-600">${order.total.toFixed(2)}</p>
                <p className="text-sm text-gray-600">Total</p>
              </div>
            </div>
          </div>

          {/* Order Items */}
          <div className="mb-6">
            <h3 className="font-semibold mb-4">Order Items</h3>
            <div className="space-y-3">
              {order.items.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                  <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Shipping Info */}
          <div>
            <h3 className="font-semibold mb-4">Shipping Information</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-medium mb-2">{order.shipping.address}</p>
              <p className="text-sm text-gray-600 mb-2">{order.shipping.method}</p>
              <p className="text-sm text-gray-600">
                <strong>Estimated Delivery:</strong> {order.estimatedDelivery}
              </p>
            </div>
          </div>
        </div>

        {/* Order Status Timeline */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="font-semibold mb-6">Order Status</h3>
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <p className="text-sm font-medium">Order Placed</p>
              <p className="text-xs text-gray-500">Confirmed</p>
            </div>
            <div className="flex-1 h-1 bg-gray-200 mx-4"></div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                <Package className="h-6 w-6 text-gray-400" />
              </div>
              <p className="text-sm font-medium">Processing</p>
              <p className="text-xs text-gray-500">1-2 days</p>
            </div>
            <div className="flex-1 h-1 bg-gray-200 mx-4"></div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                <Truck className="h-6 w-6 text-gray-400" />
              </div>
              <p className="text-sm font-medium">Shipped</p>
              <p className="text-xs text-gray-500">3-5 days</p>
            </div>
            <div className="flex-1 h-1 bg-gray-200 mx-4"></div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                <Home className="h-6 w-6 text-gray-400" />
              </div>
              <p className="text-sm font-medium">Delivered</p>
              <p className="text-xs text-gray-500">5-7 days</p>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h3 className="font-semibold text-blue-900 mb-4">What's Next?</h3>
          <ul className="space-y-2 text-blue-800">
            <li className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2" />
              You'll receive an email confirmation shortly
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2" />
              We'll send you tracking information when your order ships
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2" />
              You can track your order status in your account
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/profile"
            className="btn-primary flex items-center justify-center"
          >
            View Order Status
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/products"
            className="btn-secondary flex items-center justify-center"
          >
            Continue Shopping
          </Link>
        </div>

        {/* Support Info */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-2">Need help with your order?</p>
          <Link
            href="/contact"
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            Contact our support team
          </Link>
        </div>
      </div>
    </Layout>
  )
}