import React, { useState } from 'react';
import './App.css';
import { Tab, TabPane } from './components/Tab'
//import * as Tab from './components/Tab'
function App() {
  const [activeTab, setactiveTab] = useState('Tab1')
  const onActiveChange = (e: any) => {
    setactiveTab(e)
  }


  return (
    <div className="App">
      {/* <Tab initialActive={'oi1'}>
        <TabPane value={'oi'} title="First Pane">
          First Pane Body
        </TabPane>
        <TabPane value={'oi1'}  title="Second Pane">
          Second Pane Body
        </TabPane>
        <TabPane value={'oi2'}  title="terceira Pane">
          Second Pane Body
        </TabPane>
        <TabPane value={'oi3'} title="quarta Pane">
          Second Pane Body
        </TabPane>
        <TabPane value={'oi4'} title="quinta Pane">
          Second Pane Body
        </TabPane>
        <TabPane value={'oi5'} title="sexta Pane">
          Second Pane Body
        </TabPane>
        <TabPane value={'oi6'} title="setma Pane">
          Second Pane Body
        </TabPane>
        <TabPane value={'oi7'} title="Second Pane">
          Second Pane Body
          Second Pane Body
          Second Pane Body
          Second Pane Body
          Second Pane Body
          Second Pane Body
          Second Pane Body
        </TabPane>
      </Tab> */}
      <button hidden data-testid={'changeTab'} onClick={() => setactiveTab('Tab4')}>changeTab to "Tab4"</button>
      <span data-testid={'currentTab'} hidden>{activeTab}</span>
      <Tab active={activeTab} onActiveChange={onActiveChange}> 
      {/* <Tab initialActive="Tab1">*/}
        <TabPane value={'Tab1'} title="First Pane">
          Tab1Tab1Tab Tab1Tab1Tab1Tab1Tab1Tab1Tab1Ta b1Tab1Tab1Tab1Tab1Tab1Tab1Tab1Tab1Ta b1Tab1Tab1Tab1Tab1Tab1Tab1Tab1Tab1Tab1Tab1 Tab1Tab1Tab1Tab1Tab1Tab1Tab1 Tab1Tab1Tab1Tab1Tab1Tab1Tab1Ta b1Tab1v
        </TabPane>
        <TabPane value={'Tab2'} title="Second Pane">
          Tab2Tab2Tab2Tab2Tab2Tab2Tab2Ta b2Tab2Tab2Tab2Tab2Tab2Tab2Tab2Tab2Ta b2Tab2Tab2Tab2Tab2Tab2Tab2Tab2Tab2Tab2Tab2 Tab2Tab2Tab2Tab2Tab2Tab2Tab2 Tab2Tab2Tab2Tab2Tab2Tab2Tab2Ta b2Tab2v
        </TabPane>
        <TabPane value={'Tab3'} title="Third Pane">
          Tab3Tab3Tab3Tab3Tab3Tab3Tab3Ta b3Tab3Tab3Tab3Tab3Tab3Tab3Tab3Tab3Ta b3Tab3Tab3Tab3Tab3Tab3Tab3Tab3Tab3Tab3Tab3 Tab3Tab3Tab3Tab3Tab3Tab3Tab3 Tab3Tab3Tab3Tab3Tab3Tab3Tab3Ta b3Tab3v
        </TabPane>
        <TabPane value={'Tab4'} title="Fourth Pane">
          Tab4Tab4Tab4Tab4Tab4Tab4Tab4Ta b4Tab4Tab4Tab4Tab4Tab4Tab4Tab4Tab4Ta b4Tab4Tab4Tab4Tab4Tab4Tab4Tab4Tab4Tab4Tab4 Tab4Tab4Tab4Tab4Tab4Tab4Tab4 Tab4Tab4Tab4Tab4Tab4Tab4Tab4Ta b4Tab4v
        </TabPane>
        <TabPane value={'Tab5'} title="Fifth Pane">
          Tab5Tab5Tab5Tab5Tab5Tab5Tab5Ta b5Tab5Tab5Tab5Tab5Tab5Tab5Tab5Tab5Ta b5Tab5Tab5Tab5Tab5Tab5Tab5Tab5Tab5Tab5Tab5 Tab5Tab5Tab5Tab5Tab5Tab5Tab5 Tab5Tab5Tab5Tab5Tab5Tab5Tab5Ta b5Tab5v
        </TabPane>
        <TabPane value={'Tab6'} title="Sixth Pane">
          Tab6Tab6Tab6Tab6Tab6Tab6Tab6Ta b6Tab6Tab6Tab6Tab6Tab6Tab6Tab6Tab6Ta b6Tab6Tab6Tab6Tab6Tab6Tab6Tab6Tab6Tab6Tab6 Tab6Tab6Tab6Tab6Tab6Tab6Tab6 Tab6Tab6Tab6Tab6Tab6Tab6Tab6Ta b6Tab6v
        </TabPane>
      </Tab>
    </div>
  );
}

export default App;
