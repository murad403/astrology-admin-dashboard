"use client"
import { useDashboardQuery } from "@/redux/features/dashboard/dashboardApi"
import { useMemo } from "react"

interface DataPoint {
  label: string
  value: number
}

interface ChartData {
  points: DataPoint[]
  maxValue: number
}

const AreaChart = () => {
  const { data: apiData, isLoading } = useDashboardQuery(undefined);

  // API data থেকে chart data generate করা
  const chartData: ChartData = useMemo(() => {
    if (!apiData?.earning_overview) {
      return { points: [], maxValue: 0 };
    }

    const { labels, data } = apiData.earning_overview;
    
    // Data points তৈরি করা
    const points: DataPoint[] = labels.map((label: string, index: number) => ({
      label: label,
      value: data[index] || 0
    }));

    // Maximum value বের করা (যদি সব 0 হয় তাহলে 200 default)
    const maxDataValue = Math.max(...data);
    const maxValue = maxDataValue > 0 ? Math.ceil(maxDataValue / 50) * 50 : 200;

    return { points, maxValue };
  }, [apiData]);

  const width = 1000
  const height = 250
  const padding = { top: 40, right: 40, bottom: 40, left: 60 }
  const chartWidth = width - padding.left - padding.right
  const chartHeight = height - padding.top - padding.bottom

  // Generate smooth curve path
  const generatePath = (): string => {
    const points = chartData?.points
    if (!points || points.length === 0) return "";
    
    const xStep = chartWidth / (points?.length - 1)
    let path = ""

    points?.forEach((point, index) => {
      const x = padding.left + index * xStep
      const y = padding.top + chartHeight - (point?.value / chartData?.maxValue) * chartHeight

      if (index === 0) {
        path += `M ${x} ${y}`
      } else {
        const prevPoint = points[index - 1]
        const prevX = padding.left + (index - 1) * xStep
        const prevY = padding.top + chartHeight - (prevPoint?.value / chartData?.maxValue) * chartHeight

        const controlX1 = prevX + xStep / 3
        const controlX2 = x - xStep / 3

        path += ` C ${controlX1} ${prevY}, ${controlX2} ${y}, ${x} ${y}`
      }
    })

    return path
  }

  // Generate fill path (line + bottom close)
  const generateFillPath = (): string => {
    const mainPath = generatePath()
    if (!chartData?.points || chartData.points.length === 0) return "";
    
    const lastPoint = chartData?.points[chartData?.points.length - 1]
    const lastX = padding.left + (chartData.points.length - 1) * (chartWidth / (chartData.points.length - 1))
    const lastY = padding.top + chartHeight
    const firstY = padding.top + chartHeight

    return `${mainPath} L ${lastX} ${lastY} L ${padding.left} ${firstY} Z`
  }

  // Grid values generate করা
  const gridValues = useMemo(() => {
    const max = chartData.maxValue;
    const step = max / 4;
    return [0, step, step * 2, step * 3, max];
  }, [chartData.maxValue]);

  if (isLoading) {
    return (
      <div className="w-full border h-[350px] border-border-color rounded-xl p-5 bg-common flex items-center justify-center">
        <span className="text-gray-400">Loading...</span>
      </div>
    );
  }

  return (
    <div className="w-full border h-[350px] border-border-color rounded-xl p-5 bg-common">
      {/* Header with Title */}
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-2xl font-semibold text-white">Earning Overview</h1>
      </div>

      {/* Chart Container */}
      <div className="">
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="w-full">
          {/* Grid Lines */}
          {gridValues.map((gridValue) => {
            const y = padding.top + chartHeight - (gridValue / chartData?.maxValue) * chartHeight
            return (
              <g key={`grid-${gridValue}`}>
                <line
                  x1={padding.left}
                  y1={y}
                  x2={width - padding.right}
                  y2={y}
                  stroke="#334155"
                  strokeWidth="1"
                  strokeDasharray="0"
                />
                <text
                  x={padding.left - 10}
                  y={y + 4}
                  textAnchor="end"
                  className="text-xs text-gray-500 font-mono"
                  fill="#64748b"
                >
                  {Math.round(gridValue)}
                </text>
              </g>
            )
          })}

          {/* X-axis */}
          <line
            x1={padding.left}
            y1={padding.top + chartHeight}
            x2={width - padding.right}
            y2={padding.top + chartHeight}
            stroke="#475569"
            strokeWidth="2"
          />

          {/* Y-axis */}
          <line
            x1={padding.left}
            y1={padding.top}
            x2={padding.left}
            y2={padding.top + chartHeight}
            stroke="#475569"
            strokeWidth="2"
          />

          {/* Fill under curve */}
          <path d={generateFillPath()} fill="url(#gradient)" opacity="0.2" />

          {/* Gradient definition */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgb(34, 197, 94)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="rgb(34, 197, 94)" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Main line */}
          <path
            d={generatePath()}
            fill="none"
            stroke="rgb(34, 197, 94)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* X-axis labels */}
          {chartData.points.map((point, index) => {
            const x = padding.left + index * (chartWidth / (chartData.points.length - 1))
            // প্রতি ৫ম label দেখানো (অনেক labels হলে)
            const showLabel = chartData.points.length > 15 ? index % 5 === 0 : true;
            
            return showLabel ? (
              <text
                key={`label-${index}`}
                x={x}
                y={height - 10}
                textAnchor="middle"
                className="text-xs text-gray-400 font-mono"
                fill="#94a3b8"
              >
                {point.label}
              </text>
            ) : null
          })}
        </svg>
      </div>
    </div>
  )
}

export default AreaChart