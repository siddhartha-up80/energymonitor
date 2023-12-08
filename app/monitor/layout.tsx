
export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="">
      <div className="mt-10">
        {children}
      </div>
    </section>
  );
}
