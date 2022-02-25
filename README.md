# senior-fe-challenge
Test Challenge: Tabulator Component

## Install
`npm i senior-fe-challenge`

## Controlled/Uncontrolled
The component gives the possibility to function as controlled or uncontrolled.
### Controlled
```
  import { Tab, TabPane } from 'senior-fe-challenge'
  
  function App() {
  
    const [activeTab, setactiveTab] = useState('First Pane');
    
    const onActiveChange = (e: any) => {
        setactiveTab(e);
    }
    
    return(
      <Tab active={activeTab} onActiveChange={onActiveChange}> 
        <TabPane title="First Pane">
          First Pane Body
        </TabPane>
        <TabPane title="Second Pane">
          Second Pane Body
        </TabPane>
      </Tab>
    );
    
 }
```
### Unontrolled
```
  import { Tab, TabPane } from 'senior-fe-challenge'
  
  function App() {
    return(
      <Tab initialActive={'First Pane'} > 
        <TabPane title="First Pane">
          First Pane Body
        </TabPane>
        <TabPane title="Second Pane">
          Second Pane Body
        </TabPane>
      </Tab>
    );
    
 }
```
Passing `active` and `initialActive` props at the same time will be a type error.

## Props
### TabPaneProps
Name | Mandatory | Type | Default value | Description 
--- | --- | --- | --- | --- |
title |true| string |  | Panel's title


### TabProps
Name | Mandatory | Type | Default value | Description 
--- | --- | --- | --- | --- |
children |true| React.ReactElement<TabPaneProps>[] |  | Panels
initialActive |false| string |  | When uncontrolled, first tab to render (title)
active |false| string |  | When controlled, current tab(title) selected 
onActiveChange | false | (e: any) => void |  | function called when component controlled that return the title of selected Tab
