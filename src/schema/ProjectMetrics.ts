export interface ProjectMetricsData {
    graphGroup: string;
    valueGroup: string;
    value: number;
    createdAt: Date;
}

export interface ProjectAllMetrics {
    datas: ProjectMetricsData[];
}