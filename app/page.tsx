const fatherOsParts = ["考え方", "判断", "反応", "父親像"];
const asset = (path: string) => `/fatheros${path}`;

const assumptions = [
  ["01", "相談されたら、答えを出す。", "家族のためを思って、すぐ解決策を考える。"],
  ["02", "父親は弱音を見せない。", "自分のことより、家族を優先しようとする。"],
  ["03", "失敗する前に止める。", "困らないように、先回りしてしまう。"],
];

const viewpoints = [
  ["01", "整える", "今、自分はどんな状態だろう。"],
  ["02", "気づく", "なぜ今、そう反応したのだろう。"],
  ["03", "選ぶ", "今の家族には、どちらが合うだろう。"],
  ["04", "積み重ねる", "また気づいたら、また選び直す。"],
];

const makingSteps = ["作りたい", "一緒に考える", "つくる", "失敗する", "直す", "一緒に喜ぶ"];

const books = [
  ["01", "父親OS", "父親OS超入門", "変わらなかった理由が見える本", "https://amzn.asia/d/0hr58G9q"],
  ["02", "父親アップデート100", "父親は、アップデートできる", "完成しない。だからこそ更新できる。", "https://amzn.asia/d/0fKCI53M"],
  ["03", "父親OS", "なぜ、父親は完成しないのか", "3つの“やめた”が家庭を柔らかくする", "https://amzn.asia/d/0gWQ0nle"],
];

