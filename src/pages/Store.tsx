import { Store as StoreIcon, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import StatCard from "@/components/StatCard";

export default function Store() {
  const markets = [
    {
      name: "کافه بازار",
      icon: "🛍️",
      prices: {
        yearly: { original: 1600000, discount: 10 },
        sixMonth: { original: 900000, discount: 15 },
        threeMonth: { original: 500000, discount: 5 },
        monthly: { original: 180000, discount: 0 },
      },
      revenue: "108,670,000",
    },
    {
      name: "گوگل پلی",
      icon: "🎮",
      prices: {
        yearly: { original: 1800000, discount: 12 },
        sixMonth: { original: 1000000, discount: 10 },
        threeMonth: { original: 550000, discount: 8 },
        monthly: { original: 200000, discount: 0 },
      },
      revenue: "173,004,380",
    },
    {
      name: "مایکت",
      icon: "📱",
      prices: {
        yearly: { original: 1500000, discount: 8 },
        sixMonth: { original: 850000, discount: 12 },
        threeMonth: { original: 480000, discount: 5 },
        monthly: { original: 170000, discount: 0 },
      },
      revenue: "64,930,872",
    },
  ];

  const calculateDiscountedPrice = (original: number, discount: number) => {
    return original - (original * discount) / 100;
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-4xl font-bold mb-2">پیکربندی قیمت‌های فروشگاه</h1>
        <p className="text-muted-foreground">مدیریت قیمت‌ها در مارکت‌های مختلف</p>
      </div>

      {markets.map((market, marketIndex) => (
        <div key={marketIndex} className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{market.icon}</span>
            <h2 className="text-3xl font-bold">{market.name}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(market.prices).map(([period, data], index) => {
              const periodNames: { [key: string]: string } = {
                yearly: "یک ساله",
                sixMonth: "شش ماهه",
                threeMonth: "سه ماهه",
                monthly: "ماهانه",
              };

              const discountedPrice = calculateDiscountedPrice(
                data.original,
                data.discount
              );

              return (
                <Card key={index} className="glass p-6 space-y-4 hover:glass-strong transition-all">
                  <h3 className="text-lg font-bold text-center mb-4">
                    اشتراک {periodNames[period]}
                  </h3>

                  <div className="space-y-2">
                    <Label>قیمت اصلی (تومان)</Label>
                    <Input
                      type="number"
                      defaultValue={data.original}
                      className="glass border-primary/30"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>درصد تخفیف (%)</Label>
                    <Input
                      type="number"
                      defaultValue={data.discount}
                      className="glass border-accent/30"
                    />
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-1">قیمت فعلی</p>
                    <p className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
                      {discountedPrice.toLocaleString()} تومان
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Revenue Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard
              title={`درآمد ${market.name}`}
              value={`${market.revenue} تومان`}
              icon={StoreIcon}
              trend={{ value: "12%", isPositive: true }}
            />
            <StatCard
              title="تعداد فروش"
              value="26"
              icon={TrendingUp}
              trend={{ value: "8%", isPositive: true }}
            />
            <StatCard
              title="میانگین خرید"
              value="4.2M تومان"
              icon={StoreIcon}
              trend={{ value: "5%", isPositive: true }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
