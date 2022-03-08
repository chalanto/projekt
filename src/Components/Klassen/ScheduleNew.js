import React from "react";
//import { Link } from "react-router-dom";


//Fullcalendar and Related Plugins
import FullCalendar, { startOfDay } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"; // needed
import listPlugin from '@fullcalendar/list'; //For List View
class ScheduleNew extends React.Component {

  render() {
    return (
<div className="maincontainer">

  
<head>	 
   <meta name="Content-Language" content="en" />
	 <meta charset="utf-8" /> 
	 <title>Home</title>
</head>

<body>
<div id="menu">
  <a href="Home">Home</a><br />
	<a href="Participants">Participants</a><br />
  <li>Schedule</li>
  <a href="Parallel">Parallel Session</a><br />
	<a href="Invited">Invited Talks</a><br />
	<a href="Contributed">Contributed Talks</a><br />
	<a href="Poster">Poster Session</a><br />
  <a href="Presentation">Presentation of Talks</a><br />
	
  </div>

  <div className="container mb-5 mt-5">
<FullCalendar
        plugins={[ dayGridPlugin, interactionPlugin, listPlugin ]}
        initialView="listWeek" // initialView="dayGridMonth" 
        headerToolbar={{
          left: 'prev,next today', // other Buttons: prevYear,nextYear
          center: 'title',
          right: 'dayGridMonth,dayGridWeek,dayGridDay,listWeek' //buttons on the right-side, can be deleted
        }}
        events={[
     

          { title: 'New Event "all day"', date: '2021-01-01' }, //all-day ivent

          { title: 'V. M. Manuilov - Bill Paschke (1946-2019)', start: '2020-12-05 08:00', end: '2020-12-05 08:10'  },
          { title: 'Qingxiang Xu - On the orthogonal complementarity of closed submodules of Hilbert C∗-modules', start: '2020-12-05 08:10', end: '2020-12-05 08:40'  },
          { title: 'R. B. V. Bhat - Bures distance for completely positive maps', start: '2020-12-05 08:45', end: '2020-12-05 09:15'  },
          { title: 'M. S. Moslehian - A closer look at the B-spline interpolation problem in the setting of Hilbert C∗-modules', start: '2020-12-05 09:20', end: '2020-12-05 09:50'  },
          { title: 'K. Sharifi - Bounded and unbounded Fredholm operators on Hilbert modules', start: '2020-12-05 09:55', end: '2020-12-05 10:25'  },
          { title: 'M. Joiţa - φ-maps on Hilbert C∗-modules, φ-module domains and ternary domains', start: '2020-12-05 11:05', end: '2020-12-05 11:35'  },
          { title: 'K. Schmüdgen - Representations of ∗-Algebras on Hilbert C∗-modules', start: '2020-12-05 11:40', end: '2020-12-05 12:10'  },
          { title: 'S. Ivković - Semi-Fredholm theory on Hilbert C∗-modules', start: '2020-12-05 12:15', end: '2020-12-05 12:45'  },
          { title: 'B. Guljaš - Hilbert C∗-modules with complementing property', start: '2020-12-05 12:50', end: '2020-12-05 13:20'  },

          { title: 'M. Skeide - An Open Problem — or Two ...', start: '2020-12-06 10:00', end: '2020-12-06 10:30'  },
          { title: 'L. Arambašić - Strong Birkhoff–James orthogonality in Hilbert C∗-modules', start: '2020-12-06 10:35', end: '2020-12-06 11:05'  },
          { title: 'I. Gogić - Elementary operators on Hilbert C∗-modules', start: '2020-12-06 10:00', end: '2020-12-06 10:30'  },
          { title: 'D. Ilišević - 	Pre-Hilbert modules, normed modules and the parallelogram law', start: '2020-12-06 11:45', end: '2020-12-06 12:15'  },
          { title: 'J. Kaad - Subproduct systems, Gysin sequences and SU(2)-symmetries', start: '2020-12-06 12:20', end: '2020-12-06 12:50'  },
          { title: 'F. Luef - Gabor duality theory for Morita equivalent C∗-algebras', start: '2020-12-06 12:55', end: '2020-12-06 13:25'  },
          { title: 'E. G. Katsoulis - Co-universal C*-algebras for product systems, I', start: '2020-12-06 13:30', end: '2020-12-06 14:00'  },
          { title: 'E. Kakariadis - Co-universal C*-algebras for product systems, II', start: '2020-12-06 14:05', end: '2020-12-06 14:35'  },
   
        ]}
      />
</div>


</body>
<div class="footer">
<div id="button"></div>
<div id="container">
<div id="cont">
<div class="footer_center">
<h3><a href="http://htwk-leipzig.de" id="logo"></a>
<a href="http://www.msu.ru/en/" id="logo2"></a>
<a href="http://mathcenter.ru/en" id="logo3"></a>
E-mail: hcm.workshop.2020@gmail.com 
&nbsp;  &nbsp;  &nbsp;  &nbsp; Frank, Michael: michael.frank@htwk-leipzig.de
&nbsp;  &nbsp;  &nbsp;  &nbsp; Manuilov, Vladimir Markovich: manuilov@mech.math.msu.su
&nbsp;  &nbsp;  &nbsp;  &nbsp; Troitskii, Evgenij Vadimovich: troitsky@mech.math.msu.su
</h3>
</div>
</div>
</div>
</div>


</div>


)
};
}

export default ScheduleNew;