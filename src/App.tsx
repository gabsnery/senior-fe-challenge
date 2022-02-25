import React, { useState } from 'react';
import './App.css';
import { Tab, TabPane } from './components/Tab'
//import * as Tab from './components/Tab'
function App() {
  const [activeTab, setactiveTab] = useState('First Pane')
  const onActiveChange = (e: string) => {
    setactiveTab(e)
  }


  return (
    <div className="App">
      <button hidden data-testid={'changeTab'} onClick={() => setactiveTab('Fourth Pane')}>changeTab to "Tab4"</button>
      <span data-testid={'currentTab'} hidden>{activeTab}</span>
      <Tab active={activeTab} onActiveChange={onActiveChange}> 
      {/* <Tab initialActive="Tab1">*/}
        <TabPane  title="First Pane">
          Tab1Tab1Tab Tab1Tab1Tab1Tab1Tab1Tab1Tab1Ta b1Tab1Tab1Tab1Tab1Tab1Tab1Tab1Tab1Ta b1Tab1Tab1Tab1Tab1Tab1Tab1Tab1Tab1Tab1Tab1 Tab1Tab1Tab1Tab1Tab1Tab1Tab1 Tab1Tab1Tab1Tab1Tab1Tab1Tab1Ta b1Tab1v
        </TabPane>
        <TabPane title="Second Pane">
          Tab2Tab2Tab2Tab2Tab2Tab2Tab2Ta b2Tab2Tab2Tab2Tab2Tab2Tab2Tab2Tab2Ta b2Tab2Tab2Tab2Tab2Tab2Tab2Tab2Tab2Tab2Tab2 Tab2Tab2Tab2Tab2Tab2Tab2Tab2 Tab2Tab2Tab2Tab2Tab2Tab2Tab2Ta b2Tab2v
        </TabPane>
        <TabPane title="Third Pane">
          Tab3Tab3Tab3Tab3Tab3Tab3Tab3Ta b3Tab3Tab3Tab3Tab3Tab3Tab3Tab3Tab3Ta b3Tab3Tab3Tab3Tab3Tab3Tab3Tab3Tab3Tab3Tab3 Tab3Tab3Tab3Tab3Tab3Tab3Tab3 Tab3Tab3Tab3Tab3Tab3Tab3Tab3Ta b3Tab3v
        </TabPane>
        <TabPane title="Fourth Pane">
          Tab4Tab4Tab4Tab4Tab4Tab4Tab4Ta b4Tab4Tab4Tab4Tab4Tab4Tab4Tab4Tab4Ta b4Tab4Tab4Tab4Tab4Tab4Tab4Tab4Tab4Tab4Tab4 Tab4Tab4Tab4Tab4Tab4Tab4Tab4 Tab4Tab4Tab4Tab4Tab4Tab4Tab4Ta b4Tab4v
        </TabPane>
        <TabPane title="Fifth Pane">
          Tab5Tab5Tab5Tab5Tab5Tab5Tab5Ta b5Tab5Tab5Tab5Tab5Tab5Tab5Tab5Tab5Ta b5Tab5Tab5Tab5Tab5Tab5Tab5Tab5Tab5Tab5Tab5 Tab5Tab5Tab5Tab5Tab5Tab5Tab5 Tab5Tab5Tab5Tab5Tab5Tab5Tab5Ta b5Tab5v
        </TabPane>
        <TabPane title="Sixth Pane">
          Tab6Tab6Tab6Tab6Tab6Tab6Tab6Ta b6Tab6Tab6Tab6Tab6Tab6Tab6Tab6Tab6Ta b6Tab6Tab6Tab6Tab6Tab6Tab6Tab6Tab6Tab6Tab6 Tab6Tab6Tab6Tab6Tab6Tab6Tab6 Tab6Tab6Tab6Tab6Tab6Tab6Tab6Ta b6Tab6v
        </TabPane>
      </Tab>
    </div>
  );
}

export default App;
