'use client'

import { useEffect, useState } from 'react'

interface OriginPanelProps {
  onBack?: () => void
  showBackButton?: boolean
}

const ORIGIN_TEXT = `Bugün 22 Nisan 2024. KüçükRobotçuk adındaki fantastik 6. sınıf projemi dünyaya duyurmamdan — ya da duyurduğumu sanmamdan — tam 8 yıl sonra. Geçen sene katıldığım bir robotik yarışmasından takımımın numarasının yazdığı gözlüklerle bir karemi yukarıda görüyorsunuz. Hala oturduğum yerde kendime maceralar çıkarıyorum ve şakalarıma insanlar gülmüyor. Pek değişiklik yok, en azından o tarafta.

Aslına bakarsanız, tek aynı kalan şey teknoloji tutkum: artık ne aynı okulda, ne aynı şehirdeyim. Çok yakında aynı ülkede bile olmayacağım belki de — kaçmıyorum, sakin olun. Okuyup döneceğim sadece 😒 — ve şu an bir 8 yıl daha geçtikten sonra nerede olacağımı merak etmiyor değilim.

Her Türk genci gibi ben de sınav telaşı ile liseye geçeyim derken sevdiğim bir çok şeyi unuttum. Bir gün KüçükRobotçuk'un yıllık masrafını annemden ödemesini unuttuğum gibi... Açıkçası istesem öder miydi bilemiyorum. 3 yıl boyunca anlamadığı şeylere para vermesini isteyip durmuştum. Hangi çocuk doğum günü hediyesi olarak annesinden bir domain ister ki? Öylece KüçükRobotçuk tarihin tozlu sayfalarına karışıverdi. O günlerde küçük ben gibi yabancı dil bilmediği için yabancı kaynaklardan yararlanamayan teknoloji tutkunu çocuklara yazdığım her şey kaybolmuştu — ta ki geçen yıla kadar.

Sınav sezonunu atlattıktan sonra başıma açtığım onlarca işten sonra elde ettiğim dünya için küçük benim için büyük gelirimin bir kısmını tekrar yazmaya ve insanlara katkı sağlamaya adamaya karar verdim. Önce İngilizce olarak yazıp daha büyük bir kitleye ulaşmak için çabaladım, ardından benim imkanlarım arttıkça podcastler yayınladım, daha sonra şu anda Skyfallen olarak hala faaliyet gösteren şirketi bile kurdum ama içimde bir eksiklik hissettim.

KüçükRobotçuk'un benim için yeri ayrıydı ve ne olursa olsun kurtarmalıydım. Çocuk aklımla — sanki şimdi çok büyüdüm ya — iki arkadaşımı başıma dikip beraber ürettiğimiz onca içeriğin hakettiği bir saygı vardı. Eve döndüm, eski bilgisayarlarımı raflardan indirdim, annemi çağırıp tüm sandıkları açtırdım, disk, flaş bellek ne varsa hepsini topladım ve KüçükRobotçuk'a dair ne varsa tekrar bir araya getirmek için uğraştım. Anneme sandıkları döktürmenin de bir bedeli olduğunu eklemem gerek tabi.

Kaybolan kaybolmuştu ama 5. sınıf yazında zorla öğrendiğim WordPress ile yaptığım o rutubetli site tasarımını tekrardan yaptım ve şu anda arsiv.kucukrobotcuk.com adresinde yaşıyor. Eğer olur da bana bir gün ulaşmak isterseniz iletişim bilgilerimi aşağıda künyede bulabilirsiniz.

Burayı tekrar yaşatmak hayalim. Doğru zamanı bekliyor sadece, Skyfallen'daki birçok proje ile beraber. Bugünlere gelmeme destek olan tüm dostlarım, aileme ve öğretmenlerime, ayrıca KüçükRobotçuk'u yaparken bana inanıp benimle beraber bu maceraya atılan Alper ve Utku'ya teşekkürler!

İstanbul'dan Sevgilerle, Yiğit Kerem Oktay — 22 Nisan 2016.`

