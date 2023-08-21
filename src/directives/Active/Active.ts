const updateColor = (
  el: { style: { backgroundColor: string } },
  binding: { value: boolean }
) => {
  if (binding.value) {
    el.style.backgroundColor = "rgb(245, 109, 109)";
  } else {
    el.style.backgroundColor = "gray";
  }
};

export const active = {
  mounted: updateColor,
  updated: updateColor,
};
