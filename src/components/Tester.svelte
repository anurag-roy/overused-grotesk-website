<script>
  export const twoCol = false;

  let weight = '800';
  let width = '100';
  let slant = '0.0';
  let size = '210';
  let tracking = '0';
  let leading = '1';
</script>

<section>
  <div class="flex justify-between" class:flex-col={twoCol}>
    <div
      class="grid grid-cols-[65px_250px_5ch] items-center gap-1 text-grey [&_label]:font-bold"
    >
      <!-- Weight -->
      <label for="weight">Weight</label>
      <input
        id="weight"
        type="range"
        min="300"
        max="900"
        step="1"
        bind:value={weight}
      />
      <span>{weight}</span>

      <!-- Width -->
      <label for="width">Width</label>
      <input
        id="width"
        type="range"
        min="100"
        max="1000"
        step="1"
        bind:value={width}
      />
      <span>{width}</span>

      <!-- Slant -->
      <label for="slant">Slant</label>
      <input
        id="slant"
        type="range"
        min="0.0"
        max="10"
        step="0.1"
        bind:value={slant}
      />
      <span>{slant}</span>
    </div>

    <div
      class="grid grid-cols-[65px_250px_5ch] items-center gap-1 text-grey [&_label]:font-bold"
    >
      <!-- Size -->
      <label for="size">Size</label>
      <input
        id="size"
        type="range"
        min="11"
        max="400"
        step="1"
        bind:value={size}
      />
      <span>{size}</span>

      <!-- Tracking -->
      <label for="tracking">Tracking</label>
      <input
        id="tracking"
        type="range"
        min="-0.1"
        max="0.1"
        step="0.001"
        bind:value={tracking}
      />
      <span>{tracking}</span>

      <!-- Leading -->
      <label for="leading">Leading</label>
      <input
        id="leading"
        type="range"
        min="0.7"
        max="2"
        step="0.01"
        bind:value={leading}
      />
      <span>{leading}</span>
    </div>
  </div>

  <!-- Preview -->
  <div
    contenteditable="true"
    class="pt-8 w-fit mx-auto"
    style="word-break: break-all;"
    style:font-variation-settings={`"wght" ${weight}, "wdth" ${weight}, "slnt" ${slant}`}
    style:font-size={`${size}px`}
    style:letter-spacing={`${tracking}em`}
    style:line-height={leading}
  >
    Typeface
  </div>
</section>
