import { useState } from "react";
import { Helmet } from "react-helmet-async";
import LinePlot from "src/components/Charts/LinePlot";
import { AppView } from "src/sections/overview/view";
import * as d3 from 'd3'
import { ScatterPlot } from "src/components/Charts/ScatterPlot";
// import scatterData from '../components/Charts/cars-2.csv'

export default function Reports (){
    const [lineData, setLineData] = useState(() => d3.ticks(-2, 2, 200).map(Math.sin));
    const [scatterData, seSscatterData] = useState(
        d3.range(100).map(_ => [Math.random(), Math.random()])
      );
    function onMouseMove(event) {
      const [x, y] = d3.pointer(event);
      setLineData(lineData.slice(-200).concat(Math.atan2(x, y)));
    }
  
    return <>
    <Helmet >
      <title> Reports | 8 bit Wizards </title>
    </Helmet>

    <div  > 
<ScatterPlot  data={scatterData} />
        {/* <LinePlot data={lineData} /> */}
    </div>
  </>
}
