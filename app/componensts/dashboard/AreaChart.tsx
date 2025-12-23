"use client"
import { useState, useMemo } from "react"

type FilterType = "years" | "months" | "weeks"

interface DataPoint {
  label: string
  value: number
}

interface ChartData {
  points: DataPoint[]
  maxValue: number
}

const AreaChart = () => {
  const [filter, setFilter] = useState<FilterType>("years")
  // console.log(dashboardData?.earning_overview);

  const chartData: Record<FilterType, ChartData> = useMemo(
    () => ({
      years: {
        points: [
          { label: "2020", value: 200 },
          { label: "2021", value: 120 },
          { label: "2022", value: 85 },
          { label: "2023", value: 95 },
          { label: "2024", value: 155 },
          { label: "2025", value: 110 },
        ],
        maxValue: 200,
      },
      months: {
        points: [
          { label: "Jan", value: 65 },
          { label: "Feb", value: 155 },
          { label: "Mar", value: 95 },
          { label: "Apr", value: 35 },
          { label: "May", value: 45 },
          { label: "Jun", value: 65 },
          { label: "Jul", value: 85 },
          { label: "Aug", value: 145 },
          { label: "Sep", value: 165 },
          { label: "Oct", value: 95 },
          { label: "Nov", value: 185 },
          { label: "Dec", value: 135 },
        ],
        maxValue: 200,
      },
      weeks: {
        points: [
          { label: "W1", value: 75 },
          { label: "W2", value: 120 },
          { label: "W3", value: 65 },
          { label: "W4", value: 95 },
          { label: "W5", value: 145 },
          { label: "W6", value: 85 },
          { label: "W7", value: 110 },
          { label: "W8", value: 155 },
          { label: "W9", value: 95 },
          { label: "W10", value: 135 },
          { label: "W11", value: 175 },
          { label: "W12", value: 105 },
        ],
        maxValue: 200,
      },
    }),
    [],
  )

  const data = chartData[filter]
  const width = 1000
  const height = 250
  const padding = { top: 40, right: 40, bottom: 40, left: 60 }
  const chartWidth = width - padding.left - padding.right
  const chartHeight = height - padding.top - padding.bottom

  // Generate smooth curve path
  const generatePath = (): string => {
    const points = data.points
    const xStep = chartWidth / (points.length - 1)
    let path = ""

    points.forEach((point, index) => {
      const x = padding.left + index * xStep
      const y = padding.top + chartHeight - (point.value / data.maxValue) * chartHeight

      if (index === 0) {
        path += `M ${x} ${y}`
      } else {
        const prevPoint = points[index - 1]
        const prevX = padding.left + (index - 1) * xStep
        const prevY = padding.top + chartHeight - (prevPoint.value / data.maxValue) * chartHeight

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
    const lastPoint = data.points[data.points.length - 1]
    const lastX = padding.left + (data.points.length - 1) * (chartWidth / (data.points.length - 1))
    const lastY = padding.top + chartHeight
    const firstY = padding.top + chartHeight

    return `${mainPath} L ${lastX} ${lastY} L ${padding.left} ${firstY} Z`
  }

  return (
    <div className="w-full border h-[350px] border-border-color rounded-xl p-5 bg-common">
      {/* Header with Title and Filter */}
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-2xl font-semibold text-white">Earning Overview</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-400">Sort by</span>
          <div className="relative">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value as FilterType)}
              className="appearance-none outline-none bg-slate-800 text-white px-4 py-1 rounded-md border border-slate-700 cursor-pointer pr-8 transition"
            >
              <option value="years">Years</option>
              <option value="months">Months</option>
              <option value="weeks">Weeks</option>
            </select>
            <div className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2">
              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Chart Container */}
      <div className="">
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="w-full">
          {/* Grid Lines */}
          {[0, 50, 100, 150, 200].map((gridValue) => {
            const y = padding.top + chartHeight - (gridValue / data.maxValue) * chartHeight
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
                  {gridValue}
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
          {data.points.map((point, index) => {
            const x = padding.left + index * (chartWidth / (data.points.length - 1))
            return (
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
            )
          })}
        </svg>
      </div>
    </div>
  )
}

export default AreaChart
