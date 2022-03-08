//React-Schedule with google-API, not needed anymore

import React from "react";

import {Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda} from "@syncfusion/ej2-react-schedule";



class Schedule extends React.Component {
    public render () {


        return <ScheduleComponent currentView="WorkWeek">
            <Inject services = {[Day, Week, WorkWeek, Month, Agenda]} />

        </ScheduleComponent>
    }

}


export default Schedule;

