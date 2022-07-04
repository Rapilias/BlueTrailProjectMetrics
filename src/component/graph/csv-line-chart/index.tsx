import { faker } from '@faker-js/faker';
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

export interface IProps {
    title: string;
    values: number[];
    labels: string[];
}

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
const CsvLineChart = (props: IProps) => {
    // const { values, labels, title } = props;
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const data = {
        labels,
        datasets: [
            {
                pointHitRadius: 5,
                label: 'Dataset 1',
                data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                color: 'rgb(224,224,224)',
            },
            {
                pointHitRadius: 5,
                label: 'Dataset 2',
                data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                color: 'rgb(224,224,224)',
            },
        ],
    };


    return <Line options={options} data={data} />
}

export default CsvLineChart;