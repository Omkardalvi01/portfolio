export default function PageBackground() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 55% 35% at 10% 20%, transparent 38%, #3c3836 39%, transparent 43%), radial-gradient(ellipse 62% 38% at 74% 18%, transparent 37%, #32302f 38%, transparent 43%), radial-gradient(ellipse 55% 32% at 45% 75%, transparent 37%, #3c3836 38%, transparent 44%), radial-gradient(ellipse 50% 35% at 92% 82%, transparent 37%, #32302f 38%, transparent 44%)",
        }}
      />
      <img
        src="https://play.pokemonshowdown.com/sprites/ani/darkrai.gif"
        alt=""
        aria-hidden="true"
        width={128}
        height={128}
        className="pointer-events-none absolute bottom-24 right-4 z-10 h-24 w-24 object-contain sm:right-8 sm:h-32 sm:w-32 lg:right-12"
        style={{ imageRendering: "pixelated" }}
      />
    </>
  );
}