const ORIGIN_TEXT_EN = `Today is April 22, 2024. Exactly eight years after I announced to the world — or thought I did — my fantastic 6th grade project called KüçükRobotçuk. You see above a photo of me with glasses that had my team's number from a robotics competition I took part in last year. I still make up adventures for myself sitting in my chair, and people don't laugh at my jokes. Not much has changed, at least in that regard.

Actually, the one thing that's stayed the same is my passion for technology: I'm no longer in the same school, nor the same city. Maybe I won't even be in the same country soon — I'm not running away, don't worry. I'll just go, read, and come back 😒 — and I can't help but wonder where I'll be another eight years from now.

Like every Turkish youth, I forgot many of the things I loved while rushing through exams to get to high school. One day I forgot to have my mom pay KüçükRobotçuk's annual fee... Honestly I'm not sure she would have even if I'd asked. For three years I kept asking her to pay for things she didn't understand. What kid asks their mom for a domain as a birthday present? So KüçükRobotçuk slipped into the dusty pages of history. Everything I wrote for tech-loving kids who, like little me, couldn't benefit from foreign sources because they didn't know a foreign language was lost — until last year.

After surviving exam season and the dozens of projects I took on, I decided to dedicate part of my income — small for the world, big for me — to writing again and contributing to people. First I strove to write in English to reach a larger audience, then as my means grew I published podcasts, then I even founded the company that still operates today as Skyfallen, but I felt something was missing.

KüçükRobotçuk held a special place for me and I had to save it no matter what. With my child mind — as if I've grown so much now — there was a respect that the content we produced with two friends I had by my side deserved. I went home, took my old computers down from the shelves, called my mom and had her open all the boxes, gathered every disk and flash drive, and worked to bring together everything about KüçükRobotçuk. I should add that having my mom dump out the boxes had its cost too.

What was lost was lost, but I recreated that musty site design I made with the WordPress I was forced to learn in the summer of 5th grade, and it now lives at arsiv.kucukrobotcuk.com. If you ever want to reach me, you can find my contact details in the colophon below.

Reviving this place is my dream. It's just waiting for the right time, along with many projects at Skyfallen. Thanks to all my friends who supported me to get here, my family and teachers, and Alper and Utku who believed in me and joined this adventure with me when we made KüçükRobotçuk!

With love from Istanbul, Yiğit Kerem Oktay — April 22, 2016.`

function escHtml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

export default function OriginPanel({ onBack, showBackButton }: OriginPanelProps) {
  const [language, setLanguage] = useState<'tr' | 'en'>('tr')
  const [text, setText] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    if (language !== 'tr') return
    setText('')
    setIsTyping(true)
    const paragraphs = ORIGIN_TEXT.split('\n\n')
    let pIdx = 0
    let currentText = ''

    function typeParagraph() {
      if (pIdx >= paragraphs.length) {
        setIsTyping(false)
        return
      }
      const txt = paragraphs[pIdx]
      let ci = 0

      function typeChar() {
        if (ci < txt.length) {
          currentText = paragraphs.slice(0, pIdx).join('\n\n') + '\n\n' + txt.slice(0, ci + 1)
          setText(currentText)
          ci++
          setTimeout(typeChar, 10)
        } else {
          pIdx++
          setTimeout(typeParagraph, 30)
        }
      }
      typeChar()
    }

    const timer = setTimeout(() => typeParagraph(), 400)
    return () => clearTimeout(timer)
  }, [language])

  const displayText = language === 'en' ? ORIGIN_TEXT_EN : text
  const displaySubtitle = language === 'en' ? 'In English.' : 'In Turkish.'

  return (
    <div className="bg-white">
      {/* Red Top Bar */}
      <div className="bg-red-600 h-2 w-full"></div>
      
      <div className="max-w-4xl mx-auto p-8 md:p-12 lg:p-16 pb-16">
        <div className="mb-8 pb-6 border-b-4 border-red-600">
          <div className="text-sm md:text-base tracking-widest uppercase text-red-600 mb-2 font-bold">
            $ cat kucukrobotcuk/hakkinda.txt
          </div>
          <div className="font-serif text-[clamp(28px,4vw,52px)] md:text-[clamp(32px,5vw,64px)] font-bold text-gray-900 leading-tight">
            The origin.<br />
            <em className="italic text-red-600">{displaySubtitle}</em>
          </div>
        </div>

        <div className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed font-medium">
          This is an excerpt from Yigit's personal letter on KüçükRobotçuk — the Turkish-language tech blog he founded in 6th grade, forgot about, then spent years trying to recover from old hard drives and his mother's dusty boxes. Written April 22, 2024. Eight years after the original post.{' '}
          <a
            href="https://kucukrobotcuk.com/hakkinda"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 font-semibold underline hover:text-red-700"
          >
            Read it on the original page
          </a>
          .
        </div>

        <div className="bg-white p-8 md:p-10 mt-4 shadow-2xl" style={{ border: '6px solid #dc2626' }}>
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="text-base md:text-lg text-red-600 tracking-widest font-bold">
              {language === 'tr' ? "22 Nisan 2024 · İstanbul'dan" : 'April 22, 2024 · From Istanbul'}
            </div>
            <button
              type="button"
              onClick={() => setLanguage((lang) => (lang === 'tr' ? 'en' : 'tr'))}
              className="px-4 py-2 text-sm font-semibold text-red-600 border-2 border-red-600 rounded hover:bg-red-50 transition-colors"
            >
              {language === 'tr' ? 'Show in English' : 'Türkçe\'ye geç'}
            </button>
          </div>
          <div
            className="text-lg md:text-xl text-gray-900 leading-[2.2] font-medium"
            dangerouslySetInnerHTML={{
              __html: displayText.split('\n\n').map((p) => `<p class="mb-5 text-gray-900">${escHtml(p)}</p>`).join(''),
            }}
          />
          <div className="font-serif italic text-red-600 text-xl md:text-2xl mt-8 font-bold">
            — Yiğit Kerem Oktay
          </div>
        </div>
      </div>
    </div>
  )
}
