interface TagProps {
  text: string;
}
export const Tag = ({ text }: TagProps) => {
  return (
    <span className="rounded-full bg-sky-300/50 px-4 py-1 text-sky-400">
      {text}
    </span>
  );
};
