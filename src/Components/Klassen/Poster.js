import React from "react";
//import { Link } from "react-router-dom";
//import FileUpload from "../FileUpload";


import "bootstrap/dist/css/bootstrap.min.css"; 
import "../CSS/style.css";
const Poster = () => (
    <div className="Poster">
<head>
	 <meta name="Content-Language" content="en" />
	 <meta charset="utf-8" /> 
	 <title>Poster</title>
</head>


<body>
<a href="http://htwk-leipzig.de" id="logo"></a>
<a href="http://www.msu.ru/en/" id="logo2"></a>
<a href="http://mathcenter.ru/en" id="logo3"></a>

<h3 align="center"> 
International Workshop</h3> 
<h2 align="center"> Hilbert C*-Modules Online Weekend</h2> 
<h3 align="center"> in memory of William L. Paschke (1946-2019) </h3>
<h4 align="center"> December 5-6, 2020 </h4> 
<h4 align="center"> organized by: Michael Frank, Vladimir Manuilov, Evgenij Troitsky</h4>

<div id="menu">
	
  <a href="Home">Home</a><br />
	<a href="Participants">Participants</a><br />
  <a href="ScheduleNew">Schedule</a><br />
  <a href="Parallel">Parallel Session</a><br />
	<a href="Invited">Invited Talks</a><br />
	<a href="Contributed">Contributed Talks</a><br />    
  <li>Poster Session</li>
  <a href="Presentation">Presentation of Talks</a><br />
</div>

<div id="content">
    <b>Poster Session</b>
<table>
  <tr>
    <th>#</th>
    <th>Name</th>
    <th>Institution</th>
    <th>Talks</th>
    <th>Poster</th>
  </tr>
  <tr>
    <th>1</th>
    <td>V. M. Manuilov</td>
    <td>Moscow State University</td>
    <td>Bill Paschke (1946-2019)</td>
    <td><a href="" target="_blank"><u>Poster</u></a></td> 
  </tr>
  <tr>
    <th>2</th>
    <td>Qingxiang Xu</td>
    <td>Shanghai Normal University</td>
    <td>On the orthogonal complementarity of closed submodules of Hilbert C∗-modules</td>
    <td><a href="" target="_blank"><u>Poster</u></a></td> 
  </tr>

</table>
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

);
export default Poster;