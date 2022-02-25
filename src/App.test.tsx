import React from 'react';
import { render, screen,fireEvent } from '@testing-library/react'

import App from './App';
import * as Tab from './components/Tab';

describe('Tabs should render and change selected by clicking', () => {
  it('First to render should be First Pane',()=>{
    render(<App />);
    const Element =screen.getByTestId('TabPaneFirst Pane');
    expect(Element).toBeTruthy();
  })
  it('Should change from Tab1 to Tab3 when clicked',()=>{
    render(<App />);
    const Element = screen.getByTestId('TabThird Pane');
    const Element_1 = screen.getByTestId('TabPaneFirst Pane');
    expect(Element_1).toBeTruthy();
    fireEvent.click(Element)
    
    const Element_3 = screen.getByTestId('TabPaneThird Pane');
    expect(Element_3).toBeTruthy();
  })
  it('Should change from Tab1 to Tab3 when clicked',()=>{
    render(<App />);
    const Element = screen.getByTestId('TabThird Pane');
    const Element_1 = screen.getByTestId('TabPaneFirst Pane');
    expect(Element_1).toBeTruthy();
    fireEvent.click(Element)
    
    const Element_3 = screen.getByTestId('TabPaneThird Pane');
    expect(Element_3).toBeTruthy();
  })
      it('Controlled Tab should change app activ tab state',()=>{

   render(<App />);
    const Element = screen.getByTestId('TabThird Pane');
    fireEvent.click(Element)
    
    const Element_3 = screen.getByTestId('currentTab');
    expect(Element_3).toHaveTextContent('Third Pane');
  })
      it('App should be able to change selected tab',()=>{

   render(<App />);
    const Element = screen.getByTestId('changeTab');
    fireEvent.click(Element)
    
    const Element_3 = screen.getByTestId('currentTab');
    expect(Element_3).toHaveTextContent('Fourth Pane');
  })
    it('Should not render if passing active and initialActive',()=>{
    expect(()=>render(<Tab.Tab initialActive ={'Tab1'} active={"Tab1"}>
    <Tab.TabPane>
    teste
    </Tab.TabPane>
    <Tab.TabPane>
    teste
    </Tab.TabPane>
    </Tab.Tab>)).toThrow(`Set "activeTab" and "onActiveChange" for a Controller component or "initialActive" for a uncontrolled component BUT NOT BOTH`)

  })
});
