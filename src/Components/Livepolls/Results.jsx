// import { Doughnut } from 'react-chartjs-2'
import React, { PureComponent } from 'react'
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';


const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};



export default function Results(props){

  let labels = [];
  let dataSet = [];
  let totalVotes = 0;
  let bg = [];

  props.roomData.pollOptions.forEach((option, index) => {
    labels = [...labels, option.option]
    dataSet = [...dataSet, option.votes]
    totalVotes += option.votes
  })

  if (totalVotes > 0){
    dataSet.forEach((data, i) => {
      dataSet[i] = (data / totalVotes) * 100
  })

  bg = [
      "#ff5758",
      "#10b7ba",
      "#ffdd0d",
      "#b24eb7",
      "#1e766f",
      "#345b6d",
      "#4d2554",
      "#ab6274",
      "#d05b49",
      "#d56b44",
    ]
  }
  
  else{
    labels = ["No one has voted"]
    dataSet = [1]
    bg = ["#323232"]
  } 

const data = {
  labels: labels,
  datasets: [
    {
      label: 'title',
      backgroundColor: bg,
      borderColor: "#d3d7e5",
      data: dataSet,
      offset: true,
      borderWidth: 2,
      weight: 1,
    },
  ],
};

// state = {
//   activeIndex: 0,
// };

// onPieEnter = (_, index) => {
//   this.setState({
//     activeIndex: index,
//   });


  return (
    <div>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          // activeIndex={this.state.activeIndex}
          // activeShape={renderActiveShape}
          cx={200}
          cy={200}
          labelLine={false}
          outerRadius={80}
          // bg={bg}
          dataKey="value"
          onMouseEnter={this.onPieEnter}
        >
        </Pie>
      </PieChart>
      <div class="text-3xl font-bold text-center text-white">{props.roomData.title}</div>
    </div>
  );
  
}



// function Results(props) {

//   let labels = [];
//   let dataSet = [];
//   let totalVotes = 0;
//   let bg = [];

//   props.roomData.pollOptions.forEach((option, index) => {
//     labels = [...labels, option.option]
//     dataSet = [...dataSet, option.votes]
//     totalVotes += option.votes
//   })

//   if (totalVotes > 0){
//     dataSet.forEach((data, i) => {
//       dataSet[i] = (data / totalVotes) * 100
//     })
//     bg = [
//       "#ff5758",
//       "#10b7ba",
//       "#ffdd0d",
//       "#b24eb7",
//       "#1e766f",
//       "#345b6d",
//       "#4d2554",
//       "#ab6274",
//       "#d05b49",
//       "#d56b44",
//     ]
//   }
//   else{
//     labels = ["No one has voted"]
//     dataSet = [1]
//     bg = ["#323232"]
//   } 

// const data = {
//   labels: labels,
//   datasets: [
//     {
//       label: 'title',
//       backgroundColor: bg,
//       borderColor: "#d3d7e5",
//       data: dataSet,
//       offset: true,
//       borderWidth: 2,
//       weight: 1,
//     },
//   ],
// };

// console.log(data)

//   return (
//     <div class="bg-gray-900 pt-[1rem] w-full flex items-center flex-col gap-[2rem] justify-center">

//         <div>
//             <Doughnut data={data} />
//         </div>
//     </div>
//   )
// }
// }

