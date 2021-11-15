import React, { useMemo, useState } from 'react';
import { FolderOutlined, FolderOpenOutlined, RightOutlined } from '@ant-design/icons'
// import AppSidebar from "./Sidebar";

function AppSidebar( props ) {

    let arr = Object.keys(props.data).map(item => {
        return props.data[item].status;
    }) || [];
    const [shouldExpand, setShouldExpand] = useState(arr);

    if(!Object.keys(props.data).length) {
        return null
    }

    let count = props.count + 1;
    return (
        <div>
            {
                Object.keys(props.data).map((item, index) => {
                    if(item == "status") {
                        return null
                    }
                    if(item == "operations"){
                        return <AppSidebarArray operations={props.data[item]} count={count}/>;
                    }
                    return (<div key={index}>
                                <div onClick={()=> {
                                    if(count == 0) {
                                        let pathName = window.location.pathname;
                                        if(!pathName.includes(item)) {
                                            let str = "/api/v1/" + item;
                                            window.location.href = str;
                                        }
                                    }
                                    let arr = JSON.parse(JSON.stringify(shouldExpand));
                                    arr[index] = !shouldExpand[index];
                                    setShouldExpand(arr);
                                }} style={{ color: "#1890ff", marginLeft: 20*count}}>
                                    {
                                        shouldExpand[index] ? <FolderOpenOutlined /> : <FolderOutlined />
                                    }
                                    <span style={{fontSize: 13, marginLeft: 10, cursor: "pointer" }}>
                                        {item}
                                    </span>
                                </div>
                                {
                                    shouldExpand[index] ? <AppSidebar data={props.data[item]} count={count} /> : null
                                }
                        </div>
                    )
                })
            }
        </div>
    );
}

function AppSidebarArray(props) {
    return <div style={{ marginLeft: props.count * 20 }}>
        {
            props.operations.map((item, index) => {
                return (
                    <div style={{ display: "flex" }} key={index} onClick={() => {
                        let location = window.location.href;
                        location = location.split("#")[0];
                        window.location.href = location + "#" + item.operationId;
                    }}>
                        <div style={{ marginRight: 6 }}><RightOutlined style={{ fontSize: 12}} /></div>
                        <div style={{ fontSize: 12, cursor: "pointer" }} > <u>{item.summary}</u> </div>
                    </div>
                );
            })
        }
    </div>
}

export default AppSidebar;