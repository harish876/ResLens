import { Card, CardContent } from "@/components/ui/card"
import GaugeChart from 'react-gauge-chart'

const CacheHitGauge = ({ value }) => (
  <div className="w-full h-48 relative">
    <GaugeChart
      id={`gauge-chart-${value}`}
      nrOfLevels={3}
      colors={["#10B981", "#FBBF24", "#EF4444"]}
      percent={value / 100}
      textColor="#ffffff"
      arcWidth={0.3}
      formatTextValue={() => ''}
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-3xl font-bold text-white">{value}%</div>
    </div>
  </div>
)

export function CacheHitOdometers() {
  const cacheHits = [85, 92, 78] // Example static data

  return (
    <div className="grid grid-cols-3 gap-4">
      {cacheHits.map((value, index) => (
        <Card key={index} className="bg-slate-800">
          <CardContent className="p-4 flex flex-col items-center">
            <CacheHitGauge value={value} />
            <div className="text-sm text-center text-slate-400 mt-4">Cache Hit {index + 1}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

