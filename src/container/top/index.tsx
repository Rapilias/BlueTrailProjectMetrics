import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import fileCount from '../../data/metrics/FileCount.json'
import lineCount from '../../data/metrics/LineCount.json'
import typeCount from '../../data/metrics/TypeCount(WithoutAutoGen).json'
import LineChart from "../../component/graph/line-chart";
import { isMobile } from 'react-device-detect';

const ResponsiveGridLayout = WidthProvider(Responsive);

class Top extends React.Component {
    render() {
        console.log(isMobile);
        return (
            <ResponsiveGridLayout
                className="layout"
                breakpoints={{ lg: 1200, md: 800, sm: 400, }}
                cols={{ lg: 3, md: 2, sm: 1, }}
                rowHeight={300}
                maxRows={3}
                isDraggable={isMobile === false}
                autoSize={false}
            >
                <div key="a">
                    <LineChart title={fileCount.title} labels={fileCount.labels} valueSet={fileCount.valueSet} />
                </div>
                <div key="b">
                    <LineChart title={lineCount.title} labels={lineCount.labels} valueSet={lineCount.valueSet} />
                </div>
                <div key="c">
                    <LineChart title={typeCount.title} labels={typeCount.labels} valueSet={typeCount.valueSet} />
                </div>
            </ResponsiveGridLayout>
        );
    }
}

export default Top;