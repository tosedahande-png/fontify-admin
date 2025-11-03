import { Settings as SettingsIcon, AlertTriangle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

export default function Settings() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-4xl font-bold mb-2">پیکربندی</h1>
        <p className="text-muted-foreground">تنظیمات عمومی برنامه</p>
      </div>

      {/* General Settings */}
      <Card className="glass p-8">
        <div className="space-y-6">
          <div className="flex items-center gap-3 pb-6 border-b border-border">
            <SettingsIcon className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">تنظیمات کلی اپلیکیشن</h2>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 glass-strong rounded-lg">
              <div className="space-y-1">
                <Label className="text-base font-semibold">
                  مسدود سازی برنامه به صورت موقت
                </Label>
                <p className="text-sm text-muted-foreground">
                  فعال کردن حالت نگهداری
                </p>
              </div>
              <Switch />
            </div>

            <div className="flex items-center justify-between p-4 glass-strong rounded-lg">
              <div className="space-y-1">
                <Label className="text-base font-semibold">قطع کردن درگاه فروش</Label>
                <p className="text-sm text-muted-foreground">
                  غیرفعال کردن امکان خرید
                </p>
              </div>
              <Switch />
            </div>

            <div className="flex items-center justify-between p-4 glass-strong rounded-lg">
              <div className="space-y-1">
                <Label className="text-base font-semibold">قطع کردن تبلیغات</Label>
                <p className="text-sm text-muted-foreground">
                  غیرفعال کردن نمایش تبلیغات
                </p>
              </div>
              <Switch />
            </div>

            <div className="flex items-center justify-between p-4 glass-strong rounded-lg">
              <div className="space-y-1">
                <Label className="text-base font-semibold">
                  ارسال تیکت از سوی کاربران
                </Label>
                <p className="text-sm text-muted-foreground">
                  فعال/غیرفعال کردن سیستم تیکتینگ
                </p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </div>
      </Card>

      {/* AdMob Settings */}
      <Card className="glass p-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold pb-6 border-b border-border">
            تنظیمات AdMob
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>App ID</Label>
              <Input
                placeholder="ca-app-pub-XXXXXXXXXXXXXXXX~YYYYYYYYYY"
                className="glass border-primary/30"
              />
            </div>

            <div className="space-y-2">
              <Label>Banner Token</Label>
              <Input
                placeholder="ca-app-pub-XXXXXXXXXXXXXXXX/YYYYYYYYYY"
                className="glass border-primary/30"
              />
            </div>

            <div className="space-y-2">
              <Label>Interstitial Token</Label>
              <Input
                placeholder="ca-app-pub-XXXXXXXXXXXXXXXX/YYYYYYYYYY"
                className="glass border-primary/30"
              />
            </div>

            <div className="space-y-2">
              <Label>Rewarded Token</Label>
              <Input
                placeholder="ca-app-pub-XXXXXXXXXXXXXXXX/YYYYYYYYYY"
                className="glass border-primary/30"
              />
            </div>
          </div>
        </div>
      </Card>

      {/* Social Links */}
      <Card className="glass p-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold pb-6 border-b border-border">ارتباط‌ها</h2>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label>اینستاگرام</Label>
              <Input
                placeholder="@yourID"
                className="glass border-primary/30"
                dir="ltr"
              />
            </div>

            <div className="space-y-2">
              <Label>تلگرام</Label>
              <Input
                placeholder="@yourID"
                className="glass border-primary/30"
                dir="ltr"
              />
            </div>

            <div className="space-y-2">
              <Label>فیسبوک</Label>
              <Input
                placeholder="@yourID"
                className="glass border-primary/30"
                dir="ltr"
              />
            </div>
          </div>
        </div>
      </Card>

      {/* App Configuration */}
      <Card className="glass p-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold pb-6 border-b border-border">
            پیکربندی برنامه
          </h2>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label>لینک پاپ‌آپ ورود به اپلیکیشن</Label>
              <Input
                placeholder="https://link.com"
                className="glass border-primary/30"
                dir="ltr"
              />
            </div>

            <div className="space-y-2">
              <Label>نام Layout تخفیفات</Label>
              <Input
                placeholder="main"
                className="glass border-primary/30"
              />
              <div className="flex items-start gap-2 p-4 glass-strong rounded-lg border-r-4 border-destructive">
                <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                <p className="text-sm text-destructive">
                  برای عملکرد صحیح لطفا نام دقیق Layout را وارد کنید در غیر این صورت
                  برنامه Force Close می‌شود.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Save Button */}
      <Button className="w-full gradient-primary text-lg h-12 glow">
        ذخیره تغییرات
      </Button>
    </div>
  );
}
