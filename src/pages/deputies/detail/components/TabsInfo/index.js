import React from 'react';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import EditIcon from '@material-ui/icons/Edit';

const TabsInfo = ({ handleChange, currentTab }) => (
    <Paper style={{ width: '100%', marginBottom: '20px' }}>
        <Tabs
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            value={currentTab}
        >
            <Tab icon={<AttachMoneyIcon />} label="DESPESAS" value="expenses" />
            <Tab icon={<EditIcon />} label="PROJETOS" value="projects" />
        </Tabs>
    </Paper>
);

export default TabsInfo;
