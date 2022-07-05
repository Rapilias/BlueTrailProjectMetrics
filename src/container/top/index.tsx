import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import LineChart from "../../component/graph/csv-line-chart";
const ResponsiveGridLayout = WidthProvider(Responsive);
import fileCount from "../../data/metrics/LineCount.json";
import lineCount from "../../data/metrics/LineCount.json";

class Top extends React.Component {
    render() {
        return (
            <ResponsiveGridLayout
                className="layout"
                breakpoints={{ lg: 1200, md: 800, sm: 400, }}
                cols={{ lg: 3, md: 2, sm: 1, }}
                rowHeight={300}
                maxRows={3}
                isDraggable={true}
                autoSize={false}
            >
                <div key="a">
                    <LineChart title={fileCount.title} labels={fileCount.labels} valueSet={fileCount.valueSet} />
                </div>
                <div key="b">
                    <LineChart title={lineCount.title} labels={lineCount.labels} valueSet={lineCount.valueSet} />
                </div>
            </ResponsiveGridLayout>
        );
    }
}

export default Top;