"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabPane = exports.Tab2 = exports.Tab = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
function Tab(props) {
    const [SelectedTab, setSelectedTab] = (0, react_1.useState)('');
    const { children, initialActive, active, onActiveChange } = props;
    (0, react_1.useEffect)(() => {
        firstRender();
    }, []);
    const firstRender = () => {
        if (active && initialActive)
            throw new TypeError('Set "activeTab" and "onActiveChange" for a Controller component or "initialActive" for a uncontrolled component BUT NOT BOTH');
        else if (initialActive) {
            setSelectedTab(initialActive);
        }
        else if (active && onActiveChange) {
            setSelectedTab(active);
        }
    };
    (0, react_1.useEffect)(() => {
        if (active) {
            setSelectedTab(active);
        }
    }, [active]);
    (0, react_1.useEffect)(() => {
    }, [SelectedTab]);
    const handlePanelClick = (v) => {
        if (onActiveChange) {
            onActiveChange(v);
        }
        else {
            setSelectedTab(v);
        }
    };
    return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ style: {
                    color: 'red', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gridAutoColumns: 'auto', cursor: 'pointer', gridAutoRows: 'column'
                } }, { children: children.map((item, index) => ((0, jsx_runtime_1.jsx)("div", Object.assign({ "data-testid": `Tab${item.props.title}`, onClick: () => { handlePanelClick(item.props.title); } }, { children: item['props']['title'] }), `key${index}`))) }), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ style: { borderTop: '1px solid grey' }, "data-testid": `TabPane${SelectedTab}` }, { children: children.find(x => x.props.title === SelectedTab) }), void 0)] }, void 0);
}
exports.Tab = Tab;
function Tab2(props) {
    const [SelectedTab, setSelectedTab] = (0, react_1.useState)('');
    const { children, initialActive, active, onActiveChange } = props;
    (0, react_1.useEffect)(() => {
        firstRender();
    }, []);
    const firstRender = () => {
        if (active && initialActive)
            throw new TypeError('Set "activeTab" and "onActiveChange" for a Controller component or "initialActive" for a uncontrolled component BUT NOT BOTH');
        else if (initialActive) {
            setSelectedTab(initialActive);
        }
        else if (active && onActiveChange) {
            setSelectedTab(active);
        }
    };
    (0, react_1.useEffect)(() => {
        if (active)
            setSelectedTab(active);
    }, [active]);
    const handlePanelClick = (v) => {
        if (onActiveChange) {
            onActiveChange(v);
        }
        else {
            setSelectedTab(v);
        }
    };
    return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ style: {
                    color: 'red', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gridAutoColumns: 'auto', cursor: 'pointer', gridAutoRows: 'column'
                } }, { children: children.map((item, index) => ((0, jsx_runtime_1.jsx)("div", Object.assign({ "data-testid": `Tab${item.props.title}`, onClick: () => { console.log('item.props.value', item.props.title); handlePanelClick(item.props.title); } }, { children: item['props']['title'] }), `key${index}`))) }), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ style: { borderTop: '1px solid grey' } }, { children: children.map((item, index) => {
                    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ hidden: SelectedTab !== item.props.title }, { children: item }), `Panelkey${index}`));
                }) }), void 0)] }, void 0);
}
exports.Tab2 = Tab2;
function TabPane(props) {
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: props.children }, void 0);
}
exports.TabPane = TabPane;
const func = { Tab, TabPane, Tab2 };
exports.default = func;
