import React from "react";

const AppContext = React.createContext<any>({
    'tasklists': [],
    'search': '',
    'mobileOpen': false
});

export default AppContext;