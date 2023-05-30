import React from "react";

const AppContext = React.createContext<any>({
    'tasklists': [],
    'search': ''
});

export default AppContext;