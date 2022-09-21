import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Filler,
    Tooltip,
    Legend,
    ChartOptions,
    TimeScale,
    TimeSeriesScale,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import merge from 'ts-deepmerge';
import 'chartjs-adapter-moment';
import styled from "styled-components";

export interface IValueSet {
    label: string;
    values: number[];
}
export interface IProps {
    title: string;
    valueSet: IValueSet[];
    labels: string[];
}

const colorPattern = [
    {
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
        borderColor: 'rgb(88, 235, 92)',
        backgroundColor: 'rgba(88, 235, 92, 0.5)',
    },
    {
        borderColor: 'rgb(192, 192, 32)',
        backgroundColor: 'rgba(192, 192, 32, 0.5)',
    }
]
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    TimeScale,
    TimeSeriesScale,
    Title,
    Tooltip,
    Legend,
    Filler,
);
ChartJS.defaults.color = 'rgb(224,224,224)';

const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'bottom' as const,
        },
        title: {
            color: 'rgb(224,224,224)',
            display: true,
        },
    },
    scales: {
        x: {
            type: "time",
            time: {
                unit: 'day',
                minUnit: 'day',
                stepSize: 1,
                displayFormats: {
                    'hour': "MM/DD HH",
                    'day': "MM/DD",
                }
            },
        }
    }
};
const LineChartComponent = (props: IProps) => {
    const { title, labels, valueSet } = props;
    const data = {
        labels,
        datasets: valueSet.map((m, index) => {
            return Object.assign({
                pointHitRadius: 5,
                fill: true,
                label: m.label,
                data: m.values,
                color: 'rgb(224,224,224)',
            },
                colorPattern[index]);
        })
    };
    const additionalOption: ChartOptions<"line"> = { plugins: { title: { text: title } } };
    const overwriteOption = merge(options, additionalOption) as ChartOptions;

    return <Line options={overwriteOption} data={data} />
}


const LineChart = styled(LineChartComponent)`
  height: 30%;
`;


export default LineChart;