import React from 'react'
import Header from './Components/Header/Header'
import Presentation from './Components/Presentation/Presentation'
import Uslugi from './Components/Uslugs/Uslugi'
import Desc from './Components/Descript/Desc'
import Adventages from './Components/Adventages/Adventages'
import Ponti from './Components/Ponti/Ponti'
import Mission from './Components/Mission/Mission'
import StartItems from './Components/Startitems/StartItems'
import Items from './Components/Item/Items'
import Messege from './Components/Messege/Messege'
import FullMenu from './Components/FullMenu/FullMenu'
import Visit from './Components/Visit/Visit'

const App = () => {
  return (
    <div>
      <Header/>
      <Presentation/>
      <Uslugi/>
      <Desc/>
      <Adventages/>
      <Ponti/>
      <Mission/>
      <StartItems/>
      <Items/>
      <Messege/>
      <FullMenu/>
      <Visit/>
    </div>
  )
}

export default App