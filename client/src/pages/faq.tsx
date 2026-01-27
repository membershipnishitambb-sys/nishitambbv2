import { ChevronLeft, MessageCircleQuestion } from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";

const faqData = [
  {
    question: "練習は何曜日ですか？",
    answer: (
      <div className="space-y-2">
        <div>
          <p className="font-bold text-sm text-primary/80 underline decoration-primary/20 underline-offset-4">1・2・3年生</p>
          <p>土・日 8時30分〜9時30分</p>
          <p className="text-xs">※3年生のみ10時まで</p>
        </div>
        <div>
          <p className="font-bold text-sm text-primary/80 underline decoration-primary/20 underline-offset-4">4・5・6年生</p>
          <p>土 10時〜13時</p>
          <p>日・祝 10時〜12時30分</p>
          <p>火 16時30分〜18時15分</p>
        </div>
        <p className="text-xs mt-2">※体育館が取りづらい時期は変更する場合があります。</p>
      </div>
    )
  },
  {
    question: "練習には必ず出席しないといけませんか？",
    answer: "強制参加ではなく、ご都合がつく日程で出席していただけたらと思います。"
  },
  {
    question: "急な練習欠席は可能ですか？",
    answer: "出席管理ツール(サークルスクエア)にその旨記載してもらえれば特段問題ございません。"
  },
  {
    question: "練習場所はどこですか？",
    answer: "西田小体育館が基本ですが、隣の松渓中で行うこともあります。"
  },
  {
    question: "練習場所までは自転車可能ですか？",
    answer: "西田小以外のお子様は自転車でも可能ですが、途中事故等があっても当クラブでの責任はとれません。 保護者の方は学校関係なく、自転車可能です。"
  },
  {
    question: "練習の出欠席についてはどう管理していますか？",
    answer: "出席管理ツールのサークルスクエアというアプリで管理しています。翌月の予定は毎月20日前後にアップしますので、そこで出欠席の登録をお願いいたします。"
  },
  {
    question: "試合はどのくらいの頻度ですか？低学年の試合はありますか？",
    answer: "時期によりますが月に2試合くらいです。練習試合をどのくらい組むかによりますが、平均値としてご認識ください。3年生までは現時点であまり試合は組まれません。"
  },
  {
    question: "試合は遠征しますか？",
    answer: "2023年10月現在、遠征はあまりなく、杉並区内のチームと試合をすることが多いです。稀に都内で遠くに移動することもあります。(西東京市など)"
  },
  {
    question: "試合時の集合場所はありますか？現地着解散ですか？",
    answer: "大体、荻窪駅や高井戸駅に集合して向かいます。集合場所までの移動については、3年生までは親付き添い必須で、それ以降は各家庭のご判断にお任せいたします。3年生以下は試合会場にも同席いただきます。"
  },
  {
    question: "当番の頻度はどのくらいですか？",
    answer: "1ヶ月に1度とご認識ください。"
  },
  {
    question: "当番はどのような内容ですか？",
    answer: "練習当番と試合当番があります。練習当番は体育館の施錠や練習準備、後片付けが基本です。子供達が率先してやってくれるのでそんなにやることはありませんが、体育館を開けるのは必須になります。練習中はべったりついていただかなくてオッケーで、途中で帰宅可能です。もちろん、ずっと見ていただいても大丈夫です。練習の始めと終わりに来てもらえれば良しとしています。試合当番は試合会場までの引率です。細かく言えばもう少しありますが、ここでは割愛します。 そんなに負担にはなりません。"
  },
  {
    question: "当番がいつ入ってるかの確認はどのようにすればいいですか？",
    answer: "出席管理ツール(サークルスクエア)にスケジュールでアップされます。 練習日程をクリックしていただくとトップ画面にお名前があるので、必ず20日前後で翌月予定と自分が当番に入っているかを確認してください。サークルスクエアの使い方については入会後に説明いたします。"
  },
  {
    question: "入会時に用意するものはなんですか？",
    answer: "ボール(5号)、バッシュ、大きめの水筒、氷のう(100均で売ってるもの)"
  },
  {
    question: "費用はどのくらいですか？",
    answer: (
      <div className="space-y-4 text-sm">
        <p>1年生から3年生までは月1,000円、4年生から6年生までは月1,500円かかります。あとスポーツ保険料として800円がかかります。</p>
        <p>3年生以上はそれ以外にユニフォーム管理費として3,000円を頂戴しており、4年生以上ですと更にJBA登録料として毎年1200円がかかります。</p>
        <p>また、会費は学期ごとに回収しております。ユニフォーム管理料は入会時のみかかります。JBA登録料とスポーツ保険料は年1回です。</p>
        <div className="bg-secondary/50 p-4 rounded-lg space-y-3">
          <p className="font-bold border-b border-primary/10 pb-1">例 1学期入会 (5月～8月分の4 ヶ月分）</p>
          <div>
            <p className="font-bold">〇1年生：合計 4,800円</p>
            <p className="text-xs opacity-80">（会費 月1,000円 x 4ヶ月分＋スポーツ保険料800円/年)</p>
          </div>
          <div>
            <p className="font-bold">〇3年生会費：合計 7,800 円</p>
            <p className="text-xs opacity-80">（会費 月1,000円 x 4ヶ月分＋スポーツ保険料800円/年＋ユニフォーム管理費 3,000円)</p>
          </div>
          <div>
            <p className="font-bold">〇4年生以上：合計 11,000円</p>
            <p className="text-xs opacity-80">会費 月1,500円 x 4ヶ月分＋スポーツ保険料800円/年＋JBA登録料1,200円+ユニフォーム管理費3,000円)</p>
          </div>
        </div>
        <p className="text-xs">※体験会（4月・9月）の翌月から入会となります。</p>
        <p className="text-xs">※ユニフォーム管理費は1回のみの支払いとなります。</p>
      </div>
    )
  },
  {
    question: "会費はどのように支払いますか？",
    answer: "学期の頭に保護者会を開き、そこで受け取りしています。現時点で振込対応にする予定はございません。"
  },
  {
    question: "他のスポーツでもスポーツ保険に加入していますが、バスケでも加入は必要ですか？",
    answer: "各団体で1つなので登録必須になります。"
  }
];

export default function FAQ() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-secondary/30 font-sans text-foreground">
      <header className="bg-white border-b border-border sticky top-0 z-10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-4xl">
          <Link href="/" className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity">
            <ChevronLeft size={20} />
            <span className="font-bold">戻る</span>
          </Link>
          <h1 className="text-lg font-bold text-primary">よくあるご質問</h1>
          <div className="w-10"></div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
            <MessageCircleQuestion size={32} />
          </div>
          <h2 className="text-3xl font-bold text-primary mb-2">よくあるご質問</h2>
          <p className="text-muted-foreground">
            入部や活動について、保護者の皆様からよくいただく質問をまとめました。
          </p>
        </div>

        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-border">
              <h3 className="text-lg font-bold text-primary mb-3 flex items-start gap-2 leading-snug">
                <span className="text-primary/40 font-serif shrink-0">Q.</span>
                {faq.question}
              </h3>
              <div className="flex items-start gap-2 text-muted-foreground leading-relaxed">
                <span className="text-accent-foreground font-serif shrink-0">A.</span>
                <div className="w-full">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary/5 rounded-2xl p-8 border border-primary/10 text-center">
          <h3 className="text-xl font-bold text-primary mb-4">解決しない場合は</h3>
          <p className="text-muted-foreground mb-8">
            LINEやお問い合わせフォームよりお気軽にご連絡ください。
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
