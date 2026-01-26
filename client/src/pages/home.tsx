import { useRef } from "react";
import { Link } from "wouter";
import heroImage from "@assets/IMG_1916_1769216828698.JPG";
import teamLogo from "@assets/nishita_logo_1768706882993.png";
import { 
  MapPin, 
  Calendar, 
  Users, 
  Mail, 
  ChevronRight, 
  Shield, 
  Target, 
  Heart,
  Menu,
  X,
  ExternalLink,
  MessageCircle
} from "lucide-react";
import { useState } from "react";

// --- Components ---

const Section = ({ 
  id, 
  title, 
  className = "", 
  children,
  background = "bg-white" 
}: { 
  id: string; 
  title?: string; 
  className?: string; 
  children: React.ReactNode; 
  background?: "bg-white" | "bg-secondary/30" | "bg-primary/5";
}) => (
  <section id={id} className={`py-16 md:py-24 ${background} ${className}`}>
    <div className="container mx-auto px-4 md:px-6 max-w-5xl">
      {title && (
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 tracking-tight">
            {title}
          </h2>
          <div className="h-1 w-20 bg-primary/20 mx-auto rounded-full"></div>
        </div>
      )}
      {children}
    </div>
  </section>
);

const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => (
  <a 
    href={href} 
    onClick={(e) => {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        onClick?.();
      }
    }}
    className="text-foreground/80 hover:text-primary font-medium transition-colors py-2"
  >
    {children}
  </a>
);

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-6xl">
          <div className="flex items-center gap-3">
            <img 
              src={teamLogo} 
              alt="西田バスケットボールクラブ ロゴ" 
              className="h-10 w-auto"
            />
            <div className="flex flex-col">
              <h1 className="text-xl md:text-2xl font-bold text-primary tracking-tight leading-none">
                西田バスケットボールクラブ
              </h1>
              <span className="text-[10px] md:text-xs text-muted-foreground">杉並区 ミニバスケットボールチーム</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            <NavLink href="#about">クラブ紹介</NavLink>
            <NavLink href="#activities">活動内容</NavLink>
            <NavLink href="#membership">入部案内</NavLink>
            <Link href="/faq" className="text-foreground/80 hover:text-primary font-medium transition-colors py-2">よくあるご質問</Link>
            <NavLink href="#contact">お問い合わせ</NavLink>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニューを開く"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-border p-4 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top-5">
            <NavLink href="#about" onClick={() => setIsMenuOpen(false)}>クラブ紹介</NavLink>
            <NavLink href="#activities" onClick={() => setIsMenuOpen(false)}>活動内容</NavLink>
            <NavLink href="#membership" onClick={() => setIsMenuOpen(false)}>入部案内</NavLink>
            <Link href="/faq" className="text-foreground/80 hover:text-primary font-medium transition-colors py-2" onClick={() => setIsMenuOpen(false)}>よくあるご質問</Link>
            <NavLink href="#contact" onClick={() => setIsMenuOpen(false)}>お問い合わせ</NavLink>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="明るい体育館" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/40 md:bg-primary/30 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent" />
        </div>

        <div className="container relative z-10 px-4 text-center text-white max-w-4xl mx-auto">
          <p className="text-lg md:text-xl font-medium mb-4 animate-in slide-in-from-bottom-4 fade-in duration-700 delay-100 drop-shadow-md">
            杉並区で活動する小学生ミニバスチーム
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight animate-in slide-in-from-bottom-8 fade-in duration-700 delay-200 drop-shadow-lg">
            Enjoy Basketball
            <span className="block text-2xl md:text-3xl mt-4 font-normal opacity-90">
              楽しく・全力で・考えてプレー！
            </span>
          </h1>
          <p className="max-w-xl mx-auto text-base md:text-lg opacity-90 mb-10 leading-relaxed drop-shadow-sm animate-in slide-in-from-bottom-8 fade-in duration-700 delay-300">
            バスケットボールを通じて、体力・運動能力はもちろん、
            自立心や仲間を思いやる心を育みます。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in slide-in-from-bottom-8 fade-in duration-700 delay-400">
            <a 
              href="#membership" 
              className="px-8 py-3 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              入部案内を見る
            </a>
            <a 
              href="#activities" 
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all"
            >
              活動を知る
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" title="クラブについて" background="bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              西田バスケットボールクラブは、杉並区荻窪・成田地区を中心に活動している
              小学生（U12カテゴリー）のバスケットボールチームです。
              1978年の創部以来、地域の子どもたちの健全な育成を目指して活動しています。
            </p>
            
            <div className="grid gap-4">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50">
                <div className="p-2 bg-white rounded-full text-primary shadow-sm">
                  <Users size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">保護者主体の運営</h3>
                  <p className="text-sm text-muted-foreground">
                    保護者とボランティアスタッフが協力して運営する任意団体です。
                    アットホームな雰囲気で、子どもたちの成長を見守ります。
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50">
                <div className="p-2 bg-white rounded-full text-primary shadow-sm">
                  <Target size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">対象</h3>
                  <p className="text-sm text-muted-foreground">
                    近隣の小学校に通う小学生（1年生〜6年生）男女。
                    初心者から経験者まで幅広く歓迎しています。
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 p-8 rounded-2xl relative">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
            
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">大切にしていること</h3>
            <ul className="space-y-4">
              {[
                { icon: <Heart className="w-5 h-5" />, text: "バスケを楽しむ心を育てる" },
                { icon: <Shield className="w-5 h-5" />, text: "安全第一で活動する" },
                { icon: <Users className="w-5 h-5" />, text: "チームワークと社会性を学ぶ" },
                { icon: <Target className="w-5 h-5" />, text: "目標に向かって努力する" },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm border border-border">
                  <div className="text-primary">{item.icon}</div>
                  <span className="font-medium text-foreground">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Activities Section */}
      <Section id="activities" title="活動内容" background="bg-secondary/30">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-border/50 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
              <Calendar size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-primary">練習日時</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex justify-between border-b border-dashed border-border pb-1">
                <span>土曜日</span>
                <span className="font-medium">午前</span>
              </li>
              <li className="flex justify-between border-b border-dashed border-border pb-1">
                <span>日曜日</span>
                <span className="font-medium">午前</span>
              </li>
              <li className="flex justify-between pb-1">
                <span>火曜日</span>
                <span className="font-medium">夕方（高学年のみ）</span>
              </li>
            </ul>
            <p className="text-xs text-muted-foreground mt-4">
              ※学校行事や大会等により変更になる場合があります。
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-border/50 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
              <MapPin size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-primary">活動場所</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-foreground">杉並区立西田小学校</p>
                <p className="text-sm text-muted-foreground">メインの練習場所です</p>
              </div>
              <div>
                <p className="font-medium text-foreground">杉並区立松渓中学校</p>
                <p className="text-sm text-muted-foreground">週末などに利用します</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-border/50 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
              <Target size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-primary">大会・イベント</h3>
            <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
              <li>杉並区民大会</li>
              <li>東京都ミニバスケットボール連盟主催大会</li>
              <li>近隣チームとの練習試合</li>
              <li>夏合宿・お楽しみ会など</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-xl p-8 border border-border/50 text-center max-w-3xl mx-auto">
          <h3 className="text-lg font-bold text-primary mb-2">指導体制について</h3>
          <p className="text-muted-foreground">
            JBA（日本バスケットボール協会）公認コーチ資格を持つ指導者を中心に、
            基礎から丁寧に指導します。
            「怒鳴らない指導」を心がけ、子どもたちが主体的に考え、動けるバスケットボールを目指しています。
          </p>
        </div>
      </Section>

      {/* Membership Section */}
      <Section id="membership" title="入部・体験について" background="bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary/5 rounded-2xl p-8 md:p-10 mb-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 space-y-4">
                <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded-full">募集中</span>
                <h3 className="text-2xl md:text-3xl font-bold text-primary">体験参加はいつでも歓迎！</h3>
                <p className="text-muted-foreground">
                  「バスケやってみたいな」「どんな雰囲気かな」と思ったら、まずは体験に来てみませんか？
                  運動できる服装と室内履きがあれば参加できます。
                </p>
                <div className="pt-2">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors shadow-md"
                  >
                    体験を申し込む <ChevronRight size={18} />
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/3 bg-white p-6 rounded-xl shadow-sm border border-border">
                <h4 className="font-bold text-center mb-4 border-b pb-2">現在の募集状況</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    1年生〜4年生 男女
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    5年生 女子
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                    その他学年は応相談
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                step: "01", 
                title: "お問い合わせ", 
                desc: "まずはメールフォームから体験希望のご連絡をお願いします。" 
              },
              { 
                step: "02", 
                title: "体験参加", 
                desc: "実際に練習に参加して、チームの雰囲気を感じてください。何度か参加可能です。" 
              },
              { 
                step: "03", 
                title: "入部手続き", 
                desc: "本人が「やりたい！」と思ったら、入部届を提出して正式加入となります。" 
              }
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-5xl font-bold text-primary/5 mb-2 absolute -top-4 -left-2 z-0">
                  {item.step}
                </div>
                <div className="relative z-10">
                  <h4 className="text-lg font-bold text-primary mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="お問い合わせ" background="bg-primary/5">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-border text-center">
          <Mail size={48} className="mx-auto text-primary mb-6" />
          <h3 className="text-2xl font-bold text-primary mb-4">ご連絡はこちらから</h3>
          <p className="text-muted-foreground mb-8">
            体験のお申し込み、練習試合の依頼、その他ご質問など、お気軽にお問い合わせください。
            担当者より折り返しご連絡いたします。
          </p>
          
          <div className="space-y-4">
            <a 
              href="https://lin.ee/Codpqu8" 
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#06C755] text-white font-bold py-4 rounded-xl hover:opacity-90 transition-all shadow-md flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              体験を申し込む (公式LINE)
            </a>

            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSdYpui0JOMc1VwNgrHsrTwog-0nIR_znQI60AkoxzFgnzByGg/viewform" 
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-white text-primary border-2 border-primary font-bold py-4 rounded-xl hover:bg-secondary transition-all flex items-center justify-center gap-2"
            >
              <ExternalLink size={20} />
              入会申し込みフォーム
            </a>

            <p className="text-sm text-muted-foreground pt-2">
              練習試合の依頼、その他ご質問等お気軽にお問い合わせください。
            </p>

            <a 
              href="#contact-form" 
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector("#contact-form");
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="block w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary/90 transition-all shadow-md flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              その他お問い合わせ
            </a>
          </div>

          <div id="contact-form" className="mt-12 pt-12 border-t border-border text-left">
            <h4 className="text-xl font-bold text-primary mb-6 text-center">お問い合わせフォーム</h4>
            <form 
              action="https://formsubmit.co/ml_nishita_mbb@googlegroups.com" 
              method="POST"
              className="space-y-4"
            >
              {/* FormSubmit configuration */}
              <input type="hidden" name="_subject" value="西田バスケットボールクラブへのお問い合わせ" />
              <input type="hidden" name="_next" value={window.location.href} />
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">お名前</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50" 
                    placeholder="西田 太郎"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">メールアドレス</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50" 
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">内容</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  required 
                  className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50" 
                  placeholder="お問い合わせ内容をご記入ください"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary/90 transition-all shadow-md"
              >
                内容を送信する
              </button>
            </form>
          </div>

          <p className="text-xs text-muted-foreground mt-6">
            ※ボランティア運営のため、返信にお時間をいただく場合があります。ご了承ください。
          </p>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl font-bold mb-4">西田バスケットボールクラブ</h2>
          <div className="flex justify-center gap-6 mb-8 text-sm opacity-80">
            <a href="#about" className="hover:text-white hover:underline">クラブについて</a>
            <a href="#activities" className="hover:text-white hover:underline">活動内容</a>
            <a href="#membership" className="hover:text-white hover:underline">入部案内</a>
            <a href="#contact" className="hover:text-white hover:underline">お問い合わせ</a>
          </div>
          
          <div className="text-xs opacity-60 space-y-2 max-w-lg mx-auto border-t border-primary-foreground/20 pt-8">
            <p>
              当クラブは保護者とボランティアによって運営される任意団体です。
              活動中の事故等についてはスポーツ保険の範囲内での対応となります。
            </p>
            <p className="mt-4">
              &copy; {new Date().getFullYear()} Nishita Basketball Club. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
