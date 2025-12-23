"use client"
import { Pie, PieChart } from "recharts"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { useDashboardQuery } from "@/redux/features/dashboard/dashboardApi"

const chartConfig = {
    visitors: {
        label: "Visitors",
    },
    chrome: {
        label: "Chrome",
        color: "var(--chart-1)",
    },
    safari: {
        label: "Safari",
        color: "var(--chart-2)",
    },
    firefox: {
        label: "Firefox",
        color: "var(--chart-3)",
    },
    edge: {
        label: "Edge",
        color: "var(--chart-4)",
    },
    other: {
        label: "Other",
        color: "var(--chart-5)",
    },
} satisfies ChartConfig


export function ChartGenerate() {
    const { data } = useDashboardQuery(undefined);
    // console.log(data?.chart_generate);

    const chartData = [
        { browser: "Natal Chart", visitors: data?.chart_generate?.natal, fill: "#28D33C" },
        { browser: "Transit Chart", visitors: data?.chart_generate?.transit, fill: "#E300C5" },
        { browser: "Synastry Chart", visitors: data?.chart_generate?.synastry, fill: "#FFFFFF" }
    ]
    return (
        <div className="h-[350px] bg-common p-5 border border-border-color rounded-xl">
            <Card className="flex flex-col bg-common border-none">
                <CardHeader>
                    <CardTitle className="text-start font-semibold text-2xl text-header">Chart Generate</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 pb-0">
                    <ChartContainer
                        config={chartConfig}
                        className="mx-auto aspect-square h-[190px]"
                    >
                        <PieChart>
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent hideLabel />}
                            />
                            <Pie
                                data={chartData}
                                dataKey="visitors"
                                nameKey="browser"
                                innerRadius={60}
                            />
                        </PieChart>
                    </ChartContainer>
                </CardContent>
                <CardFooter className="flex-col justify-center gap-2 text-sm w-full">
                    <div className="flex items-center gap-2">
                        <div className="size-5 bg-[#28D33C] rounded-full"></div>
                        <p className="text-title font-medium text-[16px]">Total Natal Chart</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="size-5 bg-[#E300C5] rounded-full"></div>
                        <p className="text-title font-medium text-[16px]">Total Transit Chart</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="size-5 bg-[#FFFFFF] rounded-full"></div>
                        <p className="text-title font-medium text-[16px]">Total Synastry Chart</p>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}
