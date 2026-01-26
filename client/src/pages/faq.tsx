import { ChevronLeft, MessageCircleQuestion } from "lucide-react";
import { Link } from "wouter";

const faqData = [
  {
    question: "バスケットボールをやったことがありませんが、大丈夫でしょうか？",
    answer: "はい、全く問題ありません。現在所属している部員も、ほとんどが未経験からスタートしています。基礎から丁寧に指導しますので、安心してご参加ください。"
  },
  {
    question: "体験入部はできますか？",
    answer: "はい、随時受け付けております。運動できる服装と、体育館履き（上履きでも可）、水筒を持って、練習日にお越しください。事前にお問い合わせフォームまたはLINEよりご連絡をお願いします。"
  },
  {
    question: "保護者の当番などはありますか？",
    answer: "当クラブは保護者主体の任意団体ですので、練習時の見守りやイベントの運営など、可能な範囲でのご協力をお願いしております。詳細については体験時などにお気軽にご質問ください。"
  },
  {
    question: "他の習い事と掛け持ちはできますか？",
    answer: "はい、可能です。他のスポーツや習い事と調整しながら活動している部員も多く在籍しています。欠席や遅刻・早退などの連絡をいただければ問題ありません。"
  },
  {
    question: "入部にかかる費用を教えてください。",
    answer: "部費（月額）やスポーツ保険料、ユニフォーム代などが必要になります。詳細な料金表は体験時に資料をお渡ししております。"
  },
  {
    question: "何年生から入部できますか？",
    answer: "小学1年生から6年生まで入部可能です。現在は低学年から高学年まで幅広く在籍しており、学年に合わせた指導を行っています。"
  }
];

export default function FAQ() {
  return (
    <div className="min-h-screen bg-secondary/30 font-sans text-foreground">
      <header className="bg-white border-b border-border sticky top-0 z-10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-4xl">
          <Link href="/" className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity">
            <ChevronLeft size={20} />
            <span className="font-bold">戻る</span>
          </Link>
          <h1 className="text-lg font-bold text-primary">よくあるご質問</h1>
          <div className="w-10"></div> {/* Spacing for centering */}
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
            <MessageCircleQuestion size={32} />
          </div>
          <h2 className="text-3xl font-bold text-primary mb-2">FAQ</h2>
          <p className="text-muted-foreground">
            入部を検討されている保護者の方からよくいただく質問をまとめました。
          </p>
        </div>

        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-border">
              <h3 className="text-lg font-bold text-primary mb-3 flex items-start gap-2">
                <span className="text-primary/40 font-serif">Q.</span>
                {faq.question}
              </h3>
              <div className="flex items-start gap-2 text-muted-foreground leading-relaxed">
                <span className="text-accent-foreground font-serif">A.</span>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary/5 rounded-2xl p-8 border border-primary/10 text-center">
          <h3 className="text-xl font-bold text-primary mb-4">他に不明な点はありますか？</h3>
          <p className="text-muted-foreground mb-8">
            解決しない場合は、LINEやお問い合わせフォームよりお気軽にご連絡ください。
          </p>
          <Link href="/#contact" className="inline-block bg-primary text-white font-bold px-8 py-3 rounded-full hover:bg-primary/90 transition-colors shadow-lg">
            お問い合わせはこちら
          </Link>
        </div>
      </main>

      <footer className="py-12 text-center text-xs text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Nishita Basketball Club</p>
      </footer>
    </div>
  );
}
