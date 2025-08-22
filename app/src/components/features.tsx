import { SparklesIcon, BoltIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";

interface Props {
  t: {
    featuresTitle: string;
    features: { title: string; description: string }[];
  };
}

export default function FeaturesSection({ t }: Props) {
  const icons = [SparklesIcon, BoltIcon, ShoppingBagIcon];

  return (
    <section id="features" className="px-6 md:px-12 py-24 bg-neutral-950">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">
        {t.featuresTitle}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {t.features.map((feature, i) => {
          const Icon = icons[i % icons.length];
          return (
            <div
              key={i}
              className="bg-gradient-to-b from-neutral-900 to-neutral-950 p-8 rounded-2xl shadow-lg border border-neutral-800 
                         transform transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-indigo-500/30 hover:border-indigo-500"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-500/10 mb-4 transition-transform duration-300 group-hover:rotate-6">
                <Icon className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {feature.title}
              </h3>
              <p className="text-sm text-neutral-400">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
