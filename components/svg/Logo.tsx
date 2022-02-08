interface Props {
  className?: string;
}

export const Logo = ({ className }: Props) => {
  return (
    <svg
      className={className}
      width="100px"
      height="30px"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        className="italic"
      >
        The Way
      </text>
    </svg>
  );
};
