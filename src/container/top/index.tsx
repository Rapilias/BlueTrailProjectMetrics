import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";

import CsvLineChart from "../../component/graph/csv-line-chart";
const ResponsiveGridLayout = WidthProvider(Responsive);

class Top extends React.Component {
    render() {
        // layout is an array of objects, see the demo for more complete usage
        const layout = [
            { i: "a", x: 0, y: 0, w: 1, h: 1, static: true },
            { i: "b", x: 1, y: 0, w: 1, h: 1, static: true },
            { i: "c", x: 2, y: 0, w: 1, h: 1, static: true }
        ];
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
                    <CsvLineChart values={[0]} labels={[""]} title="LineCount" />
                </div>
                <div key="b">
                    <CsvLineChart values={[0]} labels={[""]} title="LineCount" />
                </div>
                <div key="c">
                    <CsvLineChart values={[0]} labels={[""]} title="LineCount" />
                </div>
            </ResponsiveGridLayout>
        );
    }
}

export default Top;