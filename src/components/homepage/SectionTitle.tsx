const SectionTitle = ({ title }: { title: string }) => {
  return (
    <h2 className="font-bold md:text-3xl text-lg mb-6 flex items-center gap-2">
      {title}
    </h2>
  );
};

export default SectionTitle;
