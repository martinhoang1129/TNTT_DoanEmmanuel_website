import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Prayer Resources – Đoàn Emmanuel',
  description: "Prayer resources and the Pope's monthly prayer intention for Đoàn Emmanuel TNTT."
};


const prayers = [
  {
    title: 'Kinh Đoàn Sinh TNTT',
    vietnamese: true,
    text: 'Lạy Chúa Giêsu Thánh Thể, Chúa đã dạy chúng con: "Các con hãy nên thánh, vì Ta là Đấng Thánh." Xin Chúa giúp chúng con mỗi ngày biết xa tránh tội lỗi và tập tành nhân đức, để xứng đáng là những Chiến Sĩ Thánh Thể, sống chết với Chúa, yêu mến và phụng sự Chúa trong mọi người. Amen.'
  },
  {
    title: 'Hail Mary / Kính Mừng',
    vietnamese: true,
    text: 'Kính mừng Maria đầy ơn phúc, Đức Chúa Trời ở cùng Bà, Bà có phúc lạ hơn mọi người nữ, và Giêsu con lòng Bà gồm phúc lạ. Thánh Maria Đức Mẹ Chúa Trời, cầu cho chúng con là kẻ có tội, khi nay và trong giờ lâm tử. Amen.'
  },
  {
    title: 'Our Father / Kinh Lạy Cha',
    vietnamese: true,
    text: 'Lạy Cha chúng con ở trên trời, chúng con nguyện danh Cha cả sáng, nước Cha trị đến, ý Cha thể hiện dưới đất cũng như trên trời. Xin Cha cho chúng con hôm nay lương thực hàng ngày, và tha nợ chúng con, như chúng con cũng tha kẻ có nợ chúng con. Xin chớ để chúng con sa chước cám dỗ, nhưng cứu chúng con cho khỏi sự dữ. Amen.'
  },
  {
    title: 'Prayer to Our Lady of La Vang',
    vietnamese: false,
    text: 'O Our Lady of La Vang, Mother of God, you appeared to comfort the Vietnamese faithful during times of persecution. We entrust ourselves and our families to your loving care. Pray for us, guide us in faith, and protect us always. Our Lady of La Vang, pray for us. Amen.'
  }
];

export default function PrayerPage() {
  return (
    <div className="min-h-screen bg-cream text-slate-900">
      <Nav />
      <main>
        {/* Header */}
        <section className="bg-gradient-to-br from-navy via-navy-mid to-[#0a1a38] pb-16 pt-32 text-center text-white">
          <div className="mx-auto max-w-4xl px-6">
            <p className="mx-auto mb-3 inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-gold">
              Faith &amp; Prayer
            </p>
            <h1 className="text-4xl font-bold sm:text-5xl">Prayer Resources</h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/60">
              Prayers, intentions, and spiritual resources for our TNTT community.
            </p>
          </div>
        </section>

        {/* Prayers */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-4xl px-6">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-navy">Prayers</h2>
              <p className="mt-2 text-sm text-text-muted">Common prayers for our TNTT community</p>
            </div>
            <div className="space-y-6">
              {prayers.map((prayer) => (
                <div
                  key={prayer.title}
                  className="rounded-2xl border border-slate-200 bg-cream p-8 shadow-sm"
                >
                  <div className="mb-1 flex items-center gap-3">
                    <span className="text-lg">✝</span>
                    <h3 className="text-xl font-bold text-navy">{prayer.title}</h3>
                    {prayer.vietnamese && (
                      <span className="rounded-full bg-gold/10 px-2.5 py-0.5 text-xs font-semibold text-gold">
                        Tiếng Việt
                      </span>
                    )}
                  </div>
                  <p className="mt-4 text-sm leading-8 text-text-muted">{prayer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Links */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-6">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-navy">More Resources</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: 'USCCB Daily Readings', href: 'https://bible.usccb.org/daily-bible-reading', desc: 'Daily scripture readings from the U.S. Conference of Catholic Bishops.' },
                { title: 'Pope\'s Prayer Network', href: 'https://www.popesprayer.va/', desc: 'Official site for the Pope\'s Worldwide Prayer Network.' },
                { title: 'VEYM Resources', href: 'https://veym.net', desc: 'Vietnamese Eucharistic Youth Movement official resources.' },
                { title: 'Laudate App', href: 'https://www.laudateapp.com/', desc: 'Free Catholic app with prayers, rosary, and daily readings.' }
              ].map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <h3 className="font-bold text-navy group-hover:text-gold">{link.title}</h3>
                  <p className="mt-2 text-sm text-text-muted">{link.desc}</p>
                  <span className="mt-3 inline-flex text-xs font-semibold uppercase tracking-wider text-gold">Visit →</span>
                </a>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-navy/20 bg-white px-6 py-3 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
