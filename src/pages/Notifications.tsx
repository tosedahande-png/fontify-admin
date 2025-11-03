import { Bell, Send, Image as ImageIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Notifications() {
  const emojis = ["😀", "🎉", "🔥", "💯", "⭐", "❤️", "👍", "✨"];

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-4xl font-bold mb-2">اعلان‌های کاربران</h1>
        <p className="text-muted-foreground">ارسال پیام و اعلان به کاربران از طریق FCM</p>
      </div>

      <Card className="glass p-8">
        <div className="space-y-6">
          <div className="flex items-center gap-3 pb-6 border-b border-border">
            <Bell className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">ارسال اعلان جدید</h2>
          </div>

          {/* Target Selection */}
          <div className="space-y-2">
            <Label>کاربران کدام کلاینت؟</Label>
            <Select>
              <SelectTrigger className="glass border-primary/30">
                <SelectValue placeholder="انتخاب کنید" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">همه کلاینت‌ها</SelectItem>
                <SelectItem value="cafebazaar">کافه بازار</SelectItem>
                <SelectItem value="googleplay">گوگل پلی</SelectItem>
                <SelectItem value="myket">مایکت</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Title */}
          <div className="space-y-2">
            <Label>تیتر</Label>
            <Input
              placeholder="عنوان اعلان را وارد کنید"
              className="glass border-primary/30"
            />
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label>متن</Label>
            <Textarea
              placeholder="متن اعلان را وارد کنید"
              className="glass border-primary/30 min-h-[120px]"
            />
          </div>

          {/* Icon Selection */}
          <div className="space-y-2">
            <Label>ایکن کنار اعلان</Label>
            <div className="glass p-4 rounded-lg">
              <div className="grid grid-cols-8 gap-2">
                {emojis.map((emoji, index) => (
                  <button
                    key={index}
                    className="aspect-square glass-strong rounded-lg flex items-center justify-center text-2xl hover:scale-110 transition-transform"
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Link */}
          <div className="space-y-2">
            <Label>لینک</Label>
            <Input
              placeholder="https://example.com"
              className="glass border-primary/30"
            />
          </div>

          {/* Image Upload */}
          <div className="space-y-2">
            <Label>تصویر برای کاربر</Label>
            <Card className="glass border-dashed border-2 border-primary/30 p-8 text-center cursor-pointer hover:glass-strong transition-all">
              <div className="flex flex-col items-center gap-3">
                <ImageIcon className="h-10 w-10 text-primary" />
                <p className="text-sm text-muted-foreground">
                  در صورت پر نکردن متن می‌توانید با بارگزاری تصویر به کاربران یک بنر
                  نمایش بدهید
                </p>
                <Button variant="outline" className="glass">
                  انتخاب تصویر
                </Button>
              </div>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4 pt-6 border-t border-border">
            <h3 className="font-bold text-lg">دکمه‌ها</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>دکمه اول</Label>
                <Input placeholder="متن دکمه" className="glass border-primary/30" />
              </div>
              <div className="space-y-2">
                <Label>دکمه دوم</Label>
                <Input placeholder="متن دکمه" className="glass border-primary/30" />
              </div>
            </div>
          </div>

          {/* JSON Data */}
          <div className="space-y-2">
            <Label>داده‌های JSON (اختیاری)</Label>
            <Textarea
              placeholder='{"key": "value"}'
              className="glass border-primary/30 font-mono text-sm"
            />
            <p className="text-xs text-muted-foreground">
              می‌توانید داده‌های JSON سفارشی برای اعلان اضافه کنید
            </p>
          </div>

          {/* Send Button */}
          <Button className="w-full gradient-primary text-lg h-12 glow">
            <Send className="ml-2 h-5 w-5" />
            ارسال اعلان
          </Button>
        </div>
      </Card>
    </div>
  );
}