const socialLinks = [
  ["Instagram", "https://www.instagram.com/toshi_chokatsu/"],
  ["YouTube", "https://youtube.com/@toshi-fatheros"],
  ["TikTok", "https://www.tiktok.com/@toshi_plamake2"],
  ["X", "https://x.com/toshi_chokatsu2"],
  ["note", "https://note.com/toshi_chokatsu"],
  ["Substack", "https://open.substack.com/pub/harahatatoshiyuki"],
  ["Facebook", "https://www.facebook.com/share/1ZopbGDAYW/?mibextid=wwXIfr"],
];

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="site-brand" href="#top" aria-label="ページの先頭へ">はらはた敏之<span>｜父親OS</span></a>
        <nav className="desktop-nav" aria-label="メインナビゲーション">
          <a href="#father-os">父親OSとは</a><a href="#making">ものづくり</a><a href="#profile">プロフィール</a><a href="#books">書籍</a><a className="nav-diagnosis" href="#diagnosis">父親OS診断</a>
        </nav>
        <details className="menu">
          <summary>メニュー</summary>
          <nav aria-label="メインメニュー">
            <a href="#father-os">父親OSとは</a><a href="#making">ものづくり</a><a href="#profile">プロフィール</a><a href="#books">書籍・コンテンツ</a><a href="#diagnosis">父親OS診断</a>
          </nav>
        </details>
      </header>

      <section className="hero section-shell" aria-labelledby="hero-title">
        <div className="hero-content">
          <p className="eyebrow">FATHER OS / QUIET UPDATE</p>
          <h1 id="hero-title"><span>父親OSを、</span><br /><span>更新する。</span></h1>
          <p className="hero-subcopy">家族が変われば、<br />父親としての「当たり前」も変わっていい。</p>
          <p className="hero-note">ものづくりと発信を通して、<br />父親と家族の関係を考える活動をしています。</p>
          <a className="scroll-link" href="#father-os">父親OSとは？ <span aria-hidden="true">↓</span></a>
        </div>
        <figure className="hero-symbol">
          <img
            src={asset("/hero-cat-from-drawing.webp")}
            alt="子どもが描いた猫の絵と、その絵から作った3D作品"
            width="1080"
            height="1120"
            fetchPriority="high"
          />
          <figcaption><span>親子でつくる、小さなきっかけ。</span>一枚の絵が、手で触れられる形になる。</figcaption>
        </figure>
        <div className="hero-marker" aria-hidden="true"><span>01</span><i /></div>
      </section>

      <section className="definition section-shell" id="father-os" aria-labelledby="definition-title">
        <p className="section-number">01 / FATHER OS</p>
        <h2 id="definition-title">父親OSとは、<br />父親として持っている<br className="mobile-only" />「当たり前」。</h2>
        <p className="lead-copy">普段はあまり意識していなくても、<br />自分の判断や反応の土台になっているもの。<br />この活動では、それを「父親OS」と呼んでいます。</p>
        <div className="os-orbit" aria-label="父親OSを構成する要素">
          <strong>父親OS</strong><div>{fatherOsParts.map((part) => <span key={part}>{part}</span>)}</div>
        </div>
        <p className="framework-note">※「父親OS」は医学的・心理学的な診断名ではありません。父親としての自分を見つめるために用いている独自の自己観察フレームです。</p>
      </section>

      <section className="assumptions section-shell" aria-labelledby="assumptions-title">
        <p className="section-number">02 / OUR ASSUMPTIONS</p>
        <h2 id="assumptions-title">こんな「当たり前」も、<br />父親OSの一部かもしれません。</h2>
        <div className="assumption-grid">{assumptions.map(([number, title, body]) => <article className="assumption-card" key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
      </section>

      <section className="quiet-question" aria-labelledby="question-title">
        <p className="section-number">A SMALL QUESTION</p>
        <h2 id="question-title">その「当たり前」は、<br />今の家族にも<br />合っているだろうか。</h2>
      </section>

      <section className="update section-shell" aria-labelledby="update-title">
        <p className="section-number">03 / UPDATE</p><h2 id="update-title">間違っているから、<br />直す。ではありません。</h2>
        <div className="update-flow" aria-label="父親OSを見直す流れ">
          <div>これまでの父親OS</div><span>↓</span><div>一度、見る</div><span>↓</span><div>今の家族にも合っている？</div><span>↓</span><div className="choice"><b>残す</b><i>／</i><b>少し更新する</b></div>
        </div>
        <div className="update-copy"><p>今までの考え方が、<br />間違っていたわけではありません。</p><p>これまでの自分を支えてきたものを残しながら、今の家族に合わなくなったところだけを見直していく。</p><p>私は、それを「更新」と考えています。</p></div>
      </section>

      <section className="returning section-shell" aria-labelledby="returning-title">
        <div className="returning-image"><img src={asset("/hero-family-connection-still-life.webp")} alt="家族との時間を思わせる明るいテーブルの風景" width="1536" height="1024" loading="lazy" /></div>
        <div className="returning-copy"><p className="section-number">04 / RETURN</p><h2 id="returning-title">更新することは、<br />戻ることでもある。</h2><p>「ちゃんとした父親にならなければ」</p><p>そう考える前からあった、</p><strong>家族を大切にしたい。</strong><p>という気持ちへ。</p></div>
      </section>

      <section className="brand-statement" aria-labelledby="statement-title">
        <p className="section-number">FATHER IS NEVER FINISHED</p><h2 id="statement-title">父親は、完成しない。</h2><h3>完成しないからこそ、<br className="mobile-only" />更新できる。</h3><p>家族が変われば、父親もまた考え直していい。<br />失敗しても、また選び直せる。</p>
      </section>

      <section className="viewpoints section-shell" aria-labelledby="viewpoints-title">
        <p className="section-number">05 / FOUR VIEWS</p><h2 id="viewpoints-title">父親OSを見る、<br />4つの視点。</h2>
        <ol>{viewpoints.map(([number, title, body]) => <li key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></li>)}</ol>
      </section>

      <section className="making section-shell" id="making" aria-labelledby="making-title">
        <div className="making-copy"><p className="section-number">06 / MAKING TOGETHER</p><h2 id="making-title">考えるだけではなく、<br />一緒につくってみる。</h2><p>私にとって、ものづくりは<br />父親OSを見直す実践の一つです。</p></div>
        <figure className="making-photo">
          <img
            src={asset("/child-watching-printer.webp")}
            alt="子どもが3Dプリンターで形になった作品を見つめている様子"
            width="1152"
            height="1536"
            loading="lazy"
          />
          <figcaption>子どもが、形になっていく時間を見つめる。できあがるまでの時間も、親子の接続になる。</figcaption>
        </figure>
      </section>

      <section className="child-idea section-shell" aria-labelledby="child-idea-title">
        <p className="section-number">07 / FROM IDEA TO SHAPE</p><h2 id="child-idea-title">子どもの「作りたい」を、<br />形にする。</h2>
        <div className="idea-flow">
          <figure><img src={asset("/cat-drawing.webp")} alt="子どもが描き、色を塗った白い猫の作品" width="675" height="900" loading="lazy" /><figcaption><span>01</span><strong>子どもの猫の絵</strong><p>「これ、作ってみたい」という最初のひらめき。</p></figcaption></figure>
          <i aria-hidden="true">→</i>
          <div><span>02</span><strong>一緒に考える</strong><p>形や色を見ながら、「どうしたら作れる？」を親子で考える。</p></div>
          <i aria-hidden="true">→</i>
          <figure><img src={asset("/cat-3d.webp")} alt="子どもの絵をもとに制作した立体の猫作品" width="900" height="900" loading="lazy" /><figcaption><span>03</span><strong>3D化した猫の作品</strong><p>試しながら、手で触れられる形へ。</p></figcaption></figure>
        </div>
        <p className="idea-copy">絵を描く。一緒に考える。形にしてみる。<br />この活動では、完成品だけではなく、そこまでの時間も親子との接続の一つとして捉えています。</p>
        <div className="tool-note"><h3>主役は、3Dプリンターではありません。</h3><p>大切なのは、一緒に考え、一緒につくる時間です。</p><ol>{makingSteps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span>{step}</li>)}</ol></div>
      </section>

      <section className="profile section-shell" id="profile" aria-labelledby="profile-title">
        <div className="profile-image"><img src={asset("/profile-harahata.webp")} alt="はらはた敏之のプロフィール写真" width="933" height="1400" loading="lazy" /></div>
        <div className="profile-copy"><p className="section-number">08 / PROFILE</p><h2 id="profile-title">はらはた敏之</h2><p className="profile-intro">製造業の現場でものづくりに携わりながら、<br />「父親OS」という考え方を発信しています。</p>
          <div className="profile-stats"><div><strong>20年以上</strong><span>ものづくり経験</span></div><div><strong>電子書籍13冊</strong><span>執筆・出版</span></div><div><strong>親子</strong><span>3Dプリンター活動</span></div><div><strong>SNS・note・Substack</strong><span>継続発信</span></div></div>
          <blockquote>考える。<br />試す。<br />確認する。<br />見直す。</blockquote><p>私がものづくりの現場で繰り返してきたこの感覚を、父親という役割にも重ねています。</p><p>一度決めた形を守り続けるのではなく、状況を見ながら更新する。父親も、それでいいのではないか。</p><p>その考えから整理してきたのが、「父親OS」です。</p>
        </div>
      </section>

      <section className="father-image" aria-labelledby="father-image-title">
        <p className="section-number">09 / THE FATHER I VALUE</p><h2 id="father-image-title">目指すのは、<br />完璧な父親ではありません。</h2><div><p>困ったときに話しかけられる。</p><p>分からないときに一緒に考えられる。</p><p>失敗しても、また話せる。</p></div><strong>安心や信頼が少しずつ積み重なった結果として、<br />自然と家族に頼られる父親。</strong>
      </section>

      <section className="books section-shell" id="books" aria-labelledby="books-title">
        <div className="books-heading"><div><p className="section-number">10 / BOOKS</p><h2 id="books-title">父親OSを、<br />もう少し深く知る。</h2></div><p><strong>13</strong><span>電子書籍<br />執筆・出版</span></p></div>
        <div className="book-grid">{books.map(([number, label, title, subtitle, href]) => <a className="book-card" href={href} target="_blank" rel="noreferrer" key={number}><div><span>{label}</span><span>{number}</span></div><h3>{title}</h3><p>{subtitle}</p><small>Amazonで見る ↗</small></a>)}</div>
        <p className="books-note">父親OS、家族、親子ものづくりなど、日々考えてきたことを本として形にしています。</p>
      </section>

      <section className="entrances section-shell" aria-labelledby="entrances-title">
        <p className="section-number">11 / ENTRANCES</p><h2 id="entrances-title">どこから始めても、<br />構いません。</h2>
        <div className="entrance-grid"><a href="#books"><span>父親OSを知る</span><strong>電子書籍・記事</strong><small>読む →</small></a><a href="#diagnosis"><span>自分を見る</span><strong>父親OS診断</strong><small>試す →</small></a><a href="#making"><span>親子でつくる</span><strong>3Dプリンター・作品</strong><small>見る →</small></a><a href="#social"><span>日々の考えを読む</span><strong>SNS・note・Substack</strong><small>発信を見る →</small></a></div>
      </section>

      <section className="diagnosis section-shell" id="diagnosis" aria-labelledby="diagnosis-title">
        <p className="section-number">12 / SELF OBSERVATION</p><h2 id="diagnosis-title">今の自分の「当たり前」を、<br />少し見てみる。</h2><p>良い父親・悪い父親を判定するものではありません。<br />人格を決めるものでもありません。</p><p>今の自分の反応や考え方を、<br />一度外から眺めるための自己理解ツールです。</p><a className="diagnosis-button" href="https://sensational-faloodeh-692d06.netlify.app/" target="_blank" rel="noreferrer">父親OS診断を試す <span aria-hidden="true">↗</span></a>
      </section>

      <section className="closing" aria-labelledby="closing-title">
        <p className="section-number">A QUIET CONTINUATION</p><h2 id="closing-title">父親は、完成しない。</h2><p>今までの自分を否定するのではなく、<br />今の家族に合う形へ。</p><p>ときには、<br />もともとあった気持ちへ戻りながら。</p><strong>父親OSを、少しずつ更新していく。</strong><div className="signature"><b>はらはた敏之</b><span>ものづくりを通して、<br />父親を家族と再接続する。</span></div>
      </section>

      <footer id="social">
        <div className="footer-brand"><strong>はらはた敏之</strong><p>ものづくりを通して、父親を家族と再接続する。</p></div>
        <nav aria-label="SNSリンク">{socialLinks.map(([label, href]) => <a href={href} target="_blank" rel="noreferrer" key={label}>{label}</a>)}</nav>
        <div className="footer-meta"><span>お問い合わせ（準備中）</span><span>プライバシーポリシー（準備中）</span><small>© 2026 TOSHIYUKI HARAHATA</small></div>
      </footer>
    </main>
  );
}
