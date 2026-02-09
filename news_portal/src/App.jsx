import "./App.css";

function App() {
  return (
    <div className="body">
      <h1 className="heading">Daily News Portal</h1>
      <h2 className="sub">Top News</h2>

      <div className="news-item">
        <img
          className="image1"
          src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1V005d.img?w=624&h=351&q=90&m=6&f=webp&u=t"
          alt="News"
        />
        <p className="para">
          Republic Day parade stuns with historic firsts. India’s 77th Republic Day
          celebrations showcased unprecedented military, cultural, and symbolic displays
          across Kartavya Path, the Attari-Wagah border, and Nadabet in Gujarat.
          Highlights included the debut of advanced weaponry under Operation Sindoor,
          a dedicated animal contingent, and unique regional ceremonies. The events
          reflected unity, heritage, and evolving defence capabilities amid a charged
          patriotic atmosphere.
        </p>
      </div>
        <h3 className="news">Latest News</h3>
        <div className="news-item">
          <img className="image2" src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1V2IQX.img?w=1012&h=569&m=6"/>
          <p className="para1">Fresh snowfall hits higher reaches of north India; plains witness below normal temperatures New Delhi, Jan 25 (PTI) A thick blanket of snow continued to cover several parts of the Himalayan region in north India after fresh snowfall on Sunday, affecting clearance work on the highways, while the minimum temperature settled below normal at many places in the plains, and Delhi breathing easy for the second day.</p>
        </div>
    </div>
  );
}

export default App;

