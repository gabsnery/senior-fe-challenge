import React from 'react';
interface TabPaneProps {
    title: string;
}
export declare type TabProps = {
    children: React.ReactElement<TabPaneProps>[];
    initialActive?: string;
    active?: string;
    onActiveChange?: (e: string) => void;
};
export declare function Tab(props: TabProps): JSX.Element;
export declare function Tab2(props: TabProps): JSX.Element;
export declare function TabPane(props: any): JSX.Element;
declare const func: {
    Tab: typeof Tab;
    TabPane: typeof TabPane;
    Tab2: typeof Tab2;
};
export default func;
