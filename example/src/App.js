import React from 'react'

import { Button,Accordion,TextInput,Card } from 'glory-components'

const App = () => {
  return (
    <div style={{width:'100vw',height:'100vh', backgroundColor:'#100f17'}}>
      <Card width='300px' height='300px' />
      <TextInput placeholder='alooo' width='150px' height='30px' />
      <Accordion />
      <Button />
    </div>
  )
}

export default App
