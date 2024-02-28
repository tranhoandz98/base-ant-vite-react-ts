import { Breadcrumb } from 'antd'
import React from 'react'

export default function Home() {
  return (
    <div>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </Breadcrumb>
      <div className='bg-white'>
        <div
          style={{
            padding: 24,
            textAlign: 'center'
          }}
        >
          <p>long content</p>
          {
            // indicates very long content
            Array.from({ length: 100 }, (_, index) => (
              <React.Fragment key={index}>
                {index % 20 === 0 && index ? 'more' : '...'}
                <br />
              </React.Fragment>
            ))
          }
        </div>
      </div>
    </div>
  )
}