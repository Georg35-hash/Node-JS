function delay(value: string, ms: number): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => resolve(value), ms)
  })
}

async function processSequentially() {
  const result1 = await delay('First', 1000)
  console.log(result1)

  const result2 = await delay('Second', 800)
  console.log(result2)

  const result3 = await delay('Third', 500)
  console.log(result3)
}

processSequentially()

function asyncToUpper(str: string): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => resolve(str.toUpperCase()), Math.random() * 1000)
  })
}

async function processStringsParallel(arr: string[]) {
  const results = await Promise.all(arr.map(str => asyncToUpper(str)))
  console.log(results)
}

processStringsParallel(['apple', 'banana', 'cherry'])

function goodPromise(value: string, delay: number): Promise<string> {
  return new Promise(resolve => setTimeout(() => resolve(value), delay))
}

function badPromise(): Promise<string> {
  return new Promise((_, reject) =>
    setTimeout(() => reject(new Error('Something went wrong!')), 700)
  )
}

async function runWithErrorHandling() {
  try {
    const results = await Promise.all([
      goodPromise('Success 1', 500),
      badPromise(),
      goodPromise('Success 2', 300),
    ])
    console.log(results)
  } catch (error) {
    console.error('Caught error:', (error as Error).message)
  }
}

runWithErrorHandling()

function delayWithValue(value: number): Promise<number> {
  return new Promise(resolve => {
    setTimeout(() => resolve(value), value)
  })
}

async function runDynamicDelays(numbers: number[]) {
  const promises = numbers.map(num => delayWithValue(num))
  const results = await Promise.all(promises)
  console.log('Completed values:', results)
}

runDynamicDelays([1000, 500, 1500])
