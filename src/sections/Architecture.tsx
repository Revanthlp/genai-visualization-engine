"use client";

export default function Architecture() {

  const items = [
    {
      title:"CAD Processing",
      desc:"Extract geometry and materials"
    },
    {
      title:"AI Engine",
      desc:"Generate photorealistic scenes"
    },
    {
      title:"Rendering",
      desc:"Create cinematic outputs"
    },
    {
      title:"Cloud Delivery",
      desc:"Distribute omnichannel assets"
    }
  ];

  return (
    <section
      id="architecture"
      className="section"
    >

      <h2 className="text-5xl font-bold mb-16">
        System Architecture
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {items.map((item,index)=>(
          <div key={index} className="card">

            <h3 className="text-3xl font-bold">
              {item.title}
            </h3>

            <p className="text-gray-400 mt-4">
              {item.desc}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}