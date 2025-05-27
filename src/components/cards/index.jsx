export function Cards({ titulo, icone, paragrafo }) {
  return (
    <div className="flex flex-col w-full h-50 items-center bg-[var(--pretoc)] rounded-sm">
      <div className="flex justify-center items-center w-full h-15 text-center bg-[var(--verde)] rounded-t-sm">
        <h3 className="text-2xl font-bold">{titulo}</h3>
      </div>

      <div className="flex w-full h-35 items-center justify-center">
        <span>{icone}</span>
        <p className="flex text-center font-bold text-xl">{paragrafo}</p>
      </div>
    </div>
  );
}
