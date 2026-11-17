export default function PageBackground() {
  return (
    <img
      src="https://play.pokemonshowdown.com/sprites/ani/darkrai.gif"
      alt=""
      aria-hidden="true"
      width={128}
      height={128}
      data-darkrai
      className="pointer-events-none fixed bottom-24 right-4 z-[100] h-20 w-20 object-contain sm:right-8 sm:h-32 sm:w-32 lg:right-12"
      style={{ imageRendering: "pixelated" }}
    />
  );
}
