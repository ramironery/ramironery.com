export function Prerequisites({ items }: { items: string[] }) {
  if (!items.length) return null;

  return (
    <section className="mt-10">
      <h3 className="font-semibold mb-2">Pré-requisitos</h3>
      <ul className="list-disc pl-6">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
