"use client";

interface Props {
  generated:boolean;
  preview:string;
}

export default function GeneratedContent({
  generated,
  preview,
}: Props) {

  if(!generated) return null;

  return (
    <section className="section">

      <div className="flex items-center justify-between mb-16">

        <h2 className="text-5xl font-bold">
          AI Generated Assets
        </h2>

        <button className="btn">
          Export All
        </button>

      </div>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="card">

          <img
            src={preview}
            className="rounded-2xl w-full h-[260px] object-cover"
          />

          <h3 className="text-2xl font-bold mt-6">
            Original Upload
          </h3>

        </div>

        <div className="card">

          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7"
            className="rounded-2xl w-full h-[260px] object-cover"
          />

          <h3 className="text-2xl font-bold mt-6">
            Instagram Campaign
          </h3>

        </div>

        <div className="card">

          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
            className="rounded-2xl w-full h-[260px] object-cover"
          />

          <h3 className="text-2xl font-bold mt-6">
            AI Cinematic Render
          </h3>

        </div>

      </div>

    </section>
  );
}