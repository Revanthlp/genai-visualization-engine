"use client";

export default function Platforms() {

  const platforms = [
    "Instagram",
    "YouTube",
    "Websites",
    "AR/VR",
    "Digital Ads",
    "E-Commerce"
  ];

  return (
    <section
      id="platforms"
      className="section"
    >

      <h2 className="text-5xl font-bold mb-16">
        Supported Platforms
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {platforms.map((platform,index)=>(
          <div
            key={index}
            className="card text-center"
          >

            <h3 className="text-2xl font-bold">
              {platform}
            </h3>

          </div>
        ))}

      </div>

    </section>
  );
}