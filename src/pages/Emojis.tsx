import { Upload, Smile, Sticker } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Emojis() {
  // نمونه‌های تستی - در پروژه واقعی از API دریافت می‌شود
  const recentEmojis = ["😀", "😍", "🎉", "🔥", "💯", "⭐", "❤️", "👍"];
  const recentStickers = ["🎨", "🎭", "🎪", "🎬", "🎸", "🎮"];

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    console.log("File dropped:", e.dataTransfer.files);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-4xl font-bold mb-2">اموجی و استیکر</h1>
        <p className="text-muted-foreground">مدیریت اموجی‌ها و استیکرهای برنامه</p>
      </div>

      {/* Upload Areas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Emoji Upload */}
        <Card
          className="glass border-2 border-dashed border-primary/50 p-8 text-center hover:glass-strong transition-all cursor-pointer"
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          <div className="flex flex-col items-center gap-4">
            <div className="glass-strong rounded-full p-6">
              <Smile className="h-12 w-12 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">آپلود اموجی جدید</h3>
              <p className="text-sm text-muted-foreground">
                فایل را بکشید یا کلیک کنید
              </p>
            </div>
            <Button className="gradient-primary">انتخاب فایل</Button>
          </div>
        </Card>

        {/* Sticker Upload */}
        <Card
          className="glass border-2 border-dashed border-secondary/50 p-8 text-center hover:glass-strong transition-all cursor-pointer"
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          <div className="flex flex-col items-center gap-4">
            <div className="glass-strong rounded-full p-6">
              <Sticker className="h-12 w-12 text-secondary" />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">آپلود استیکر جدید</h3>
              <p className="text-sm text-muted-foreground">
                فایل را بکشید یا کلیک کنید
              </p>
            </div>
            <Button className="bg-secondary hover:bg-secondary/90">انتخاب فایل</Button>
          </div>
        </Card>
      </div>

      {/* Recent Emojis */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Smile className="h-6 w-6 text-primary" />
          آخرین اموجی‌های ارسال شده
        </h2>
        <Card className="glass p-6">
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
            {recentEmojis.map((emoji, index) => (
              <div
                key={index}
                className="aspect-square glass-strong rounded-xl flex items-center justify-center text-4xl hover:scale-110 transition-transform cursor-pointer"
              >
                {emoji}
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Recent Stickers */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Sticker className="h-6 w-6 text-secondary" />
          آخرین استیکرهای بارگزاری شده
        </h2>
        <Card className="glass p-6">
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
            {recentStickers.map((sticker, index) => (
              <div
                key={index}
                className="aspect-square glass-strong rounded-xl flex items-center justify-center text-4xl hover:scale-110 transition-transform cursor-pointer"
              >
                {sticker}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
