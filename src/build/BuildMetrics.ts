import * as fs from "fs";
import * as path from "path";
import { IProps } from "../component/graph/line-chart";
import { ProjectMetricsData, ProjectAllMetrics } from "../schema/ProjectMetrics";
import groupBy from "../utility/GroupBy";

var metricsDirectory = "metrics/project/";

const ReadDirectory = (directory: string): ProjectAllMetrics => {
    const allMetrics: ProjectAllMetrics = {
        datas: []
    };
    const files = fs.readdirSync(directory);
    if (files === undefined || files.length === 0)
        throw new Error("Directory Not Found. --> " + directory);

    // files is string[] but, foreach item is file index...
    for (const fileIndex in files) {
        const filePath = path.join(metricsDirectory, files[fileIndex]);
        if (filePath.indexOf(".json") === -1)
            continue;
        const file = fs.readFileSync(filePath);
        const datas = JSON.parse(file.toString()) as ProjectAllMetrics;
        for (const data of datas.datas) {
            allMetrics.datas.push(data);
        }
    }
    return allMetrics;
};
const WriteGroupedMetrics = (allMetrics: ProjectAllMetrics) => {
    const graphGroupedMetrics = groupBy(allMetrics.datas, m => m.graphGroup)
    for (const graphKey in graphGroupedMetrics) {
        const renderDataSet: IProps = {
            title: graphKey,
            valueSet: [],
            labels: [],
        };
        const graphMetrics = graphGroupedMetrics[graphKey];
        renderDataSet.labels = Array.from(new Set(graphMetrics.map(m => m.createdAt.toString())));
        const graphElementGroupedMetrics = groupBy(graphMetrics, m => m.valueGroup);
        for (const valueKey in graphElementGroupedMetrics) {
            const valueGroup = graphElementGroupedMetrics[valueKey];
            renderDataSet.valueSet.push({
                label: valueKey,
                values: valueGroup.map(m => m.value),
            });
        }
        fs.writeFileSync(`src/data/metrics/${graphKey}.json`, JSON.stringify(renderDataSet));
    }
};
const allMetrics = ReadDirectory(metricsDirectory);
WriteGroupedMetrics(allMetrics);
