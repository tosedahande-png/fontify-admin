import { Users, TrendingUp, DollarSign, ShoppingCart } from "lucide-react";
import StatCard from "@/components/StatCard";
import { Card } from "@/components/ui/card";

export default function Dashboard() {
  // Sample data - در پروژه واقعی از API دریافت می‌شود
  const salesData = [
    { day: "1", sales: 2 },
    { day: "5", sales: 5 },
    { day: "10", sales: 3 },
    { day: "15", sales: 8 },
    { day: "20", sales: 4 },
    { day: "25", sales: 6 },
    { day: "30", sales: 7 },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-2">داشبورد</h1>
        <p className="text-muted-foreground">نمای کلی از عملکرد برنامه</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="کاربران فعال (30 روز)"
          value="1,234"
          icon={Users}
          trend={{ value: "12%", isPositive: true }}
        />
        <StatCard
          title="تعداد فروش (30 روز)"
          value="26"
          icon={ShoppingCart}
          trend={{ value: "8%", isPositive: true }}
        />
        <StatCard
          title="رشد فروش"
          value="18.5%"
          icon={TrendingUp}
          trend={{ value: "5%", isPositive: true }}
        />
        <StatCard
          title="درآمد کل"
          value="346M"
          icon={DollarSign}
          trend={{ value: "15%", isPositive: true }}
        />
      </div>

      {/* Revenue Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="glass p-6 border-none">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">درآمد کافه بازار</p>
            <div className="flex items-baseline gap-2">
              <h3 className="text-2xl font-bold">108,670,000</h3>
              <span className="text-sm text-muted-foreground">تومان</span>
            </div>
            <div className="mt-4 h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full w-[70%] gradient-primary rounded-full" />
            </div>
          </div>
        </Card>

        <Card className="glass p-6 border-none">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">درآمد گوگل پلی</p>
            <div className="flex items-baseline gap-2">
              <h3 className="text-2xl font-bold">173,004,380</h3>
              <span className="text-sm text-muted-foreground">تومان</span>
            </div>
            <div className="mt-4 h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full w-[85%] gradient-success rounded-full" />
            </div>
          </div>
        </Card>

        <Card className="glass p-6 border-none">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">تبلیغات ادموب</p>
            <div className="flex items-baseline gap-2">
              <h3 className="text-2xl font-bold">64,930,872</h3>
              <span className="text-sm text-muted-foreground">تومان</span>
            </div>
            <div className="mt-4 h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full w-[60%] bg-gradient-to-r from-accent to-primary rounded-full" />
            </div>
          </div>
        </Card>
      </div>

      {/* Sales Chart */}
      <Card className="glass p-6 border-none">
        <h3 className="text-xl font-bold mb-6">نمودار فروش (30 روز اخیر)</h3>
        
        <div className="space-y-4">
          {/* Time Filter */}
          <div className="flex gap-2 flex-wrap">
            {["سی روز", "هفت روز", "دیروز", "امروز"].map((filter) => (
              <button
                key={filter}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  filter === "سی روز"
                    ? "gradient-primary text-white"
                    : "glass hover:glass-strong"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Simple Bar Chart */}
          <div className="h-64 flex items-end justify-between gap-2 pt-8">
            {salesData.map((data, index) => {
              const height = (data.sales / 8) * 100;
              const isLow = data.sales < 4;
              
              return (
                <div key={index} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full flex items-end justify-center h-48">
                    <div
                      className={`w-full rounded-t-lg transition-all hover:opacity-80 ${
                        isLow
                          ? "bg-gradient-to-t from-destructive to-destructive/50"
                          : "bg-gradient-to-t from-success to-accent"
                      }`}
                      style={{ height: `${height}%` }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground">{data.day}</span>
                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="flex gap-6 justify-center pt-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-gradient-to-r from-success to-accent" />
              <span className="text-sm text-muted-foreground">فروش بالا</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-gradient-to-r from-destructive to-destructive/50" />
              <span className="text-sm text-muted-foreground">فروش پایین</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
