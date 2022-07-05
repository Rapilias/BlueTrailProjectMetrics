import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ChartOptions,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import merge from 'ts-deepmerge';

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
    }
]
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
ChartJS.defaults.color = 'rgb(224,224,224)';

const options: ChartOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom' as const,
        },
        title: {
            color: 'rgb(224,224,224)',
            display: true,
            text: 'LineCount',

        },
    },
};
const LineChart = (props: IProps) => {
    const { title, labels, valueSet } = props;
    const data = {
        labels,
        datasets: valueSet.map((m, index) => {
            return Object.assign({
                pointHitRadius: 5,
                label: m.label,
                data: m.values.map(m => Math.floor(m)),
                color: 'rgb(224,224,224)',
            },
                colorPattern[index]);
        })
    };
    const additionalOption: ChartOptions = { plugins: { title: { text: title } } };
    const overwriteOption = merge(options, additionalOption) as ChartOptions;

    return <Line options={overwriteOption} data={data} />
}

export default LineChart;