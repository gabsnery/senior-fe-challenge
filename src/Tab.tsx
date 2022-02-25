import React, { useEffect, useState } from 'react'

interface TabPaneProps {
    title: string;
}
export type TabProps = {
    children: React.ReactElement<TabPaneProps>[],
    initialActive?: string;
    active?: string;
    onActiveChange?: (e: string) => void;
}
export function Tab(props: TabProps): JSX.Element {
    const [SelectedTab, setSelectedTab] = useState('');
    const { children, initialActive, active, onActiveChange } = props;
    useEffect(() => {
        firstRender();
    }, [])
    const firstRender = () => {
        if (active && initialActive)
            throw new TypeError('Set "activeTab" and "onActiveChange" for a Controller component or "initialActive" for a uncontrolled component BUT NOT BOTH');
        else if (initialActive) {
            setSelectedTab(initialActive)
        }
        else if (active && onActiveChange) {
            setSelectedTab(active)
        } 
    }
    useEffect(() => {
        if (active) {
        setSelectedTab(active);
        }
    }, [active])
    const handlePanelClick=(v:any)=>{
        if (onActiveChange) {
            onActiveChange(v);
        }else{
        setSelectedTab(v);
        }
    }
    return <>
        <div style={{
            color: 'red', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gridAutoColumns: 'auto', cursor: 'pointer', gridAutoRows: 'column'
        }}>{children.map((item, index) => (<div  data-testid ={`Tab${item.props.title}`} key={`key${index}`} onClick={() => {handlePanelClick(item.props.title) }}>{item['props']['title']}</div>))}</div>
        <div style={{ borderTop: '1px solid grey' }} data-testid ={`TabPane${SelectedTab}`}>
        {children.find(x=>x.props.title===SelectedTab)}

        </div>
    </>
}

export function Tab2(props: TabProps): JSX.Element {
    const [SelectedTab, setSelectedTab] = useState('');
    const { children, initialActive, active, onActiveChange } = props;
    useEffect(() => {
        firstRender();
    }, [])
    const firstRender = () => {
        if (active && initialActive)
            throw new TypeError('Set "activeTab" and "onActiveChange" for a Controller component or "initialActive" for a uncontrolled component BUT NOT BOTH');
        else if (initialActive) {
            setSelectedTab(initialActive)
        }
        else if (active && onActiveChange) {
            setSelectedTab(active)
        } 
    }
    useEffect(() => {
        if (active) setSelectedTab(active);
    }, [active])
    const handlePanelClick=(v:any)=>{
        if (onActiveChange) {
            onActiveChange(v);
        }else{
        setSelectedTab(v);
        }
    }
    return <>
        <div style={{
            color: 'red', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gridAutoColumns: 'auto', cursor: 'pointer', gridAutoRows: 'column'
        }}>{children.map((item, index) => (<div  data-testid ={`Tab${item.props.title}`} key={`key${index}`} onClick={() => { console.log('item.props.value', item.props.title); handlePanelClick(item.props.title) }}>{item['props']['title']}</div>))}</div>
        <div style={{ borderTop: '1px solid grey' }}>
            {children.map((item, index) => {
                return (<div key={`Panelkey${index}`} hidden={SelectedTab !== item.props.title}>{item}</div>);
            })}
        </div>
    </>
}

export function TabPane(props: any): JSX.Element {
    return <>{props.children}</>
}

const func = { Tab, TabPane ,Tab2}

export default func;