'use client'
import React, { useState } from 'react';
import { Box} from '@mui/material';
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import UsersTab from './users-tab';
import ProjectsTab from './projects-tab';
import ReportTemplatesTab from './report-templates-tab';
import LabelsTab from './labels-tab';

function Definition() {

    const [value, setValue] = useState('1');

    const handleChange = (newValue:any) => {
    setValue(newValue);
    };

    return (
        <>
        <Box sx={{ width: "100%" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList onChange={handleChange}>
               <Tab label="Kullanıcılar" value={'1'} />
               <Tab label="Tanımlar" value={'2'}/>
               <Tab label="Projeler" value={'3'}/>
               <Tab label="Rapor Şablonları" value={'4'}/>
               <Tab label="Etiketler" value={'5'}/>
              </TabList>
            </Box>

            <LabelsTab value={value}/>
            <UsersTab value={value}/>
            <ProjectsTab value={value}/>
            <ReportTemplatesTab value={value}/>
          </TabContext>
        </Box>
        </>
    );
}

export default Definition;