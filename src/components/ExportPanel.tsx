export default function ExportPanel() {

  const exports = [
    "Instagram Ad",
    "YouTube Thumbnail",
    "AR Experience",
    "Website Banner",
    "E-Commerce Listing",
    "Short Video Reel"
  ];

  return (
    <section className="section">

      <h2 className="text-5xl font-bold mb-16">
        Export Formats
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {exports.map((item,index)=>(
          <div
            key={index}
            className="card text-center"
          >

            <h3 className="text-2xl font-bold">
              {item}
            </h3>

            <button className="btn mt-6">
              Export
            </button>

          </div>
        ))}

      </div>

    </section>
  );
}