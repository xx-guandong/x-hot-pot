export function constructHref(name: string) {
  return name.replace(/ /g, "-").toLowerCase();
}
