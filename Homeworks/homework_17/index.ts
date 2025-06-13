function calculateTotal(
  price: number,
  quantity: number,
  discount: number = 0
): number {
  const total: number = Math.round((price * (100 - discount)) / 100) * quantity
  return total
}

const id: string | number = 2
function displayId(id: string | number): void {
  const result = typeof id === 'string' ? id.toUpperCase() : id * 10
  console.log(result)
}

interface IOrder {
  orderId: string
  amount: number
  status: string
}
const arrOrders: IOrder[] = [
  { orderId: 'a1', amount: 7, status: 'pending' },
  { orderId: 'a2', amount: 4, status: 'shipped' },
  { orderId: 'a3', amount: 10, status: 'delivered' },
]

function filterOrdersByStatus(arr: IOrder[], status: string): IOrder[] {
  return arr.filter(item => item.status === status)
}

const cartage: [string, number, number] = ['name', 10, 100]
interface IInventory {
  [productName: string]: number
}

function updateStock(
  inventory: IInventory,
  productInfo: [string, number, number]
): IInventory {
  const [name, price, count] = productInfo
  return { ...inventory, [name]: count }
}
